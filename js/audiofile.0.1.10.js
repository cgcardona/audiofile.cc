/*
* audiofile.cc JavaScript Library v0.1.10
* https://audiofile.cc/
* 
* Copyright 2011, Carlos Cardona 
* Released under the MIT License.
* http://www.opensource.org/licenses/mit-license.php
* 
* Date: Wed. June 1 2011 
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
        drawStaffLines(canvasWidth);
        drawClefs();
        clefTip();
        setTheKey(settings.tonic);
        setTheTimeSignature(settings.bpmeasure, settings.count, settings.title, settings.creator);
        drawNotes(settings.tonic, settings.bpmeasure, settings.count);
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
           var afterPitch = parseInt(beforePitch);
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
           var afterPitch = parseInt(beforePitch);
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
           var afterPitch = parseInt(beforePitch);
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
          var afterPitch = parseInt(beforePitch);
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

// Start of "CONSTANTS"
var POSITION_OF_E5_STAFF_LINE = 140;
var POSITION_OF_G3_STAFF_LINE = parseInt(POSITION_OF_E5_STAFF_LINE) + 200;
var INTERMEDIATE_LINE_DISTANCE = 20;
var X_AXIS_START_OF_STAFF_LINES = 30;
// End of "CONSTANTS"

function getContext() {
  var canvas = document.getElementById("example");
  var ctx = canvas.getContext("2d");
  return ctx;
}

function drawStaffLines(width) {
  var ctx = getContext();
  // console.log("lines");
  // draw staff lines
  for (var y = POSITION_OF_E5_STAFF_LINE; y <= POSITION_OF_G3_STAFF_LINE; y += INTERMEDIATE_LINE_DISTANCE) {
    ctx.moveTo(X_AXIS_START_OF_STAFF_LINES, y);
    ctx.lineTo(width, y);
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
  var centerXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var centerYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
  var radius = 5;
  ctx.beginPath();
  ctx.arc(centerXAxis, centerYAxis, radius, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  var centerXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 50;
  var centerYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 133;
  var radius = 3;
  ctx.beginPath();
  ctx.arc(centerXAxis, centerYAxis, radius, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  var centerXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 50;
  var centerYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 147;
  var radius = 3;
  ctx.beginPath();
  ctx.arc(centerXAxis, centerYAxis, radius, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();

  // circle for treble clef
  var ctx = getContext();
  var centerXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var centerYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  var radius = 3;
  ctx.beginPath();
  ctx.arc(centerXAxis, centerYAxis, radius, 0, Math.PI*2, true); 
  ctx.closePath();
  ctx.fill();
  
  // 2 curves for bass clef
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 15;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 120;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 25;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 120;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 120;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 25;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 120;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 180;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 45;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 160;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  // 11 curves for bass clef
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 70;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 70;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 80;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 80;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 80;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 80;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 13;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 45;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 20;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 20;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 20;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE);
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 38;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) - 15;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) - 20;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 18;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 23;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) - 15;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) - 20;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 18;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 40;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 110;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 110;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 20;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 25;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 110;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) + 30;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 110;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

}

function clefTip() {
  var ctx = getContext();
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) - 30;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 5;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 20;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 30;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) - 20;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 30;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE);
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES);
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) - 30;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 100;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 5;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 130;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 20;
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 170;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) - 20;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 170;
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(X_AXIS_START_OF_STAFF_LINES) - 35;
  var controlY = parseInt(POSITION_OF_E5_STAFF_LINE) + 200;
  var endX = parseInt(X_AXIS_START_OF_STAFF_LINES);
  var endY = parseInt(POSITION_OF_E5_STAFF_LINE) + 200;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES);
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
  ctx.moveTo(tempXAxis, tempYAxis);
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES);
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 200;
  ctx.lineTo(tempXAxis, tempYAxis);
}

function drawNotes(tonic, bpmeasure, count, songtitle, creator) {
  var ctx = getContext();
  var xaxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 200;
  $("div[data-measure]").each(function(index) {
    // console.log("measure: " + index);

    $(this).find("div[data-note]").each(function(index) {
    // take all the draw note code that comes before the if/elses that call the
    // note drawing functions and create a new function that I call right here
    // that gets the note's yaxis from it's pitch and octave and returns that
    // value to be assigned to the note object.
    //
      var tempNote = {
        'noteLength': $(this).attr("data-note"),
        'pitch'     : $(this).attr("data-pitch"),
        'octave'    : $(this).attr("data-octave")
      }
    // Also need to create the note drawing methods on the object that will be
    // called right here I think.  ex: tempNote.drawQuarterNote();
      var lstnt = $(this).attr("data-lastnote");
      // console.log(tempNote);
      // I don't think this code is being used any more but I'm going to keep it here in case I need to bring back the functionality
      if ($(this).hasClass("sharp")) {
        var isSharp = "true";
        drawNote(tonic, tempNote.pitch, tempNote.noteLength, tempNote.octave, xaxis, isSharp);
      } else {
        drawNote(tonic, tempNote.pitch, tempNote.noteLength, tempNote.octave, xaxis);
      }
      // console.log("pitch: " + pitch);
      // console.log("length: " + noteLength); 
      // console.log("octave: " + octave); 
      styleNStroke();
      // This if/else statement figures out if this is the last note of a chord
      // or note. There must be a more elegant way to do this
      if ($(this).parent("div[data-chord]").length && !lstnt) {
        xaxis = xaxis;
      } else if ($(this).parent("div[data-chord]").length && lstnt == "true") {
        xaxis += 50;
      } else {
        xaxis += 50;
      }
    });
    var measureLine = parseInt(xaxis) - 25;
    ctx.moveTo(measureLine, POSITION_OF_E5_STAFF_LINE);
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 80;
    ctx.lineTo(measureLine, tempYAxis);
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 120;
    ctx.moveTo(measureLine, tempYAxis);
    ctx.lineTo(measureLine, POSITION_OF_G3_STAFF_LINE);
    styleNStroke();
  });
}

  // Not using this. I just liked the selector and didn't want to toss it just yet :P
  // var firstNote = $("div[data-measure^='0'] div:nth-child(1)").attr("data-pitch");

function drawNote(tonic, pitch, noteLength, octave, xaxis, sharp) {
  if (tonic == -7) {
  // If key is C flat
    if (octave == 3) {
    // If octave is Cflat3
      var zero = 310; // C flat 
      var one = 310; // C natural
      var oneNatural = "true";
      var two = 300; // D flat
      var three = 300; // D natural
      var threeNatural = "true";
      var four = 290; // E flat
      var five = 290; // E natural
      var fiveNatural = "true";
      var fiveSharp = "false";
      var six = 280; // F
      var seven = 270; // G flat 
      var eight = 270; // G natural
      var eightNatural = "true";
      var nine = 260; // A flat
      var ten = 260; // A natural
      var tenNatural = "true";
      var eleven = 250; // B flat  
    } else if (octave == 4) {
    // If octave is Cflat4
      var zero = 240; // C flat 
      var one = 240; // C natural
      var oneNatural = "true";
      var two = 230; // D flat
      var three = 230; // D natural
      var threeNatural = "true";
      var four = 220; // E flat
      var five = 220; // E  natural
      var fiveNatural = "true";
      var six = 210; // F
      var seven = 200; // G flat 
      var eight = 200; // G natural
      var eightNatural = "true";
      var nine = 190; // A flat
      var ten = 190; // A natural
      var tenNatural = "true";
      var eleven = 180; // B
    } else if (octave == 5) {
    // If octave is Cflat5
      var zero = 170; // C flat
      var one = 170; // C natural
      var oneNatural = "true";
      var two = 160; // D flat
      var three = 160; // D natural
      var threeNatural = "true";
      var four = 150; // E flat
      var five = 150; // E natural
      var fiveNatural = "true";
      var six = 140; // F
      var seven = 130; // G flat
      var eight = 130; // G natural
      var eightNatural = "true";
      var nine = 120; // A flat
      var ten = 120; // A natural
      var tenNatural = "true";
      var eleven = 110; // B flat
    }
  
  } else if (tonic == -6) {
  // If key is G flat
    if (octave == 3) {
    // If octave is Gflat3
      var zero = 270; // G flat  
      var one = 270; // G natural
      var oneNatural = "true";
      var two = 260; // A flat
      var three = 260; // A natural
      var threeNatural = "true";
      var four = 250; // B flat
      var five = 250; // B natural
      var fiveNatural = "true";
      var fiveSharp = "false";
      var six = 240; // C
      var seven = 230; // D flat 
      var eight = 230; // D
      var eightNatural = "true";
      var nine = 220; // E flat
      var ten = 220; // E
      var tenNatural = "true";
      var eleven = 210; // F 
    } else if (octave == 4) {
    // If octave is Gflat4
      var zero = 200; // G flat 
      var one = 200; // G natural
      var oneNatural = "true";
      var two = 190; // A flat
      var three = 190; // A natural
      var threeNatural = "true";
      var four = 180; // B flat
      var five = 180; // B natural
      var fiveNatural = "true";
      var six = 170; // C
      var seven = 160; // D flat 
      var eight = 160; // D natural
      var eightNatural = "true";
      var nine = 150; // E flat
      var ten = 150; // E natural
      var tenNatural = "true";
      var eleven = 140; // F
    } else if (octave == 5) {
    // If octave is Gflat5
      var zero = 130; // G flat 
      var one = 130; // G natural
      var oneNatural = "true";
      var two = 120; // A flat
      var three = 120; // A natural
      var threeNatural = "true";
      var four = 110; // B flat
      var five = 110; // B natural
      var fiveNatural = "true";
      var six = 100; // C
      var seven = 90; // D flat
      var eight = 90; // D natural
      var eightNatural = "true";
      var nine = 80; // E flat
      var ten = 80; // E natural
      var tenNatural = "true";
      var eleven = 70; // F
    }
  } else if (tonic == -5) {
  // If key is D flat
    if (octave == 3) {
    // If octave is Dflat3
      var zero = 300; // D flat 
      var one = 300; // D natural
      var oneNatural = "true";
      var two = 290; // E flat
      var three = 290; // E natural
      var threeNatural = "true";
      var four = 280; // F
      var five = 270; // G flat
      var six = 270; // G natural
      var sixNatural = "true";
      var seven = 260; // A flat
      var eight = 260; // A natural
      var eightNatural = "true";
      var nine = 250; // B flat
      var ten = 250; // B natural
      var tenNatural = "true";
      var eleven = 240; // C
    } else if (octave == 4) {
    // If octave is Dflat4
      var zero = 230; // D flat 
      var one = 230; // D natural
      var oneNatural = "true";
      var two = 220; // E flat
      var three = 220; // E natural
      var threeNatural = "true";
      var four = 210; // F
      var five = 200; // G flat
      var six = 200; // G natural
      var sixNatural = "true";
      var seven = 190; // A flat
      var eight = 190; // A natural
      var eightNatural = "true";
      var nine = 180; // B flat
      var ten = 180; // B natural
      var tenNatural = "true";
      var eleven = 170; // C
    } else if (octave == 5) {
    // If octave is Dflat5
      var zero = 160; // D flat 
      var one = 160; // D natural
      var oneNatural = "true";
      var two = 150; // E flat
      var three = 150; // E natural
      var threeNatural = "true";
      var four = 140; // F
      var five = 130; // G flat
      var six = 130; // G natural
      var sixNatural = "true";
      var seven = 120; // A flat
      var eight = 120; // A natural
      var eightNatural = "true";
      var nine = 110; // B flat
      var ten = 110; // B natural
      var tenNatural = "true";
      var eleven = 100; // C
    }
  } else if (tonic == -4) {
  // If key is A flat
    if (octave == 3) {
    // If octave is Aflat3
      var zero = 260; // A flat
      var one = 260; // A natural
      var oneNatural = "true";
      var two = 250; // B flat
      var three = 250; // B natural
      var threeNatural = "true";
      var four = 240; // C
      var five = 230; // D flat
      var six = 230; // D natural
      var sixNatural = "true";
      var seven = 220; // E flat
      var eight = 220; // E natural
      var eightNatural = "true";
      var nine = 210; // F
      var ten = 200; // G flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 200; // G
    } else if (octave == 4) {
    // If octave is Aflat4
      var zero = 190; // A flat 
      var one = 190; // A natural
      var oneNatural = "true";
      var two = 180; // B flat
      var three = 180; // B natural
      var threeNatural = "true";
      var four = 170; // C
      var five = 160; // D flat
      var six = 160; // D
      var sixNatural = "true";
      var seven = 150; // E flat
      var eight = 150; // E natural
      var eightNatural = "true";
      var nine = 140; // F
      var ten = 130; // G flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 130; // G
    } else if (octave == 5) {
    // If octave is Aflat5
      var zero = 120; // A flat 
      var one = 120; // A natural
      var oneNatural = "true";
      var two = 110; // B flat
      var three = 110; // B natural
      var threeNatural = "true";
      var four = 100; // C
      var five = 90; // D flat
      var six = 90; // D natural
      var sixNatural = "true";
      var seven = 80; // E flat
      var eight = 80; // E natural
      var eightNatural = "true";
      var nine = 70; // F
      var ten = 60; // G flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 60; // G 
    }
  } else if (tonic == -3) {
  // If key is E flat
    if (octave == 3) {
    // If octave is Eflat3
      var zero = 290; // E flat
      var one = 290; // E natural
      var oneNatural = "true";
      var two = 280; // F
      var three = 270; // G flat
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 270; // G
      var five = 260; // A flat
      var six = 260; // A natural
      var sixNatural = "true";
      var seven = 250; // B flat
      var eight = 250; // B natural
      var eightNatural = "true";
      var nine = 240; // C
      var ten = 230; // D flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 230; // D natural
    } else if (octave == 4) {
    // If octave is Eflat4
      var zero = 220; // E flat  
      var one = 220; // E natural
      var oneNatural = "true";
      var two = 210; // F 
      var three = 200; // G flat
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 200; // G
      var five = 190; // A flat
      var six = 190; // A natural
      var sixNatural = "true";
      var seven = 180; // B flat
      var eight = 180; // B natural
      var eightNatural = "true";
      var nine = 170; // C
      var ten = 160; // D flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 160; // D
    } else if (octave == 5) {
    // If octave is Eflat5
      var zero = 150; // E flat
      var one = 150; // E natural
      var oneNatural = "true";
      var two = 140; // F
      var three = 130; // G flat 
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 130; // G
      var five = 120; // A flat
      var six = 120; // A natural
      var sixNatural = "true";
      var seven = 110; // B flat
      var eight = 110; // B natural
      var eightNatural = "true";
      var nine = 100; // C
      var ten = 90; // D flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 90; // D
    }
  } else if (tonic == -2) {
  // If key is B flat
    if (octave == 3) {
    // If octave is Bflat3
      var zero = 320; // B flat 
      var one = 320; // B natural
      var oneNatural = "true";
      var two = 310; // C
      var three = 300; // D flat
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 300; // D
      var five = 290; // E flat
      var six = 290; // E natural
      var sixNatural = "true";
      var seven = 280; // F
      var eight = 270; // G flat
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 270; // G
      var ten = 260; // A flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 260; // A
    } else if (octave == 4) {
    // If octave is Bflat4
      var zero = 250; // B flat
      var one = 250; // B natural
      var oneNatural = "true";
      var two = 240; // C
      var three = 230; // D flat
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 230; // D
      var five = 220; // E flat
      var six = 220; // E natural
      var sixNatural = "true";
      var seven = 210; // F
      var eight = 200; // G flat
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 200; // G
      var ten = 190; // A flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 190; // A
    } else if (octave == 5) {
    // If octave is Bflat5
      var zero = 180; // B flat
      var one = 180; // B natural
      var oneNatural = "true";
      var two = 170; // C
      var three = 160; // D flat
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 160; // D
      var five = 150; // E flat
      var six = 150; // E natural
      var sixNatural = "true";
      var seven = 140; // F
      var eight = 130; // G flat
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 130; // G
      var ten = 120; // A flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 120; // A
    }
  } else if (tonic == -1) {
  // If key is F
    if (octave == 3) {
    // If octave is F3
      var zero = 280; // F
      var one = 270; // G flat
      var oneFlat = "true";
      var oneNatural = "false";
      var oneSharp = "false";
      var two = 270; // G
      var three = 260; // A flat 
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 260; // A
      var five = 250; // B flat
      var six = 250; // B
      var sixNatural = "true";
      var seven = 240; // C
      var eight = 230; // D flat 
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 230; // D
      var ten = 220; // E flat 
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 220; // E
    } else if (octave == 4) {
    // If octave is F4
      var zero = 210; // F 
      var one = 200; // G flat 
      var oneFlat = "true";
      var oneNatural = "false";
      var oneSharp = "false";
      var two = 200; // G
      var three = 190; // A flat 
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 190; //  A
      var five = 180; // B flat
      var six = 180; // B natural
      var sixNatural = "true";
      var seven = 170; // C 
      var eight = 160; // D flat
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 160; // D
      var ten = 150; // E flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 150; // E
    } else if (octave == 5) {
    // If octave is F5
      var zero = 140; // F 
      var one = 130; // G flat
      var oneFlat = "true";
      var oneNatural = "false";
      var oneSharp = "false";
      var two = 130; // G
      var three = 120; // A flat 
      var threeFlat = "true";
      var threeNatural = "false";
      var threeSharp = "false";
      var four = 120; // A
      var five = 110; // B flat
      var six = 110; // B natural
      var sixNatural = "true";
      var seven = 100; // C
      var eight = 90; // D flat
      var eightFlat = "true";
      var eightNatural = "false";
      var eightSharp = "false";
      var nine = 90; // D
      var ten = 80; // E flat
      var tenFlat = "true";
      var tenNatural = "false";
      var tenSharp = "false";
      var eleven = 80; // E
    }
  } else if (tonic == 0) {
  // If key is C
    if (octave == 3) {
    // If octave is C3
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
    } else if (octave == 4) {
    // If octave is C4
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
    } else if (octave == 5) {
    // If octave is C5
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
  } else if (tonic == 1) {
  // If key is G
    if (octave == 3) {
    // If octave is G3
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
  } else if (tonic == 2) {
  // If key is D
    if (octave == 3) {
    // If octave is D3
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
    } else if (octave == 4) {
    // If octave is D4
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
    } else if (octave == 5) {
    // If octave is D5
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
   } else if (tonic == 3) {
   //If key is A
    if (octave == 3) {
    // If octave is A3
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
    } else if (octave == 4) {
    // If octave is A4
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
    } else if (octave == 5) {
    // If octave is A5
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
  } else if (tonic == 4) {
  // If key is E
    if (octave == 3) {
    // If octave is E3
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
    } else if (octave == 4) {
    // If octave is E4
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
    } else if (octave == 5) {
    // If octave is E5
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
   } else if (tonic == 5) {
  // If key is B
    if (octave == 3) {
    // If octave is B3
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
    } else if (octave == 4) {
    // If octave is B4
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
    } else if (octave == 5) {
    // If octave is B5
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
  } else if (tonic == 6) {
  // If key is F#
    if (octave == 3) {
    // If octave is F#3
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
    } else if (octave == 4) {
    // If octave is F#4
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
    } else if (octave == 5) {
    // If octave is F#5
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
  } else if (tonic == 7) {
  // If key is C#
    if (octave == 3) {
    // If octave is C#3
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
    } else if (octave == 4) {
    // If octave is C#4
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
    } else if (octave == 5) {
    // If octave is C#5
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
  }

  var ctx = getContext();
  if (pitch == 0) {
    if (noteLength == "whole") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawWholeNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawHalfNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawQuarterNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawEighthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawSixteenthNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, zero, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(zeroSharp) == "undefined" && typeof(zeroNatural) == "undefined" && typeof(zeroFlat) == "undefined") {
        drawThirtySecondNote(xaxis, zero);
      } else if (zeroSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, zero, sharp);
      } else if (zeroNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, zero, sharp);
      } else if (zeroFlat == "true" && zeroNatural == "false" && zeroSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, zero, sharp);
      }
    }
  } else if (pitch == 1) {
    if (noteLength == "whole") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawWholeNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, one, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawHalfNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, one, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawQuarterNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, one, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawEighthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawSixteenthNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, one, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(oneSharp) == "undefined" && typeof(oneNatural) == "undefined" && typeof(oneFlat) == "undefined") {
        drawThirtySecondNote(xaxis, one);
      } else if (oneSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, one, sharp);
      } else if (oneNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, one, sharp);
      } else if (oneFlat == "true" && oneNatural == "false" && oneSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, one, sharp);
      }
    }
  } else if (pitch == 2) {
    if (noteLength == "whole") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawWholeNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, two, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawHalfNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, two, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawQuarterNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, two, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawEighthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawSixteenthNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, two, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(twoSharp) == "undefined" && typeof(twoNatural) == "undefined" && typeof(twoFlat) == "undefined") {
        drawThirtySecondNote(xaxis, two);
      } else if (twoSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, two, sharp);
      } else if (twoNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, two, sharp);
      } else if (twoFlat == "true" && twoNatural == "false" && twoSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, two, sharp);
      }
    }
  } else if (pitch == 3) {
    if (noteLength == "whole") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawWholeNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, three, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawHalfNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, three, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawQuarterNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, three, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawEighthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawSixteenthNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, three, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(threeSharp) == "undefined" && typeof(threeNatural) == "undefined" && typeof(threeFlat) == "undefined") {
        drawThirtySecondNote(xaxis, three);
      } else if (threeSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, three, sharp);
      } else if (threeNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, three, sharp);
      } else if (threeFlat == "true" && threeNatural == "false" && threeSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, three, sharp);
      }
    }
  } else if (pitch == 4) {
    if (noteLength == "whole") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawWholeNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, four, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawHalfNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, four, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawQuarterNote(xaxis, four);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, four, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawEighthNote(xaxis, four);
      }  else if (fourNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, four, sharp);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawSixteenthNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, four, sharp);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, four, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fourSharp) == "undefined" && typeof(fourNatural) == "undefined" && typeof(fourFlat) == "undefined") {
        drawThirtySecondNote(xaxis, four);
      } else if (fourSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, four, sharp);
      } else if (fourNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, four, sharp);
      } else if (fourFlat == "true" && fourNatural == "false" && fourSharp == "false") {
        var sharp = "flat";
        drawThirtyNote(xaxis, four, sharp);
      }
    }
  } else if (pitch == 5) {
    if (noteLength == "whole") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawWholeNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, five, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawHalfNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, five, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawQuarterNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, five, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawEighthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawSixteenthNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, five, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(fiveSharp) == "undefined" && typeof(fiveNatural) == "undefined" && typeof(fiveFlat) == "undefined") {
        drawThirtySecondNote(xaxis, five);
      } else if (fiveSharp == "true") {
        var sharp = "true";
        drawThirtySecondNote(xaxis, five, sharp);
      } else if (fiveNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, five, sharp);
      } else if (fiveFlat == "true" && fiveNatural == "false" && fiveSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, five, sharp);
      }
    }
  } else if (pitch == 6) {
    if (noteLength == "whole") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawWholeNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, six, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawHalfNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, six, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawQuarterNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, six, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawEighthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawSixteenthNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, six, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sixSharp) == "undefined" && typeof(sixNatural) == "undefined" && typeof(sixFlat) == "undefined") {
        drawThirtySecondNote(xaxis, six);
      } else if (sixSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, six, sharp);
      } else if (sixNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, six, sharp);
      } else if (sixFlat == "true" && sixNatural == "false" && sixSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, six, sharp);
      }
    }
  } else if (pitch == 7) {
    if (noteLength == "whole") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawWholeNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawHalfNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawQuarterNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawEighthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawSixteenthNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, seven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(sevenSharp) == "undefined" && typeof(sevenNatural) == "undefined" && typeof(sevenFlat) == "undefined") {
        drawThirtySecondNote(xaxis, seven);
      } else if (sevenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, seven, sharp);
      } else if (sevenNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, seven, sharp);
      } else if (sevenFlat == "true" && sevenNatural == "false" && sevenSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, seven, sharp);
      }
    }
  } else if (pitch == 8) {
    if (noteLength == "whole") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawWholeNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawHalfNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawQuarterNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawEighthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawSixteenthNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, eight, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(eightSharp) == "undefined" && typeof(eightNatural) == "undefined" && typeof(eightFlat) == "undefined") {
        drawThirtySecondNote(xaxis, eight);
      } else if (eightSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, eight, sharp);
      } else if (eightNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, eight, sharp);
      } else if (eightFlat == "true" && eightNatural == "false" && eightSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, eight, sharp);
      }
    }
  } else if (pitch == 9) {
    if (noteLength == "whole") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawWholeNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawHalfNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawQuarterNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawEighthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawSixteenthNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, nine, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(nineSharp) == "undefined" && typeof(nineNatural) == "undefined" && typeof(nineFlat) == "undefined") {
        drawThirtySecondNote(xaxis, nine);
      } else if (nineSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, nine, sharp);
      } else if (nineNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, nine, sharp);
      } else if (nineFlat == "true" && nineNatural == "false" && nineSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, nine, sharp);
      }
    }
  } else if (pitch == 10) {
    if (noteLength == "whole") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawWholeNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawHalfNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawQuarterNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawEighthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawSixteenthNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, ten, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(tenSharp) == "undefined" && typeof(tenNatural) == "undefined" && typeof(tenFlat) == "undefined") {
        drawThirtySecondNote(xaxis, ten);
      } else if (tenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, ten, sharp);
      } else if (tenNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, ten, sharp);
      } else if (tenFlat == "true" && tenNatural == "false" && tenSharp == "false") {
        var sharp = "flat";
        drawThirtySecondNote(xaxis, ten, sharp);
      }
    }
  } else if (pitch == 11) {
    if (noteLength == "whole") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawWholeNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawWholeNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawWholeNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
        drawWholeNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "half") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawHalfNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawHalfNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawHalfNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
        drawHalfNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "quarter") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawQuarterNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawQuarterNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawQuarterNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
        drawQuarterNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "eighth") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawEighthNote(xaxis, eleven);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawEighthNote(xaxis, eleven, sharp);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawEighthNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
        drawEighthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "sixteenth") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawSixteenthNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawSixteenthNote(xaxis, eleven, sharp);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawSixteenthNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
        drawSixteenthNote(xaxis, eleven, sharp);
      }
    } else if (noteLength == "thirtysecond") {
      if (typeof(elevenSharp) == "undefined" && typeof(elevenNatural) == "undefined" && typeof(elevenFlat) == "undefined") {
        drawThirtySecondNote(xaxis, eleven);
      } else if (elevenSharp == "true") {
        var sharp = "sharp";
        drawThirtySecondNote(xaxis, eleven, sharp);
      } else if (elevenNatural == "true") {
        var sharp = "natural";
        drawThirtySecondNote(xaxis, eleven, sharp);
      } else if (elevenFlat == "true" && elevenNatural == "false" && elevenSharp == "false") {
        var sharp = "flat";
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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
  } else if (sharp == "flat") {
    flatNote(xaxis, position);
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

  var xCoord1d = parseInt(xCoord1c);
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

function flatNote(xaxis, position) {
  var ctx = getContext();
  var xCoord1a = parseInt(xaxis) - 18;
  var xCoord1b = parseInt(xaxis) - 16;
  var yCoord1a = parseInt(position) - 8;
  var yCoord2a = parseInt(yCoord1a) + 15;
  ctx.moveTo(xCoord1a, yCoord1a);
  ctx.lineTo(xCoord1b, yCoord2a);

  var tempXAxis = parseInt(xCoord1b);
  var tempYAxis = parseInt(yCoord2a);
  ctx.moveTo(tempXAxis, tempYAxis);
  var controlX = parseInt(tempXAxis) + 10;
  var controlY = parseInt(yCoord1a) + 8;
  var endX = parseInt(tempXAxis);
  var endY = parseInt(yCoord1a) + 7;
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);
  styleNStroke();
}

  //Start key signature drawing functions
  //setTheKey() gets the tonic and then draws the appropriate sharps on the
  //staffs. Currently only sharps are supported. In the future the plan is to
  //introduce tonics -1 - -12 which will be flat keys.
function setTheKey(theKey, xaxis, position) {
  if (theKey == -7) {
  // if the key is C flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
    eFlat(xaxis, position);
    aFlat(xaxis, position);
    dFlat(xaxis, position);
    gFlat(xaxis, position);
    cFlat(xaxis, position);
  } else if (theKey == -6) {
  // if the key is G flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
    eFlat(xaxis, position);
    aFlat(xaxis, position);
    dFlat(xaxis, position);
    gFlat(xaxis, position);
  } else if (theKey == -5) {
  // if the key is D flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
    eFlat(xaxis, position);
    aFlat(xaxis, position);
    dFlat(xaxis, position);
  } else if (theKey == -4) {
  // if the key is A flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
    eFlat(xaxis, position);
    aFlat(xaxis, position);
  } else if (theKey == -3) {
  // if the key is E flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
    eFlat(xaxis, position);
  } else if (theKey == -2) {
  // if the key is B flat
    fNatural(xaxis, position);
    bFlat(xaxis, position);
  } else if (theKey == -1) {
  // if the key is F
    fNatural(xaxis, position);
  } else if (theKey == 0) {
  // if the key is C
    sharpNote(xaxis, position);
  } else if (theKey == 1) {
  // if the key is G
    fSharp(xaxis, position);
  } else if (theKey == 2) {
  // if the key is D
    fSharp(xaxis, position);
    cSharp(xaxis, position);
  } else if (theKey == 3) {
  // if the key is A
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
  } else if (theKey == 4) {
  // if the key is E
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
  } else if (theKey == 5) {
  // if the key is B
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
  } else if (theKey == 6) {
  // if the key is F#
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
    eSharp(xaxis, position);
  } else if (theKey == 7) {
  // if the key is C#
    fSharp(xaxis, position);
    cSharp(xaxis, position);
    gSharp(xaxis, position);
    dSharp(xaxis, position);
    aSharp(xaxis, position);
    eSharp(xaxis, position);
    bSharp(xaxis, position);
  } 

  // draws a bass note in the appropriate place in both octaves on the staff.
  function fNatural(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 180;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a bass note in the appropriate place in both octaves on the staff.
  function bFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 90;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 10;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 90;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 150;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a bass note in the appropriate place in both octaves on the staff.
  function eFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 100;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 50;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 100;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 190;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a bass note in the appropriate place in both octaves on the staff.
  function aFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 110;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 20;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 110;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 160;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a bass note in the appropriate place in both octaves on the staff.
  function dFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 120;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 60;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 120;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 200;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a bass note in the appropriate place in both octaves on the staff.
  function gFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 130;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 30;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 130;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 170;
    flatNote(tempXAxis, tempYAxis);
  }
  
  // draws a bass note in the appropriate place in both octaves on the staff.
  function cFlat(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 140;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 70;
    flatNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 140;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 210;
    flatNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function fSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
    sharpNote(tempXAxis, tempYAxis);
  }
  // draws a sharp note in the appropriate place in both octaves on the staff.
  function fSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE);
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 85;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 140;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function cSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 95;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 30;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 95;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 170;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function gSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 100;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) - 10;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 100;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 130;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function dSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 115;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 20;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 115;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 160;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function aSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 125;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 50;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 125;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 190;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function eSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 135;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 10;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 135;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 150;
    sharpNote(tempXAxis, tempYAxis);
  }

  // draws a sharp note in the appropriate place in both octaves on the staff.
  function bSharp(tempXAxis, tempYAxis) {
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 145;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 40;
    sharpNote(tempXAxis, tempYAxis);
    var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 145;
    var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 180;
    sharpNote(tempXAxis, tempYAxis);
  }
//End key signature drawing functions
}

function  setTheTimeSignature(bpmeasure, count, songtitle, creator) {
  var ctx = getContext();
  ctx.font = "30pt Helvetica-Light";
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 150;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 35;
  ctx.fillText(bpmeasure, tempXAxis, tempYAxis);
  
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 150;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 155;
  ctx.fillText(bpmeasure, tempXAxis, tempYAxis);
  
  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 150;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 75;
  ctx.fillText(count, tempXAxis, tempYAxis);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 150;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 195;
  ctx.fillText(count, tempXAxis, tempYAxis);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 225;
  ctx.font = "15pt Helvetica-Light";
  ctx.fillText("Title: " + songtitle, tempXAxis, tempYAxis);

  var tempXAxis = parseInt(X_AXIS_START_OF_STAFF_LINES) + 10;
  var tempYAxis = parseInt(POSITION_OF_E5_STAFF_LINE) + 245;
  ctx.fillText("By: " + creator, tempXAxis, tempYAxis);
}
