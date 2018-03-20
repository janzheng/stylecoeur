---
title: Randomizer
type: styleguide
layout: layout-coeur-knowbase
name: randomizer
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Random Numbers

This section exists because I'm always terrible at random num gen. In the future this will have stuff like hash algorithms and stuff... maybe

<div class="_styleguide-example" markdown="1">
  
  <button class="random-btn _button --outline" >Generate 10 #s [0,10] (inclusive)</button>

  <div class="random"></div>

  <script src="../coeur/scriptcoeur/random.js" type="text/javascript"></script>
  <script>

    $('.random-btn').on('click', function() {

      target = $('.random');
      target.html(`${target.html()} <div>`);
      for (i=0; i<10; i++) {
        target.html(`${target.html()} ${getRandom(10, 0)}`);
      }
      target.html(`${target.html()} </div>`);
    });

  </script>

</div>
~~~ html
<button class="random-btn _button --outline" >Generate Random Nums [0,10] (inclusive)</button>
  <div class="random"></div>

<script src="../coeur/scriptcoeur/random.js" type="text/javascript"></script>
<script>

  $('.random-btn').on('click', function() {

    target = $('.random');
    target.html(`${target.html()} <div>`);
    for (i=0; i<10; i++) {
      target.html(`${target.html()} ${getRandom(10, 0)}`);
    }
    target.html(`${target.html()} </div>`);
  });

</script>
~~~




<div class="_styleguide-example" markdown="1">
  
  <button class="joker _button --outline" >Psssst!</button>

  <script src="../coeur/scriptcoeur/random.js" type="text/javascript"></script>

  <script>

    var jokes = [
      ["Why did the doughnut go to the dentist?",
       "Because he needed a filling!"],
      ["How are false teeth like stars?",
       "They only come out at night!"],
      ["Why did the king go to the dentist?",
       "To get his teeth crowned!"],
      ["What do you call a dentist who doesn't like tea?",
       "Denis!"],
      ["What is a dentist's office??",
       "A filling station!"],
      ["At what time do most people go to the dentist?",
       "At Tooth-Hurty!"],
      ["What did the dentist see at the North Pole??",
       "A molar bear!"],
      ["What does a dentist do on a roller coaster??",
       "He braces himself!"],
      ["Why did the computer go to the dentist?",
       "Because it had bluetooth!"],
      ["What do you call a contemplative dentist?",
       "A flossofer!"],
      ["Why did the lawyer go to the dentist?",
       "Because he couldn’t handle the tooth!"],
      ["What is the best kind of filling?",
       "Chocolate!"],
      ["What was the dentist’s prior job?",
       "Drill sergeant!"],
      ["Why did the dentist meditate?",
       "To get a transcend dental experience!"],
      ["Why did the beaver go to the dentist?",
       "To get a dental dam!"],
    ]

    // click to get jokes
    var jokeIndex = -1;
    $('.joker').click(function(e) {

      const joker = $(this);

      if($(joker).hasClass('joke')) {
        // generate answer
        var joke = jokes[jokeIndex][1]; // random joke
        $(joker).text(joke).removeClass('joke');

      } else {
        // generate joke
        console.log('new joke!')
        var oldJoke = jokeIndex;
        while (oldJoke == jokeIndex) { // get a unique joke
          jokeIndex = Math.floor(Math.random() * jokes.length)
        } 
        var joke = jokes[jokeIndex][0]; // random joke
        $(joker).text(joke).addClass('joke');
      }
    });

  </script>

</div>

~~~ html
<button class="joker _button --outline" >Psssst!</button>

<script src="../coeur/scriptcoeur/random.js" type="text/javascript"></script>

<script>

  var jokes = [
    ["Why did the doughnut go to the dentist?",
     "Because he needed a filling!"],
    ["How are false teeth like stars?",
     "They only come out at night!"],
    ["Why did the king go to the dentist?",
     "To get his teeth crowned!"],
    ["What do you call a dentist who doesn't like tea?",
     "Denis!"],
    ["What is a dentist's office??",
     "A filling station!"],
    ["At what time do most people go to the dentist?",
     "At Tooth-Hurty!"],
    ["What did the dentist see at the North Pole??",
     "A molar bear!"],
    ["What does a dentist do on a roller coaster??",
     "He braces himself!"],
    ["Why did the computer go to the dentist?",
     "Because it had bluetooth!"],
    ["What do you call a contemplative dentist?",
     "A flossofer!"],
    ["Why did the lawyer go to the dentist?",
     "Because he couldn’t handle the tooth!"],
    ["What is the best kind of filling?",
     "Chocolate!"],
    ["What was the dentist’s prior job?",
     "Drill sergeant!"],
    ["Why did the dentist meditate?",
     "To get a transcend dental experience!"],
    ["Why did the beaver go to the dentist?",
     "To get a dental dam!"],
  ]

  // click to get jokes
  var jokeIndex = -1;
  $('.joker').click(function(e) {

    const joker = $(this);

    if($(joker).hasClass('joke')) {
      // generate answer
      var joke = jokes[jokeIndex][1]; // random joke
      $(joker).text(joke).removeClass('joke');

    } else {
      // generate joke
      console.log('new joke!')
      var oldJoke = jokeIndex;
      while (oldJoke == jokeIndex) { // get a unique joke
        jokeIndex = Math.floor(Math.random() * jokes.length)
      } 
      var joke = jokes[jokeIndex][0]; // random joke
      $(joker).text(joke).addClass('joke');
    }
  });

</script>
~~~

</main>