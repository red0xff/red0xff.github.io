var div = document.getElementById('typingcode');

code_x64 = [
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

code_aarch64 = [
"paciasp",
"dsb ishst",
"mrs \\reg{x8}, \\reg{daifset}",
"and \\reg{w9}, \\reg{w8}, \\num{#0x80}",
"cbnz \\reg{w9}, \\num{#0xffffffc008112458}",
"nop ",
"mov \\reg{w9}, \\num{#0x60}",
"msr \\reg{daifset}, \\num{#0x2}",
"b \\num{#0xffffffc0081124ec}",
"nop",
"mov \\reg{x9}, \\reg{xzr}",
"mov \\reg{x10}, \\reg{xzr}",
"ldr \\reg{x11}, [\\reg{x0}, \\num{#0x28}]",
"ldr \\reg{x11}, [\\reg{x11}, \\num{#0x30}]",
"msr \\reg{vtcr_el2}, \\reg{x11}",
"b \\num{#0xffffffc008112518}",
"nop",
"mov \\reg{x11}, \\reg{xzr}",
"ldr \\reg{x14}, [\\reg{x0}, \\num{#0x10}]",
"add \\reg{x13}, \\reg{x0}, \\num{#0x8}",
"ldar \\reg{w13}, [\\reg{x13}]",
"mov \\reg{x12}, \\reg{xzr}",
"orr \\reg{x11}, \\reg{x14}, \\reg{x11}",
"orr \\reg{x11}, \\reg{x11}, \\reg{x13}, lsl \\num{#0x30}",
"msr \\reg{vttbr_el2}, \\reg{x11}",
"nop ",
"mrs \\reg{x11}, \\reg{hcr_el2}",
"and \\reg{x11}, \\reg{x11}, \\num{#0xfffffffff7ffffff}",
"mov \\reg{x13}, \\num{#0x88000000}",
"msr \\reg{hcr_el2}, \\reg{x11}",
"isb ",
"tlbi vmalls12e1is",
"nop ",
"nop ",
"dsb ish",
"movk \\reg{x13}, \\num{#0x4}, lsl \\num{#0x20}",
"isb ",
"msr \\reg{vttbr_el2}, \\reg{x12}",
"msr \\reg{hcr_el2}, \\reg{x13}",
"isb ",
"b \\num{#0xffffffc00811252c}",
"nop",
"msr \\reg{daifset}, \\reg{x8}",
"autiasp ",
"ret ",
"bti j",
"brk \\num{#0x800}",
"bti j",
"mov \\reg{w10}, \\num{#0x800080}",
"mrs \\reg{x9}, \\reg{tcr_el1}",
"orr \\reg{x10}, \\reg{x9}, \\reg{x10}",
"msr \\reg{tcr_el1}, \\reg{x10}",
"mrs \\reg{x10}, \\reg{sctlr_el1}",
"orr \\reg{x11}, \\reg{x10}, \\num{#0x1}",
"msr \\reg{sctlr_el1}, \\reg{x11}",
"b \\num{#0xffffffc008112468}",
"bti j",
"brk \\num{#0x800}",
"bti j",
"mov \\reg{w11}, \\num{#0x1}",
"b \\num{#0xffffffc008112480}",
"bti j",
"brk \\num{#0x800}",
"bti j",
"msr \\reg{tcr_el1}, \\reg{x9}",
"msr \\reg{sctlr_el1}, \\reg{x10}",
"b \\num{#0xffffffc0081124e0}",
"bti j",
"movz \\reg{w9}, \\num{#0xa0}",
"mrs \\reg{x8}, \\reg{icc_pmr_el1}",
"eor \\reg{w9}, \\reg{w8}, \\num{#0xe0}",
"msr \\reg{icc_pmr_el1}, \\reg{x9}",
"msr \\reg{daifset}, \\reg{x8}",
"autiasp",
"ret ",
"mov \\reg{x30}, \\reg{x23}",
"adrp \\reg{x8}, \\num{#0xffffffc00b139000}",
"mov \\reg{x9}, \\num{#0xffffffffffffffff}",
"add \\reg{x24}, \\reg{x0}, \\num{#0x1}",
"mov \\reg{x0}, \\reg{x24}",
"mov \\reg{w1}, \\num{#0xcc0}",
"xpaclri ",
"ldr \\reg{x8}, [\\reg{x8}, \\num{#0x10}]",
"tst \\reg{x30}, \\num{#0x80000000000000}",
"lsl \\reg{x8}, \\reg{x9}, \\reg{x8}",
"mvn \\reg{x9}, \\reg{x8}",
"orr \\reg{x8}, \\reg{x8}, \\reg{x30}",
"orr \\reg{x9}, \\reg{x9}, \\num{#0xff80000000000000}",
"and \\reg{x9}, \\reg{x9}, \\reg{x30}",
"csel \\reg{x2}, \\reg{x9}, \\reg{x8}, eq",
"bl \\num{__kmalloc_track_caller}",
"cbz \\reg{x0}, \\num{#0xffffffc00889f388}",
"mov \\reg{x1}, \\reg{x22}",
"mov \\reg{x2}, \\reg{x24}",
"mov \\reg{x23}, \\reg{x0}",
"bl \\num{memcpy}",
"b \\num{#0xffffffc00889f354}",
"mov \\reg{x23}, \\reg{xzr}",
"mov \\reg{x0}, \\reg{x21}",
"mov \\reg{w1}, \\num{#0xa124}",
"mov \\reg{x2}, \\reg{x20}",
"mov \\reg{x3}, \\reg{x23}",
"mov \\reg{x4}, \\reg{xzr}",
"mov \\reg{x5}, \\reg{x19}",
"bl \\num{securityfs_create_dentry}",
"mov \\reg{x19}, \\reg{x0}",
"cmn \\reg{x0}, \\num{#0xfff}",
"blo \\num{#0xffffffc00889f38c}",
"mov \\reg{x0}, \\reg{x23}",
"bl \\num{kfree}",
"b \\num{#0xffffffc00889f38c}",
"mov \\reg{x19}, \\num{#0xfffffffffffffff4}",
"mov \\reg{x0}, \\reg{x19}",
"ldp \\reg{x20}, \\reg{x19}, [\\reg{sp}, \\num{#0x30}]",
"ldp \\reg{x22}, \\reg{x21}, [\\reg{sp}, \\num{#0x20}]",
"ldp \\reg{x24}, \\reg{x23}, [\\reg{sp}, \\num{#0x10}]",
"ldp \\reg{x29}, \\reg{x30}, [\\reg{sp}], \\num{#0x40}",
"ldr \\reg{x30}, [\\reg{x18}, \\num{#-0x8}]!",
"autiasp",
"ret ",
"bti c",
"sub \\reg{w3}, \\reg{w3}, \\num{#0x2}",
"ld1 {\\reg{v0.16b}}, [\\reg{x2}]",
"ld1 {\\reg{v1.4s}}, [\\reg{x0}], \\num{#0x10}",
"cmp \\reg{w3}, \\num{#0xa}",
"bmi \\num{#0xffffffc008019a8c}",
"bne \\num{#0xffffffc008019aa8}",
"mov \\reg{v3.16b}, \\reg{v1.16b}",
"b \\num{#0xffffffc008019a9c}",
"mov \\reg{v2.16b}, \\reg{v1.16b}",
"ld1 {\\reg{v3.4s}}, [\\reg{x0}], \\num{#0x10}",
"aese \\reg{v0.16b}, \\reg{v2.16b}",
"aesmc \\reg{v0.16b}, \\reg{v0.16b}",
"ld1 {\\reg{v1.4s}}, [\\reg{x0}], \\num{#0x10}",
"aese \\reg{v0.16b}, \\reg{v3.16b}",
"aesmc \\reg{v0.16b}, \\reg{v0.16b}",
"ld1 {\\reg{v2.4s}}, [\\reg{x0}], \\num{#0x10}",
"subs \\reg{w3}, \\reg{w3}, \\num{#0x3}",
"aese \\reg{v0.16b}, \\reg{v1.16b}",
"aesmc \\reg{v0.16b}, \\reg{v0.16b}",
"ld1 {\\reg{v3.4s}}, [\\reg{x0}], \\num{#0x10}",
"bpl \\num{#0xffffffc008019a94}",
"aese \\reg{v0.16b}, \\reg{v2.16b}",
"eor \\reg{v0.16b}, \\reg{v0.16b}, \\reg{v3.16b}",
"st1 {\\reg{v0.16b}}, [\\reg{x1}]",
"ret"
];

var code = [ code_x64, code_aarch64 ];
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

var code_arch = getRandomInt(0, code.length-1);
var code_line = getRandomInt(0, code[code_arch].length-1); // index of line

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
	if (line_char >= code[code_arch][code_line].length)
	{
		code_line = (code_line + 1) % code[code_arch].length;
		line_char = 0;
		if (color_open) throw 'Close the color tag before returning to newline';
		write_newline();
		return;
	}
	var slc = code[code_arch][code_line].slice(line_char, -1);
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
		if (code[code_arch][code_line].charAt(line_char) === "\\")
		{
			if (is_atomic)
			{
				div.innerHTML = div.innerHTML.slice(0,-7) + htmlescape(code[code_arch][code_line].charAt(line_char+1)) + '</span>';
			}
			else
			{
				div.innerHTML += htmlescape(code[code_arch][code_line].charAt(line_char+1));
			}
			line_char += 2;
		}
		else
		{
			if (is_atomic)
				div.innerHTML = div.innerHTML.slice(0,-7) + htmlescape(code[code_arch][code_line].charAt(line_char)) + '</span>';
			else
				div.innerHTML += htmlescape(code[code_arch][code_line].charAt(line_char));			
			line_char++;
		}
		if (color_open && line_char < code[code_arch][code_line].length && code[code_arch][code_line].charAt(line_char) === '}')
		{
			if (!is_atomic)
				div.innerHTML = div.innerHTML.replace(new RegExp(htmlescape(code[code_arch][code_line].slice(color_open_ind, line_char)).replace(/[\(\)]/g, (c) => "\\"+c ) + '$'), (x) => { return '<span class="register">' + x + '</span>' });
			line_char++;
			color_open = false;
			is_atomic = false;
		}
	}
}

setInterval(type_code, 60);
