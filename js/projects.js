		

		var ideabinText = "Built using: Node.Js for back-end, and CSS/HTML for front-end <br>IdeaBin helps connect young programmers with users who listed their problems, to help ﬁx the problem for prizes.<br> It was built during a 36-hour long hackathon at Yale University.";
		var psychbotText = "";

		var proj = document.getElementById("c1");

		proj.addEventListener('click', function projectDisplay () {
			var tmp = document.getElementById("ideabin").innerText;
			document.getElementById("ideabin").innerHTML = ideabinText;
			ideabinText = tmp;
		});