<template>
	<div class="container">
		<div  v-for="(item, index) in newsList">
			<div class="row title">
				<div class="col-xs-12 text-center date" v-show="index!==0">{{ time(item.date) }}</div>
			</div>
			<div v-for="(story, storyIndex) in item.stories">
				<router-link  :to="{ name:'news-detail', params:{id: story.id} }" class="row item">
					<div class="col-xs-10 title "> {{ story.title }}</div>
					<div  class="col-xs-2 imgBox">
						<img v-lazy="story.images[0]" alt="">
					</div>
				</router-link>
				<div class="row line" v-show="storyIndex!==item.stories.length-1"></div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import moment from 'moment'
	export default {
		name: 'NewsList',
		props: ['newsList', 'isLoad'],
		data() {
			return {
				position: [],
				src: '../static/dist/img/load.png'
			}
		},
		methods: {
			time(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			handleScroll() {
				console.log('this.position', this.position)
				for(var i = this.position.length - 1; i >= 1; i--) {
					var nextScrollTop = this.position[i].scrollTop;
					var prevScrollTop = this.position[i - 1].scrollTop;
					
					if(this.top < this.position[1].scrollTop) {
						this.$emit('updateTitle', '首页');
						break;
					}
					if(prevScrollTop <= this.top
							&& nextScrollTop >= this.top) {
						this.$emit('updateTitle', this.position[i - 1].title);
						break;
					} 
				}
			}
		},
	
	};
</script>
<style type="text/css" scoped>
	.container {
		width: 100%;
		height: 65vh;
	}
	.label {
		width: 10px;
		height: 12px;
		background-color: red;
	}
	.row {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.item {
		margin: 10px 10px 10px 10px;
	}
	.line {
		height: 1px;
		margin: 0 10px;
		background-color: #eee;
	}
	.title {
		font-size: 14px;
		color: #000;
		padding: 0 5px 0 0;
	}
	.imgBox {
		padding: 0;
		background: url('../../static/dist/img/load.png') no-repeat;
		background-size: 100% 100%;
		width: 60px;
		height: 60px;
	}

	.date {
		background-color: red;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	img {
		width: 100%;
	}
</style>