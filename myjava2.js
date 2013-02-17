function clearform () {

		window.location = "#page";
		$(".questions").each(function()
		{
			$(this).attr('checked', false).checkboxradio("refresh");
		});
}

$(function () {
$('#validate').click(function () {
	
	if ($('input[type=radio]:checked').length == 6)
	{
		sum = 0;
			$("input[type=radio]:checked").each(function() 
			{
 				sum += parseInt($(this).val()); 
			});
			array2 = ['<strong>Röstuttryck/ljud: </strong>', '<strong>Ansiktsuttryck: </strong>', '<strong>Förändrat kroppsspråk: </strong>', '<strong>Förändrat beteende: </strong>', '<strong>Fysiologisk förändring: </strong>', '<strong>Kroppslig förändring: </strong>']; 
var arr1 = $("input:radio:checked + label").map(function(a, i) {
							return '<tr><td>' + array2[a] + '</td><td>' + $(this).text() + '</td><td>' + $(this).siblings('input:radio:checked').val() + '</td></tr>';
                                        }).get().join('');	

			if (sum <= 2)
			{
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Ingen smärta";
				document.getElementById("problemlistq").innerHTML ="<h2>Sammanfattning</h2>"+ arr1 + "<br/ ><h3>Summa: "+ sum+ " av 18</h3>";
				window.location = "#page";
			}
			if (sum <= 7 && sum >= 3)
			{
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Mild smärta";
				document.getElementById("problemlistq").innerHTML ="<h2>Sammanfattning</h2>"+ arr1 + "<br/ ><h3>Summa: "+ sum+ " av 18</h3>";
				window.location = "#page";
			}
			if (sum <= 13 && sum >= 8)
			{
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Måttlig smärta";
				document.getElementById("problemlistq").innerHTML ="<h2>Sammanfattning</h2>"+ arr1 + "<br/ ><h3>Summa: "+ sum+ " av 18</h3>";
				window.location = "#page";
			}
			if (sum >= 14)
			{
				document.getElementById("problemlistq").innerHTML ="<h2>Sammanfattning</h2>"+ arr1 + "<br/ ><h3>Summa: "+ sum+ " av 27</h3>";
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Svår smärta!";
				window.location = "#page11";	
			}
	}
	else
	{
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Du måste besvara all frågor för att kunna validera.";
				
	}

});
});

