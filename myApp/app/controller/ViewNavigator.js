define(function(){


  	function update(){

    }


    function setModel(model) {

        $(model).on(model.MODEL_UPDATE, function () {

            var k = model.currentIndex
            console.log ("view navigator = " + k)

        })

    }
    

    return {

        setModel:setModel
    };
});
