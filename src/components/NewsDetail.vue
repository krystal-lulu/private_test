<template>
	<div class="main">
		<loading v-show="LOADING"></loading>
		<div :style="{backgroundImage: 'url(' + NEWS_DETAIL.image + ')'}" class="image">
			<span class="image-source">{{NEWS_DETAIL.image_source}}</span>
			<div class="title">{{ NEWS_DETAIL.title }}</div>
		</div>
		<div v-html="NEWS_DETAIL.body"></div>
	</div>
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import Loading from './Loading'

	export default {
		name: 'NewsDetail',
		data() {
			return {
				startPosition: 0,
				endPosition: 0,
				isMove: false
			}
		},
		created() {
			this.$store.dispatch('FECTH_NEWS_DETAIL', this.$route.params.id);
			window.addEventListener('touchstart', this.touchstart, false);
			window.addEventListener('touchmove', this.touchmove, false);
			window.addEventListener('touchend', this.touchend, false);
		},
		computed: {
			...mapGetters(['NEWS_DETAIL', 'LOADING'])
		},
		components: {
			'loading': Loading,
		},
		methods: {
			touchmove(event) {
				this.endPosition = event.touches[0].pageX;
				if(this.endPosition - this.startPosition > 50
						&& !this.isMove) {
					this.isMove = true
					this.$router.goBackPage()
				}
			},
			touchstart(event) {
				this.startPosition = event.touches[0].pageX;
			},
			touchend() {
				this.isMove = false;
			}
		}
	};
</script>
<style type="text/css" scoped>
	.image {
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
	.icon {
		color: #fff;
		position: absolute;
		top: 10px;
		left: 10px;
	}

</style>