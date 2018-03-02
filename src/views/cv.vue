<template>
<div id="top">
	<div id="cv" class="instaFade">
		<div class="mainDetails">
			<div id="headshot" class="quickFade">
				<!-- <img src="../assets/jasFad.png" alt="" /> -->
			</div>
			
			<div id="name">
				<h1 class="quickFade delayTwo">{{ cv.name }}</h1>
				<h2 class="quickFade delayThree">{{cv.jobtitle}}</h2>
			</div>
			
			<div id="contactDetails" class="quickFade delayOne">
				<ul>
					<li>e: <a v-bind:href="'mailto:'+this.cv.email">{{cv.email}}</a></li>
					<li v-for="(item, key) in cv.sities" v-bind:key="key">
						w:<a v-bind:href="'http://'+item" target="_blank">&nbsp;{{item}}</a>
					</li>
					<li>m:&nbsp;{{ cv.mobitel }}</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
		
		<div id="mainArea" class="quickFade delayFive">

			<section>
				<article> <!-- Prof. Summary -->
					<div class="sectionTitle">
						<h1>{{ cv.profsum.title }}</h1>
					</div>
					<div class="sectionContent">	
						<article   v-for="(item, key) in cv.profsum.items" v-bind:key="key">
							<p>{{ item[1] }}</p>
						</article>
					</div>
				</article>
				<div class="clear"></div>
			</section>

			<section> <!-- Skills -->
				<div class="sectionTitle">
					<h1>{{cv.skills.title}}</h1>
				</div>
				<div class="sectionContent">
					<ul class="keySkills">
							<li v-for="(item, key) in cv.skills.items" v-bind:key="key" >
  					 		<div>
									<div class="mspace" style="width: 100%">
										<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
									</div>
									<p>{{ item[1] }}</p>
								</div>
							</li>
					</ul>
				</div>
				<div class="clear"></div>
			</section>

			<section> <!-- Languages -->
				<div class="sectionTitle">
					<h1>{{cv.languages.title}}</h1>
				</div>
				<div class="sectionContent">
					<ul class="keySkills">
							<li v-for="(item, key) in cv.languages.items" v-bind:key="key" >
  					 		<div>
									<div class="mspace" style="width: 100%">
										<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
									</div>
									<p>{{ item[1] }}</p>
								</div>
							</li>
					</ul>
				</div>
				<div class="clear"></div>
			</section>

			<section> <!-- Work history -->
				<div class="sectionTitle">
					<h1>{{cv.workHistory.title}}</h1>
				</div>
				<div class="sectionContent" >
					<div class="page-break" v-for="(item, key) in cv.workHistory.items" v-bind:key="key">
						<h2>{{item.title}} at {{item.company}}</h2>
						<div class="subDetails">{{item.begin}} - {{item.end}}</div>
						<p v-for="(item, key) in item.items" v-bind:key="key">
							{{item[1]}}
						</p>
						<br>
					</div>
				</div>
				<div class="clear"></div>
			</section>

			<section>  <!-- Education -->
				<div class="sectionTitle">
					<h1>{{ cv.education.title }}</h1>
				</div>
				<div class="sectionContent">
					<article  v-for="(item, key) in cv.education.items" v-bind:key="key">
						<h2>{{ item.scool }}</h2>
						<h4 class="subDetails">{{ item.degree }}</h4>
						<p>{{ item.field }}</p>
					</article>
				</div>
				<div class="clear"></div>
			</section>
			
		</div>
	</div>
</div>

</template>

<script>
import { ajax } from '../ajax-axios';

export default {
  name: 'cv',
  data() {
    return {
      cv:{
				"name": "",
				"jobtitle": "",
				"adress": "",
				"homtetel": "",
				"mobitel": "",
				"email": "",
				"sities": [],
				"profsum": {
					"title": "",
					"items": []
				},
				"skills": {
					"title": "",
					"items": []
				},
				"languages":{
					"title": "",
					"items": []
				},
				"workHistory": {
					"title": "",
					"items": []
				},
				"education": {
					"title": "",
					"items": []
				}
			}
		}	
  },
  async mounted() {
    this.loading = true;
    try {
      this.cv = (await ajax.get('cv.php')).data;
      this.proftitle = this.cv.profsum.title;
      this.profi = this.cv.profsum.items;
      this.malto = 'mailto:' + this.cv.email;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.loading = false;
  }
};
</script>

<style lang="css" scoped>

</style>

