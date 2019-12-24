var div = document.getElementById('typingcode');

code = [
"push \\reg{rdi}",
"sub \\reg{rsp},\\num{240}",
"mov \\reg{rax},\\reg{ds}:[\\num{7FFB6F15D0B0}]",
"xor \\reg{rax},\\reg{rsp}",
"mov \\reg{ss}:[\\reg{rsp}+\\num{230}],\\reg{rax}",
"mov \\reg{rsi},\\reg{rcx}",
"xor \\reg{edx},\\reg{edx}",
"lea \\reg{rcx},\\reg{ss}:[\\reg{rsp}+\\num{20}]",
"mov \\reg{r8d},\\num{208}",
"call \\num{<JMP.&memset>}",
"lea \\reg{rdx},\\reg{ss}:[\\reg{rsp}+\\num{20}]",
"mov \\reg{rcx},\\reg{rsi}",
"call \\num{7FFB6EF38A6C}",
"test \\reg{eax},\\reg{eax}",
"je \\num{7FFB6EFA6FA6}",
"lea \\reg{rcx},\\reg{ss}:[\\reg{rsp}+\\num{20}]",
"xor \\reg{r8d},\\reg{r8d}",
"xor \\reg{edx},\\reg{edx}",
"call \\num{<LoadLibraryExW>}",
"mov \\reg{rbx},\\reg{rax}",
"test \\reg{rax},\\reg{rax}",
"je \\num{7FFB6EF3898A}",
"lea \\reg{rdx},\\reg{ds}:[\\num{7FFB6F0A6750}]",
"mov \\reg{rcx},\\reg{rax}",
"call \\num{<GetProcAddress>}",
"mov \\reg{rdi},\\reg{rax}",
"mov \\reg{rcx},\\reg{rbx}",
"test \\reg{rax},\\reg{rax}",
"je \\num{7FFB6EF38985}",
"lea \\reg{rdx},\\reg{ds}:[\\num{7FFB6F0A6740}]",
"call \\num{<GetProcAddress>}",
"mov \\reg{rbp},\\reg{rax}",
"test \\reg{rax},\\reg{rax}",
"je \\num{7FFB6EF38982}",
"mov \\reg{rcx},\\reg{gs}:[\\num{60}]",
"mov \\reg{edx},\\num{8}",
"mov \\reg{rcx},\\reg{ds}:[\\reg{rcx}+\\num{30}]",
"lea \\reg{r8d},\\reg{ds}:[\\reg{rdx}+\\num{18}]",
"call \\reg{ds}:[\\num{<&RtlAllocateHeap>}]",
"mov \\reg{rcx},\\reg{rax}",
"test \\reg{rax},\\reg{rax}",
"je \\num{7FFB6EF38982}",
"mov \\reg{eax},\\reg{ds}:[\\reg{rsi}+\\num{4}]",
"and \\reg{eax},\\num{FFFFFF00}",
"mov \\reg{ds}:[\\reg{rcx}+\\num{8}],\\reg{rbx}",
"mov \\reg{ds}:[\\reg{rcx}],\\reg{eax}",
"mov \\reg{rax},\\reg{rcx}",
"mov \\reg{ds}:[\\reg{rcx}+\\num{18}],\\reg{rbp}",
"mov \\reg{ds}:[\\reg{rcx}+\\num{10}],\\reg{rdi}",
"mov \\reg{rcx},\\reg{ss}:[\\reg{rsp}+\\num{230}]",
"xor \\reg{rcx},\\reg{rsp}",
"call \\num{7FFB6EF9A990}",
"lea \\reg{r11},\\reg{ss}:[\\reg{rsp}+\\num{240}]",
"mov \\reg{rbx},\\reg{ds}:[\\reg{r11}+\\num{18}]",
"mov \\reg{rbp},\\reg{ds}:[\\reg{r11}+\\num{20}]",
"mov \\reg{rsi},\\reg{ds}:[\\reg{r11}+\\num{28}]",
"mov \\reg{rsp},\\reg{r11}",
"pop \\reg{rdi}",
"ret",
"mov \\reg{rcx},\\reg{rbx}",
"call \\num{<FreeLibrary>}",
"xor \\reg{eax},\\reg{eax}",
"movd \\reg{xmm1},\\reg{ecx}",
"lea \\reg{rcx},\\reg{ds}:[\\num{7FFA63AC0000}]",
"cvtdq2pd \\reg{xmm1},\\reg{xmm1}",
"mulsd \\reg{xmm1},\\reg{ds}:[\\num{7FFA63B40178}]",
"subsd \\reg{xmm3},\\reg{xmm1}",
"movaps \\reg{xmm0},\\reg{xmm3}",
"mulsd \\reg{xmm0},\\reg{ds}:[\\num{7FFA63B3D3D8}]",
"addsd \\reg{xmm0},\\reg{xmm1}",
"divsd \\reg{xmm3},\\reg{xmm0}",
"movd \\reg{xmm0},\\reg{edx}",
"cvtdq2pd \\reg{xmm0},\\reg{xmm0}",
"movaps \\reg{xmm1},\\reg{xmm3}",
"mulsd \\reg{xmm0},\\reg{ds}:[\\num{7FFA63B40A08}]",
"mulsd \\reg{xmm1},\\reg{xmm3}",
"movaps \\reg{xmm2},\\reg{xmm1}",
"mulsd \\reg{xmm2},\\reg{ds}:[\\num{7FFA63B40180}]",
"addsd \\reg{xmm2},\\reg{ds}:[\\num{7FFA63B40198}]",
"mulsd \\reg{xmm2},\\reg{xmm1}",
"mulsd \\reg{xmm2},\\reg{xmm3}",
"addsd \\reg{xmm2},\\reg{xmm3}",
"addsd \\reg{xmm2},\\reg{xmm0}",
"mulsd \\reg{xmm2},\\reg{ds}:[\\num{7FFA63B40A00}]",
"cvtpd2ps \\reg{xmm0},\\reg{xmm2}",
"comisd \\reg{xmm4},\\reg{ds}:[\\num{7FFA63B3F960}]",
"cvttsd2si \\reg{ecx},\\reg{xmm4}",
"xorps \\reg{xmm0},\\reg{xmm0}",
"cvtsi2sd \\reg{xmm0},\\reg{ecx}",
"subsd \\reg{xmm4},\\reg{xmm0}",
"movaps \\reg{xmm1},\\reg{xmm4}",
"movsd \\reg{ss}:[\\reg{rsp}+\\num{A8}],\\reg{xmm4}",
"mov \\reg{rax},\\reg{ss}:[\\reg{rsp}+\\num{A8}]",
"mulsd \\reg{xmm1},\\reg{xmm4}",
"and \\reg{rax},\\num{FFFFFFFFF8000000}",
"mov \\reg{ss}:[\\reg{rsp}+\\num{A8}],\\reg{rax}",
"movsd \\reg{xmm6},\\reg{ss}:[\\reg{rsp}+\\num{A8}]",
"movsxd \\reg{rax},\\reg{ecx}",
"lea \\reg{rcx},\\reg{ds}:[\\num{7FFA63AC0000}]",
"movaps \\reg{xmm7},\\reg{xmm1}",
"movaps \\reg{xmm5},\\reg{xmm1}",
"mulsd \\reg{xmm5},\\reg{ds}:[\\num{7FFA63B3F450}]",
"mulsd \\reg{xmm7},\\reg{ds}:[\\num{7FFA63B3F458}]",
"addsd \\reg{xmm5},\\reg{ds}:[\\num{7FFA63B3F468}]",
"movaps \\reg{xmm0},\\reg{xmm2}",
"addsd \\reg{xmm7},\\reg{ds}:[\\num{7FFA63B3F470}]",
"mulsd \\reg{xmm2},\\reg{xmm6}",
"mulsd \\reg{xmm5},\\reg{xmm1}",
"mulsd \\reg{xmm7},\\reg{xmm1}",
"addsd \\reg{xmm5},\\reg{ds}:[\\num{7FFA63B3F478}]",
"addsd \\reg{xmm7},\\reg{ds}:[\\num{7FFA63B3F480}]",
"mulsd \\reg{xmm5},\\reg{xmm1}",
"mulsd \\reg{xmm7},\\reg{xmm1}",
"addsd \\reg{xmm5},\\reg{ds}:[\\num{7FFA63B3F488}]",
"vpmulhrsw \\reg{xmm10},\\reg{xmm10},\\reg{xmm4}",
"vpmulhrsw \\reg{xmm6},\\reg{xmm6},\\reg{xmm4}",
"vmovq \\reg{xmm5},\\reg{ds}:[\\reg{rcx}]",
"vmovq \\reg{xmm2},\\reg{ds}:[\\reg{rcx}+\\reg{rdx}]",
"vpunpcklbw \\reg{xmm5},\\reg{xmm5},\\reg{xmm1}",
"vpunpcklbw \\reg{xmm2},\\reg{xmm2},\\reg{xmm1}",
"vpaddw \\reg{xmm5},\\reg{xmm5},\\reg{xmm10}",
"vpaddw \\reg{xmm2},\\reg{xmm2},\\reg{xmm6}",
"vpackuswb \\reg{xmm5},\\reg{xmm5},\\reg{xmm2}",
"paddd \\reg{xmm6},\\reg{xmm13}",
"psrad \\reg{xmm5},\\num{E}",
"psrad \\reg{xmm6},\\num{E}",
"packssdw \\reg{xmm5},\\reg{xmm9}",
"packssdw \\reg{xmm6},\\reg{xmm2}",
"psignw \\reg{xmm3},\\reg{xmm14}",
"psignw \\reg{xmm5},\\reg{xmm14}",
"pxor \\reg{xmm2},\\reg{xmm2}",
"pmulhrsw \\reg{xmm0},\\reg{xmm9}",
"pmulhrsw \\reg{xmm4},\\reg{xmm9}",
"movq \\reg{xmm10},\\reg{ds}:[\\reg{rcx}]",
"movq \\reg{xmm11},\\reg{ds}:[\\reg{rcx}+\\reg{rdx}]",
"punpcklbw \\reg{xmm10},\\reg{xmm2}",
"fld \\reg{st(0)},\\reg{ds}:[\\num{7FF65651FF70}]",
"fxch \\reg{st(0)},\\reg{st(1)}",
"fucomi \\reg{st(0)},\\reg{st(1)}",
"fstp \\reg{st(1)},\\reg{st(0)}",
"ja \\num{7FF656513128}",
"fldln2",
"fld \\reg{st(0)},\\reg{ds}:[\\num{7FF65651FF80}]",
"fucomip \\reg{st(0)},\\reg{st(1)}",
"jbe \\num{7FF6565130E5}",
"fldz",
"fxch \\reg{st(0)},\\reg{st(1)}",
"fucomip \\reg{st(0)},\\reg{st(1)}",
"fstp \\reg{st(0)},\\reg{st(0)}",
"jbe \\num{7FF656513150}",
"fld \\reg{st(0)},\\reg{ds}:[\\num{7FF65651FF70}]",
"fstp \\reg{ds}:[\\reg{r12}],\\reg{st(0)}",
"mov \\reg{ds}:[\\reg{r13}],\\num{4}",
"jmp \\num{7FF6565130E7}",
"nop \\reg{cs}:[\\reg{rax}+\\reg{rax}],\\reg{ax}",
"fld \\reg{st(0)},\\reg{ds}:[\\num{7FF65651FF80}]",
"fstp \\reg{ds}:[\\reg{r12}],\\reg{st(0)}",
];
var line_char = 0; // index of character in the line
var lines_written = 0;
var color_open = false;
var color;
var DIV_MAX_LINES = 1;
var mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
function isMobile()
{
	return window.matchMedia(mobileQuery).matches;;
}

