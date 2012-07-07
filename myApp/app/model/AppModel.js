
define(function(){

    // Events
    //var MODEL_UPDATE = 'ModelUpdate'


    var _totalItems = 0;
	//var currentIndex = 0;
	var oldIndex


    function Model(){
        //this.name = name || 'Default name';

        // EVENT
        Model.prototype.MODEL_UPDATE  = 'ModelUpdate'

        // VAR
        Model.prototype.currentIndex   = 0


        Model.prototype.setCurrentIndex = function (index) {
            if(index != this.currentIndex){
                this.currentIndex =  index
                this.update ()
            }
        }

        Model.prototype.update = function () {
            console.log ("Model index =  " + this.currentIndex )
           $(this).trigger(this.MODEL_UPDATE);
        }


    }






/*
	// autoStart
	//init()

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
		//$(document).trigger(MODEL_UPDATE);
		//$(this).trigger(MODEL_UPDATE);
		//$(document).trigger(MODEL_UPDATE);

        $(document).trigger(MODEL_UPDATE);
          console.log ("appmodel  " +  $(this)          )

	}


         return {
         Model:Model(),
         init: init,
         setTotalItems: setTotalItems,
         setCurrentIndex: setCurrentIndex ,
         getTotalItems: getTotalItems
         ,MODEL_UPDATE: MODEL_UPDATE

         };

*/

    return Model




});