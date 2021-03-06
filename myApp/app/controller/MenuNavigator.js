//define(['lib/AppModel' ], function (model) {
//define(['model/AppModel'], function (model) {
define(function () {

    var model
    var itemArr = [];
    var current = null
    var prevCurrent = null

    function init(items , _model) {

        model = _model

        $(model).on(model.MODEL_UPDATE ,  function(){

            var index = model.currentIndex
            setCurrentByIndex(index)

        });

        // is passed in the init function
        // Find menu-items
        //var container = $('.top-menu');
        //var items = container.find('li');
//---------------------------------------------------------------------------------------

        // Loop through menu items
        for (var i = 0, j = items.length; i < j; i++) {
            // Menu item
            var item = items.eq(i);

            // Save index
            item.data('index', i);



            // put in array
            itemArr[i] = item

            /* Handle mouseenter*/
            item.on('mouseenter.menu', function () {
                // Add active class
                //$(this).addClass('active');
                // Remove focus from child-items
                //$(this).siblings().animate({'opacity':.1}, {duration:200, easing:'swing', queue:false});

                $(this).animate({'opacity':.4}, {duration:200, easing:'swing', queue:false});

            });

//---------------------------------------------------------------------------------------

            // Handle mouseleave
            item.on('mouseleave.menu', function () {
                // Add active class
                //$(this).removeClass('active');
                // Remove focus from child-items
                //$(this).siblings().animate({'opacity':1}, {duration:200, easing:'swing', queue:false});

                if($(this).data('selected') != true ){
                    $(this ).animate({'opacity':1}, {duration:200, easing:'swing', queue:false});
                }

            });

//---------------------------------------------------------------------------------------

            // Handle click
            item.on(Config_main.touch ? 'touchend' : 'click', function () {
                // Content index
                //Config_main.contentIndex = $(this).data('index');
                var index = $(this).data('index');
                console.log (" MENU ITEM index " +index)
                model.setCurrentIndex(index)


               // SWFAddress.setValue(index.toString())
                // testIt ()

                //setCurrentByIndex(index)
               // onSelect($(this))
              //  model.setCurrentIndex(index)
                // Call content-change
                //$(document).trigger('changeIndex');
            });
        }
    }



    function setCurrentByIndex(argument) {
        var item = itemArr[argument]
        onSelect (item)
    }


//---------------------------------------------------------------------------------------

    function onSelect(item) {

        if(current != null ){
            prevCurrent = current
            $(prevCurrent).data ('selected' , false)
            deActivate(prevCurrent)
        }

        current = item
        $(current).data ('selected' , true)
        activate(current)

    }

//---------------------------------------------------------------------------------------


    function activate(item) {
        item.css("opacity",".5")
    }


    function deActivate(prev) {
        prev.css("opacity","1")
    }


    return {
        init:init
    };
});
