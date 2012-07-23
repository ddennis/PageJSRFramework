define(function(){

    var pageArr = []
    var pageCount = 0
    var currentPage = null
    var prevPage = null


    function update(index){

        if(currentPage ){
            prevPage = currentPage
            deactivatePrev(prevPage)

        }

        currentPage = pageArr[index]
        activateCurrent(currentPage);

    }


    function activateCurrent(currentPage) {
        currentPage.css("display","block")
        currentPage.animate({'opacity':1}, {duration:500, easing:'swing', queue:false});
       //currentPage.css("opacity","1")

    }

    function deactivatePrev(argument) {
        currentPage.css("display","none")
        currentPage.css("opacity","0")
    }

    /**
     * @contentHolder
     *
     */

     function addView(contentHolder) {

        pageArr[pageCount] = contentHolder;
        pageCount = pageArr.length

     }
    
    
    
    function setModel(model) {

        $(model).on(model.MODEL_UPDATE, function () {
            var index = model.currentIndex
            update(index)
        })

    }
    

    return {
        setModel:setModel,
        addView:addView
    };
});
