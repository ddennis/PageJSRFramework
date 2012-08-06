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
                        views:'app/pages',
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
    touch : Modernizr.touch
}





/* todo

1. hvis den enkelte side ikke har en klass associeret - skal den kalde viewNav funktion

2. swfadress - deep linking - registring - evt med data-hashTitle

3. prøv requirejs text plugin

4.


 */



