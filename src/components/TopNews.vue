<template>
	<!-- Swiper -->
	<div class="container">
		<div class="row">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in newsLatestTop">
							<div :style="{ backgroundImage: `url('${item.image}')` }" class="imagex" @click="detail(item.id)">
									<span class="title">{{ item.title }}</span>
							</div>
						</div>
					</div>
					<!-- Add pagination -->
					<div class="swiper-pagination"></div>
				</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
　//vue 项目中使用时，组件swiper-slide 如果用v-for循环的话，loop：true 就不能无缝轮播，每次轮播到最后一张就停止了？？？
	//设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的,
	//* 数组还没有加载出来
	export default {
		name: 'TopNews',
		props: ['newsLatestTop'],
		data() {
			return {
				swiper: null,
			}
		},
		created() {
				
				//created 对dom元素的操作放在nextTick 里面， 页面渲染完在进行操作
				// this.$nextTick(() => {
				// 	var height = $('.container').height();
				// 	console.log('height', height)
				// })
				// console.log('created', this.newsLatestTop)

		},
		mounted() {

				console.log('mounted', this.newsLatestTop.length)
				this.initSwiper();


		},
		methods: {
			detail(storyId) {
				this.$router.push({ name:'news-detail', params:{ id: storyId } })
			},
			initSwiper() {
				if(this.swiper !== null ) return
					this.swiper = new Swiper('.swiper-container',{
					 	observer: true,
					 	observeParents: true,
			      autoplay: {
			      	delay: 1000,
			      	disableOnInteraction: false
			      },
			      loop: true,
			      pagination: {
			        el: '.swiper-pagination',
			      }
				})
			}
		}
	};
</script>
<style type="text/css" scoped>
	.swiper-container {
		width: 100%;
  	height: 35vh;
  	/*position: absolute;*/
	}
	.swiper-side {
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 width: 100%;
	}
	.imagex {
		width: 100%;
		height: 100%;
		background-size: cover;

	}
	.title {
		padding: 0;
		width: 100%;
		text-align: left;
		word-wrap: word-wrap;
		position: absolute;
		color: #fff;
		bottom: 20px;
		padding: 10px;
		font-size: 18px;
		font-weight: bold;
		text-shadow: #000 1px 1px 1px;
	}

</style>