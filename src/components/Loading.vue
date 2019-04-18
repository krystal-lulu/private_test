<template>
	<div class="container">
		<p class="load">正在加载，请稍后...</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Loading'
	};
</script>
<style type="text/css" scoped>
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: load 2s linear infinite;
	}
	@keyframes load {
		0% {
			opacity: 1;
		}
		20% {
			opacity: 0.5;
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
			opacity: 0.5;
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
			opacity: 0.5;
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
			opacity: 0.5;
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