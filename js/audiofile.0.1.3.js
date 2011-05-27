/*
* audiofile.cc JavaScript Library v0.1.3
* https://audiofile.cc/
* 
* Copyright 2011, Carlos Cardona 
* Released under the MIT License.
* http://www.opensource.org/licenses/mit-license.php
* 
* Date: Tue May 24 
*/
(function( $ ){
      $.fn.stepUp = function(note, distance) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) + parseInt(distance);
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepDown = function(note, distance) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) - parseInt(distance);
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepUpWhole = function(note) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) + 2;
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepDownWhole = function(note) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) - 2;
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepUpHalf = function(note) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) + 1;
           $(note).attr('data-pitch', afterPitch)
      };

      $.fn.stepDownHalf = function(note) {
           var beforePitch = $(note).attr('data-pitch');
           var afterPitch = parseInt(beforePitch) - 1;
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepUpMaj = function(note, distance) {
           var beforePitch = $(note).attr('data-pitch');
           if (distance == 0) {
             var afterPitch = parseInt(beforePitch) + 0;
           } else if (distance == 1) {
             var afterPitch = parseInt(beforePitch) + 2;
           } else if (distance == 2) {
             var afterPitch = parseInt(beforePitch) + 4;
           } else if (distance == 3) {
             var afterPitch = parseInt(beforePitch) + 5;
           } else if (distance == 4) {
             var afterPitch = parseInt(beforePitch) + 7;
           } else if (distance == 5) {
             var afterPitch = parseInt(beforePitch) + 9;
           } else if (distance == 6) {
             var afterPitch = parseInt(beforePitch) + 11;
           } 
           $(note).attr('data-pitch', afterPitch);
      };

      $.fn.stepDownMaj = function(note, distance) {
           var beforePitch = $(note).attr('data-pitch');
           if (distance == 0) {
             var afterPitch = parseInt(beforePitch) - 0;
           } else if (distance == 1) {
             var afterPitch = parseInt(beforePitch) - 2;
           } else if (distance == 2) {
             var afterPitch = parseInt(beforePitch) - 4;
           } else if (distance == 3) {
             var afterPitch = parseInt(beforePitch) - 5;
           } else if (distance == 4) {
             var afterPitch = parseInt(beforePitch) - 7;
           } else if (distance == 5) {
             var afterPitch = parseInt(beforePitch) - 9;
           } else if (distance == 6) {
             var afterPitch = parseInt(beforePitch) - 11;
           } 
           $(note).attr('data-pitch', afterPitch);
      };
})( jQuery );

function getContext() {
  var ctx = example.getContext("2d");
  return ctx;
}

function drawStaffLines() {
  var ctx = getContext();
  // console.log("lines");
  // draw staff lines
  for (var x = 140; x < 360; x += 20) {
    ctx.moveTo(0, x);
    ctx.lineTo(700, x);
  }
  styleNStroke();
}

function drawNotes() {
  var ctx = getContext();
  var theKey = $("div[data-tonic]").attr("data-tonic");
  setTheKey(theKey);
  var xaxis = 100;
  $("div[data-measure]").each(function(index) {
    // console.log("measure: " + index);

    $(this).find("div[data-note]").each(function(index) {
      var noteLength = $(this).attr("data-note");
      var pitch = $(this).attr("data-pitch");
      var octave = $(this).attr("data-octave");
      var lstnt = $(this).attr("data-lastnote");
      // console.log("pitch: " + pitch);
      // console.log("length: " + noteLength); 
      // console.log("octave: " + octave); 
      drawNote(pitch, noteLength, octave, xaxis);
      if ($(this).parent("div[data-chord]").length && !lstnt) {
        xaxis = xaxis;
      } else if ($(this).parent("div[data-chord]").length && lstnt == "true") {
        xaxis += 50;
      } else {
        xaxis += 50;
      }
    });
    var measureLine = parseInt(xaxis) - 25;
    ctx.moveTo(measureLine, 140);
    ctx.lineTo(measureLine, 220);
    ctx.moveTo(measureLine, 260);
    ctx.lineTo(measureLine, 340);
    styleNStroke();
  });
}

  // Not using this. I just liked the selector and didn't want to toss it just yet :P
  // var firstNote = $("div[data-measure^='0'] div:nth-child(1)").attr("data-pitch");

