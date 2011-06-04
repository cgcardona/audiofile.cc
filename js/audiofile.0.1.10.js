
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

// First level is tonic, second level is octave.
var scales = {
  "0": {
    "3": [310,310,300,300,290,280,280,270,270,260,260,250],
    "4": [240,240,230,230,220,210,210,200,200,190,190,180],
    "5": [170,170,160,160,150,140,140,130,130,120,120,110],
    "sharps": [false,true,false,true,false,false,true,false,true,false,true,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,false,false,false,false,false,false,false,false,false,false,false]
  },
  "1": {
    "3": [270,270,260,260,250,240,240,230,230,220,210,210],
    "4": [200,200,190,190,180,170,170,160,160,150,140,140],
    "5": [130,130,120,120,110,100,100,90,90,80,70,70],
    "sharps": [false,true,false,true,false,false,true,false,true,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,false,false,false,false,false,false,false,false,false,true,false]
  },
  "2": {
    "3": [300,300,290,280,280,270,270,260,260,250,240,240],
    "4": [230,230,220,210,210,200,200,190,190,180,170,170],
    "5": [160,160,150,140,140,130,130,120,120,110,100,100],
    "sharps": [false,true,false,false,false,false,true,false,true,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,false,false,true,false,false,false,false,false,false,true,false]
  },
  "3": {
    "3": [260,260,250,240,240,230,230,220,210,210,200,200],
    "4": [190,190,180,170,170,160,160,150,140,140,130,130],
    "5": [120,120,110,100,100,90,90,80,70,70,60,60],
    "sharps": [false,true,false,false,false,false,true,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,false,false,true,false,false,false,false,true,false,true,false]
  },
  "4": {
    "3": [290,280,280,270,270,260,260,250,240,240,230,230],
    "4": [220,210,210,200,200,190,190,180,170,170,160,160],
    "5": [150,140,140,130,130,120,120,110,100,100,90,90],
    "sharps": [false,false,false,false,false,false,true,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,false,false,false,false,false,false,false,false,false,false,false]
  },
  "5": {
    "3": [250,240,240,230,230,220,210,210,200,200,190,190],
    "4": [180,170,170,160,160,150,140,140,130,130,120,120],
    "5": [110,100,100,90,90,80,70,70,60,60,50,50],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  },
  "6": {
    "3": [280,270,270,260,260,250,240,240,230,230,220,210],
    "4": [210,200,200,190,190,180,170,170,160,160,150,140],
    "5": [140,130,130,120,120,110,100,100,90,90,80,70],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,false,true]
  },
  "7": {
    "3": [310,300,300,290,280,280,270,270,260,260,250,240],
    "4": [240,230,230,220,210,210,200,200,190,190,180,170],
    "5": [170,160,160,150,140,140,130,130,120,120,110,100],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,false,true,false,true,false,true,false,false,true]
  },
  "-7": {
    "3": [310,310,300,300,290,290,280,270,270,260,260,250],
    "4": [240,240,230,230,220,220,210,200,200,190,190,180],
    "5": [170,170,160,160,150,150,140,130,130,120,120,110],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,true,false,true,false,false,true,false,true,false]
  },
  "-6": {
    "3": [270,270,260,260,250,250,240,230,230,220,220,210],
    "4": [200,200,190,190,180,180,170,160,160,150,150,140],
    "5": [130,130,120,120,110,110,100,90,90,80,80,70],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,true,false,true,false,false,true,false,true,false]
  },
  "-5": {
    "3": [300,300,290,290,280,270,270,260,260,250,250,240],
    "4": [230,230,220,220,210,200,200,190,190,180,180,170],
    "5": [160,160,150,150,140,130,130,120,120,110,110,100],
    "sharps": [false,false,false,false,false,false,false,false,false,false,false,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,false,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  },
  "-4": {
    "3": [260,260,250,250,240,230,230,220,220,210,200,200],
    "4": [190,190,180,180,170,160,160,150,150,140,130,130],
    "5": [120,120,110,110,100,90,90,80,80,70,60,60],
    "sharps": [false,false,false,false,false,false,false,false,false,false,true,false],
    "flats": [false,false,false,false,false,false,false,false,false,false,true,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  },
  "-3": {
    "3": [290,290,280,270,270,260,260,250,250,240,230,230],
    "4": [220,220,210,200,200,190,190,180,180,170,160,160],
    "5": [150,150,140,130,130,120,120,110,110,100,90,90],
    "sharps": [false,false,false,true,false,false,false,false,false,false,true,false],
    "flats": [false,false,false,true,false,false,false,false,false,false,true,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  },
  "-2": {
    "3": [320,320,310,300,300,290,290,280,270,270,260,260],
    "4": [250,250,240,230,230,220,220,210,200,200,190,190],
    "5": [180,180,170,160,160,150,150,140,130,130,120,120],
    "sharps": [false,false,false,true,false,false,false,false,true,false,true,false],
    "flats": [false,false,false,true,false,false,false,false,true,false,true,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  },
  "-1": {
    "3": [280,270,270,260,260,250,250,240,230,230,220,220],
    "4": [210,200,200,190,190,180,180,170,160,160,150,150],
    "5": [140,130,130,120,120,110,110,100,90,90,80,80],
    "sharps": [false,true,false,true,false,false,false,false,true,false,true,false],
    "flats": [false,true,false,true,false,false,false,false,true,false,true,false],
    "naturals": [false,true,false,true,false,false,true,false,true,false,true,false]
  }
};


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
  var scale = scales[tonic];
  var ctx = getContext();
  var noteDrawingFunc =
    noteLength == "whole"     ? drawWholeNote     :
    noteLength == "half"      ? drawHalfNote      :
    noteLength == "quarter"   ? drawQuarterNote   :
    noteLength == "eighth"    ? drawEighthNote    :
    noteLength == "sixteenth" ? drawSixteenthNote : drawThirtySecondNote;
  noteDrawingFunc(xaxis, scale[octave][pitch]);

  var accidentalsDrawingFunc =
    /* "Accidentals" is the generic term for the sharp/flat/natural sign */
    scale.sharps[pitch]   ? sharpNote   :
    scale.naturals[pitch] ? naturalNote :
    scale.flats[pitch]    ? flatNote    : function(){/* Do nothing */};
  accidentalsDrawingFunc(axis, scale[octave][pitch]);
}

function drawWholeNote(xaxis, position) {
  var ctx = getContext();
  ctx.beginPath();
  ctx.arc(xaxis, position, 8, 0, Math.PI*2, true); 
  ctx.closePath();
}

function drawHalfNote(xaxis, position) {
  drawWholeNote(xaxis, position)
  drawNoteStaff(xaxis, position);
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
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
}

function drawSixteenthNote(xaxis, position) {
  drawQuarterNote(xaxis, position);
  drawNoteStaff(xaxis, position);
  drawOneFlag(xaxis, position);
  drawTwoFlag(xaxis, position);
}

function drawThirtySecondNote(xaxis, position) {
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
