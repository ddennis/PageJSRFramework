
define(['ddennis/AbstractViewNavigator'], function(AbstractViewNavigator){

    ///////////////////////////////////////////////////////////////////////////////
    // Extend
    ViewNavigator.prototype = Object.create (AbstractViewNavigator.prototype);
    ///////////////////////////////////////////////////////////////////////////////


    function ViewNavigator() {

    }






    ViewNavigator.prototype.activatePage = function (currentPage) {

        currentPage.css("display","block")
        currentPage.animate({'opacity':1}, {duration:100, easing:'swing', queue:false});

    }



    ViewNavigator.prototype.deActivatePage = function (currentPage) {
        currentPage.css("display","none")
        currentPage.css("opacity","0")

    }




    return ViewNavigator

});