function htmlescape(s)
{
	var escaped = '';
	for (let i = 0; i < s.length; i++)
	switch (s.charAt(i))
	{
		case ' ': escaped += '&nbsp;'; break;
		case '&': escaped += '&amp;'; break;
		case '<': escaped += '&lt;'; break;
		case '>': escaped += '&gt;'; break;
		case '"': escaped += '&quot;'; break;
		case "'": escaped += '&#039;'; break;
		default: escaped +=  s.charAt(i);
	}
	return escaped;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var code_line = getRandomInt(0, code.length-1); // index of line

function write_newline()
{
	if (lines_written == DIV_MAX_LINES)
	{
		div.innerHTML = div.innerHTML.replace(/^.*?<br>/,'');
		lines_written--;
	}
	lines_written++;
	div.innerHTML += '<br/>';
}
var is_atomic = false;
var is_mobile = true;
function type_code()
{
	// color : \{#[0-9a-f]+(,atomic)?}{text}
	if (is_mobile ^ isMobile())
	{
		is_mobile = !is_mobile;
		div.classList.toggle('hidden');
		return;
	}
	if (line_char >= code[code_line].length)
	{
		code_line = (code_line + 1) % code.length;
		line_char = 0;
		if (color_open) throw 'Close the color tag before returning to newline';
		write_newline();
		return;
	}
	var slc = code[code_line].slice(line_char, -1);
	if (/^\\reg\{/.test(slc))
	{
		//console.log("[+] opening : slc = " + slc);
		if (color_open) throw 'Color tag already open';
		color_open = true;
		is_atomic = false;
		line_char += 5;
		color_open_ind = line_char;
	}
	else if (/^\\num\{/.test(slc))
	{
		if (color_open) throw 'Color tag already open';
		color_open = true;
		is_atomic = true;
		line_char += 5;
		color_open_ind = line_char;
		div.innerHTML += '<span class="num"></span>';
	}
	else
	{
		if (code[code_line].charAt(line_char) === "\\")
		{
			if (is_atomic)
			{
				div.innerHTML = div.innerHTML.slice(0,-7) + htmlescape(code[code_line].charAt(line_char+1)) + '</span>';
			}
			else
			{
				div.innerHTML += htmlescape(code[code_line].charAt(line_char+1));
			}
			line_char += 2;
		}
		else
		{
			if (is_atomic)
				div.innerHTML = div.innerHTML.slice(0,-7) + htmlescape(code[code_line].charAt(line_char)) + '</span>';
			else
				div.innerHTML += htmlescape(code[code_line].charAt(line_char));			
			line_char++;
		}
		if (color_open && line_char < code[code_line].length && code[code_line].charAt(line_char) === '}')
		{
			if (!is_atomic)
				div.innerHTML = div.innerHTML.replace(new RegExp(htmlescape(code[code_line].slice(color_open_ind, line_char)).replace(/[\(\)]/g, (c) => "\\"+c ) + '$'), (x) => { return '<span class="register">' + x + '</span>' });
			line_char++;
			color_open = false;
			is_atomic = false;
		}
	}
}

setInterval(type_code, 60);
