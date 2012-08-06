
define(function(){

    var _domObj = null
    var _name

  function AbstractPage(name){

  	    this._name = name
		//console.log (this.name + " extende AbstractPage ")



    };
 	

		AbstractPage.prototype.myName = function() {
  			return this.name;
  		};


  		AbstractPage.prototype.activate = function() {

  			  //return "AbstractPage activate"
              console.log ("AbstractPage name = "+this._name  )
             // console.log ("AbstractPage name = "+ this._domObj.html()  )

             this._domObj.css("display","block")
              this._domObj.animate({'opacity':1}, {duration:500, easing:'swing', queue:false});
  		};



    AbstractPage.prototype.cleanUp = function () {
      this._domObj.css("display","none")
       this._domObj.css("opacity","0")
        console.log ("AbstractPage name = "+this._name  )
        console.log ("_dom " + this._domObj)
        //console.log ("AbstractPage cleanUp " )
    };


    AbstractPage.prototype.setDomObj = function (argument) {

        this._domObj = argument

    };





    AbstractPage.prototype.getName = function () {
        return this._name
    };


    return (AbstractPage)
        
});


