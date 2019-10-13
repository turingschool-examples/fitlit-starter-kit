

$(document).ready(function() {

    console.log( "ready!" );

		$(".main__game--button").click(function() {
		
			// $(".js__counter").text(gameCounter);
			// let randomNumber1 = Math.floor(Math.random() * 3);
			// $("#num__1--h1").toggle();
			// $("#num__2--h1").toggle();
			// $("#num__3--h1").toggle();
			// $("#num__1--h1").text(randomNumber1).fadeIn(1500);
			// $("#num__2--h1").text(randomNumber2).fadeIn(1500);
			// $("#num__3--h1").text(randomNumber3).fadeIn(1500);

			if (randomNumber1 === randomNumber2 && randomNumber1 === randomNumber3) {
				console.log('Winner!')
				// $("#num__1--h1").toggle();
				// $("#num__2--h1").toggle();
				// $("#num__3--h1").toggle();
			}

		})


});