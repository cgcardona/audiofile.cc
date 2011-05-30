/*
* audiofile.cc JavaScript Library v0.1.8
* https://audiofile.cc/
* 
* Copyright 2011, Carlos Cardona 
* Released under the MIT License.
* http://www.opensource.org/licenses/mit-license.php
* 
* Date: Mon. May 30 2011 
*/
(function( $ ){
  var methods = {
    init : function( options ) {  
      // Options go here in the form of an object literal.
      var settings = {
      'tonic'         : '3',
      'bpmeasure'     : '4',
      'count'         : '4',
      'creator'       : 'Unknown',
      'title'         : 'Unknown'
      };
      return this.each(function() { 
        if ( options ) { 
        $.extend( settings, options );
        }
        //console.log(settings.tonic);
        // code goes here to maintain chainability.
        var canvasWidth = $(this).attr("width");
        drawNotes(settings.tonic, settings.bpmeasure, settings.count, settings.title, settings.creator);
        drawStaffLines(canvasWidth);
      });
    },
    stepUp : function(placeholder, note, distance) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) + parseInt(distance);
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepDown : function(placeholder, note, distance) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) - parseInt(distance);
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepUpWhole : function(placeholder, note) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) + 2;
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepDownWhole : function(placeholder, note) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) - 2;
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepUpHalf : function(placeholder, note) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) + 1;
         $(note).attr('data-pitch', afterPitch)
      });
    },
    stepDownHalf : function(placeholder, note) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         var afterPitch = parseInt(beforePitch) - 1;
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepUpMaj : function(placeholder, note, distance) {
      return this.each(function() { 
        // code goes here to maintain chainability.
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
      });
    },
    stepDownMaj : function(placeholder, note, distance) {
      return this.each(function() { 
        // code goes here to maintain chainability.
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
      });
    },
    stepUpMin : function(placeholder, note, distance) {
      return this.each(function() { 
        // code goes here to maintain chainability.
         var beforePitch = $(note).attr('data-pitch');
         if (distance == 0) {
           var afterPitch = parseInt(beforePitch) + 0;
         } else if (distance == 1) {
           var afterPitch = parseInt(beforePitch) + 2;
         } else if (distance == 2) {
           var afterPitch = parseInt(beforePitch) + 3;
         } else if (distance == 3) {
           var afterPitch = parseInt(beforePitch) + 5;
         } else if (distance == 4) {
           var afterPitch = parseInt(beforePitch) + 7;
         } else if (distance == 5) {
           var afterPitch = parseInt(beforePitch) + 8;
         } else if (distance == 6) {
           var afterPitch = parseInt(beforePitch) + 10;
         } 
         $(note).attr('data-pitch', afterPitch);
      });
    },
    stepDownMin : function(placeholder, note, distance) {
      return this.each(function() { 
       // code goes here to maintain chainability.
        var beforePitch = $(note).attr('data-pitch');
        if (distance == 0) {
          var afterPitch = parseInt(beforePitch) - 0;
        } else if (distance == 1) {
          var afterPitch = parseInt(beforePitch) - 2;
        } else if (distance == 2) {
          var afterPitch = parseInt(beforePitch) - 3;
        } else if (distance == 3) {
          var afterPitch = parseInt(beforePitch) - 5;
        } else if (distance == 4) {
          var afterPitch = parseInt(beforePitch) - 7;
        } else if (distance == 5) {
          var afterPitch = parseInt(beforePitch) - 8;
        } else if (distance == 6) {
          var afterPitch = parseInt(beforePitch) - 10;
        } 
        $(note).attr('data-pitch', afterPitch);
      });
    }
  };
  $.fn.audiofile = function(options, method) {
    if ( methods[method] ) {
    return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
    return methods.init.apply( this, arguments );
    } else {
    $.error( 'Method ' +  method + ' does not exist on jQuery.audiofile' );
    }   
  };
})( jQuery );

function getContext() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");
  return ctx;
}