function drawNote(pitch, noteLength, octave, xaxis, chord) {
  var tonic = $("div[data-tonic]").attr("data-tonic");
  // If key is A
  if (tonic == 0) {
    // If octave is A3
    if (octave == 3) {
      var zero = 260;
      var one = 260;
      var oneSharp = "true";
      var two = 250;
      var three = 240;
      var four = 240;
      var fourSharp = "true";
      var five = 230;
      var six = 230;
      var sixSharp = "true";
      var seven = 220;
      var eight = 210;
      var nine = 210;
      var nineSharp = "true";
      var ten = 200;
      var eleven = 200;
      var elevenSharp = "true";
    // If octave is A4
    } else if (octave == 4) {
      var zero = 190;
      var one = 190;
      var oneSharp = "true";
      var two = 180;
      var three = 170;
      var four = 170;
      var fourSharp = "true";
      var five = 160;
      var six = 160;
      var sixSharp = "true";
      var seven = 150;
      var eight = 140;
      var nine = 140;
      var nineSharp = "true";
      var ten = 130;
      var eleven = 130;
      var elevenSharp = "true";
    // If octave is A5
    } else if (octave == 5) {
      var zero = 120;
      var one = 120;
      var oneSharp = "true";
      var two = 110;
      var three = 100;
      var four = 100;
      var fourSharp = "true";
      var five = 90;
      var six = 90;
      var sixSharp = "true";
      var seven = 80;
      var eight = 70;
      var nine = 70;
      var nineSharp = "true";
      var ten = 60;
      var eleven = 60;
      var elevenSharp = "true";
    }
  // If key is A#
  } else if (tonic == 1) {
    // If octave is A#3
    if (octave == 3) {
      var zero = 260;
      var zeroSharp = "true";
      var one = 250;
      var two = 240;
      var three = 240;
      var threeSharp = "true";
      var four = 230;
      var five = 230;
      var fiveSharp = "true";
      var six = 220;
      var seven = 210;
      var eight = 210;
      var eightSharp = "true";
      var nine = 200;
      var ten = 200;
      var tenSharp = "true";
      var eleven = 190;
    // If octave is A#4
    } else if (octave == 4) {
      var zero = 190;
      var zeroSharp = "true";
      var one = 180;
      var two = 170;
      var three = 170;
      var threeSharp = "true";
      var four = 160;
      var five = 160;
      var fiveSharp = "true";
      var six = 150;
      var seven = 140;
      var eight = 140;
      var eightSharp = "true";
      var nine = 130;
      var ten = 130;
      var tenSharp = "true";
      var eleven = 120;
    // If octave is A#5
    } else if (octave == 5) {
      var zero = 120;
      var zeroSharp = "true";
      var one = 110;
      var two = 100;
      var three = 100;
      var threeSharp = "true";
      var four = 90;
      var five = 90;
      var fiveSharp = "true";
      var six = 80;
      var seven = 70;
      var eight = 70;
      var eightSharp = "true";
      var nine = 60;
      var ten = 60;
      var tenSharp = "true";
      var eleven = 50;
    }
  // If key is B
  } else if (tonic == 2) {
    // If octave is B3
    if (octave == 3) {
      var zero = 250;
      var one = 240;
      var two = 240;
      var twoSharp = "true";
      var three = 230;
      var four = 230;
      var fourSharp = "true";
      var five = 220;
      var six = 210;
      var seven = 210;
      var sevenSharp = "true";
      var eight = 200;
      var nine = 200;
      var nineSharp = "true";
      var ten = 190;
      var eleven = 190;
      var elevenSharp = "true";
    // If octave is B4
    } else if (octave == 4) {
      var zero = 180;
      var one = 170;
      var two = 170;
      var twoSharp = "true";
      var three = 160;
      var four = 160;
      var fourSharp = "true";
      var five = 150;
      var six = 140;
      var seven = 140;
      var sevenSharp = "true";
      var eight = 130;
      var nine = 130;
      var nineSharp = "true";
      var ten = 120;
      var eleven = 120;
      var elevenSharp = "true";
    // If octave is B5
    } else if (octave == 5) {
      var zero = 110;
      var one = 100;
      var two = 100;
      var twoSharp = "true";
      var three = 90;
      var four = 90;
      var fourSharp = "true";
      var five = 80;
      var six = 70;
      var seven = 70;
      var sevenSharp = "true";
      var eight = 60;
      var nine = 60;
      var nineSharp = "true";
      var ten = 50;
      var eleven = 50;
      var elevenSharp = "true";
    }
  // If key is C
  } else if (tonic == 3) {
    // If octave is C3
    if (octave == 3) {
      var zero = 310;
      var one = 310;
      var oneSharp = "true";
      var two = 300;
      var three = 300;
      var threeSharp = "true";
      var four = 290;
      var five = 280;
      var six = 280;
      var sixSharp = "true";
      var seven = 270;
      var eight = 270;
      var eightSharp = "true";
      var nine = 260;
      var ten = 260;
      var tenSharp = "true";
      var eleven = 250;
    // If octave is C4
    } else if (octave == 4) {
      var zero = 240;
      var one = 240;
      var oneSharp = "true";
      var two = 230;
      var three = 230;
      var threeSharp = "true";
      var four = 220;
      var five = 210;
      var six = 210;
      var sixSharp = "true";
      var seven = 200;
      var eight = 200;
      var eightSharp = "true";
      var nine = 190;
      var ten = 190;
      var tenSharp = "true";
      var eleven = 180;
    // If octave is C5
    } else if (octave == 5) {
      var zero = 170;
      var one = 170;
      var oneSharp = "true";
      var two = 160;
      var three = 160;
      var threeSharp = "true";
      var four = 150;
      var five = 140;
      var six = 140;
      var sixSharp = "true";
      var seven = 130;
      var eight = 130;
      var eightSharp = "true";
      var nine = 120;
      var ten = 120;
      var tenSharp = "true";
      var eleven = 110;
    }
  // If key is C#
  } else if (tonic == 4) {
    // If octave is C#3
    if (octave == 3) {
      var zero = 310;
      var zeroSharp = "true";
      var one = 300;
      var two = 300;
      var twoSharp = "true";
      var three = 290;
      var four = 280;
      var five = 280;
      var fiveSharp = "true";
      var six = 270;
      var seven = 270;
      var sevenSharp = "true";
      var eight = 260;
      var nine = 260;
      var nineSharp = "true";
      var ten = 250;
      var eleven = 240;
    // If octave is C#4
    } else if (octave == 4) {
      var zero = 240;
      var zeroSharp = "true";
      var one = 230;
      var two = 230;
      var twoSharp = "true";
      var three = 220;
      var four = 210;
      var five = 210;
      var fiveSharp = "true";
      var six = 200;
      var seven = 200;
      var sevenSharp = "true";
      var eight = 190;
      var nine = 190;
      var nineSharp = "true";
      var ten = 180;
      var eleven = 170;
    // If octave is C#5
    } else if (octave == 5) {
      var zero = 170;
      var zeroSharp = "true";
      var one = 160;
      var two = 160;
      var twoSharp = "true";
      var three = 150;
      var four = 140;
      var five = 140;
      var fiveSharp = "true";
      var six = 130;
      var seven = 130;
      var sevenSharp = "true";
      var eight = 120;
      var nine = 120;
      var nineSharp = "true";
      var ten = 110;
      var eleven = 100;
    }
  // If key is D
  } else if (tonic == 5) {
    // If octave is D3
    if (octave == 3) {
      var zero = 300;
      var one = 300;
      var oneSharp = "true";
      var two = 290;
      var three = 280;
      var four = 280;
      var fourSharp = "true";
      var five = 270;
      var six = 270;
      var sixSharp = "true";
      var seven = 260;
      var eight = 260;
      var eightSharp = "true";
      var nine = 250;
      var ten = 240;
      var eleven = 240;
      var elevenSharp = "true";
    // If octave is D4
    } else if (octave == 4) {
      var zero = 230;
      var one = 230;
      var oneSharp = "true";
      var two = 220;
      var three = 210;
      var four = 210;
      var fourSharp = "true";
      var five = 200;
      var six = 200;
      var sixSharp = "true";
      var seven = 190;
      var eight = 190;
      var eightSharp = "true";
      var nine = 180;
      var ten = 170;
      var eleven = 170;
      var elevenSharp = "true";
    // If octave is D5
    } else if (octave == 5) {
      var zero = 160;
      var one = 160;
      var oneSharp = "true";
      var two = 150;
      var three = 140;
      var four = 140;
      var fourSharp = "true";
      var five = 130;
      var six = 130;
      var sixSharp = "true";
      var seven = 120;
      var eight = 120;
      var eightSharp = "true";
      var nine = 110;
      var ten = 100;
      var eleven = 100;
      var elevenSharp = "true";
    }
  // If key is D#
  } else if (tonic == 6) {
    // If octave is D#3
    if (octave == 3) {
      var zero = 300;
      var zeroSharp = "true";
      var one = 290;
      var two = 280;
      var three = 280;
      var threeSharp = "true";
      var four = 270;
      var five = 270;
      var fiveSharp = "true";
      var six = 260;
      var seven = 260;
      var sevenSharp = "true";
      var eight = 250;
      var nine = 240;
      var ten = 240;
      var tenSharp = "true";
      var eleven = 230;
    // If octave is D#4
    } else if (octave == 4) {
      var zero = 230;
      var zeroSharp = "true";
      var one = 220;
      var two = 210;
      var three = 210;
      var threeSharp = "true";
      var four = 200;
      var five = 200;
      var fiveSharp = "true";
      var six = 190;
      var seven = 190;
      var sevenSharp = "true";
      var eight = 180;
      var nine = 170;
      var ten = 170;
      var tenSharp = "true";
      var eleven = 160;
    // If octave is D#5
    } else if (octave == 5) {
      var zero = 160;
      var zeroSharp = "true";
      var one = 150;
      var two = 140;
      var three = 140;
      var threeSharp = "true";
      var four = 130;
      var five = 130;
      var fiveSharp = "true";
      var six = 120;
      var seven = 120;
      var sevenSharp = "true";
      var eight = 110;
      var nine = 100;
      var ten = 100;
      var tenSharp = "true";
      var eleven = 90;
    }
  // If key is E
  } else if (tonic == 7) {
    // If octave is E3
    if (octave == 3) {
      var zero = 290;
      var one = 280;
      var two = 280;
      var twoSharp = "true";
      var three = 270;
      var four = 270;
      var fourSharp = "true";
      var five = 260;
      var six = 260;
      var sixSharp = "true";
      var seven = 250;
      var eight = 240;
      var nine = 240;
      var nineSharp = "true";
      var ten = 230;
      var eleven = 230;
      var elevenSharp = "true";
    // If octave is E4
    } else if (octave == 4) {
      var zero = 220;
      var one = 210;
      var two = 210;
      var twoSharp = "true";
      var three = 200;
      var four = 200;
      var fourSharp = "true";
      var five = 190;
      var six = 190;
      var sixSharp = "true";
      var seven = 180;
      var eight = 170;
      var nine = 170;
      var nineSharp = "true";
      var ten = 160;
      var eleven = 160;
      var elevenSharp = "true";
    // If octave is E5
    } else if (octave == 5) {
      var zero = 150;
      var one = 140;
      var two = 140;
      var twoSharp = "true";
      var three = 130;
      var four = 130;
      var fourSharp = "true";
      var five = 120;
      var six = 120;
      var sixSharp = "true";
      var seven = 110;
      var eight = 100;
      var nine = 100;
      var nineSharp = "true";
      var ten = 90;
      var eleven = 90;
      var elevenSharp = "true";
    }
  // If key is F
  } else if (tonic == 8) {
    // If octave is F3
    if (octave == 3) {
      var zero = 280;
      var one = 280;
      var oneSharp = "true";
      var two = 270;
      var three = 270;
      var threeSharp = "true";
      var four = 260;
      var five = 260;
      var fiveSharp = "true";
      var six = 250;
      var seven = 240;
      var eight = 240;
      var eightSharp = "true";
      var nine = 230;
      var ten = 230;
      var tenSharp = "true";
      var eleven = 220;
    // If octave is F4
    } else if (octave == 4) {
      var zero = 210;
      var one = 210;
      var oneSharp = "true";
      var two = 200;
      var three = 200;
      var threeSharp = "true";
      var four = 190;
      var five = 190;
      var fiveSharp = "true";
      var six = 180;
      var seven = 170;
      var eight = 170;
      var eightSharp = "true";
      var nine = 160;
      var ten = 160;
      var tenSharp = "true";
      var eleven = 150;
    // If octave is F5
    } else if (octave == 5) {
      var zero = 140;
      var one = 140;
      var oneSharp = "true";
      var two = 130;
      var three = 130;
      var threeSharp = "true";
      var four = 120;
      var five = 120;
      var fiveSharp = "true";
      var six = 110;
      var seven = 100;
      var eight = 100;
      var eightSharp = "true";
      var nine = 90;
      var ten = 90;
      var tenSharp = "true";
      var eleven = 80;
    }
  // If key is F#
  } else if (tonic == 9) {
    // If octave is F#3
    if (octave == 3) {
      var zero = 280;
      var zeroSharp = "true";
      var one = 270;
      var two = 270;
      var twoSharp = "true";
      var three = 260;
      var four = 260;
      var fourSharp = "true";
      var five = 250;
      var six = 240;
      var seven = 240;
      var sevenSharp = "true";
      var eight = 230;
      var nine = 230;
      var nineSharp = "true";
      var ten = 220;
      var eleven = 210;
    // If octave is F#4
    } else if (octave == 4) {
      var zero = 210;
      var zeroSharp = "true";
      var one = 200;
      var two = 200;
      var twoSharp = "true";
      var three = 190;
      var four = 190;
      var fourSharp = "true";
      var five = 180;
      var six = 170;
      var seven = 170;
      var sevenSharp = "true";
      var eight = 160;
      var nine = 160;
      var nineSharp = "true";
      var ten = 150;
      var eleven = 140;
    // If octave is F#5
    } else if (octave == 5) {
      var zero = 140;
      var zeroSharp = "true";
      var one = 130;
      var two = 130;
      var twoSharp = "true";
      var three = 120;
      var four = 120;
      var fourSharp = "true";
      var five = 110;
      var six = 100;
      var seven = 100;
      var sevenSharp = "true";
      var eight = 90;
      var nine = 90;
      var nineSharp = "true";
      var ten = 80;
      var eleven = 70;
    }
  // If key is G
  } else if (tonic == 10) {
    // If octave is G3
    if (octave == 3) {
      var zero = 270;
      var one = 270;
      var oneSharp = "true";
      var two = 260;
      var three = 260;
      var threeSharp = "true";
      var four = 250;
      var five = 240;
      var six = 240;
      var sixSharp = "true";
      var seven = 230;
      var eight = 230;
      var eightSharp = "true";
      var nine = 220;
      var ten = 210;
      var eleven = 210;
      var elevenSharp = "true";
    // If octave is G4
    } else if (octave == 4) {
      var zero = 200;
      var one = 200;
      var oneSharp = "true";
      var two = 190;
      var three = 190;
      var threeSharp = "true";
      var four = 180;
      var five = 170;
      var six = 170;
      var sixSharp = "true";
      var seven = 160;
      var eight = 160;
      var eightSharp = "true";
      var nine = 150;
      var ten = 140;
      var eleven = 140;
      var elevenSharp = "true";
    // If octave is G5
    } else if (octave == 5) {
      var zero = 130;
      var one = 130;
      var oneSharp = "true";
      var two = 120;
      var three = 120;
      var threeSharp = "true";
      var four = 110;
      var five = 100;
      var six = 100;
      var sixSharp = "true";
      var seven = 90;
      var eight = 90;
      var eightSharp = "true";
      var nine = 80;
      var ten = 70;
      var eleven = 70;
      var elevenSharp = "true";
    }
  } else if (tonic == 11) {
    // If octave is G#3
    if (octave == 3) {
      var zero = 270;
      var zeroSharp = "true";
      var one = 260;
      var two = 260;
      var twoSharp = "true";
      var three = 250;
      var four = 240;
      var five = 240;
      var fiveSharp = "true";
      var six = 230;
      var seven = 230;
      var sevenSharp = "true";
      var eight = 220;
      var nine = 210;
      var ten = 210;
      var tenSharp = "true";
      var eleven = 200;
    // If octave is G#4
    } else if (octave == 4) {
      var zero = 200;
      var zeroSharp = "true";
      var one = 190;
      var two = 190;
      var twoSharp = "true";
      var three = 250;
      var three = 180;
      var four = 170;
      var five = 170;
      var fiveSharp = "true";
      var six = 160;
      var seven = 160;
      var sevenSharp = "true";
      var eight = 150;
      var nine = 140;
      var ten = 140;
      var tenSharp = "true";
      var eleven = 130;
    // If octave is G#5
    } else if (octave == 5) {
      var zero = 130;
      var zeroSharp = "true";
      var one = 120;
      var two = 120;
      var twoSharp = "true";
      var three = 110;
      var four = 100;
      var five = 100;
      var fiveSharp = "true";
      var six = 90;
      var seven = 90;
      var sevenSharp = "true";
      var eight = 80;
      var nine = 70;
      var ten = 70;
      var tenSharp = "true";
      var eleven = 60;
    }
  }

  var ctx = getContext();
  if (pitch == 0) {
    if (noteLength == "whole") {
      if (typeof(zeroSharp) == "undefined") {
        drawWholeNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(zeroSharp) == "undefined") {
        drawHalfNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(zeroSharp) == "undefined") {
        drawQuarterNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(zeroSharp) == "undefined") {
        drawEighthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(zeroSharp) == "undefined") {
        drawSixteenthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(zeroSharp) == "undefined") {
        drawThirtySecondNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, zero, sharp);
      }
    }
  } else if (pitch == 1) {
    if (noteLength == "whole") {
      if (typeof(oneSharp) == "undefined") {
        drawWholeNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, one, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(oneSharp) == "undefined") {
        drawHalfNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, one, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(oneSharp) == "undefined") {
        drawQuarterNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, one, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(oneSharp) == "undefined") {
        drawEighthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(oneSharp) == "undefined") {
        drawSixteenthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(oneSharp) == "undefined") {
        drawThirtySecondNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, one, sharp);
      }
    }
  } else if (pitch == 2) {
    if (noteLength == "whole") {
      if (typeof(twoSharp) == "undefined") {
        drawWholeNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, two, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(twoSharp) == "undefined") {
        drawHalfNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, two, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(twoSharp) == "undefined") {
        drawQuarterNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, two, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(twoSharp) == "undefined") {
        drawEighthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(twoSharp) == "undefined") {
        drawSixteenthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(twoSharp) == "undefined") {
        drawThirtySecondNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, two, sharp);
      }
    }
  } else if (pitch == 3) {
    if (noteLength == "whole") {
      if (typeof(threeSharp) == "undefined") {
        drawWholeNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, three, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(threeSharp) == "undefined") {
        drawHalfNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, three, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(threeSharp) == "undefined") {
        drawQuarterNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, three, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(threeSharp) == "undefined") {
        drawEighthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(threeSharp) == "undefined") {
        drawSixteenthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(threeSharp) == "undefined") {
        drawThirtySecondNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, three, sharp);
      }
    }
  } else if (pitch == 4) {
    if (noteLength == "whole") {
      if (typeof(fourSharp) == "undefined") {
        drawWholeNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, four, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fourSharp) == "undefined") {
        drawHalfNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, four, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fourSharp) == "undefined") {
        drawQuarterNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, four, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fourSharp) == "undefined") {
        drawEighthNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fourSharp) == "undefined") {
        drawSixteenthNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fourSharp) == "undefined") {
        drawThirtySecondNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, four, sharp);
      }
    }
  } else if (pitch == 5) {
    if (noteLength == "whole") {
      if (typeof(fiveSharp) == "undefined") {
        drawWholeNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, five, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fiveSharp) == "undefined") {
        drawHalfNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, five, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fiveSharp) == "undefined") {
        drawQuarterNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, five, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fiveSharp) == "undefined") {
        drawEighthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fiveSharp) == "undefined") {
        drawSixteenthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fiveSharp) == "undefined") {
        drawThirtySecondNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, five, sharp);
      }
    }
  } else if (pitch == 6) {
    if (noteLength == "whole") {
      if (typeof(sixSharp) == "undefined") {
        drawWholeNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, six, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sixSharp) == "undefined") {
        drawHalfNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, six, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sixSharp) == "undefined") {
        drawQuarterNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, six, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sixSharp) == "undefined") {
        drawEighthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sixSharp) == "undefined") {
        drawSixteenthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sixSharp) == "undefined") {
        drawThirtySecondNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, six, sharp);
      }
    }
  } else if (pitch == 7) {
    if (noteLength == "whole") {
      if (typeof(sevenSharp) == "undefined") {
        drawWholeNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sevenSharp) == "undefined") {
        drawHalfNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sevenSharp) == "undefined") {
        drawQuarterNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sevenSharp) == "undefined") {
        drawEighthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sevenSharp) == "undefined") {
        drawSixteenthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sevenSharp) == "undefined") {
        drawThirtySecondNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, seven, sharp);
      }
    }
  } else if (pitch == 8) {
    if (noteLength == "whole") {
      if (typeof(eightSharp) == "undefined") {
        drawWholeNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(eightSharp) == "undefined") {
        drawHalfNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(eightSharp) == "undefined") {
        drawQuarterNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(eightSharp) == "undefined") {
        drawEighthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(eightSharp) == "undefined") {
        drawSixteenthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(eightSharp) == "undefined") {
        drawThirtySecondNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, eight, sharp);
      }
    }
  } else if (pitch == 9) {
    if (noteLength == "whole") {
      if (typeof(nineSharp) == "undefined") {
        drawWholeNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(nineSharp) == "undefined") {
        drawHalfNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(nineSharp) == "undefined") {
        drawQuarterNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(nineSharp) == "undefined") {
        drawEighthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(nineSharp) == "undefined") {
        drawSixteenthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(nineSharp) == "undefined") {
        drawThirtySecondNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, nine, sharp);
      }
    }
  } else if (pitch == 10) {
    if (noteLength == "whole") {
      if (typeof(tenSharp) == "undefined") {
        drawWholeNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(tenSharp) == "undefined") {
        drawHalfNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(tenSharp) == "undefined") {
        drawQuarterNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(tenSharp) == "undefined") {
        drawEighthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(tenSharp) == "undefined") {
        drawSixteenthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(tenSharp) == "undefined") {
        drawThirtySecondNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, ten, sharp);
      }
    }
  } else if (pitch == 11) {
    if (noteLength == "whole") {
      if (typeof(elevenSharp) == "undefined") {
        drawWholeNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawWholeNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(elevenSharp) == "undefined") {
        drawHalfNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawHalfNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(elevenSharp) == "undefined") {
        drawQuarterNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawQuarterNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(elevenSharp) == "undefined") {
        drawEighthNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawEighthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(elevenSharp) == "undefined") {
        drawSixteenthNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawSixteenthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(elevenSharp) == "undefined") {
        drawThirtySecondNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, eleven, sharp);
      }
    }
  }
}

