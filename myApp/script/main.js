( function( window, Modernizr ) {

	"use strict";

	Modernizr.load( [
		/*
		{
			test: Modernizr[testSomething],
			yep: filesToLoad
		},
		*/

		{
			load: ['lib/require.js'],
			callback: function( file ) {
				/* handler on async loaded file. */
			},

			complete: function() {

				define.amd.jQuery = true;
				require.config({
					
					paths: {
                        model:'app/model',
                        controller :'app/controller',
						jquery: './lib/jquery'

					}
				});

				require( ['jquery', 'app/MainView'], function( $ , mainView) {

					$('<p>APP is YESf running.</p>').appendTo( $("#placeholder") );
							
					mainView.startApp()

				});
			}
		}
	]);


})( this, Modernizr );



Config_main = {
    // Is touch supported
    touch : Modernizr.touch,

    // Set content-index
    contentIndex : 0,

    // Initlialize something
    init : function () {

        console.log ("Config_main init"  )
    }
}