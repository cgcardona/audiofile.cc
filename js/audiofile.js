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
  var xaxis = 15;

  $("div[data-measure]").each(function(index) {
    // console.log("measure: " + index);

    $(this).children(".note").each(function(index) {
      var noteLength = $(this).attr("data-note");
      var pitch = $(this).attr("data-pitch");
      var octave = $(this).attr("data-octave");
      // console.log("pitch: " + pitch);
      // console.log("length: " + noteLength); 
      // console.log("octave: " + octave); 
      drawNote(pitch, noteLength, octave, xaxis);
      xaxis += 50;
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

function drawNote(pitch, noteLength, octave, xaxis) {
  var tonic = $("div[data-tonic]").attr("data-tonic");
  // If key is A
  if (tonic == 0) {
    // If octave is A3
    if (octave == 3) {
      var zero = 260;
      var one = 260;
      var two = 250;
      var three = 240;
      var four = 240;
      var five = 230;
      var six = 230;
      var seven = 220;
      var eight = 210;
      var nine = 210;
      var ten = 200;
      var eleven = 200;
    // If octave is A4
    } else if (octave == 4) {
      var zero = 190;
      var one = 190;
      var two = 180;
      var three = 170;
      var four = 170;
      var five = 160;
      var six = 160;
      var seven = 150;
      var eight = 140;
      var nine = 140;
      var ten = 130;
      var eleven = 130;
    // If octave is A5
    } else if (octave == 5) {
      var zero = 120;
      var one = 120;
      var two = 110;
      var three = 100;
      var four = 100;
      var five = 90;
      var six = 90;
      var seven = 80;
      var eight = 70;
      var nine = 70;
      var ten = 60;
      var eleven = 60;
    }
  // If key is A#
  } else if (tonic == 1) {
    // If octave is A#3
    if (octave == 3) {
      var zero = 260;
      var one = 250;
      var two = 240;
      var three = 240;
      var four = 230;
      var five = 230;
      var six = 220;
      var seven = 210;
      var eight = 210;
      var nine = 200;
      var ten = 200;
      var eleven = 190;
    // If octave is A#4
    } else if (octave == 4) {
      var zero = 190;
      var one = 180;
      var two = 170;
      var three = 170;
      var four = 160;
      var five = 160;
      var six = 150;
      var seven = 140;
      var eight = 140;
      var nine = 130;
      var ten = 130;
      var eleven = 120;
    // If octave is A#5
    } else if (octave == 5) {
      var zero = 120;
      var one = 110;
      var two = 100;
      var three = 100;
      var four = 90;
      var five = 90;
      var six = 80;
      var seven = 70;
      var eight = 70;
      var nine = 60;
      var ten = 60;
      var eleven = 50;
    }
  // If key is B
  } else if (tonic == 2) {
    // If octave is B3
    if (octave == 3) {
      var zero = 250;
      var one = 240;
      var two = 240;
      var three = 230;
      var four = 230;
      var five = 220;
      var six = 210;
      var seven = 210;
      var eight = 200;
      var nine = 200;
      var ten = 190;
      var eleven = 190;
    // If octave is B4
    } else if (octave == 4) {
      var zero = 180;
      var one = 170;
      var two = 170;
      var three = 160;
      var four = 160;
      var five = 150;
      var six = 140;
      var seven = 140;
      var eight = 130;
      var nine = 130;
      var ten = 120;
      var eleven = 120;
    // If octave is B5
    } else if (octave == 5) {
      var zero = 110;
      var one = 100;
      var two = 100;
      var three = 90;
      var four = 90;
      var five = 80;
      var six = 70;
      var seven = 70;
      var eight = 60;
      var nine = 60;
      var ten = 50;
      var eleven = 50;
    }
  // If key is C
  } else if (tonic == 3) {
    // If octave is C3
    if (octave == 3) {
      var zero = 310;
      var one = 310;
      var two = 300;
      var three = 300;
      var four = 290;
      var five = 280;
      var six = 280;
      var seven = 270;
      var eight = 270;
      var nine = 260;
      var ten = 260;
      var eleven = 250;
    // If octave is C4
    } else if (octave == 4) {
      var zero = 240;
      var one = 240;
      var two = 230;
      var three = 230;
      var four = 220;
      var five = 210;
      var six = 210;
      var seven = 200;
      var eight = 200;
      var nine = 190;
      var ten = 190;
      var eleven = 180;
    // If octave is C5
    } else if (octave == 5) {
      var zero = 170;
      var one = 170;
      var two = 160;
      var three = 160;
      var four = 150;
      var five = 140;
      var six = 140;
      var seven = 130;
      var eight = 130;
      var nine = 120;
      var ten = 120;
      var eleven = 110;
    }
  // If key is C#
  } else if (tonic == 4) {
    // If octave is C#3
    if (octave == 3) {
      var zero = 310;
      var one = 300;
      var two = 300;
      var three = 290;
      var four = 280;
      var five = 280;
      var six = 270;
      var seven = 270;
      var eight = 260;
      var nine = 260;
      var ten = 250;
      var eleven = 240;
    // If octave is C#4
    } else if (octave == 4) {
      var zero = 240;
      var one = 230;
      var two = 230;
      var three = 220;
      var four = 210;
      var five = 210;
      var six = 200;
      var seven = 200;
      var eight = 190;
      var nine = 190;
      var ten = 180;
      var eleven = 170;
    // If octave is C#5
    } else if (octave == 5) {
      var zero = 170;
      var one = 160;
      var two = 160;
      var three = 150;
      var four = 140;
      var five = 140;
      var six = 130;
      var seven = 130;
      var eight = 120;
      var nine = 120;
      var ten = 110;
      var eleven = 100;
    }
  // If key is D
  } else if (tonic == 5) {
    // If octave is D3
    if (octave == 3) {
      var zero = 300;
      var one = 300;
      var two = 290;
      var three = 280;
      var four = 280;
      var five = 270;
      var six = 270;
      var seven = 260;
      var eight = 260;
      var nine = 250;
      var ten = 240;
      var eleven = 240;
    // If octave is D4
    } else if (octave == 4) {
      var zero = 230;
      var one = 230;
      var two = 220;
      var three = 210;
      var four = 210;
      var five = 200;
      var six = 200;
      var seven = 190;
      var eight = 190;
      var nine = 180;
      var ten = 170;
      var eleven = 170;
    // If octave is D5
    } else if (octave == 5) {
      var zero = 160;
      var one = 160;
      var two = 150;
      var three = 140;
      var four = 140;
      var five = 130;
      var six = 130;
      var seven = 120;
      var eight = 120;
      var nine = 110;
      var ten = 100;
      var eleven = 100;
    }
  // If key is D#
  } else if (tonic == 6) {
    // If octave is D#3
    if (octave == 3) {
      var zero = 300;
      var one = 290;
      var two = 280;
      var three = 280;
      var four = 270;
      var five = 270;
      var six = 260;
      var seven = 260;
      var eight = 250;
      var nine = 240;
      var ten = 240;
      var eleven = 230;
    // If octave is D#4
    } else if (octave == 4) {
      var zero = 230;
      var one = 220;
      var two = 210;
      var three = 210;
      var four = 200;
      var five = 200;
      var six = 190;
      var seven = 190;
      var eight = 180;
      var nine = 170;
      var ten = 170;
      var eleven = 160;
    // If octave is D#5
    } else if (octave == 5) {
      var zero = 160;
      var one = 150;
      var two = 140;
      var three = 140;
      var four = 130;
      var five = 130;
      var six = 120;
      var seven = 120;
      var eight = 110;
      var nine = 100;
      var ten = 100;
      var eleven = 90;
    }
  // If key is E
  } else if (tonic == 7) {
    // If octave is E3
    if (octave == 3) {
      var zero = 290;
      var one = 280;
      var two = 280;
      var three = 270;
      var four = 270;
      var five = 260;
      var six = 260;
      var seven = 250;
      var eight = 240;
      var nine = 240;
      var ten = 230;
      var eleven = 230;
    // If octave is E4
    } else if (octave == 4) {
      var zero = 220;
      var one = 210;
      var two = 210;
      var three = 200;
      var four = 200;
      var five = 190;
      var six = 190;
      var seven = 180;
      var eight = 170;
      var nine = 170;
      var ten = 160;
      var eleven = 160;
    // If octave is E5
    } else if (octave == 5) {
      var zero = 150;
      var one = 140;
      var two = 140;
      var three = 130;
      var four = 130;
      var five = 120;
      var six = 120;
      var seven = 110;
      var eight = 100;
      var nine = 100;
      var ten = 90;
      var eleven = 90;
    }
  // If key is F
  } else if (tonic == 8) {
    // If octave is F3
    if (octave == 3) {
      var zero = 280;
      var one = 280;
      var two = 270;
      var three = 270;
      var four = 260;
      var five = 260;
      var six = 250;
      var seven = 240;
      var eight = 240;
      var nine = 230;
      var ten = 230;
      var eleven = 220;
    // If octave is F4
    } else if (octave == 4) {
      var zero = 210;
      var one = 210;
      var two = 200;
      var three = 200;
      var four = 190;
      var five = 190;
      var six = 180;
      var seven = 170;
      var eight = 170;
      var nine = 160;
      var ten = 160;
      var eleven = 150;
    // If octave is F5
    } else if (octave == 5) {
      var zero = 140;
      var one = 140;
      var two = 130;
      var three = 130;
      var four = 120;
      var five = 120;
      var six = 110;
      var seven = 100;
      var eight = 100;
      var nine = 90;
      var ten = 90;
      var eleven = 80;
    }
  // If key is F#
  } else if (tonic == 9) {
    // If octave is F#3
    if (octave == 3) {
      var zero = 280;
      var one = 270;
      var two = 270;
      var three = 260;
      var four = 260;
      var five = 250;
      var six = 240;
      var seven = 240;
      var eight = 230;
      var nine = 230;
      var ten = 220;
      var eleven = 210;
    // If octave is F#4
    } else if (octave == 4) {
      var zero = 210;
      var one = 200;
      var two = 200;
      var three = 190;
      var four = 190;
      var five = 180;
      var six = 170;
      var seven = 170;
      var eight = 160;
      var nine = 160;
      var ten = 150;
      var eleven = 140;
    // If octave is F#5
    } else if (octave == 5) {
      var zero = 140;
      var one = 130;
      var two = 130;
      var three = 120;
      var four = 120;
      var five = 110;
      var six = 100;
      var seven = 100;
      var eight = 90;
      var nine = 90;
      var ten = 80;
      var eleven = 70;
    }
  // If key is G
  } else if (tonic == 10) {
    // If octave is G3
    if (octave == 3) {
      var zero = 270;
      var one = 270;
      var two = 260;
      var three = 260;
      var four = 250;
      var five = 240;
      var six = 240;
      var seven = 230;
      var eight = 230;
      var nine = 220;
      var ten = 210;
      var eleven = 210;
    // If octave is G4
    } else if (octave == 4) {
      var zero = 200;
      var one = 200;
      var two = 190;
      var three = 190;
      var four = 180;
      var five = 170;
      var six = 170;
      var seven = 160;
      var eight = 160;
      var nine = 150;
      var ten = 140;
      var eleven = 140;
    // If octave is G5
    } else if (octave == 5) {
      var zero = 130;
      var one = 130;
      var two = 120;
      var three = 120;
      var four = 110;
      var five = 100;
      var six = 100;
      var seven = 90;
      var eight = 90;
      var nine = 80;
      var ten = 70;
      var eleven = 70;
    }
  } else if (tonic == 11) {
    // If octave is G3
    if (octave == 3) {
      var zero = 270;
      var one = 260;
      var two = 260;
      var three = 250;
      var four = 240;
      var five = 240;
      var six = 230;
      var seven = 230;
      var eight = 220;
      var nine = 210;
      var ten = 210;
      var eleven = 200;
    // If octave is G4
    } else if (octave == 4) {
      var zero = 200;
      var one = 190;
      var two = 190;
      var three = 180;
      var four = 170;
      var five = 170;
      var six = 160;
      var seven = 160;
      var eight = 150;
      var nine = 140;
      var ten = 140;
      var eleven = 130;
    // If octave is G5
    } else if (octave == 5) {
      var zero = 130;
      var one = 120;
      var two = 120;
      var three = 110;
      var four = 100;
      var five = 100;
      var six = 90;
      var seven = 90;
      var eight = 80;
      var nine = 70;
      var ten = 70;
      var eleven = 60;
    }
  }

  var ctx = getContext();
  if (pitch == 0) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, zero);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, zero);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, zero);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, zero);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, zero);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, zero);
    }
  } else if (pitch == 1) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, one);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, one);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, one);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, one);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, one);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, one);
    }
  } else if (pitch == 2) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, two);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, two);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, two);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, two);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, two);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, two);
    }
  } else if (pitch == 3) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, three);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, three);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, three);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, three);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, three);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, three);
    }
  } else if (pitch == 4) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, four);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, four);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, four);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, four);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, four);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, four);
    }
  } else if (pitch == 5) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, five);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, five);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, five);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, five);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, five);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, five);
    }
  } else if (pitch == 6) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, six);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, six);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, six);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, six);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, six);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, six);
    }
  } else if (pitch == 7) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, seven);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, seven);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, seven);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, seven);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, seven);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, seven);
    }
  } else if (pitch == 8) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, eight);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, eight);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, eight);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, eight);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, eight);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, eight);
    }
  } else if (pitch == 9) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, nine);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, nine);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, nine);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, nine);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, nine);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, nine);
    }
  } else if (pitch == 10) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, ten);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, ten);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, ten);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, ten);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, ten);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, ten);
    }
  } else if (pitch == 11) {
    if (noteLength == "whole") {
      drawWholeNote(xaxis, eleven);
    } else if (noteLength == "half") {
      drawHalfNote(xaxis, eleven);
    } else if (noteLength == "quarter") {
      drawQuarterNote(xaxis, eleven);
    } else if (noteLength == "eighth") {
      drawEighthNote(xaxis, eleven);
    } else if (noteLength == "sixteenth") {
      drawSixteenthNote(xaxis, eleven);
    } else if (noteLength == "thirtysecond") {
      drawThirtySecondNote(xaxis, eleven);
    }
  }
}

function drawWholeNote(xaxis, position) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.stroke();
}

function drawHalfNote(xaxis, position) {
  var ctx = getContext();
  drawNoteStaff(xaxis, position);
  drawWholeNote(xaxis, position)
}

function drawQuarterNote(xaxis, position) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  drawNoteStaff(xaxis, position);
}

function drawEighthNote(xaxis, position) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
}

function drawSixteenthNote(xaxis, position) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
}

function drawThirtySecondNote(xaxis, position) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
  drawThreeFlag(xaxis, position);
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
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, underY);
  styleNStroke();
}

function drawTwoFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 20;
  var secondOverX = parseInt(overX) + 15;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, underY);
  styleNStroke();
}

function drawThreeFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 15;
  var secondOverX = parseInt(overX) + 15;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, underY);
  styleNStroke();
}

function styleNStroke() {
  var ctx = getContext();
  ctx.strokeStyle = "#000";
  ctx.stroke();
}