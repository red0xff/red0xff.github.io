class BinMatrix
  def initialize state
    rows_count = state.count
    @state = state
    @n = rows_count
    @m = state[0].count
  end
  
  def self.[] rows
    BinMatrix.new rows
  end

  def check_op y
    raise ArgumentError, 'BinMatrix expected' unless y.is_a?(BinMatrix)
    raise ArgumentError, 'Shape mismatch' unless @n == y.n
  end

  def check_identity id
    return @n.times.all?{|k|
      id[k] == @n.times.map{|v| v == k ? 1 : 0 }
    }
  end

  def ^ y
    check_op y
    new_state = @n.times.map{|i|
      @n.times.map{|j|
        @state[i][j] ^ y.state[i][j]
      }
    }
    
    BinMatrix.new new_state
  end

  def + y
    self ^ y
  end
  
  def & y
    raise ArgumentError, "Multiplication dim mismatch" if @m != y.n;
    
    new_state = @n.times.map{|i|
      y.m.times.map{|j|
        bit = 0
        y.n.times{|k|
          bit ^= (@state[i][k] & y.state[k][j]);
        }
        bit
      }
    }
    BinMatrix.new new_state
  end
  
  def * y
    self & y
  end
  
  def inverse
    # inverse the binmatrix
    identity = @n.times.map{|i|
      @n.times.map{|j| i == j ? 1 : 0 }
    }
    state_clone = @state.map(&:clone)
    r = -1
    @n.times{|j|
      k = (r+1 ... @n).detect{|_k| state_clone[_k][j] == 1 }
      if state_clone[k][j] == 1
        r += 1
        if k != r
          state_clone[k], state_clone[r] = state_clone[r], state_clone[k]
          identity[k], identity[r] = identity[r], identity[k]
        end
        @n.times{|i|
          if i != r && state_clone[i][j] == 1
            @n.times{|v|
              state_clone[i][v] ^= state_clone[r][v]
              identity[i][v] ^= identity[r][v]
            }
          end
        }
      end
    }
    raise Exception, 'Not the identity' unless check_identity state_clone
    BinMatrix.new(identity)
  end
  
  def to_s
    @state.map{|r| r.join(' ') } * ?\n
  end
  
  def as_state w
    raise ArgumentError unless @m == 1
    @state.flatten.each_slice(5*w).map{|sl|
      sl.each_slice(w).to_a
    }
  end
  attr_accessor :n, :m, :state
end

=begin
Algorithms are from https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.202.pdf
=end
class Keccak
  def initialize(r=1088, c=1024)
    @w = 64

    #full_keccak = File.open('dump.bin','rb',&:read)[0x00020358, 200].each_codepoint.map{|c|c.to_s(2).rjust(8,?0).chars.map(&:to_i)}.flatten;
    # generate a vector of 1600 random bits
    msg = 1600.times.map{ [0, 1].sample }
    
    hashed = keccak_f(msg)
    
    inverse = unkeccak_f(hashed)
    
    if inverse == msg
      puts "[+] Inverting Keccak-f was successful"
    else
      puts "[-] Didn't retrieve the original message after inversing keccak-f"
    end
  end
  
  def precompute_untheta(w)
    state_equations = (w*5*5).times.map{|i|
      z = i % w
      y = (i / w) % 5
      x = (i / w / 5)
      r = [ 0 ] * (w * 25)
      5.times{|k|
        r[((x-1)%5) * 5 * w + k * w + z] = 1
        r[((x+1)%5) * 5 * w + k * w + ((z-1) % w)] = 1
      }
      r[x * 5 * w + y * w + z] = 1
      r
    }
    inv = BinMatrix.new(state_equations).inverse
    File.open("#{w}_inverted.mat",'wb') do|out|
      out.puts(inv.to_s)
    end
  end
  
  def precompute_unchi
    # table de verite
    # A'(x) = A(x) ^ ((!A(x+1)) & A(x+2))
    truth_table = (2**5).times.map{|val|
      a4, a3, a2, a1, a0 = val >> 4, (val >> 3) & 1, (val >> 2) & 1, (val >> 1) & 1, val & 1;
      n4 = a4 ^ ((a3^1) & a2)
      n3 = a3 ^ ((a2^1) & a1)
      n2 = a2 ^ ((a1^1) & a0)
      n1 = a1 ^ ((a0^1) & a4)
      n0 = a0 ^ ((a4^1) & a3) 
      (n4 << 4) | (n3 << 3) | (n2 << 2) | (n1 << 1) | n0
    }
=begin
    puts truth_table.map.with_index{|e,i|
      "#{i.to_s(2).rjust(5,?0)} || #{e.to_s(2).rjust(5,?0)}"
    }.join(?\n)
