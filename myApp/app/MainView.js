

define( ['controller/MenuNavigator'] ,  function( menuNavigator ){


  function startApp(){

      // Find menu-items
      var container = $('#myheader');
      var items = container.find('li');

      console.log (" items " +items.length )
      menuNavigator.init(items)

    }


    function janne() {
        console.log (" Babbay yes" )
    }


    return {
        startApp:startApp

    };
});

