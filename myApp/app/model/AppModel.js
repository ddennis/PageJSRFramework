
define(function(){

    // Events
    //var MODEL_UPDATE = 'ModelUpdate'


    var _totalItems = 0;
	var currentIndex = 0;
	var oldIndex
    var name



    function Model(name){
        this.name = name
    }

    // EVENT
    Model.prototype.MODEL_UPDATE  = 'ModelUpdate'

    // VAR
    Model.prototype.currentIndex = 0


    Model.prototype.setCurrentIndex = function (index) {
        if(index != this.currentIndex){
            this.currentIndex =  index
            this.update ()
        }
    }

    Model.prototype.update = function () {
        //console.log ("Model index =  " + this.currentIndex )
        $(this).trigger(this.MODEL_UPDATE);
    }






    return Model




});