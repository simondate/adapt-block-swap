define([ "coreJS/adapt" ], function(Adapt) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var blockSwap = Backbone.View.extend({

        className: "extension",

        initialize: function () {
            this.listenTo(Adapt, 'remove', this.remove);
        }
    });

    function loopBlocks(context)  {
        for(var i = 0; i < context.blocks.length; i++){
            var block = context.blocks.models[i];
            console.log(block);
            if(typeof block.attributes._blockSwap !== 'undefined' && block.attributes._children.length >= 2){
                checkMobileView(block);
            }
        }
    }

    function checkMobileView(block){
        console.log(block.attributes._id);
        block.attributes._children.models[0].attributes._layout = "right";
        block.attributes._children.models[1].attributes._layout = "left"; 
    }

    Adapt.on("app:dataReady", function() {
        loopBlocks(this);
    });

    return blockSwap;
});