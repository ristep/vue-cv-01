<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/resume">Resume I</router-link>
      <router-link to="/resume02">Resume II</router-link>
      <router-link to="/cv">CV I</router-link>
      <router-link to="/cv02">CV II</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

nav {
  background-color: #725054;
  overflow: hidden;
	text-align: center;
  font-family: 'Bree Serif', serif;
  font-size: 18px;
  border-radius: 5px;
  a {
    float: left;
    display: block;
    color: #ffe63c;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 5px;
  }
  a:hover {
    float: left;
    // background-color: #ddd;
    color: lightgoldenrodyellow;
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
  }
  .icon {
    display: none;
  }
  a.router-link-exact-active {
    float: left;
    // font-weight: 700; // Bolds the text.
    background-color: rgb(235, 146, 14);
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
    color: white;
  }
}
</style>
