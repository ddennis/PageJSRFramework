
define(['app/AbstractPage'], function(AbstractPage){

///////////////////////////////////////////////////////////////////////////////
    // extend from abstractPage
    ***.prototype = Object.create (AbstractPage.prototype);
///////////////////////////////////////////////////////////////////////////////


    var _name
    var _el

    function ***(name, el){
        _name = name
        _el = el
        AbstractPage.call( this, name );
        console.log (this.name + " = er GO!" )
    }


    ***.prototype.activate = function() {

    };


    return ***


});