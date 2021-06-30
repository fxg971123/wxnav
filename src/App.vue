<template>
	<el-container>
		
		<el-header>
			<Nav :channel="channel" />
		</el-header>
		<el-main>
			<Jumbotron />
			<div class="container">	
				<div class="mb24" v-for="(item,index) in channel" :key="index" >
					<NavCard :cardtitle="item.title" />
				</div>				
			</div>
		</el-main>
		<el-footer>
				本站收录的网站或发布的内容若侵害到您的利益，请联系删除处理！| Email：fxg971123@gmail.com 请注明来意！<br />
				Copyright &copy; 2021 老乌龟导航资源网					
		</el-footer>		
		<el-backtop></el-backtop>
	</el-container>
</template>

<script>
	import Nav from './components/Nav.vue'
	import Jumbotron from './components/Jumbotron.vue'
	import NavCard from './components/NavCard.vue'

	export default {
		name: 'App',
		components: {
			Nav,
			Jumbotron,
			NavCard
		},
		data() {
			return {
				channel: [
					{
						title: '技术手册',
						index: '1'
					},
					{
						title: '影视导航',
						index: '2'
					},
					{
						title: '资源搜索',
						index: '3'
					},
					{
						title: '设计导航',
						index: '4'
					},
					{
						title: '软件工具',
						index: '5'
					},
					{
						title: '好用网站',
						index: '6'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import './assets/stylus/var.styl'
	.el-container
		background-color $baseColor
	.el-header
		background-color $navBgColor
	.el-container .el-main
		padding 0
	/deep/ .el-footer 
		padding 10px 20px 0 
		line-height 160% 
		font-size 14px 
		color $footerColor
		text-align center
	/deep/ .el-backtop
		display: block;
		box-shadow: 0 2px 12px 0 rgba(0 0 0 0.3);		
		position: fixed;
		right: 2%;
		bottom: 170px;
		color: #6b7386;
		font-size: 22px;
		text-align: center;
		cursor: pointer;
		transition: all .3s linear;
		background: $cardBg;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		line-height: 44px;
	
</style>
