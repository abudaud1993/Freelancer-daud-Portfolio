(function($) {


		// 	**============================
		// Animated Headline 
		// 	**==========================
    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });
    // Type of animation used. Options: 'rotate-1', 'rotate-2', 'rotate-3', 'type', 'loading-bar', 'slide', 'clip', 'zoom', 'scale', and 'push'

		// 	**============================
		// Skill Bar
		// 	**==========================
	
		$('.skillbar').skillBars({
			from: 0,
			speed: 5000, 
			interval: 100,
			decimals: 0,
		});
	
		$('.simple-menu').simpleMenu({
			stickyMenu:					true,
			slidingLine:				true,
			menuSpeedAnimate:			500,
			// slidingLineColor:		'#ffffff',
			// waypointTrackedClassName:'tracked',
			// winMobWidth:				 728,
			// slidingLineSpeedAnimate:	 200,
			// slidingLineHeight:		 '0px',
			// stickyMenu:				 false,
			// stickyMenuClassName:		'fixed',
			// slidingLine:				 false,
			// btnClassMenu:             'btn-menu',
			


		  });



        
    })(jQuery);