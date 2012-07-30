
define(['ddennis/AbstractPage'], function(AbstractPage){

///////////////////////////////////////////////////////////////////////////////
    // extend from abstractPage
    FrontPage.prototype = Object.create (AbstractPage.prototype);
///////////////////////////////////////////////////////////////////////////////

    var _domObj
    var _name
    var _el

    function FrontPage(){

        AbstractPage.call( this, name );
        console.log (this.name + " = er GO!" )
    }


    FrontPage.prototype.activate = function() {

        console.log ("FrontPage activate " )
        _domObj.css("display","block")
        _domObj.animate({'opacity':1}, {duration:1000, easing:'swing', queue:false});

    };




    FrontPage.prototype.setDomObj = function (argument) {
        console.log ("SET DOM OBJ " )
        _domObj = argument
    }



    return FrontPage


});