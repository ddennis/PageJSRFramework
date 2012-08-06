
define(['ddennis/AbstractPage'], function (AbstractPage) {

    var pageArr = [];
    var moduleArr = [];
    var pageTitleArr = [];
    var pageCount = 0;
    var currentPage = null;
    var currentModule = null;
    var prevModule = null;
    var prevPage = null;
    var _model


    function AbstractViewNavigator() {


    }


// private should only be called, when the model updates
    AbstractViewNavigator.prototype.update = function (index){

        if(currentPage ){
            prevPage = currentPage
            prevModule = currentModule
            this.deActivatePage (prevPage,prevModule  )

            //deactivatePrev(prevPage)
           // AbstractViewNavigator.prototype.deactivatePrev.call(this, prevPage )
        }

        currentPage = pageArr[index]
        currentModule = moduleArr[index]

        if(currentModule != null ){
            currentModule.activate ()
            this.updateAdressbar()
        }




        //AbstractViewNavigator.prototype.activateCurrent.call(this,currentPage )

    };

//---------------------------------------------------------------------------------------

    AbstractViewNavigator.prototype.activateCurrent = function (currentPage) {
    };


    AbstractViewNavigator.prototype.deactivatePrev = function(argument) {
        //currentPage.css("display","none")
        //currentPage.css("opacity","0")
    };


//---------------------------------------------------------------------------------------
    AbstractViewNavigator.prototype.addView = function(content, pageModule ) {

        pageArr[pageCount] = content;

        pageTitleArr[pageCount] = content.data("hashtitle")
        console.log ("title = " + content.data('hashtitle'))

        // if no module is assigned to specific content, it is given an abstractpage
        if(pageModule != undefined){
            pageModule.setDomObj(content)
            moduleArr[pageCount] = pageModule

        }else{
            var ap = new AbstractPage ()
            ap.setDomObj(content)
            moduleArr[pageCount] = ap
        }

        pageCount = pageArr.length

    };

//---------------------------------------------------------------------------------------

    AbstractViewNavigator.prototype.updateAdressbar = function () {
       // console.log ("************************ " )
        var kk = pageTitleArr[_model.currentIndex]
        console.log ("titkle =  " + kk)


       //SWFAddress.setTitle(kk)

        //SWFAddress.setValue(kk)

    };




    function formatTitle(title) {
        return (title != '/' ? ' / ' + toTitleCase(title.substr(1, title.length - 2).replace(/\//g, ' / ')) : '');
    }

//---------------------------------------------------------------------------------------

    AbstractViewNavigator.prototype.setModel = function (model) {
        var that = this
        _model = model
        $(model).on(model.MODEL_UPDATE, function () {
            var index = model.currentIndex
            that.update(index)
        })
    }

//---------------------------------------------------------------------------------------

    return AbstractViewNavigator

});

