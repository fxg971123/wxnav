<template>
	<el-card>
		<template #header>
			<div class="card-header">
				<strong>{{cardtitle}}</strong>
				<el-link href="#" type="primary">更多链接</el-link>
			</div>
		</template>
		<el-row :gutter="20" class="part">
			<el-col :xs="12" :sm="12" :md="6">
				<div class="item">
					<a href="#" class="item-link">						
						<h3 class="item-link-title">
							<span><img src="../../public/images/1-2105101H1280-L.png" class="item-link-icon">站长工具</span>
							<i class="el-icon-arrow-right"></i>
						</h3>
						<p class="item-link-doc">站长工具是站长的必备工具。经常上站长工具可以了解SEO数据变化。还可以检测网站死链接、蜘蛛访问、HTML格式检测、网站速度测试、友情链接检查、网站域名IP查询、PR、权重查询、alexa、whois查询等等。</p>
					</a>
				</div>
			</el-col>
			<el-col :xs="12" :sm="12" :md="6">
				<div class="item">
					<a href="http://www.iqiyi.com" class="item-link">
						<h3 class="item-link-title">
							<span><img src="../../public/images/1-210511160U20-L.png" class="item-link-icon">爱奇艺</span>
							<i class="el-icon-arrow-right"></i>
						</h3>
						<p class="item-link-doc">爱奇艺(iQIYI.COM)是拥有海量、优质、高清的网络视频的大型视频网站,专业的网络视频播放平台。爱奇艺影视内容丰富多元,涵盖电影、电视剧、动漫、综艺、生活、音乐</p>
					</a>
				</div>
			</el-col>
			<el-col :xs="12" :sm="12" :md="6">
				<div class="item">
					<a href="#" class="item-link">
						<h3 class="item-link-title">
							<span><img src="../../public/images/1-2105101H1280-L.png" class="item-link-icon">站长工具</span>
							<i class="el-icon-arrow-right"></i>
						</h3>
						<p class="item-link-doc">站长工具是站长的必备工具。经常上站长工具可以了解SEO数据变化。还可以检测网站死链接、蜘蛛访问、HTML格式检测、网站速度测试、友情链接检查、网站域名IP查询、PR、权重查询、alexa、whois查询等等。</p>
					</a>
				</div>
			</el-col>
			<el-col :xs="12" :sm="12" :md="6">
				<div class="item">
					<a href="#" class="item-link">
						<h3 class="item-link-title">
							<span><img src="../../public/images/1-2105101H1280-L.png" class="item-link-icon">站长工具</span>
							<i class="el-icon-arrow-right"></i>
						</h3>
						<p class="item-link-doc">站长工具是站长的必备工具。经常上站长工具可以了解SEO数据变化。还可以检测网站死链接、蜘蛛访问、HTML格式检测、网站速度测试、友情链接检查、网站域名IP查询、PR、权重查询、alexa、whois查询等等。</p>
					</a>
				</div>
			</el-col>
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
		background-color $cardBg 
		border-color transparent
		color fontColor
		position relative
	/deep/ .el-card__header
		border-bottom-color $cardBorderColor
	.card-header
		display flex
		align-items center		
		justify-content space-between
		color #fff
	.part 		
		.item
			border-radius 4px
			min-height 36px
			.item-link			
				color $fontColor
				text-decoration none
				padding 12px 8px
				transition all .32s ease-in-out
				width 100%
				display flex
				flex-direction column
				.item-link-title
					padding 0 10px 0 0
					display flex
					align-items center
					margin-bottom 10px
					font-size 14px
					position relative
					justify-content space-between
					span
						flex 1						
						align-items center						
						img
							vertical-align middle
					.item-link-icon
						width 32px
						height 32px
						border-radius 100%
						margin-right 5%
				.item-link-doc
					display -webkit-box								
					-webkit-box-orient: vertical;
					-webkit-box-orient: vertical;
					-webkit-line-clamp $linesToshow
					line-height $lineHeight
					overflow hidden
					text-overflow ellipsis
					font-size $fz12
					word-wrap:break-word;
					word-break:break-all;
					color #abb0bd
			&:hover
				box-shadow: 0px 5px 28px 0px rgba(13 12 12 0.4);


</style>
