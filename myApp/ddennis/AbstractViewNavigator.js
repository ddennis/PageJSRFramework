
define(function(){

    var pageArr = []
    var pageCount = 0
    var currentPage = null
    var prevPage = null


    function AbstractViewNavigator() {

    }

// private should only be called, when the model updates
    AbstractViewNavigator.prototype.update = function (index){

        console.log ("MODEL " )
        if(currentPage ){
            prevPage = currentPage
            this.deActivatePage (prevPage)
            //deactivatePrev(prevPage)
           // AbstractViewNavigator.prototype.deactivatePrev.call(this, prevPage )
        }

        currentPage = pageArr[index]

        //this.activateCurrent ()
        this.activatePage(currentPage);
        //console.log ("this " + this)
        //AbstractViewNavigator.prototype.activateCurrent.call(this,currentPage )

    }



    AbstractViewNavigator.prototype.activateCurrent = function (currentPage) {

    }



    AbstractViewNavigator.prototype.deactivatePrev = function(argument) {
        currentPage.css("display","none")
        currentPage.css("opacity","0")
    }



    AbstractViewNavigator.prototype.addView = function(contentHolder) {
        pageArr[pageCount] = contentHolder;
        pageCount = pageArr.length
    }



    AbstractViewNavigator.prototype.setModel = function (model) {
        var that = this
        $(model).on(model.MODEL_UPDATE, function () {
            var index = model.currentIndex
            that.update(index)

        })
    }







    return AbstractViewNavigator

});

