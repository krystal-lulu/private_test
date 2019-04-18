<template>
	<div class="main">
			<nav-menu id="menu" @closeMenu="close"></nav-menu>
			<div id="panel">
				<fixed-title :title="fixedTitle" class="fixedtitle"></fixed-title>
				<div class="list-content">
					<top-news :news-latest-top = "NEWS_LATEST_TOP" class="topNews" v-if="NEWS_LATEST_TOP.length"></top-news>
					<news-list :newsList = "NEWS_LIST" class="newsList"></news-list>
					<div class="text-center load" v-show="LOADING">正在加载数据....</div>
				</div>
				<div :class="{ 'active': over }" class="modal" ></div>
			</div>
	</div>

</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import TopNews from './TopNews'
	import NewsList from './NewsList'
	import Loading from './Loading'
	import Menu from './Menu'
	import Title from './Title'

	export default {
		name: 'Daily',
		data() {
			return {
				startPosition: 0,
				endPosition: 0,
				slideout: null,
				over: false,
				position: 0,
				fixedTitle: '首页',
				isload:false,
			}
		},
		created() {
			this.$store.dispatch('FECTH_NEWS_LATEST');
			window.addEventListener('touchstart', this.touchstart, false);
			window.addEventListener('touchmove', this.touchmove, false);
		},
		mounted() {
			this.slideout = new Slideout({
				'panel': document.getElementById('panel'),
				'menu': document.getElementById('menu'),
			})

			let _self = this;
			$('.fixedtitle').on('click', function(event) {
				_self.open();
			});

			$('.modal').on('click', function(event) {
				_self.close();
			})
		},
		computed: {
			...mapGetters(['NEWS_LIST', 'NEWS_LATEST_TOP', 'LOADING'])
		},
		components: {
			'topNews': TopNews,
			'newsList': NewsList,
			'navMenu': Menu,  
			'fixedTitle': Title, 
		},
		methods: {
			loadMoreNews() {
				this.$store.dispatch('FECTH_NEWS_BEFORE');
			},
			touchstart(event) {
				this.startPosition = event.touches[0].pageY;
			},
			touchmove(event) {
				this.endPosition = event.touches[0].pageY;
				console.log('height', $('.list-content').height())
				console.log('scrollTop', $('.list-content').scrollTop())
				console.log('scrollHeight', $('.list-content')[0].scrollHeight)
				if(this.startPosition - this.endPosition > 40 
						&& !this.$store.getters.LOADING
						&& $('.list-content').scrollTop() + $('.list-content').height() + 40 >=  $('.list-content')[0].scrollHeight) {
					this.loadMoreNews();
				}
			},
			close() {
				this.slideout.close();
				this.over = false;
				$('#menu').css('display', 'none');
			},
			open() {
				this.slideout.open();
				this.over = true;
				$('#menu').css('display', 'block');
			}
		},
		beforeRouteLeave(to, from, next) {
			this.position = $('.list-content').scrollTop();
			next()
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				$('.list-content').scrollTop(vm.position);
			})
		}
	};
</script>
<style type="text/css" scoped>
	.main {
		width: 100%;
		height: 100%;
	}
	.slideout-menu {
		width: 256px;
		height: 100%;
		position: fixed;
		background-color: #454545;
		display: none;
	}
	.slideout-panel {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #fff;
		overflow-y: auto;
	}
	.list-content {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: auto;
	}
	.modal {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #000;
		opacity: 0.3;
		display: none;
	}
	.active {
		display: block;
	}
	.load {
		width: 100%;
		position: fixed;
		bottom: 0;
		text-align: center;
		background-color: #fff;
		animation: load 2s linear infinite;
	}
	@keyframes load {
		0% {
			opacity: 1;
		}
		20% {
			opacity: 0.5
		}
		50% {
			opacity: 0;
		}
		70% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}


	@-webkit-keyframes load {
		0% {
			opacity: 1;
		}
		20% {
			opacity: 0.5
		}
		50% {
			opacity: 0;
		}
		70% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes load {
		0% {
			opacity: 1;
		}
		20% {
			opacity: 0.5
		}
		50% {
			opacity: 0;
		}
		70% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes load {
		0% {
			opacity: 1;
		}
		20% {
			opacity: 0.5
		}
		50% {
			opacity: 0;
		}
		70% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}


</style>