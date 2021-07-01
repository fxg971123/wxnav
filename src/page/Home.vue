<template>
	<div>
		<Jumbotron />
		<div class="container">	
			<div class="mb24" v-for="(item,index) in channelData" :key="index" >
				<NavCard :cardtitle="item.title" />
			</div>				
		</div>
	</div>
</template>

<script>
	
	import Jumbotron from '../components/Jumbotron.vue'
	import NavCard from '../components/NavCard.vue'

	export default {
		name: 'Home',
		components: {			
			Jumbotron,
			NavCard
		},
		data() {
			return {
				channelData: [
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
	@import '../assets/stylus/var.styl'

</style>
