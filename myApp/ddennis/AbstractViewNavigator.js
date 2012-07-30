
define(function(){

    var pageArr = []
    var moduleArr = []
    var pageCount = 0
    var currentPage = null
    var currentModule = null
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

        console.log ("moduleArr " + moduleArr.length)

        currentPage = pageArr[index]

        currentModule = moduleArr[index]

        currentModule.activate ()

        //this.activateCurrent ()
        //this.activatePage(currentPage);
        //console.log ("this " + this)
        //AbstractViewNavigator.prototype.activateCurrent.call(this,currentPage )

    }



    AbstractViewNavigator.prototype.activateCurrent = function (currentPage) {

    }



    AbstractViewNavigator.prototype.deactivatePrev = function(argument) {
        //currentPage.css("display","none")
        //currentPage.css("opacity","0")
    }



    AbstractViewNavigator.prototype.addView = function(content, pageModule ) {

        pageArr[pageCount] = content;
        pageModule.setDomObj(content)
        moduleArr[pageCount] = pageModule
        pageCount = pageArr.length

    }

//---------------------------------------------------------------------------------------

    AbstractViewNavigator.prototype.setModel = function (model) {
        var that = this
        $(model).on(model.MODEL_UPDATE, function () {
            var index = model.currentIndex
            that.update(index)
        })
    }

//---------------------------------------------------------------------------------------

    return AbstractViewNavigator

});

