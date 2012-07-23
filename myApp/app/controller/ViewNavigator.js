
define(function(){

    var pageArr = []
    var pageCount = 0
    var currentPage = null
    var prevPage = null


    function ViewNavigator(model) {

    }


    function update (index){

        if(currentPage ){
            prevPage = currentPage
            //deactivatePrev(prevPage)
            ViewNavigator.prototype.deactivatePrev.call(this, prevPage )
        }

        currentPage = pageArr[index]
       // activateCurrent(currentPage);
        ViewNavigator.prototype.activateCurrent.call(this,currentPage )

    }



    ViewNavigator.prototype.activateCurrent = function (currentPage) {
        currentPage.css("display","block")
        currentPage.animate({'opacity':1}, {duration:500, easing:'swing', queue:false});
        //currentPage.css("opacity","1")
    }

    ViewNavigator.prototype.deactivatePrev = function(argument) {
        currentPage.css("display","none")
        currentPage.css("opacity","0")
    }

    /**
     * @contentHolder
     *
     */

    ViewNavigator.prototype.addView = function(contentHolder) {
        pageArr[pageCount] = contentHolder;
        pageCount = pageArr.length
    }



    ViewNavigator.prototype.setModel = function (model) {

        $(model).on(model.MODEL_UPDATE, function () {
            var index = model.currentIndex
            update(index)
        })
    }

    return ViewNavigator

});