function drawStaffLines(width) {
  var ctx = getContext();
  // console.log("lines");
  // draw staff lines
  for (var x = 140; x < 360; x += 20) {
    ctx.moveTo(30, x);
    ctx.lineTo(width, x);
  }
  styleNStroke();
}

function drawClefs() {
// I am mixing the code for the bass and treble clefs because when the circles
// for the function that was called second were drawn they were overwritting the
// .lineTo()s of the previous function. TODO: Figure out why that is happening
// and separate this out into two functions called bassClef() and trebleClef()
// 3 circles for bass clef
  var ctx = getContext();
  var xaxis = 40;
  var position = 280;
  ctx.beginPath();
  ctx.arc(xaxis, position, 5, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  var xaxis = 80;
  var position = 273;
  ctx.beginPath();
  ctx.arc(xaxis, position, 3, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  var xaxis = 80;
  var position = 287;
  ctx.beginPath();
  ctx.arc(xaxis, position, 3, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  // circle for treble clef
  var ctx = getContext();
  var xaxis = 50;
  var position = 240;
  ctx.beginPath();
  ctx.arc(xaxis, position, 3, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  
  // 2 curves for bass clef
  ctx.moveTo(40, 280);
  var controlX = 45;
  var controlY = 260;
  var endX = 55;
  var endY = 260;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(70, 280);
  var controlX = 65;
  var controlY = 260;
  var endX = 55;
  var endY = 260;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(40, 320);
  var controlX = 75;
  var controlY = 300;
  var endX = 70;
  var endY = 280;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  // 11 curves for bass clef
  ctx.moveTo(60, 210);
  var controlX = 50;
  var controlY = 210;
  var endX = 50;
  var endY = 200;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(50, 200);
  var controlX = 50;
  var controlY = 180;
  var endX = 60;
  var endY = 180;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(70, 200);
  var controlX = 70;
  var controlY = 180;
  var endX = 60;
  var endY = 180;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(60, 220);
  var controlX = 70;
  var controlY = 220;
  var endX = 70;
  var endY = 200;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(60, 220);
  var controlX = 40;
  var controlY = 220;
  var endX = 40;
  var endY = 200;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(40, 200);
  var controlX = 43;
  var controlY = 185;
  var endX = 50;
  var endY = 180;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(50, 180);
  var controlX = 65;
  var controlY = 160;
  var endX = 65;
  var endY = 160;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(65, 160);
  var controlX = 70;
  var controlY = 140;
  var endX = 65;
  var endY = 140;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(68, 140);
  var controlX = 65;
  var controlY = 125;
  var endX = 60;
  var endY = 120;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(48, 140);
  var controlX = 53;
  var controlY = 125;
  var endX = 60;
  var endY = 120;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(48, 140);
  var controlX = 70;
  var controlY = 240;
  var endX = 70;
  var endY = 240;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(70, 240);
  var controlX = 65;
  var controlY = 250;
  var endX = 60;
  var endY = 250;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(50, 240);
  var controlX = 55;
  var controlY = 250;
  var endX = 60;
  var endY = 250;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

}

function clefTip() {
  var ctx = getContext();
  ctx.moveTo(0, 240);
  var controlX = 25;
  var controlY = 210;
  var endX = 10;
  var endY = 170;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  //ctx.lineWidth = 1;
  ctx.moveTo(10, 170);
  var controlX = -5;
  var controlY = 140;
  var endX = 30;
  var endY = 140;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var ctx = getContext();
  ctx.moveTo(0, 240);
  var controlX = 25;
  var controlY = 270;
  var endX = 10;
  var endY = 310;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(10, 310);
  var controlX = -5;
  var controlY = 340;
  var endX = 30;
  var endY = 340;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  ctx.moveTo(30, 140);
  ctx.lineTo(30, 340);
}

function drawNotes(tonic, bpmeasure, count, songtitle, creator) {
  var ctx = getContext();
  drawClefs();
  clefTip();
  setTheKey(tonic);
  setTheTimeSignature(bpmeasure, count, songtitle, creator);
  var xaxis = 230;
  $("div[data-measure]").each(function(index) {
    // console.log("measure: " + index);

    $(this).find("div[data-note]").each(function(index) {
      var noteLength = $(this).attr("data-note");
      var pitch = $(this).attr("data-pitch");
      var octave = $(this).attr("data-octave");
      var lstnt = $(this).attr("data-lastnote");
      if ($(this).hasClass("sharp")) {
        var isSharp = "true";
        drawNote(tonic, pitch, noteLength, octave, xaxis, isSharp);
      } else {
        drawNote(tonic, pitch, noteLength, octave, xaxis);
      }
      // console.log("pitch: " + pitch);
      // console.log("length: " + noteLength); 
      // console.log("octave: " + octave); 
      styleNStroke();
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

function drawNote(tonic, pitch, noteLength, octave, xaxis, sharp) {
  // If key is A
  if (tonic == 0) {
    // If octave is A3
    if (octave == 3) {
      var zero = 260; // A
      var one = 260; // A sharp
      var oneSharp = "true";
      var two = 250; // B
      var three = 240; // C natural
      var threeNatural = "true";
      var four = 240; // C sharp
      var five = 230; // D
      var six = 230; // D sharp
      var sixSharp = "true";
      var seven = 220; // E
      var eight = 210; // F natural
      var eightNatural = "true";
      var nine = 210; // F sharp
      var ten = 200; // G natural
      var tenNatural = "true";
      var eleven = 200; // G sharp
    // If octave is A4
    } else if (octave == 4) {
      var zero = 190; // A
      var one = 190; // A sharp
      var oneSharp = "true";
      var two = 180; // B
      var three = 170; // C natural
      var threeNatural = "true";
      var four = 170; // C sharp
      var five = 160; // D
      var six = 160; // D sharp
      var sixSharp = "true";
      var seven = 150; // E
      var eight = 140; // F natural
      var eightNatural = "true";
      var nine = 140; // F sharp
      var ten = 130; // G natural
      var tenNatural = "true";
      var eleven = 130; // G sharp
    // If octave is A5
    } else if (octave == 5) {
      var zero = 120; // A 
      var one = 120; // A sharp
      var oneSharp = "true";
      var two = 110; // B
      var three = 100; // C natural
      var threeNatural = "true";
      var four = 100; // C sharp
      var five = 90; // D
      var six = 90; // D sharp
      var sixSharp = "true";
      var seven = 80; // E
      var eight = 70; // F natural
      var eightNatural = "true";
      var nine = 70; // F sharp
      var ten = 60; // G natural
      var tenNatural = "true";
      var eleven = 60; // G sharp
    }
  // If key is A#
  } else if (tonic == 1) {
    // If octave is A#3
    if (octave == 3) {
    // Still a bit unclear on how to structure A#'s key signature
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
      var zero = 250; // B
      var one = 240; // C natural 
      var oneNatural = "true";
      var two = 240; // C sharp 
      var three = 230; // D natural
      var threeNatural = "true";
      var four = 230; // D sharp
      var five = 220; // E
      var six = 210; // F natural
      var sixNatural = "true";
      var seven = 210; // F sharp
      var eight = 200; // G natural
      var eightNatural = "true";
      var nine = 200; // G sharp
      var ten = 190; // A natural
      var tenNatural = "true";
      var eleven = 190; // A sharp
    // If octave is B4
    } else if (octave == 4) {
      var zero = 180; // B
      var one = 170; // C natural
      var oneNatural = "true";
      var two = 170; // C sharp
      var three = 160; // D natural
      var threeNatural = "true";
      var four = 160; // D sharp
      var five = 150; // E
      var six = 140; // F Natural
      var sixNatural = "true";
      var seven = 140; // F sharp
      var eight = 130; // G natural
      var eightNatural = "true";
      var nine = 130; // G sharp
      var ten = 120; // A natural
      var tenNatural = "true";
      var eleven = 120; // A sharp
    // If octave is B5
    } else if (octave == 5) {
      var zero = 110; // B
      var one = 100; // C natural
      var oneNatural = "true";
      var two = 100; // C sharp
      var three = 90; // D natural
      var threeNatural = "true";
      var four = 90; // D sharp
      var five = 80; // E
      var six = 70; // F natural
      var sixNatural = "true";
      var seven = 70; // F sharp
      var eight = 60; // G natural
      var eightNatural = "true";
      var nine = 60; // G sharp
      var ten = 50; // A natural
      var tenNatural = "true";
      var eleven = 50; // A sharp
    }
  // If key is C
  } else if (tonic == 3) {
    // If octave is C3
    if (octave == 3) {
      var zero = 310; // C
      var one = 310; // C sharp
      var oneSharp = "true";
      var two = 300; // D
      var three = 300; // D sharp
      var threeSharp = "true";
      var four = 290; // E
      var five = 280; // F
      var six = 280; // F sharp
      var sixSharp = "true";
      var seven = 270; // G
      var eight = 270; // G sharp
      var eightSharp = "true";
      var nine = 260; // A
      var ten = 260; // A sharp
      var tenSharp = "true";
      var eleven = 250; // B
    // If octave is C4
    } else if (octave == 4) {
      var zero = 240; // C
      var one = 240; // C sharp
      var oneSharp = "true";
      var two = 230; // D
      var three = 230; // D sharp
      var threeSharp = "true";
      var four = 220; // E
      var five = 210; // F
      var six = 210; // F sharp
      var sixSharp = "true";
      var seven = 200; // G
      var eight = 200; // G sharp
      var eightSharp = "true";
      var nine = 190; // A
      var ten = 190; // A sharp
      var tenSharp = "true";
      var eleven = 180; // B
    // If octave is C5
    } else if (octave == 5) {
      var zero = 170; // C
      var one = 170; // C sharp
      var oneSharp = "true";
      var two = 160; // D
      var three = 160; // D sharp
      var threeSharp = "true";
      var four = 150; // E
      var five = 140; // F
      var six = 140; // F sharp
      var sixSharp = "true";
      var seven = 130; // G
      var eight = 130; // G sharp
      var eightSharp = "true";
      var nine = 120; // A
      var ten = 120; // A sharp
      var tenSharp = "true";
      var eleven = 110; // B
    }
  // If key is C#
  } else if (tonic == 4) {
    // If octave is C#3
    // Still a bit unclear on how to structure C#'s key signature
    if (octave == 3) {
      var zero = 310; // C sharp
      var one = 300; // D natural
      var oneNatural = "true";
      var two = 300; // D sharp
      var three = 290; // E sharp
      var four = 280; // F natural
      var fourNatural = "true";
      var five = 280; // F sharp
      var six = 270; // G natural
      var sixNatural = "true";
      var seven = 270; // G sharp
      var eight = 260; // A natural
      var eightNatural = "true";
      var nine = 260; // A sharp
      var ten = 250; // B sharp
      var eleven = 240; // C natural
      var elevenNatural = "true";
    // If octave is C#4
    } else if (octave == 4) {
      var zero = 240;
      var one = 230;
      var oneNatural = "true";
      var two = 230;
      var three = 220;
      var four = 210;
      var fourNatural = "true";
      var five = 210;
      var six = 200;
      var sixNatural = "true";
      var seven = 200;
      var eight = 190;
      var eightNatural = "true";
      var nine = 190; // A sharp
      var ten = 180;
      var eleven = 170;
      var elevenNatural = "true";
    // If octave is C#5
    } else if (octave == 5) {
      var zero = 170;
      var one = 160;
      var oneNatural = "true";
      var two = 160;
      var three = 150;
      var four = 140;
      var fourNatural = "true";
      var five = 140;
      var six = 130;
      var sixNatural = "true";
      var seven = 130;
      var eight = 120;
      var eightNatural = "true";
      var nine = 120;
      var ten = 110;
      var eleven = 100;
      var elevenNatural = "true";
    }
  // If key is D
  } else if (tonic == 5) {
    // If octave is D3
    if (octave == 3) {
      var zero = 300; // D
      var one = 300; // D sharp
      var oneSharp = "true";
      var two = 290; // E
      var three = 280; // F natural 
      var threeNatural = "true";
      var four = 280; // F sharp
      var five = 270; // G 
      var six = 270; // G sharp
      var sixSharp = "true";
      var seven = 260; // A
      var eight = 260; // A sharp
      var eightSharp = "true";
      var nine = 250; // B
      var ten = 240; // C natural
      var tenNatural = "true";
      var eleven = 240; // C sharp
    // If octave is D4
    } else if (octave == 4) {
      var zero = 230; // D
      var one = 230; // D sharp
      var oneSharp = "true";
      var two = 220; // E
      var three = 210; // F natural
      var threeNatural = "true";
      var four = 210; // F sharp
      var five = 200; // G
      var six = 200; // G sharp
      var sixSharp = "true";
      var seven = 190; // A
      var eight = 190; // A sharp
      var eightSharp = "true";
      var nine = 180; // B
      var ten = 170; // C natural
      var tenNatural = "true";
      var eleven = 170; // C sharp
    // If octave is D5
    } else if (octave == 5) {
      var zero = 160; // D
      var one = 160;  // D sharp
      var oneSharp = "true";
      var two = 150; // E
      var three = 140; // F natural
      var threeNatural = "true";
      var four = 140; // F sharp
      var five = 130; // G
      var six = 130; // G sharp
      var sixSharp = "true";
      var seven = 120; // A
      var eight = 120; // A sharp
      var eightSharp = "true";
      var nine = 110; // B
      var ten = 100; // C natural
      var tenNatural = "true";
      var eleven = 100; // C sharp
    }
  // If key is D#
  } else if (tonic == 6) {
    // If octave is D#3
    // Still a bit unclear on how to structure D#'s key signature
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
      var zero = 290; // E
      var one = 280; // F natural
      var oneNatural = "true";
      var two = 280; // F sharp
      var three = 270; // G natural
      var threeNatural = "true";
      var four = 270; // G sharp
      var five = 260; // A 
      var six = 260; // A sharp
      var sixSharp = "true";
      var seven = 250; // B
      var eight = 240; // C natural
      var eightNatural = "true";
      var nine = 240; // C sharp
      var ten = 230; // D natural
      var tenNatural = "true";
      var eleven = 230; // D sharp
    // If octave is E4
    } else if (octave == 4) {
      var zero = 220; // E
      var one = 210; // F natural
      var onenatural = "true";
      var two = 210; // F sharp
      var three = 200; // G natural
      var threenatural = "true";
      var four = 200; // G sharp
      var five = 190; // A
      var six = 190; // A sharp
      var sixSharp = "true";
      var seven = 180; // B
      var eight = 170; // C natural
      var eightnatural = "true";
      var nine = 170; // C sharp
      var ten = 160; // D natural
      var tennatural = "true";
      var eleven = 160; // D sharp
    // If octave is E5
    } else if (octave == 5) {
      var zero = 150; // E
      var one = 140; // F natural
      var onenatural = "true";
      var two = 140; // F sharp
      var three = 130; // G natural
      var threenatural = "true";
      var four = 130; // G sharp
      var five = 120; // A
      var six = 120; // A sharp
      var sixSharp = "true";
      var seven = 110; // B
      var eight = 100; // C natural
      var eightnatural = "true";
      var nine = 100; // C sharp
      var ten = 90; // D natural
      var tennatural = "true";
      var eleven = 90; // D sharp
    }
  // If key is F
  } else if (tonic == 8) {
    // If octave is F3
    // Still a bit unclear on how to structure F's key signature
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
    // Need to confirm what value E should have in all three octaves of tonic 9.
    if (octave == 3) {
      var zero = 280; // F sharp
      var one = 270; // G natural
      var oneNatural = "true";
      var two = 270; // G sharp
      var three = 260; // A natural
      var threeNatural = "true";
      var four = 260; // A sharp
      var five = 250; // B
      var six = 240; // C natural
      var sixNatural = "true";
      var seven = 240; // C sharp
      var eight = 230; // D natural
      var eightNatural = "true";
      var nine = 230; // D sharp
      var ten = 220; // E 
      var eleven = 210; // F natural
      var elevenNatural = "true";
    // If octave is F#4
    } else if (octave == 4) {
      var zero = 210 //  F sharp;
      var one = 200; // G natural
      var oneNatural = "true";
      var two = 200; // G sharp
      var three = 190; // A natural
      var threeNatural = "true";
      var four = 190; // A sharp
      var five = 180; // B
      var six = 170; // C natural
      var sixNatural = "true";
      var seven = 170; // C sharp
      var eight = 160; // D natural
      var eightNatural = "true";
      var nine = 160; // D sharp
      var ten = 150; // E
      var eleven = 140; // F natural
      var elevenNatural = "true";
    // If octave is F#5
    } else if (octave == 5) {
      var zero = 140; // F sharp
      var one = 130; // G natural
      var oneNatural = "true";
      var two = 130; // G sharp
      var three = 120; // A natural
      var threeNatural = "true"; 
      var four = 120; // A sharp
      var five = 110; // B
      var six = 100; // C natural
      var sixNatural = "true";
      var seven = 100; // C sharp
      var eight = 90; // D natural
      var eightNatural = "true";
      var nine = 90; // D sharp
      var ten = 80; // E
      var eleven = 70; // F natural
      var elevenNatural = "true";
    }
  // If key is G
  } else if (tonic == 10) {
    // If octave is G3
    if (octave == 3) {
      var zero = 270; // G
      var one = 270; // G sharp
      var oneSharp = "true";
      var two = 260; // A
      var three = 260; // A sharp
      var threeSharp = "true";
      var four = 250; // B
      var five = 240; // C
      var six = 240; // C sharp
      var sixSharp = "true";
      var seven = 230; // D
      var eight = 230; // D sharp
      var eightSharp = "true";
      var nine = 220; // E
      var ten = 210; // F natural
      var tenNatural = "true";
      var eleven = 210; // F sharp
    // If octave is G4
    } else if (octave == 4) {
      var zero = 200; // G
      var one = 200; // G sharp
      var oneSharp = "true";
      var two = 190; // A
      var three = 190; // A sharp
      var threeSharp = "true";
      var four = 180; // B
      var five = 170; // C
      var six = 170; // C sharp
      var sixSharp = "true";
      var seven = 160; // D
      var eight = 160; // D sharp
      var eightSharp = "true";
      var nine = 150; // E
      var ten = 140; // F natural
      var tenNatural = "true";
      var eleven = 140; // F sharp
    // If octave is G5
    } else if (octave == 5) {
      var zero = 130; // G
      var one = 130; // G sharp
      var oneSharp = "true";
      var two = 120; // A
      var three = 120; // A sharp
      var threeSharp = "true";
      var four = 110; // B
      var five = 100; // C 
      var six = 100; // C sharp
      var sixSharp = "true";
      var seven = 90; // D
      var eight = 90; // D sharp
      var eightSharp = "true";
      var nine = 80; // E
      var ten = 70; // F natural
      var tenNatural = "true";
      var eleven = 70; // F sharp
    }
  } else if (tonic == 11) {
    // If octave is G#3
    // Still a bit unclear on how to structure G#'s key signature
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
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawWholeNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawHalfNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawQuarterNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawEighthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawSixteenthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined") {
        drawThirtySecondNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, zero, sharp);
      }
    }
  } else if (pitch == 1) {
    if (noteLength == "whole") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawWholeNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, one, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawHalfNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, one, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawQuarterNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, one, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawEighthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawSixteenthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined") {
        drawThirtySecondNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, one, sharp);
      }
    }
  } else if (pitch == 2) {
    if (noteLength == "whole") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawWholeNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, two, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawHalfNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, two, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawQuarterNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, two, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawEighthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawSixteenthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined") {
        drawThirtySecondNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, two, sharp);
      }
    }
  } else if (pitch == 3) {
    if (noteLength == "whole") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawWholeNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, three, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawHalfNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, three, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawQuarterNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, three, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawEighthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawSixteenthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined") {
        drawThirtySecondNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, three, sharp);
      }
    }
  } else if (pitch == 4) {
    if (noteLength == "whole") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawWholeNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, four, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawHalfNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, four, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawQuarterNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, four, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawEighthNote(xaxis, four);
      }  else if (fourNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawSixteenthNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, four, sharp);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined") {
        drawThirtySecondNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, four, sharp);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, four, sharp);
      }
    }
  } else if (pitch == 5) {
    if (noteLength == "whole") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawWholeNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, five, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawHalfNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, five, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawQuarterNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, five, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawEighthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawSixteenthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined") {
        drawThirtySecondNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, five, sharp);
      }
    }
  } else if (pitch == 6) {
    if (noteLength == "whole") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawWholeNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, six, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawHalfNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, six, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawQuarterNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, six, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawEighthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawSixteenthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined") {
        drawThirtySecondNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, six, sharp);
      }
    }
  } else if (pitch == 7) {
    if (noteLength == "whole") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawWholeNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawHalfNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawQuarterNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawEighthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawSixteenthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined") {
        drawThirtySecondNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, seven, sharp);
      }
    }
  } else if (pitch == 8) {
    if (noteLength == "whole") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawWholeNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawHalfNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawQuarterNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawEighthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawSixteenthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined") {
        drawThirtySecondNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, eight, sharp);
      }
    }
  } else if (pitch == 9) {
    if (noteLength == "whole") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawWholeNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawHalfNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawQuarterNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawEighthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawSixteenthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined") {
        drawThirtySecondNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, nine, sharp);
      }
    }
  } else if (pitch == 10) {
    if (noteLength == "whole") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawWholeNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawHalfNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawQuarterNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawEighthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawSixteenthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined") {
        drawThirtySecondNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, ten, sharp);
      }
    }
  } else if (pitch == 11) {
    if (noteLength == "whole") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawWholeNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawHalfNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawQuarterNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawEighthNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawSixteenthNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, eleven, sharp);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined") {
        drawThirtySecondNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, eleven, sharp);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
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
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawHalfNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawWholeNote(xaxis, position)
  drawNoteStaff(xaxis, position);
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawQuarterNote(xaxis, position, sharp) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  drawNoteStaff(xaxis, position);
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawEighthNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawSixteenthNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawThirtySecondNote(xaxis, position, sharp) {
  var ctx = getContext();
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
  drawThreeFlag(xaxis, position);
  if (sharp == "sharp") {
    sharpNote(xaxis, position);
  } else if (sharp == "natural") {
    naturalNote(xaxis, position);
  }
}

