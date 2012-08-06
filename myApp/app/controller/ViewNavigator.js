
define(['ddennis/AbstractViewNavigator'], function(AbstractViewNavigator){

    ///////////////////////////////////////////////////////////////////////////////
    // Extend
    ViewNavigator.prototype = Object.create (AbstractViewNavigator.prototype);
    ///////////////////////////////////////////////////////////////////////////////


    function ViewNavigator() {

    }


    ViewNavigator.prototype.activatePage = function (currentPage) {
        console.log ("ViewNavigator activatePage " )
        
        currentPage.css("display","block")
        currentPage.animate({'opacity':1}, {duration:800, easing:'swing', queue:false});

    }



    ViewNavigator.prototype.deActivatePage = function (prevPage, prevModule) {
        prevPage.css("display","none")
        prevPage.css("opacity","0")

        // validate if
        if(typeof prevModule.cleanUp != 'undefined' ){
        }

        prevModule.cleanUp ()


    }




    return ViewNavigator

});

