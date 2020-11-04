<template>
  <div id="app">
    <ul>
      <li v-for="user of users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    users() {
      return this.$store.state.user;
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('init','user');
      // do something, all is ok...
    } catch (error) {
      // show an error, or something to do ...
      console.log('app: ' + error);
    }
  }
};


</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: 400;
}

body{
  background-color: #f0f0f0;
}

#app{
  background-color: #fff;
  padding: 2rem;
  width: 972px;
  margin: 0 auto;
  height: 100%;
}
</style>
