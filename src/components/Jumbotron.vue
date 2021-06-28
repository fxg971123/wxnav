<template>
	<div class="jumbotron">		
		<div class="banner-wrap scenes-ready">
			<div id="stage">
				<div class="space"></div>
				<div class="mountains">
					<div class="mountain mountain-1"></div>
					<div class="mountain mountain-2"></div>
					<div class="mountain mountain-3"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Jumbotron"
	}
</script>

<style lang="stylus" scoped>
	.jumbotron
		background url(../assets/imgs/bg-container.png) repeat-x
		height 320px
		width 100%
		font-size 22px
		position relative
	.banner-wrap,#stage
		width 100%
		height 100%
	#stage			
		overflow hidden
		position relative
		overflow hidden
		.mountain
			width 240em
			position absolute
			left 0
			bottom 0
		.mountains
			width 100%
			height 17.78125em
			overflow hidden
			position absolute
			left 0
			bottom 0
			z-index 1
			opacity 0
			transition opacity 0.2s linear 0s
			transform-origin center top
		.mountain-1
			height 10.5em
			z-index 3
			background url(../assets/imgs/bg-mountain-1.png) repeat-x
			background-size auto 50%
			background-position 0 bottom
		.mountain-2
			height 10.5em
			z-index 2
			background url(../assets/imgs/bg-mountain-2.png) repeat-x
			background-size auto 50%
			background-position 0 bottom
		.mountain-3
			height 10.5em
			z-index 1
			background url(../assets/imgs/bg-mountain-3.png) repeat-x
			background-size auto 30%
			background-position 0 bottom
	.scenes-ready #stage 
		.mountains
			opacity: 1;
			-webkit-animation: mountains-in 0.8s ease-out 0s 1 normal forwards;
			-moz-animation: mountains-in 0.8s ease-out 0s 1 normal forwards;
			animation: mountains-in 0.8s ease-out 0s 1 normal forwards;
		.mountain-1 {-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation:moving 100s linear 0.8s infinite normal none;-moz-animation:moving 100s linear 0.8s infinite normal none;animation:moving 100s linear 0.8s infinite normal none;}
		.mountain-2 {-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation:moving 160s linear 0.8s infinite normal none;-moz-animation:moving 160s linear 0.8s infinite normal none;animation:moving 160s linear 0.8s infinite normal none;}
		.mountain-3 {-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation:moving 360s linear 0.8s infinite normal none;-moz-animation:moving 360s linear 0.8s infinite normal none;animation:moving 360s linear 0.8s infinite normal none;}
		.space
			background url(../assets/imgs/bg-space.png) repeat-x
			width 3840px
			height 100%
			position absolute
			top 0
			left 0
			z-index 0
			transform:translate3d(0,0,0)
			animation:moving 450s linear 0.8s infinite normal none
	@keyframes moving {0% {transform:translate3d(0,0,0);}
		100% {transform: translate3d(-50%,0,0);}
	}
	@keyframes mountains-in {0% {transform:scale(1.5);}
		100% {transform:scale(1);}
	}
	@keyframes moving {0% {transform:translate3d(0,0,0);}
		100% {transform:translate3d(-50%,0,0);}
	}
	
	
	

</style>