function drawNoteStaff(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 25;
  ctx.moveTo(overX, underY);
  ctx.lineTo(overX, position);
}

function drawOneFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 25;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
}

function drawTwoFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 20;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
}

function drawThreeFlag(xaxis, position) {
  var ctx = getContext();
  var overX = parseInt(xaxis) + 8;
  var underY = parseInt(position) - 15;
  var secondOverX = parseInt(overX) + 15;
  var secondUnderY = parseInt(underY) + 3;
  ctx.moveTo(overX, underY);
  ctx.lineTo(secondOverX, secondUnderY);
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
  var yCoord1b = parseInt(yCoord2a) - 18;
  var yCoord2b = parseInt(yCoord1b) + 15;
  ctx.moveTo(xCoord1b, yCoord1b);
  ctx.lineTo(xCoord1b, yCoord2b);

  var xCoord1c = parseInt(xCoord1b) - 10;
  var yCoord1c = parseInt(yCoord2b) - 7;
  var xCoord2c = parseInt(xCoord1c) + 15;
  var yCoord2c = parseInt(yCoord2b) - 10;
  ctx.moveTo(xCoord1c, yCoord1c);
  ctx.lineTo(xCoord2c, yCoord2c);

  var xCoord1d = parseInt(xCoord1c) + 0;
  var yCoord1d = parseInt(yCoord1c) + 6;
  var xCoord2d = parseInt(xCoord1d) + 15;
  var yCoord2d = parseInt(yCoord2c) + 6;
  ctx.moveTo(xCoord1d, yCoord1d);
  ctx.lineTo(xCoord2d, yCoord2d);
  styleNStroke();
}

