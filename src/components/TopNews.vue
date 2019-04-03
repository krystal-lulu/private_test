<template>
	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in newsLatestTop">
				<div v-bind:style="{backgroundImage:'url(' + item.image + ')'}" class="image">
						<p class="title">{{ item.title }}</p>
				</div>
			</div>
     
		</div>
		<!-- Add pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		name: 'TopNews',
		props: ['newsLatestTop'],
		mounted() {
			var swiper = new Swiper('.swiper-container',{
				 	observer: true,
				 	observeParents: true,
		      autoplay: true,
		      loop: true,
		      pagination: {
		        el: '.swiper-pagination',
		      }
			})
		},
		methods: {
			theme() {

			}
		}
	};
</script>
<style type="text/css" scoped>
	.swiper-container {
		width: 100%;
		height: 200px;
	}
	.swiper-side {
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 width: 100%;
	}
	.image {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
	}
	.title {
		width: 100%;
		text-align: left;
		word-wrap: word-wrap;
		color: #fff;
		position: absolute;
		bottom: 20px;
		padding: 10px;
		font-size: 18px;
		font-weight: bold;
		text-shadow: #000 1px 1px 1px;
	}

</style>