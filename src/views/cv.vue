<template>

<div id="doc2" class="yui-t7">
	<div id="inner">
	
		<div id="hd">
			<div class="yui-gc">
				<div class="yui-u first">
					<h1>{{ cv.name }}</h1>
					<h2>{{ cv.jobtitle }}</h2>
				</div>

				<div class="yui-u">
					<div class="contact-info">
						<h3><a id="pdf" href="#">Download PDF</a></h3>
						<h3><a v-bind:href="'mailto:'+this.cv.email">{{ cv.email }}</a></h3>
						<h3>{{ cv.mobitel }}</h3>
					</div><!--// .contact-info -->
				</div>
			</div><!--// .yui-gc -->
		</div><!--// hd -->

		<div id="bd">
			<div id="yui-main">
				<div class="yui-b">

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>{{ cv.profsum.title }}</h2>
						</div>
						<div class="yui-u"  v-for="(item, key) in cv.profsum.items" v-bind:key="key">
							<li>{{ item }}</li>
						</div>
					</div><!--// .yui-gf -->

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>{{cv.skills.title}}</h2>
						</div>
						<div class="yui-u">

							<ul class="talent" v-for="(item, key) in cv.skills.items" v-bind:key="key" >
								<li>{{ item }}</li>
								<!-- <li class="last">Javascript</li> -->
							</ul>

						</div>
					</div><!--// .yui-gf-->

					<div class="yui-gf">
	
						<div class="yui-u first">
							<h2>{{ cv.workHistory.title}}</h2>
						</div><!--// .yui-u -->

						<div class="yui-u">

							<div class="job last" v-for="(item, key) in cv.workHistory.items" v-bind:key="key">
								<h2>{{item.company}}</h2>
								<h3>{{item.title}}</h3>
								<h4>{{item.begin}}-{{item.end}}</h4>
								<div  v-for="(item, key) in item.items" v-bind:key="key">
									<li>{{item}}</li>
								</div>
							</div>

						</div><!--// .yui-u -->
					</div><!--// .yui-gf -->

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>{{ cv.education.title }}</h2>
						</div>
						<div class="yui-u last" v-for="(item, key) in cv.education.items" v-bind:key="key">
							<h4>{{ item.scool }}</h4>
							<h5>{{ item.field }}</h5>
							<h5>{{ item.degree }}</h5>
							<br>
						</div>
					</div><!--// .yui-gf -->

				</div><!--// .yui-b -->
			</div><!--// yui-main -->
		</div><!--// bd -->

		<div id="ft">
			<p>{{cv.name}} &mdash; <a v-bind:href="'mailto:' + cv.email">{{cv.email}}</a> &mdash; {{cv.mobitel}}</p>
		</div><!--// footer -->

	</div><!-- // inner -->

</div><!--// doc -->

</template>

<script>
import { ajax } from '../ajax-axios';

export default {
  name: 'cv',
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
      loading: false,
      malto: ''
    };
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
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Bree+Serif|Hind|Nanum+Brush+Script');
/* @import url('http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css'); */

/* //-- yui-grids style overrides -- */
#inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }
.yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }

/* //-- header, body, footer -- */
#hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }
#hd h2 { text-transform: uppercase; letter-spacing: 2px; }
#bd, #ft { margin-bottom: 2em; }

/* //-- footer -- */
#ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }
#ft p { margin-bottom: 0; text-align: center;   }

/* //-- core typography and style -- */
#hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }
h2 { font-size: 152% }
h3, h4 { font-size: 122%; }
h1, h2, h3, h4 { color: #333; }
p { font-size: 100%; line-height: 18px; padding-right: 3em; }
a { color: #990003 }
a:hover { text-decoration: none; }
strong { font-weight: bold; }
li { line-height: 24px; border-bottom: 1px solid #ccc; }
p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }
p.enlarge span { color: #000 }
.contact-info { margin-top: 7px; }
.first h2 { font-style: italic; }
.last { border-bottom: 0 }

/* //-- section styles -- */

a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }
a#pdf:hover { background: #222; }

.job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }
.job h4 { position: absolute; top: 0.35em; right: 0 }
.job p { margin: 0.75em 0 3em 0; }

.last { border: none; }
.skills-list ul { margin: 0; }
.skills-list li { margin: 3px 0; padding: 3px 0; }
.skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }
.talent { width: 32%; float: left }
.talent h2 { margin-bottom: 6px; }

#srt-ttab { margin-bottom: 100px; text-align: center;  }
#srt-ttab img.last { margin-top: 20px }

/* --// override to force 1/8th width grids -- */
.yui-gf .yui-u{width:80.2%;}
.yui-gf div.first{width:12.3%;}

</style>