function naturalNote(xaxis, position) {
  var ctx = getContext();
  var xCoord1a = parseInt(xaxis) - 17;
  var yCoord1a = parseInt(position) - 8;
  var yCoord2a = parseInt(yCoord1a) + 15;
  ctx.moveTo(xCoord1a, yCoord1a);
  ctx.lineTo(xCoord1a, yCoord2a);

  var xCoord1b = parseInt(xCoord1a) + 5;
  var yCoord1b = parseInt(yCoord2a) - 12;
  var yCoord2b = parseInt(yCoord1b) + 15;
  ctx.moveTo(xCoord1b, yCoord1b);
  ctx.lineTo(xCoord1b, yCoord2b);

  var xCoord1c = parseInt(xCoord1b) - 6;
  var yCoord1c = parseInt(yCoord2b) - 12;
  var xCoord2c = parseInt(xCoord1c) + 5;
  var yCoord2c = parseInt(yCoord2b) - 14;
  ctx.moveTo(xCoord1c, yCoord1c);
  ctx.lineTo(xCoord2c, yCoord2c);

  var xCoord1d = parseInt(xCoord1c);
  var yCoord1d = parseInt(yCoord2c) + 12;
  var xCoord2d = parseInt(xCoord1c) + 5;
  var yCoord2d = parseInt(yCoord2c) + 8;
  ctx.moveTo(xCoord1d, yCoord1d);
  ctx.lineTo(xCoord2d, yCoord2d);
  styleNStroke();
}

  //Start key signature drawing functions
  //setTheKey() gets the tonic and then draws the appropriate sharps on the
  //staffs. Currently only sharps are supported. In the future the plan is to
  //introduce tonics -1 - -12 which will be flat keys.
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

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function fSharp(xaxis, position) {
    var xaxis = 115;
    var position = 140;
    sharpNote(xaxis, position);
    var xaxis = 115;
    var position = 280;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function cSharp(xaxis, position) {
    var xaxis = 125;
    var position = 170;
    sharpNote(xaxis, position);
    var xaxis = 125;
    var position = 310;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function gSharp(xaxis, position) {
    var xaxis = 135;
    var position = 130;
    sharpNote(xaxis, position);
    var xaxis = 135;
    var position = 270;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function dSharp(xaxis, position) {
    var xaxis = 145;
    var position = 160;
    sharpNote(xaxis, position);
    var xaxis = 145;
    var position = 300;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function aSharp(xaxis, position) {
    var xaxis = 155;
    var position = 190;
    sharpNote(xaxis, position);
    var xaxis = 155;
    var position = 330;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function eSharp(xaxis, position) {
    var xaxis = 165;
    var position = 150;
    sharpNote(xaxis, position);
    var xaxis = 165;
    var position = 290;
    sharpNote(xaxis, position);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function bSharp(xaxis, position) {
    var xaxis = 175;
    var position = 180;
    sharpNote(xaxis, position);
    var xaxis = 175;
    var position = 320;
    sharpNote(xaxis, position);
  }
//End key signature drawing functions
}

function  setTheTimeSignature(bpmeasure, count, songtitle, creator) {
  var ctx = getContext();
  var x = 180;
  var y = 175;
  ctx.font = "30pt Helvetica-Light";
  ctx.fillText(bpmeasure, x, y);
  
  var x = 180;
  var y = 295;
  ctx.fillText(bpmeasure, x, y);
  
  var x = 180;
  var y = 215;
  ctx.fillText(count, x, y);

  var x = 180;
  var y = 335;
  ctx.fillText(count, x, y);

  var x = 40;
  var y = 365;
  ctx.font = "15pt Helvetica-Light";
  ctx.fillText("Title: " + songtitle, x, y);

  var x = 40;
  var y = 385;
  ctx.font = "15pt Helvetica-Light";
  ctx.fillText("By: " + creator, x, y);
}
