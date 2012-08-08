

define( ['controller/MenuNavigator','controller/ViewNavigator', 'model/AppModel', 'views/FrontPage', 'views/Portfolio'] ,
    function(
        menuNavigator ,
        ViewNavigator,
        Model,
        FrontPage ,
        Portfolio

        ){



    var _viewNav

  function startApp(){

      // Find menu-items
          var container = $('#myheader');
          var items = container.find('li');

         var navigationModel = new Model ('navigationModel', 4)
         menuNavigator.init(items, navigationModel)
         //viewNavigator.setModel(navigationModel)

          var viewNav = new ViewNavigator ()
          viewNav.setModel(navigationModel)


          _viewNav = viewNav

//---------------------------------------------------------------------------------------

          var home = $("#home")
          viewNav.addView(home, new FrontPage())

          var folio = $('#folio')
          viewNav.addView(folio, new Portfolio())

          var about = $("#about")
          viewNav.addView(about)

          var contact = $('#contact')
          viewNav.addView(contact)

          var testSide = $('#testter')
          viewNav.addView(testSide)

          // start it
          //navigationModel.update (0)



            var btn = $('#myBtn')
            btn.on('click', function () {

                navigationModel.setCurrentIndex(navigationModel.currentIndex + 1)

            });

             $('#myBackBtn').on('click', function () {

                  navigationModel.setCurrentIndex(navigationModel.currentIndex - 1)
             });


          SWFAddress.addEventListener(SWFAddressEvent.CHANGE, handleChange);
         _viewNav.urlChange(SWFAddress.getValue()  )

    }



        function handleChange(e) {
            _viewNav.urlChange(e.path)
        }



        return {
        startApp:startApp

    };
});