function drawWholeNote(xaxis, position, sharp) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.stroke();
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawHalfNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawNoteStaff(xaxis, position);
  drawWholeNote(xaxis, position)
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawQuarterNote(xaxis, position, sharp) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  drawNoteStaff(xaxis, position);
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawEighthNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawSixteenthNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawThirtySecondNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
  drawThreeFlag(xaxis, position);
  if (sharp == "true") {
    sharpNote(xaxis, position);
  }
}

function drawNoteStaff(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 25;
  ctx.moveTo(overX, underY);
  ctx.lineTo(overX, position);
  styleNStroke();
}

function drawOneFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 25;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
  styleNStroke();
}

function drawTwoFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 20;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
  styleNStroke();
}

function drawThreeFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 15;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
  styleNStroke();
}

function styleNStroke() {
  var ctx = getContext();
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

function sharpNote(xaxis, position) {
  var ctx = getContext();
  var xCoord1a = parseInt(xaxis) - 17;
  var yCoord1a = parseInt(position) - 8;
  var yCoord2a = parseInt(yCoord1a) + 15;
  ctx.moveTo(xCoord1a, yCoord1a);
  ctx.lineTo(xCoord1a, yCoord2a);

  var xCoord1b = parseInt(xCoord1a) + 5;
  var yCoord1b = parseInt(yCoord2a) - 15;
  var yCoord2b = parseInt(yCoord1b) + 15;
  ctx.moveTo(xCoord1b, yCoord1b);
  ctx.lineTo(xCoord1b, yCoord2b);

  var xCoord1c = parseInt(xCoord1b) - 10;
  var yCoord1c = parseInt(yCoord2b) - 10;
  var xCoord2c = parseInt(xCoord1c) + 15;
  ctx.moveTo(xCoord1c, yCoord1c);
  ctx.lineTo(xCoord2c, yCoord1c);

  var xCoord1d = parseInt(xCoord1c) + 0;
  var yCoord1d = parseInt(yCoord1c) + 6;
  var xCoord2d = parseInt(xCoord1d) + 15;
  ctx.moveTo(xCoord1d, yCoord1d);
  ctx.lineTo(xCoord2d, yCoord1d);
  styleNStroke();
}

function setTheKey(theKey, xaxis, position) {
  if (theKey == 0) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
  } else if (theKey == 2) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
  } else if (theKey == 3) {
    sharpNote(xaxis, position);
  } else if (theKey == 4) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
    eSharp(xaxis, position);
    bSharp(xaxis, position);
  } else if (theKey == 5) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
  } else if (theKey == 7) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
  } else if (theKey == 9) {
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
    eSharp(xaxis, position);
  } else if (theKey == 10) {
    fSharp(xaxis, position);
  }

  function fSharp(xaxis, position) {
    var xaxis = 25;
    var position = 140;
    sharpNote(xaxis, position);
    var xaxis = 25;
    var position = 280;
    sharpNote(xaxis, position);
    return xaxis;
  }

  function cSharp(xaxis, position) {
    var xaxis = 35;
    var position = 170;
    sharpNote(xaxis, position);
    var xaxis = 35;
    var position = 310;
    sharpNote(xaxis, position);
  }

  function gSharp(xaxis, position) {
    var xaxis = 45;
    var position = 130;
    sharpNote(xaxis, position);
    var xaxis = 45;
    var position = 270;
    sharpNote(xaxis, position);
  }

  function dSharp(xaxis, position) {
    var xaxis = 55;
    var position = 160;
    sharpNote(xaxis, position);
    var xaxis = 55;
    var position = 300;
    sharpNote(xaxis, position);
  }

  function aSharp(xaxis, position) {
    var xaxis = 65;
    var position = 190;
    sharpNote(xaxis, position);
    var xaxis = 65;
    var position = 330;
    sharpNote(xaxis, position);
  }

  function eSharp(xaxis, position) {
    var xaxis = 75;
    var position = 150;
    sharpNote(xaxis, position);
    var xaxis = 75;
    var position = 290;
    sharpNote(xaxis, position);
  }

  function bSharp(xaxis, position) {
    var xaxis = 85;
    var position = 180;
    sharpNote(xaxis, position);
    var xaxis = 85;
    var position = 320;
    sharpNote(xaxis, position);
  }
}
