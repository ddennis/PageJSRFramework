

define( ['controller/MenuNavigator','controller/ViewNavigator', 'model/AppModel'] ,  function( menuNavigator , ViewNavigator,  Model ){


  function startApp(){

      // Find menu-items
          var container = $('#myheader');
          var items = container.find('li');

         var navigationModel = new Model ()
         menuNavigator.init(items, navigationModel)
         //viewNavigator.setModel(navigationModel)

          var viewNav = new ViewNavigator ()
          viewNav.setModel(navigationModel)

//---------------------------------------------------------------------------------------

        var home = $("#home")

      viewNav.addView(home)

        var folio = $('#folio')
      viewNav.addView(folio)

        var about = $('#about')
      viewNav.addView(about)

        var contact = $('#contact')
      viewNav.addView(contact)

        // start it
        navigationModel.update ()

    }



    return {
        startApp:startApp

    };
});

