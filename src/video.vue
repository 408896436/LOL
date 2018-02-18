<style scoped>
.tit{margin: 1rem 0;}
.video_list{width: 34rem;}
.video_list h3{font-size: 1.15rem; text-align: center; font-weight: normal; padding-bottom: 1rem;}
.button_v{margin-top: -3rem;}
</style>
<template>
<div class='book'>
    <div class='header'>
      <a href="javascript:;" @click='goBack' class='sp back sp bnt hidet' title='返回上一页'>返回上一页</a>
    </div>
    <div class='section'>
      <div class='video_context'>
        <h2 class='tit' v-html='videolist[name].title'></h2>
        <div class='video_list auto'>
          <div class='video_body' id='video_box'>
            <a :href='videolist[name].event' class='video_box bg'>
              <img :src="videolist[name].pic">
              <em class='button_v'></em>
            </a>
          </div>
        </div>
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
        videolist : {
            '万法复苏' : {
                title : '霞与洛：万法复苏',
                pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v1_s.jpg',
                event : 'javascript:addVideo("f0393f75jyc", "video_box")'
            },
            '登录界面' : {
                title : '霞与洛：登录界面',
                pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/duo-reveal-2.jpg',
                event : 'javascript:addVideo("o03999w9efv", "video_box")'
            },
            '新的曙光' : {
                title : '新的曙光',
                pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/new-dawn.jpg',
                event : 'javascript:addVideo("d0399pzdtuz", "video_box")'
            },
            '幕后花絮' : {
               title : '《新的曙光》幕后花絮',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/bts-new-dawn.png',
               event : 'javascript:addVideo("g0140mih7dv", "video_box")'
            },
            '登录界面视频' : {
               title : '<p style="display: inline-block; -webkit-text-fill-color:#D2BD82;">傲之追猎者<br>雷恩加尔登录界面</p>',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/Rengar_0.jpg',
               event : 'javascript:addVideo("j0399837g37", "video_box")'
            },
            '唤潮者' : {
               title : '唤潮者',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/nami-song.jpg',
               event : 'javascript:addVideo("u0145un1ni2", "video_box")'
            }
        }    
    }
  }
}
</script>


