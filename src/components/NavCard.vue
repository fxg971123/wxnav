<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<strong>{{cardtitle}}</strong>
				<el-link href="#" type="primary">更多链接</el-link>
			</div>
		</template>
		<el-row :gutter="20">
			<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple">5</div></el-col>
		</el-row>		
	</el-card>
</template>

<script>
	export default {
		name: "NavCard",
		props:{
			cardtitle:{
				type:String,
				default:"titlename"
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="stylus" scoped>	
	@import '../assets/stylus/var.styl'
	.el-card 
		background-color cardBg 
		border-color transparent
		color fontColor
		position relative
	/deep/ .el-card__header
		border-bottom-color cardBorderColor
	.card-header
		display flex
		align-items center		
		justify-content space-between
		color #fff
	.grid-content
		border-radius: 4px;
		min-height: 36px;
		&.bg-purple
			background: #99a9bf;
</style>
