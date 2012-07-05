
define(function(){
 
	var _totalItems = 0;

	var currentIndex = 0;
	var oldIndex  


	// autoStart
	init()

  	function init(){
		
  		//$(document).on('changeIndex', function() { console.log (" model change "  +  ) });
        setTotalItems()


  	};


	function setTotalItems (argument) {
			totalItems = argument;			
	};

	
	function getTotalItems () {		
		//console.log ("totalItems " + totalItems);
		return totalItems
	};


	// argument  as int	 
	function setCurrentIndex (argument) {
		
		currentIndex = argument
		update ()
	};


	function update (argument) {
		console.log ("Model index =  " + currentIndex )
		$(document).trigger('ModelUpdate');
	}

 	
    return {
        init: init,
        setTotalItems: setTotalItems,
        setCurrentIndex: setCurrentIndex ,
        getTotalItems: getTotalItems	

    };
});