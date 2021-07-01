<template>
	<div class="jumbotron">
		<div class="soFormContainer">
		<div class="soInner">
		<ul class="soTypeTab">
		<li id="76" class=""><a href="javascript:;">站内</a></li>
		<li id="102" class=""><a href="javascript:;">搜索</a></li>
		<li id="99" class="selected"><a href="javascript:;">影视</a></li>
		<li id="100" class=""><a href="javascript:;">网盘</a></li>
		<li id="101" class=""><a href="javascript:;">磁力</a></li>
		<li id="94" class=""><a href="javascript:;">小说</a></li>
		</ul>
		<div class="soForm">
		<form method="post" action="https://www.3zcs.com/So/go/" target="_blank">
		<input id="soAutoTip" type="hidden" autocomplete="off">
		<input id="souId" name="souId" type="hidden" value="45">
		<div class="soOuter"><div class="input">
		<input type="text" id="soInput" name="soInput" value="" incolor="#555" outcolor="#aaa" sotype="2" autocomplete="off" _soinput="独特的记忆功能，提升你的效率~^_^" style="color: rgb(170, 170, 170);">
		</div></div>
		<div class="subBtn"><a id="soSubmit" href="javascript:;"></a></div>
		</form>
		</div>
		<ul class="soItems">
		<li class=""><a urlid="45" href="javascript:;">电影天堂</a></li>
		<li class=""><a urlid="102" href="javascript:;">电影狗</a></li>
		<li class="selected"><a urlid="44" href="javascript:;">茶杯狐</a></li>
		<li><a urlid="46" href="javascript:;">一站搜</a></li>
		</ul>
		</div>
		</div>
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
		background url(../../public/images/bg-container.png) repeat-x
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
			background url(../../public/images/bg-mountain-1.png) repeat-x
			background-size auto 50%
			background-position 0 bottom
		.mountain-2
			height 10.5em
			z-index 2
			background url(../../public/images/bg-mountain-2.png) repeat-x
			background-size auto 50%
			background-position 0 bottom
		.mountain-3
			height 10.5em
			z-index 1
			background url(../../public/images/bg-mountain-3.png) repeat-x
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
			background url(../../public/images/bg-space.png) repeat-x
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
