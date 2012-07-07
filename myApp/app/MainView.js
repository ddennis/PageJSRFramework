

define( ['controller/MenuNavigator','controller/ViewNavigator', 'model/AppModel'] ,  function( menuNavigator , viewNavigator,  Model ){


  function startApp(){

      // Find menu-items
          var container = $('#myheader');
          var items = container.find('li');

         var navigationModel = new Model ()
         menuNavigator.init(items, navigationModel)
         viewNavigator.setModel(navigationModel)

//---------------------------------------------------------------------------------------

        var home = $("#home")
        viewNavigator.addView(home)

        var folio = $('#folio')
        viewNavigator.addView(folio)

        var about = $('#about')
        viewNavigator.addView(about)

        var contact = $('#contact')
        viewNavigator.addView(contact)

        // start it
        navigationModel.update ()

    }



    return {
        startApp:startApp

    };
});

