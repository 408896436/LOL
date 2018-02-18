<style scoped>
.tit{margin: 1rem 0;}
.beautiful_scenery li{width: 31.5rem; margin: 0 auto 1.25rem; border: 0.1rem solid #6d541e;}
</style>
<template>
<div class='book'>
    <div class='header'>
      <a href="javascript:;" @click='goBack' class='sp back sp bnt hidet' title='返回上一页'>返回上一页</a>
    </div>
    <div class='section'>
      <div class='beautiful_scenery'>
        <h2 class='tit'>艺术画廊</h2>
        <ul>
          <li v-for='item in piclist[name]'>
              <img :src="item">
          </li>
        </ul>
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
        name : '洛',
        piclist : {

          '洛' : [
            '//yz.lol.qq.com/v1/assets/images/rakan-concept.jpg',
            '//yz.lol.qq.com/v1/assets/images/rakan-final.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-reveal-1.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-reveal-2.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-group-concept.jpg'
          ],
          '霞' : [
            '//yz.lol.qq.com/v1/assets/images/xayah-concept.jpg',
            '//yz.lol.qq.com/v1/assets/images/xayah-final.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-reveal-1.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-reveal-2.jpg',
            '//yz.lol.qq.com/v1/assets/images/duo-group-concept.jpg'
          ],
          '雷恩加尔' : [
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_3.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_2.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_1.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_5.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_4.jpg'
          ],
          '阿狸' : [
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_ahri_1.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_ahri_2.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_ahri_3.jpg'
          ],
          '悟空' : [
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_monkeyking_1.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_monkeyking_2.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_monkeyking_3.jpg'
          ],
          '娜美' : [
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_nami_1.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_nami_2.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_nami_3.jpg',
            '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_nami_4.jpg',
            '//yz.lol.qq.com/v1/assets/images/image-gallery/nami_the_tidecaller.jpg'
          ]

        }
    }
  }
}
</script>


