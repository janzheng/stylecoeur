
<!-- 

    MAIN DRIVER APP

 -->
<template>
  <div id="app">
    <div class="center w85">
      <app-header></app-header>
      <div class="ph3 pv1 background-gray">
        <router-view></router-view>
      </div>
    </div>

    <div class="center w85">
      <h1>Test bed</h1>

      <div>
        <h4>Outside Click</h4>
        >> Look at the console for outside triggers; only works when built and used in conjunction w/ test.html
        <!-- <div v-click-outside="onClickOutside">onClickOutside</div> -->
        <!-- <div id="myDiv1" v-event-outside="{ name: 'onFoo', handler: onOutside }">myDiv1</div> -->
        <div id="myDiv2" v-event-outside.jquery="{ name: 'onFoo', handler: onOutside }">myDiv2</div>
      </div> { handler: onClickOutside, foo: someVueData }

    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'

  export default {
    name: 'app',
    components: {
      AppHeader
    },
    methods: {
      onClickOutside (e, el) {
        console.log('onClickOutside');
        console.log('onClickOutside: click heard outside element: ', el);
        console.log('element clicked: '. e.target);
        console.log('event: ', e);
      },
      onOutside (e, el, data, moredata) {
        console.log('jQuery Event');
        console.log('jQ: click heard outside element: ', el);
        console.log('jQ data: ', e, data, moredata)
        // console.log('element clicked: '. e.target);
        // console.log('event: ', e);
      },
    }
  }
</script>

<!-- 
  Load in StyleCoeur here

<style lang="scss" scoped>
  @import "../../assets/app.scss"
</style>
 -->

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }

  input {
    max-width: 500px;
  }

  .gray {
    color: #828282;
  }

  .orange {
    background-color: #ff6600;
  }

  .background-gray {
    background-color: rgb(246,246,239);
  }

  .f11 {
    font-size: 11px;
  }

  .w85 {
    width: 85%;
  }

  .button {
    font-family: monospace;
    font-size: 10pt;
    color: black;
    background-color: buttonface;
    text-align: center;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    cursor: pointer;
    max-width: 250px;
  }
</style>


