<template>
	<div class="main">
		theme
	

		<button @click="back">back</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Theme',
		methods: {
			back() {
				this.$router.goBackPage()
			}
		}
	};
</script>
<style type="text/css">
	.main {
		width: 100%;
		height: 1200px;
	}
	button {
	
	}
</style>
