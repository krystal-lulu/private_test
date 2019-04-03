<template>
	<div class="container" >
			<span class="glyphicon text-left icon"  :class="!back? 'glyphicon-menu-hamburger': 'glyphicon-chevron-left' " aria-hidden="true"  @click="prev()"></span>
			<div class="text-center title">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Title',
		props: ['goBack'],
		data() {
			return {
				position: 'fixed'
			}
		},
		computed: {
			title() {
				return this.$route.meta.title
			},
			back() {
				return this.$route.meta.back
			}
		},
		methods: {
			prev() {
				this.$router.goBackPage()
			}
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 50px;
		background-color: red;
		display: flex;
		align-items: center;
		z-index: 999;
	}
	.icon {
		color: #fff;
	}

	.title {
		width: 100%;
		color: #fff;
		font-weight: bold;
	}

</style>
