
define(function(){


   var _domObj = null

  function AbstractPage(name){

  		this.name = name
		//console.log (this.name + " extende AbstractPage ")
	
    };
 	

		AbstractPage.prototype.myName = function() {
  			return this.name;
  		};


  		AbstractPage.prototype.activate = function() {
  			  //return "AbstractPage activate"
              console.log ("AbstractPage activate " )
              _domObj.css("display","block")
              _domObj.animate({'opacity':1}, {duration:500, easing:'swing', queue:false});
  		};



    AbstractPage.prototype.cleanUp = function () {
        _domObj.css("display","none")
        _domObj.css("opacity","0")
        //console.log ("AbstractPage cleanUp " )
    };


    AbstractPage.prototype.setDomObj = function (argument) {
        _domObj = argument

    };


    return (AbstractPage)
        
});


