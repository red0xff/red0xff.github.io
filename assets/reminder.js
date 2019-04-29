var reminders = document.getElementsByClassName("reminder");

for (var i = 0; i < reminders.length; i++)
  reminders[i].addEventListener("click", function() {
    this.classList.toggle("reminder-active");
    var content = this;
    console.log(content);
    while (content.tagName !== 'DIV' || !content.classList.contains('reminder-content'))
    {
		console.log(content);
		content = content.nextElementSibling;
	}
	
    if (content.style.display === "block")
      content.style.display = "none";
    else
      content.style.display = "block";
  });
