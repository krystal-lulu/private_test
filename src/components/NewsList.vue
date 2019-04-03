<template>
	<div class="container">
		<div  v-for="(item, index) in newsList" @click="">
			<div class="row title">
				<div class="col-xs-12 text-center date" v-show="index!==0">{{ time(item.date) }}</div>
			</div>
			<div v-for="(story, storyIndex) in item.stories">
				<router-link  :to="{ name:'theme' }" class="row item">
					<div class="col-xs-10 text-left title"> {{ story.title }}</div>
					<img :src="story.images[0]" alt=""  class="col-xs-2">
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
		props: ['newsList'],
		methods: {
			time(date) {
				return moment(date).format('YYYY-MM-DD')
			}
		}
	};
</script>
<style type="text/css" scoped>
	.label {
		width: 10px;
		height: 10px;
		background-color: red;
	}
	.row {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item {
		padding: 10px;
		margin: 10px 10px 0 10px;
	}
	.line {
		height: 1px;
		margin: 0 10px;
		background-color: #eee;
	}
	.title {
		font-size: 14px;
		color: #000;
	}
	.date {
		background-color: #eee;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	img {
		padding: 0 0 0 2px;
	}
</style>