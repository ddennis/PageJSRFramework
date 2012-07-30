
define(function(){


   var domObj = null

  function AbstractPage(name){

  		this.name = name
		  console.log (this.name + " extende AbstractPage ")
	
    };
 	

		AbstractPage.prototype.myName = function() {
  			return this.name;
  		};



  		AbstractPage.prototype.activate = function() {
  			
  			  //return "AbstractPage activate"
              console.log ("AbstractPage activate " )

  		};







    return (AbstractPage)
        
});


