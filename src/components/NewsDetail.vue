<template>
	<div class="main">
		<!-- <zhihu-title></zhihu-title> -->
		<div :style="{backgroundImage: 'url(' + NEWS_DETAIL.image + ')'}" class="image content">
			<span class="image-source">{{NEWS_DETAIL.image_source}}</span>
			<div class="title">{{ NEWS_DETAIL.title }}</div>
		</div>
		<div v-html="NEWS_DETAIL.body"></div>
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import Title from './Title'

	export default {
		name: 'NewsDetail',
		computed: {
			...mapGetters(['NEWS_DETAIL'])
		},
		created() {
			console.log('create..', this.$route.params.id)
			this.$store.dispatch('FECTH_NEWS_DETAIL', this.$route.params.id);
		},
		components: {
			'zhihu-title': Title
		}
	};
</script>
<style type="text/css" scoped>
	.image{
		width: 100%;
		height: 250px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.title {
		padding: 20px 20px 0 20px;
		position: absolute;
		bottom: 10px;
		margin: 0;
		color: #fff;
	}
	.image-source {
		color: #fff;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>