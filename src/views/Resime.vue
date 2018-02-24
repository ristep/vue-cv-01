<template>
  <div class="about">
  	<h2>{{ cv.name }}</h2>
		<h4>{{ cv.adress }}</h4>
		<p>{{ cv.sities }}</p>
		<h2>{{ proftitle }}</h2> 
		<ul>
			<li v-for="(item, key) in profi" v-bind:key="key">
				{{ item }}
			</li>
		</ul>
		<h2>{{cv.skills.title }}</h2>
		<ul>
			<li v-for="(item, key) in cv.skills.items" v-bind:key="key">
				{{ key+1 }}.  {{ item }}
			</li>
		</ul>
		<h2>{{ cv.workHistory.title}}</h2>
			<div v-for="(item, key) in cv.workHistory.items" v-bind:key="key">
				<p>{{ item.begin }} - {{ item.end }}</p>
				<p><span>{{ item.title }}</span> | <span>{{ item.company }}</span> | <span>{{ item.place }}</span></p>
				<ul>
					<li v-for="(item, key) in item.items" v-bind:key="key">
						{{ item }}
					</li>
				</ul>
				<hr>
			</div>
		<h2>{{ cv.education.title }}</h2>
		<ul>
			<li v-for="(item, key) in cv.education.items" v-bind:key="key">
				{{ key+1 }}.  {{ item }}
			</li>
		</ul>
  </div>
</template>

<script>
import { ajax } from '../ajax-axios';

export default {
  name: 'resime',
  data() {
    return {
      cv: {
				skills: {
					title:''
				},
				workHistory: {
					title: ""
				},
				education: {
					title: ""
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
