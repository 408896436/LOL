<style scoped>
.tit{margin: 1rem 0;}
.img_context dl{width: 31.75rem; }
.img_context dt {position: relative;}
.img_context dt a{display: block; width: 31.55rem; border: 0.1rem solid #7f662b;}
.img_context dd{ line-height: 1.5rem; padding-top: 0.5rem; text-align: justify; }
</style>
<template>
<div class='book'>
		<div class='header'>
			<a href="javascript:;" @click='goBack' class='sp back sp bnt hidet' title='返回上一页'>返回上一页</a>
		</div>
		<div class='section'>
			<div class='img_context'>
				<h2 class='tit'>{{imglist[name].title}}</h2>
				<dl class='auto'>
					<dt class='under_text'>
							<a :href="imglist[name].pic" download='img'><img :src='imglist[name].pic'></a>
							<span>点击图片后长按下载图片</span>
					</dt>
				</dl>
			</div>
		</div>
	</div>

</template>
<script>
export default {
  beforeMount : function(){  
      this.name = this.$route.query.name;
  },
  methods : {
    goBack : function(){
      this.$router.goBack();
    }
  },
  data () {
    return {
      name : '',
      imglist : {
      	 '瓦斯塔亚族谱' : {
      	 	title : '瓦斯塔亚族谱',
      	 	pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img_vastaya_zupu.jpg'
      	 }
      }
    }
  }
}
</script>


