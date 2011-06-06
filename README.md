Audiofile.cc
================================

Carlos Cardona 2011
-------------------

All software is available free as in speech and free as in pizza under the [MIT Open Source License](http://www.opensource.org/licenses/mit-license.php).

For more information and examples please see [Audiofile.cc](https://audiofile.cc)

The audiofile.cc wishlist
=========================

If you've made it this far you're actually interested in the project. For that I
salute you. Below is a list of the most important things that could help
move Audiofile forward. If you see something that inspires you to act please do.

### Intelligent wrapping notes

Currently the notes only paint on the xaxis as wide as the canvas. They need to
intelligently wrap to a new line as many times as it takes to paint the entire
piece.

### Browser font detection

The elements being painted to the canvas (clefs, notes, rests, accidentals) were
all hand drawn by myself in canvas. I have implemented code which displays the beautiful Unicode 
characters for each of the musical elements. However it doesn't work
consistently across all browsers and OS's (surprise :p ).

We should add the functionality to detect a browser/OS's font support and serve
them the Unicode characters if they support it and fallback to the hand drawn
elements if not. I've been considering using @font-face but we need a good open
source musical font. Which brings me to...

### Open source Musical Font

Music as markup is a movement that is only just beginning. As we grow we are
going to need a good quality font that we know is licensed appropriately. That is
why I propose that we build our own! ;-)

Ideally it would be a font that can be used via @font-face to deliver the fonts
to as many browser/OS combos as possible.
