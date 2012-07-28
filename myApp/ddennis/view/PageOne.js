

// This should only be used as a template for Pages


define(['app/AbstractPage'], function(AbstractPage){
 

	var _name 
	var _el
	var timer
	
  function PageOne(name, el){

  		_name = name
  		_el = el
		AbstractPage.call( this, name );	
		console.log (this.name + " = er GO!" ) 
  }

	///////////////////////////////////////////////////////////////////////////////
	// Extend
	PageOne.prototype = Object.create (AbstractPage.prototype);
	///////////////////////////////////////////////////////////////////////////////
	

	PageOne.prototype.activate = function() {
	
		
		timer = setTimeout (tester, 500)
	  	return 'page activate'
		// kalder super 
		//AbstractPage.prototype.activate.call(this);
		
	};



	// en slags private methode som ikke kan kaldes udefra
	 function tester () {						
		_el.css('opacity', '1')
	}


 	
    return PageOne
});