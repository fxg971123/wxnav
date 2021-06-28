<template>
	<el-container>
		<el-header><Nav /></el-header>
		<el-main>
			<Jumbotron />
		</el-main>
		<el-footer>
			footer
		</el-footer>
	</el-container>
</template>

<script>
import Nav from './components/Nav.vue'
import Jumbotron from './components/Jumbotron.vue'

// import NavCard from 'components/NavCard.vue'

export default {
  name: 'App',
  components: {
    Nav,
	Jumbotron
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/base.styl'
.el-header
	background-color navBgColor
.el-container .el-main
	padding 0
</style>
