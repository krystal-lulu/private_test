<template>
	<div class="main">
		<!-- <zhihu-title></zhihu-title>  -->
		<topNews :newsLatestTop = "NEWS_LATEST_TOP"></topNews>
		<newsList :newsList = "NEWS_LIST"></newsList>
		<button @click="loadMoreNews">更多</button>
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import TopNews from './TopNews'
	import NewsList from './NewsList'
	import Title from './Title'

	export default {
		name: 'Daily',
		computed: {
			...mapGetters(['NEWS_LIST', 'NEWS_LATEST_TOP'])
		},
		created() {
			console.log('created')
			this.$store.dispatch('FECTH_NEWS_LATEST')
		},
		components: {
			'topNews': TopNews,
			'newsList': NewsList,
			'zhihu-title': Title
		},
		methods: {
			loadMoreNews() {
				this.$store.dispatch('FECTH_NEWS_BEFORE')
			}
		}
	};
</script>
<style type="text/css" scoped>
	button {
		width: 100%;
	}
	
</style>