=end
    (2**5).times.map{|val|
      truth_table.index val
    }
  end

  def untheta
    unless instance_variable_defined?(:@theta_inv)
      puts "[*] Calculating the inverse of a #{5*5*@w}x#{5*5*@w} matrix ...";
      precompute_untheta(@w) unless File.exists?("#{@w}_inverted.mat")
      puts "[*] Inverse calculated successfully"
      @theta_inv = BinMatrix.new(File.open("#{@w}_inverted.mat", "rb", &:read).lines.map{|l| l.chomp.split.map(&:to_i) })
    end
    
    # flatten and map to obtain a column matrix representing the current state, B'
    # as_state(w) of BinMatrix returns a 3-dimensional state matrix from a BinMatrix.
    @state = (@theta_inv * BinMatrix.new(@state.flatten.map{|e|[e]})).as_state(64)
  end

  def theta
    c = 5.times.map{|x|
      @w.times.map{|z|
        @state[x][0][z] ^ @state[x][1][z] ^ @state[x][2][z] ^ @state[x][3][z] ^ @state[x][4][z]
      }
    }
    d = 5.times.map{|x|
      @w.times.map{|z|
        c[ (x-1) % 5 ][z] ^ c[ (x+1) % 5 ][ (z-1) % @w ]
      }
    }
    5.times{|x|
      5.times{|y|
        @w.times{|z|
          @state[x][y][z] ^= d[x][z]
        }
      }
    }
  end

  def unrho
    new_state = clone_state
    
    x, y = 1, 0;
    0.upto(23) do|t|
      @w.times do|z|
        new_state[x][y][(z-(t+1)*(t+2)/2) % @w] = @state[x][y][z]
      end
      x, y = y,  (2*x + 3*y) % 5;
    end
    @state = new_state
  end

  def rho
    new_state = clone_state

    x, y = 1, 0;
    0.upto(23) do|t|
      @w.times{|z|
        new_state[x][y][z] = @state[x][y][( z - ( t + 1 ) * (t + 2) / 2 ) % @w ]
      }
      x, y = y, (2*x + 3*y) % 5;
    end
    @state = new_state; # possible in place?
  end

  def unpi
    new_state = clone_state
    5.times do|x|
      5.times do|y|
        @w.times do|z|
          new_state[ (x + 3*y) % 5 ][x][z] = @state[x][y][z]
        end
      end
    end
    @state = new_state
  end

  def pi
    new_state = clone_state
    5.times do|x|
      5.times do|y|
        @w.times do|z|
          new_state[x][y][z] = @state[ (x + 3*y) % 5 ][x][z]
        end
      end
    end
    @state = new_state
  end
  
  def unchi
    truth_tbl = precompute_unchi
    new_state = clone_state
    5.times do|y|
      @w.times do|z|
        table_line = (@state[0][y][z] << 4) | (@state[1][y][z] << 3) | (@state[2][y][z] << 2) | (@state[3][y][z] << 1) | @state[4][y][z]
        inv_num = truth_tbl[table_line]
        new_state[0][y][z] = inv_num >> 4
        new_state[1][y][z] = (inv_num >> 3) & 1
        new_state[2][y][z] = (inv_num >> 2) & 1
        new_state[3][y][z] = (inv_num >> 1) & 1
        new_state[4][y][z] = inv_num & 1
      end
    end
    @state = new_state
  end

  def chi
    new_state = clone_state
     5.times do|x|
      5.times do|y|
        @w.times do|z|
          new_state[x][y][z] = @state[x][y][z] ^ ((@state[(x+1)%5][y][z]^1) & @state[(x+2)%5][y][z]);
        end
      end
    end
    @state = new_state
  end
  
  def uniota(ir)
    iota(ir)
  end
  
  def iota(ir)
    rc = [ 0 ] * @w
    l = Math.log(@w, 2).to_i
    rc = 0
    shift = 1
    0.upto(l) do|j|
      rc |= Keccak.rc(j + 7 * ir) << (shift-1);
      shift <<= 1;
    end
    rc = rc.to_s(2).ljust(64,?0).chars.map(&:to_i)

    @w.times do|z|
      @state[0][0][z] ^= rc[z];
    end
  end

  def keccak_rho(s, nr)
    state_from_bitarray s;
    l = Math.log(@w, 2).to_i
    (12+2*l-nr).upto(12+2*l-1) do|ir|
      theta
      rho
      pi
      chi
      iota(ir)
    end
    bitarray_from_state
  end
  
  def unkeccak_rho(s, nr)
    state_from_bitarray s;
    l = Math.log(@w, 2).to_i
    (12+2*l-1).downto(12+2*l-nr) do|ir|
      uniota(ir)
      unchi
      unpi
      unrho
      untheta
    end
    bitarray_from_state
  end
  
  def keccak_f(s)
    l = Math.log(@w, 2).to_i
    keccak_rho(s, 12+2*l)
  end

  def unkeccak_f(s)
    l = Math.log(@w, 2).to_i
    unkeccak_rho(s, 12+2*l)
  end

  def sponge(n, r, d)
    b = @w * 25
    p_ = n + pad(r, n.length)
    n_ = p_.length / r
    c = b - r
    pi = p_.each_slice(r).to_a
    s = [ 0 ] * (25 * @w)
    n_.times do|i|
      pi_padded = pi[i] + ([0] * c)
      xored = s.zip(pi_padded).map{|(x,y)| x^y}
      s = keccak_f(xored)
    end
    z = [ ]
    loop do
      z = z + s.first(r)
      return z.first(d) if d <= z.count
      s = keccak_f(s)
    end
  end
  
  def pad(r, m)
    j = (-m - 2) % r
    [ 1 ] + [ 0 ] * j + [ 1 ];
  end

  def self.rc(t)
    #return 1 if t % 255 == 0
    r = 1
    1.upto(t) do|i|
      r <<= 1
      r ^= 0x71 if r & 0x100 != 0
      #r &= 0xfff
    end
    r & 1
  end

  def state_from_bitarray s
    # s is an array of bits
    @state = 5.times.map{|x|
      5.times.map{|y|
        @w.times.map{|z|
          s[@w*(5*y+x) + z]
        }
      }
    }
  end

  def bitarray_from_state
    (25*@w).times.map{|v|
      z = v % @w
      y = (v / @w) % 5
      x = (v / (5*@w))
      @state[y][x][z]
    }
  end
  
  def clone_state
    5.times.map{|x|
      5.times.map{|y|
        @state[x][y].clone;
      }
    }
  end
end

a = Keccak.new
