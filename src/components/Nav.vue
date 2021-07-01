<template>
	<el-row class="container">
		<el-col :span="24">		
			<div class="topbar">
				<el-menu :default-active="$route.path" class="el-menu-topnav" mode="horizontal" router>		
					<el-menu-item class="topbar-logo" index="/"><img class="logoimg" src="../../public/images/logo.png"></el-menu-item>
					<el-menu-item v-for="(item,key) in channel" :key="key" :index="item.url" >{{item.title}}</el-menu-item>
					<el-submenu class="right-item" index="10" style="float: right;" v-if="screenWidth">
						<template #title>
							<i class="el-icon-s-fold" style="font-size:28px;color:#fff;"></i>
						</template>
						<el-menu-item :key="key" v-for="(item,key) in channel" :index="item.index">{{item.title}}</el-menu-item>
					</el-submenu>
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
				activeIndex: '1',
				screenWidth: true
			}
		},
		mounted() {
			window.onresize = () => {
				this.screenWidth >= 768 ? true : false;
			}
		},
		computed:{			
			/* leftNavItems: function() {
				return this.screenWidth >= 768 ? true : false;
			} */
		}
	}
</script>

<style lang="stylus" scoped>	
	@import '../assets/stylus/var.styl'
	.topbar
	.topbar-logo
		.logoimg
			height 50px
			width 50px						
	.el-dropdown-menu,.el-menu
		background-color $navBgColor
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
			border-bottom-color $navBorderColor
			color $navColor		
		.el-menu-item:not(.is-disabled):focus, 
		.el-menu-item:not(.is-disabled):hover
			color $navBorderColor
			background-color transparent
</style>
