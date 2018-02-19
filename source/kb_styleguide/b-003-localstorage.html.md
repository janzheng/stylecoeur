---
title: Local Storage
type: styleguide
layout: layout-styleguide
name: localStorage
section: scriptcoeur
status: --draft
source: ../
---

<main markdown="1">

## Local Storage

Local Storage refers to storing information locally in a browser, either using localStorage or Cookies.

- It's best to check if one or the other exists; sometimes neither does
- Provides limited usefulness, excels at testing fake APIs
- Stores content between sessions for an "almost database" experience

</main>

<!-- figure this out: -->
<!-- 
<script src="app/js/js.cookie.js"></script>
 -->
<script>

$(document).ready(function() {

  // https://github.com/js-cookie/js-cookie
  // each post id looks like: workout-series#-week#-day#


  /*
      store user's workout log
      only stores checked workouts, as 'true'
      if it's not checked it'll act as undefined

      looks like: where workout-series-week-day

      workoutLog [
        'workout-1-2-3',
        'workout-1-2-4',
      ]
  */

  let workoutLog = getWorkouts();
  console.log(workoutLog);
  processWorkouts(workoutLog)
  setWeekCleared();


  // populate log from cookies
  // Cookies.set('name', { foo: 'bar' });
  // let storage = Cookies.getJSON('name');
  // console.log(storage.foo)

  $('html').on( "click", '.trigger', function() {
    const workout = $(this).parent();
    // if( $(workout).hasClass('checked') ) {
    //   $(workout).removeClass('checked');
    //   setWeekCleared();
    //   repositionWeek($(workout).parent());
    //   removeFromLog($(workout).attr('id'), workoutLog);
    //   setWorkouts(workoutLog)
    // } else {
    $(workout).addClass('checked');
    repositionWeek($(workout).parent());
    addToLog($(workout), workoutLog);
    setWorkouts(workoutLog);
    setWeekCleared();

    scrollToObj($(this).parent());
    // }
  })

  $('html').on( "click", '.workout.checked', function() {
    $(this).removeClass('checked');
    setWeekCleared();
    repositionWeek(this);
    removeFromLog($(this).attr('id'), workoutLog);
    setWorkouts(workoutLog)

    scrollToObj($(this).parent());
  });


});



// 
//  Process the DOM
// 


function repositionWeek(week) {
  console.log('repo week')
  $('.week .workout').each(function() {

    if($(this).hasClass('checked')) {
      // $(this).appendTo($(this).parent());
    }
  });   
}

// runs through a week's workouts; folds it up if it's all donw
function setWeekCleared() {
  $('.week').each(function() {
    let cleared = true;
    $(this).find('.workout:not(.checked)').each(function() {
      cleared = false;
    });
    if(!cleared) {
      $(this).removeClass('cleared');
    } else {
      $(this).addClass('cleared');
    }
  });   
}

// given a log, search all the matching IDs and set them to checked
function processWorkouts(log) {
  log.forEach(function (workout) {
    $('#'+workout).addClass('checked');
  })

  $('.week').each(function() {
    repositionWeek($(this))
  })
}


// 
//  workout log
// 

function addToLog(workoutObj, log) {
 const series = workoutObj.data('series'), week = workoutObj.data('week'), day = workoutObj.data('day');
 const workout = `workout-${series}-${week}-${day}`

 // don't add dupes
 if ($.inArray( workout, log ) < 0 )
  log.push(workout);
}

// takes an id that matches the value
function removeFromLog(idName, log) {
  const position = $.inArray( idName, log );
  if( position > -1 ) {
    log.splice(position, 1);
  };
}



// 
//  cookie / storage handling
// 

function setWorkouts(workoutLog) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('workoutLog', workoutLog);
  } else {
    Cookies.set('workoutLog', workoutLog);
    console.log(Cookies.getJSON('workoutLog'))
  }
}
function getWorkouts() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem('workoutLog')) {
      $('_debug').append(localStorage.getItem('workoutLog').split(','))
      return (localStorage.getItem('workoutLog').split(',')) || [];
    }
  }
  return Cookies.getJSON('workoutLog') || [];
}


