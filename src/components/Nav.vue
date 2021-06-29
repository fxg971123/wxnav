<template>
	<el-row>
		<el-col :span="24">		
			<div class="topbar">
				<div class="topbar-logo">
					<a href="/" class="logo"><img src="../../public/images/logo.png"></a>
				</div>
				<el-menu :default-active="activeIndex" class="el-menu-topnav" mode="horizontal">					
					<el-menu-item v-for="(item,i) in channel" :key="i" :index="i">{{item.title}}{{i}}</el-menu-item>					
				</el-menu>
			</div>			
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: "Nav",
		props:{
			channel:{
				type:Array,
				default:null
			}
		},
		data() {
			return {
				activeIndex: '0'
			}
		}
	}
</script>

<style lang="stylus" scoped>	
	@import '../assets/stylus/var.styl'
	.el-row
		width 1200px
		margin 0 auto
	.topbar
		display flex		
		justify-content start
		align-items center
	.topbar-logo			
		height 50px
		width 50px
		margin-right 4%
		.logo
			display block			
			img
				width 100%
				height 100%						
	.el-dropdown-menu,.el-menu
		background-color navBgColor
	.el-menu-topnav.el-menu--horizontal
		border-bottom-color #2c333c		
		.el-menu-item
			display: inline-block;
			padding: 0 15px;
			color: navColor;
			font-size: 16px;
			position: relative;
			z-index: 2;
			min-width: 68px;
			text-align: center;
		.el-menu-item.is-active
			border-bottom-color navBorderColor
			color navColor		
		.el-menu-item:not(.is-disabled):focus, 
		.el-menu-item:not(.is-disabled):hover
			color navBorderColor
			background-color transparent
</style>
