<template>
	<el-container>
		<el-header>
			<Nav :channel="channel" />
		</el-header>
		<el-main>
			<Jumbotron />
			<div class="cards-wrap">	
				<div class="mb24" v-for="(item,index) in channel" :key="index" >
					<NavCard :cardtitle="item.title" />
				</div>				
			</div>
		</el-main>
		<el-footer>
			<div>
				本站收录的网站或发布的内容若侵害到您的利益，请联系删除处理！| Email：fxg971123@gmail.com 请注明来意！<br />
				Copyright &copy; 2021 乌龟导航资源网
			</div>
		</el-footer>
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
						title: '技术手册'
					},
					{
						title: '影视导航'
					},
					{
						title: '资源搜索'
					},
					{
						title: '设计导航'
					},
					{
						title: '软件工具'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import './assets/stylus/var.styl'
	.el-header
		background-color navBgColor
	.el-container .el-main
		padding 0
	.cards-wrap 
		width 1200px
		margin 0 auto
	/deep/ .el-footer 
		padding 10px 20px 0 
		line-height 160% 
		font-size 14px 
		color footerColor
		text-align center
</style>
