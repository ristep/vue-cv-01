<template>
  <div class="cv">
	
		<div class="head">

				<div id="mtitle">
					<h1 class="name">{{ cv.name }}</h1>
					<h2 class="jobtitle">{{ cv.jobtitle }}</h2>
				</div>

		</div>
				<div class="contact-info">
					<div class="email"><a v-bind:href="'mailto:'+this.cv.email">{{ cv.email }}</a></div>
					<div class="tel">{{ cv.mobitel }}</div>
				</div>

		<div id="body">
			
			<div class="first">
							<h2>{{ cv.profsum.title }}</h2>
			</div>
			<div  v-for="(item, key) in cv.profsum.items" v-bind:key="key">
				<li>{{ item }}</li>
			</div>
			
			<div class="first">
				<h2>{{cv.skills.title}}</h2>
			</div>
			<div class="talent" v-for="(item, key) in cv.skills.items" v-bind:key="key" >
				<div>{{ item }}</div>
			</div>

			<div class="first">
				<h2>{{ cv.workHistory.title}}</h2>
			</div>

			<div class="job" v-for="(item, key) in cv.workHistory.items" v-bind:key="key">
				<h2>{{item.company}}</h2>
				<h3>{{item.title}}</h3>
				<h4>{{item.begin}}-{{item.end}}</h4>
				<div  v-for="(item, key) in item.items" v-bind:key="key">
				 	<li>{{item}}</li>
				</div>
			</div>

			<div class="first">
				<h2>{{ cv.education.title }}</h2>
			</div>
			<div class="last" v-for="(item, key) in cv.education.items" v-bind:key="key">
				<h4>{{ item.scool }}</h4>
				<h5>{{ item.field }}</h5>
				<h5>{{ item.degree }}</h5>
				<br>
			</div>
		</div><!--// body -->

		<div id="ft">
			<p>{{cv.name}} &mdash; <a v-bind:href="'mailto:' + cv.email">{{cv.email}}</a> &mdash; {{cv.mobitel}}</p>
		</div><!--// footer -->
   
  </div><!--// resime -->
</template>

<script>
import { ajax } from '../ajax-axios';
import 'w3-css/w3.css';
 
export default {
  name: 'resume',
  data() {
    return {
      cv: {
        skills: {
          title: ''
        },
        workHistory: {
          title: ''
        },
        education: {
          title: ''
        }
      },
      profi: [],
      proftitle: '',
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    try {
      this.cv = (await ajax.get('cv.php')).data;
      this.proftitle = this.cv.profsum.title;
      this.profi = this.cv.profsum.items;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.loading = false;
  }
};
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Alegreya|Bellefair|Crimson+Text|Lobster|Nanum+Brush+Script|PT+Sans+Narrow|Pacifico|Shadows+Into+Light');

.cv{
  .head {
		float: left;
    width: 50%;
		.name {
			font-family: 'Lobster', cursive;
		}
		.jobtitle {
			font-family: 'Crimson Text', serif;	
		}
	}	

	.contact-info {
		float: right;
    width: 50%;
		color: yellowgreen;
	}
}


// font-family: 'Bellefair', serif;
// font-family: 'PT Sans Narrow', sans-serif;
// font-family: 'Lobster', cursive;
// font-family: 'Crimson Text', serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Shadows Into Light', cursive;
// font-family: 'Nanum Brush Script', cursive;
// font-family: 'Alegreya', serif;

</style>