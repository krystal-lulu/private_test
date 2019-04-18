<template>
	<div class="container" >
			<span class="glyphicon glyphicon-menu-hamburger text-left icon" aria-hidden="true"></span>
			<div class="text-center title">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Title',
		props: ['goBack', 'title'],
		data() {
			return {
				position: 'fixed'
			}
		},
		computed: {
		
		},
		methods: {
		
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 7vh;
		background-color: red;
		display: flex;
		align-items: center;
		z-index: 999;
		position: fixed;
		top: 0;
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
