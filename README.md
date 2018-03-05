# vue-cv

CV &amp; Resume created with Vue and JSON 

Vue is best javascript framework I’ve ever been learned. 

For that reason, I decided to make my CV framed in Vue.

An online live demo is here.

### Installation

```sh
$ mkdir vue-cv
$ cd vue-cv
# (clone from this git or extract .zip in vue-cv )
$ yarn 
$ yarn serve
```
If don't have yarn install it with this:
```sh
$ sudo apt-get update 
$ sudo apt-get install yarn
```
For other than Ubuntu/Debian see [this article](https://yarnpkg.com/lang/en/docs/install/) 

For production environments...
```sh
$ yarn run buld
```
### Server side
Put [this](https://github.com/ristep/vue-cv/tree/master/src/server-side) files on some web server with .php 
and change 'baseURL: "http://capi.rp/",' as needet, in [ajax-axios.js](https://github.com/ristep/vue-cv/blob/master/src/ajax-axios.js).

### Development

Want to contribute? Great! :)

### Todos

 - Write some Tests
 - Add Night Mode :)

License
----
MIT
**Free Software, Yep!**
