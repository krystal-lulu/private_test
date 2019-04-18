<template>
	<div class="container">
			<div class="row">
				<!-- <img class="img-circle userImg col-xs-4"> -->
				<div class="col-xs-12 text-center title">菜单</div>
			</div>
			<div class="row">
					<div class="col-xs-4 text-center">
						<span class="glyphicon glyphicon-star-empty"></span>
						<p>收藏</p>
					</div>
					<div class="col-xs-4 text-center">
						<span class="glyphicon glyphicon-bell"></span>
						<p>消息</p>
					</div>
					<div class="col-xs-4 text-center">
						<span class="glyphicon glyphicon-cog"></span>
						<p>设置</p>						
					</div>
			</div>
		<ul class="nav nav-pills nav-stacked">
			<li role="presentation" class="active" >
				<router-link to="./daily" class="menu">
					<span class="glyphicon glyphicon-home"></span>
					<span>首页</span>
					<span class="glyphicon glyphicon-menu-right"></span>
				</router-link>
			</li>
			<li role="presentation">
				<router-link to="./theme" class="menu">
					<span class="glyphicon glyphicon-home"></span>
					<span>主题</span>
					<span class="glyphicon glyphicon-menu-right"></span>
				</router-link>
			</li>
		
		</ul> 
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Menu',
		mounted() {
			var _self = this;
			$('.nav li').on('click', function() {
				_self.$emit('closeMenu');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
		},
	};
</script>
<style type="text/css" scoped>
	div, p, span {
		color: #fff;
	}
	.title {
		padding: 12px 0;
		border-bottom: 1px solid #fff;
		margin-bottom: 12px;
	}
	.container {
		padding: 0;
	}
	.menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav.nav-pills>li {
		border-bottom: 1px solid #fff;
	}
	.nav.nav-pills>li>a {
		background-color: transparent;
	}
	.nav.nav-pills>li:hover {
		background-color: #000;
		opacity: 0.3;
	}
	
	
</style>