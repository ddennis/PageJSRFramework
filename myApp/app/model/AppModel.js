
define(function(){

    // Events
    //var MODEL_UPDATE = 'ModelUpdate'


    var _totalItems = undefined;
	var currentIndex = 0;
	var prevIndex = undefined;
	var oldIndex
    var name



    function Model(name, items){
        this.name = name
        this._totalItems = items
    }

    // EVENT
    Model.prototype.MODEL_UPDATE  = 'ModelUpdate'

    // VAR
    Model.prototype.currentIndex = 0


    Model.prototype.setCurrentIndex = function (index) {


        this.prevIndex = this.currentIndex
        this.currentIndex = this.controlCurrentIndex(index)

        console.log ("this.currentIndex "+this.currentIndex )

        if( this.currentIndex != this.prevIndex){

            this.update ()
        }
    }


    Model.prototype.update = function () {

        if(this._totalItems === undefined ){
            console.log ("******************************* " )
            console.log ("_totalItems ER IKKE SAT  " );
            console.log ("******************************* " )
        }
        

        
        $(this).trigger(this.MODEL_UPDATE);

    };


     Model.prototype.controlCurrentIndex = function (value) {

        if (value < 0)	{
            return	this._totalItems
        }
        if(value > this._totalItems){
            return 0
        }

        return value
     };



    Model.prototype.forceUpdate = function (index) {

        if(index === undefined ){
            this.update()
        }else {

            this.currentIndex = index
            this.update()
        }

    };


    return Model




});