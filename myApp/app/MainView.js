

define( ['controller/MenuNavigator','controller/ViewNavigator', 'model/AppModel'] ,  function( menuNavigator , viewNavigator,  Model ){


  function startApp(){

      // Find menu-items
      var container = $('#myheader');
      var items = container.find('li');


     var navigationModel = new Model ()
     menuNavigator.init(items, navigationModel)

     viewNavigator.setModel(navigationModel)





    };


    function janne() {
        console.log (" Babbay yes" )
    };


    return {
        startApp:startApp

    };
});

