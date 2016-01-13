var i = 1;
var j = 0;
var t; //that global variable is the name for intervals

function writeHello()
{
	var word = document.getElementById(i);
	word.setAttribute("style", "position: static; margin-left: 2em; margin-top: 4em; margin-right: 20em; color: #FCCC00; font-size: 1.05em; overflow: hidden;");
	t = setInterval(bob, 1);
	
}

function bob()
{
	var str = "OBJECTIVE: ~ To obtain a challenging position that would " + 
	"provide support to the team environment as well as allow for the further" +
	" professional development of my skills to achieve company goals and maintain quality service; *" +
	" PROFILE: ~" +
	"-Strong ability to troubleshoot and resolve issues; ~ -Provide quality solutions, with attentiveness to individual needs " +
	"and concerns; ~ -Excellent communication skills, with proven ability to effectively liaise multiple parties; ~ -Committed " +
	"to upholding satisfactory work. *" + "SUMMARY OF SKILLS: ~ " + "•	Possess a great work ethic and superb team skills ~" +
	"•	Excellent communication and interpersonal skills, initiative in developing and managing effective working relationships with clients ~" +
	"•	Ability to adapt quickly in new and changing business, social, and cultural environments ~" +
	"•	Positive attitude with a commitment to performing quality work ~" +
	"•	Strong computer skills: more than proficient in Windows OS, Linux OS, Windows Server, Databases ~" +
	"•	Honest, dependable, punctual ~" +
	"•	Very active; good health condition ~" +
	"•	Languages: English, Russian, Tartar ~" +
	"•	Have a wide knowledge: C, C++, Java, JavaScript, HTML, CSS, IBM Systems, SQL, MySQL *" +
	"EDUCATION: ~" + "Publishing 2005 - 2011 ~Government University, Russia*" +
	"Computer Programming 2015 – 2016   ~Seneca College, Toronto, ON *" +
	"EMPLOYMENT HISTORY: ~" + "Salesperson (during summer vacations) 2007 – 2010  ~IKEA, Russia*" +
	"Teaching Russian language 2011     ~Local Polish School, Russia*" +
	"Computer Programmer and Moderator 2011 – 2013   ~Planetarium of Ufa, Russia";

	var word = document.getElementById(i);
	if (str[j] == '~')
		word.innerHTML += '<br />';
	else if (str[j] == '*')
		word.innerHTML += '<br /><br />';
	else
		word.innerHTML += str[j];
	
	j++;
	
	if (j > 1529)
		clearInterval(t);	
	
}

