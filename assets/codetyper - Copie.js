var div = document.getElementById('typingcode');

var code = [ "\\blue{var} x = \\green{5}", "\\blue{var} y = \\green{2}", "\\blue{var} z = \\green{true};"];
code = [
"add	\\{#23b0ff}{r3}, \\{#23b0ff}{pc}, \\{#8e9095,atomic}{#12222222}",
"bx	\\{#23b0ff}{r3}",
"mov	\\{#23b0ff}{r0}, \\{#23b0ff}{pc}",
"adds	\\{#23b0ff}{r0}, \\{#8e9095,atomic}{#2}",
"nop",
"str	\\{#23b0ff}{r0}, [\\{#23b0ff}{sp}, \\{#8e9095,atomic}{#4}]",
"subs	\\{#23b0ff}{r1}, \\{#23b0ff}{r1}, \\{#23b0ff}{r1}",
"subs	\\{#23b0ff}{r2}, \\{#23b0ff}{r2}, \\{#23b0ff}{r2}",
"movs	\\{#23b0ff}{r7}, \\{#8e9095,atomic}{#11}",
"svc	1",
"str	\\{#23b0ff}{r7}, [\\{#23b0ff}{r5}, \\{#8e9095,atomic}{#32}]",
"ldr	\\{#23b0ff}{r1}, [\\{#23b0ff}{r5}, \\{#8e9095,atomic}{#100}]",
"strb	\\{#23b0ff}{r7}, [\\{#23b0ff}{r5}, \\{#8e9095,atomic}{#12}]",
"lsls	\\{#23b0ff}{r0}, \\{#23b0ff}{r5}, \\{#8e9095,atomic}{#1}",
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

var code_line = 0;//getRandomInt(0, code.length-1); // index of line

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
	var match = slc.match(/^\\\{(#[0-9a-f]+)((?:,atomic)?)\}\{/);
	if (match)
	{
		if (color_open) throw 'Color tag already open';
		color_open = true;
		color = match[1];
		console.log(match);
		if (match[2].length !== 0)
		{
			div.innerHTML += '<span style="color: ' + color + '"></span>';
			is_atomic = true;
		}
		else
			is_atomic = false;
		line_char += match[0].length;
		color_open_ind = line_char;
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
			div.innerHTML = div.innerHTML.replace(new RegExp(htmlescape(code[code_line].slice(color_open_ind, line_char)) + '$'), (x) => { return '<span style="color: ' + color + '">' + x + '</span>' });
			line_char++;
			color_open = false;
			is_atomic = false;
		}
	}
}

setInterval(type_code, 60);
