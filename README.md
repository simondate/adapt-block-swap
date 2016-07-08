adapt-block-swap
===============

An extension that allows for the swapping of layouts for components within a block.

Motive
------------

When desining a page that use two or more simaltenious blocks of half width components a designer two choices on how to lay them out, alligned and alternate. 



        Alternate:
        -------
        
        Desktop
        
        TEXT            GRAPHIC
        GRAPHIC         TEXT
        TEXT            GRAPHIC
        
        Mobile: TEXT, GRAPHIC, GRAPHIC, TEXT, TEXT, GRAPHIC
        
        
It's clear that the alternate is a visually appealing approach. It breaks up the text and graphic nicely so that the learner can appreciate the whole page, and the learner knows that the graphic applies to the text component next to it.

However for a learner on mobile this ordering now makes no sense as there is no consistent way to understand which text relates to which graphic.
        
        Aligned:
        -------
        
        Desktop
        
        TEXT            GRAPHIC
        TEXT            GRAPHIC
        TEXT            GRAPHIC

        Mobile: TEXT, GRAPHIC, TEXT, GRAPHIC, TEXT, GRAPHIC

This solution solves the issue of consistency on mobile. However it gets boring for learners on desktop to have to look at the same text graphic layout.

Solution
--------

This extension seeks to solve this problem by allowing the designer to script using the alternate method. But when accesed on a mobile device, swap the layout to that of the 'aligned' layout so that it makes sense.

Installation
------------

