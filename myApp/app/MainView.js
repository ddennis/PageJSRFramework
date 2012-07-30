

define( ['controller/MenuNavigator','controller/ViewNavigator', 'model/AppModel', 'views/FrontPage', 'views/Portfolio'] ,
    function(
        menuNavigator ,
        ViewNavigator,
        Model,
        FrontPage ,
        Portfolio

        ){


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
      viewNav.addView(home, new FrontPage())


      var folio = $('#folio')
      viewNav.addView(folio, new Portfolio())


/*
        var about = $('#about')
      viewNav.addView(about)

        var contact = $('#contact')
      viewNav.addView(contact)
*/
        // start it
        navigationModel.update ()

    }



    return {
        startApp:startApp

    };
});

