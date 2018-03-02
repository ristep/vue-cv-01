<template>
  <div id="app">
    <nav class="no-print">
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

$fnt-par:  'Forum', cursive;
$fnt-h1:   'Karma', serif;
$fnt-h2:   'Playfair Display', serif;

$clr-01: #5F9897;
$clr-02: rgb(147, 201, 200);
$clr-03: rgb(73, 124, 123);
$clr-txt:#daf8f4;
$clr-txt-hi:#fffffb;

@media print
{    
  .no-print, .no-print *
  {
    display: none !important;
  }
}

nav {
  background-color: $clr-03;
  overflow: hidden;
	text-align: center;
  font-family: 'Bree Serif', serif;
  font-size: 18px;
  border-radius: 5px;
  a {
    float: left;
    display: block;
    color: $clr-txt;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 5px;
  }
  a:hover {
    float: left;
    // background-color: #ddd;
    color: $clr-txt-hi;
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
  }
  .icon {
    display: none;
  }
  a.router-link-exact-active {
    float: left;
    // font-weight: 700; // Bolds the text.
    background-color: $clr-01;
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
    color: $clr-txt-hi;
  }
}
</style>
