/**
 * User: Fathead
 * Date: 29-07-12
 * Time: 10:20
 */


define(['ddennis/AbstractPage'], function (AbstractPage) {

///////////////////////////////////////////////////////////////////////////////
    // extend from abstractPage
    Portfolio.prototype = Object.create(AbstractPage.prototype);
///////////////////////////////////////////////////////////////////////////////

    var _domObj
    var _name
    var _el

    function Portfolio(name, el) {
        _name = name
        _el = el
        AbstractPage.call(this, name);
        console.log(this.name + " = er GO!")
    }


    Portfolio.prototype.activate = function () {

        console.log ("Portfolio activater " )
        _domObj.css("display","block")
        _domObj.animate({'opacity':1}, {duration:500, easing:'swing', queue:false});
       // _domObj.children('h1').animate({'left':150}, {duration:1000, easing:'swing', queue:false});
        _domObj.animate({'left':200}, {duration:500, easing:'swing', queue:false});


    };


    Portfolio.prototype.setDomObj = function (argument) {
        _domObj = argument

    }

    Portfolio.prototype.cleanUp = function () {

        console.log ("cleanUp " )
        _domObj.css('left', '0')

    }



    return Portfolio


});