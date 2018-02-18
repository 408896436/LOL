<style scoped>
.login{width: 31.75rem; text-align: right; margin-bottom: 0.75rem;}
  
.none{display: none;}
.video_main p{width: 32rem; margin: 1rem auto; font-size: 1.4rem;}
.herolist ul{overflow: hidden; padding-left: 2.9rem;}
.herolist li{display: block; width: 9.75rem; border: 0.1rem solid #9f8540; float: left; display: inline; margin: 0 1rem 1rem 0; position: relative;}
.herolist li span{display: block; width: 100%; height: 2.5rem; line-height: 2.5rem; font-size: 1rem; text-align: center; position: absolute; bottom: 0; left: 0; border-top: 0.1rem solid #9f8540;}
.race ul{width: 31.7rem; overflow: hidden;}
.race ul li{margin-bottom: 0.85rem; float: left; display: inline; width: 31.45rem; position: relative;}
.race .lx3, .race .lx4{width: 15.05rem; float: left;}
.race .lx4, .player_opus .lx2{float: right;}

.player_opus ul{width: 31.7rem; overflow: hidden;}
.player_opus li{float: left; position: relative;}
.player_opus li a{display: block; width: 100%;}

.szhero_cg{display: block; height: 100%; width: 100%; overflow: hidden;}

</style>
<template>
  <div id="app">
      <div class='book'>
    <div class="none">
      <audio src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/demacia_music.mp3" id="audio" autoplay="true" loop></audio>
    </div>
    <div class='header'><a id='musicbnt' class='musicbnt musicbnt_off sp bnt' href="javascript:void(0);"></a></div>
    <div class='section'>
      <div class='login auto'>
        <div id="unlogin">
          <a href="javascript:void(0);" id="ptLoginBtn" style="cursor: pointer;">[登录]</a>
        </div>
        <div id="logined" style="display:none;">
          <span id="login_nickname_span" style="display:none;"></span>
          欢迎您，<span id="userinfo"></span>
          <a href="javascript:void(0);" id="ptLogoutBtn" style="cursor: pointer;">[注销]</a>
        </div>
      </div>
      <div class='video_main'>
        <div class='video_body' id='video_box'>
          <a href="javascript:showTc('mod');addVideo('g0399ce9ky9','mod_player');" class='video_box bg'>
            <img src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v2.jpg">
            <em class='button_v'>观看视频</em>
          </a>
        </div>
        <p>瓦斯塔亚人是符文之地上的一种似人非人似兽非兽的杂合生物，他们同时具有人类的血脉和某个史前物种的灵能魔力。从雷恩加尔的蛮兽怪力，到阿狸的狐媚妖艳，不同的瓦斯塔亚人从外观上也截然不同，但他们都一定会同时具备动物和人类的特质...</p>
        <router-link class='lookstory icon_bnt' :to="'/story?name=探秘瓦斯塔亚种族'" title='查看完整故事'>
          <span class='bookmark sp'></span>
          查看完整故事
        </router-link>
      </div>
      <div class='herolist'>
        <h2 class='tit'>瓦斯塔亚种族的英雄们</h2>
        <ul>
			<li v-for='(item,key) in hero'>
				<router-link :to="'/abouthero?name='+item.name"><img :src="item.pic"></router-link>
          		<span>{{item.name}}</span>
			</li>
        </ul>
      </div>
      <div class='race'>
        <h2 class='tit'>探秘瓦斯塔亚种族</h2>
        <ul class='auto'>
          <li class='bg lx1' id='szhero_cg'>
            <router-link class='szhero_cg' :to="'/video?name=万法复苏'">
              <img src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v1.jpg" alt='观看CG：万法复苏' border='0'>
              <em class='button_v'>观看CG《万法复苏》</em>
            </router-link>
          </li>
          <li class='bg lx2'>
            <a href='voice_vastaya.html?hero=index'>
              <img src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v3.jpg" alt='洛&霞 有声故事' border='0'>
              <em class='button_g'>听有声故事：洛&霞</em>
            </a>
          </li>
          <li class='bg lx3'>
            <router-link :to="'/story?name=旅行者手记'">
              <img src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v4.jpg" alt='瓦斯塔亚调查手记' border='0'>
              <em class='button_g'>瓦斯塔亚调查手记</em>
            </router-link>
          </li>
          <li class='bg lx4'>
            <router-link :to="'/imgdownload?name=瓦斯塔亚族谱'">
              <img src="//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/v5.jpg" alt='瓦斯塔亚族谱' border='0'>
              <em class='button_g'>瓦斯塔亚族谱</em>
            </router-link>
          </li>
        </ul>
      </div>
      <bot-link></bot-link>
    </div>
    <div class='tc fx' onclick='hideTc("fx")' id='fx' style='display:none;'>
      <span class='sp hidet'>加入我们的城邦</span>
    </div>
  </div>
  <div class='tc' id='mod' style='background:rgba(0,0,0,0.5); display:none;'>
      <div class='mod_list'>
          <div id='mod_player'></div>
          <a href="javascript:hideTc('mod')" class='close'>×</a>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hero : [
      	{
      		'name' : '洛', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img1.jpg', 
      		'to' : '/abouthero'
      	},
      	{
      		name : '霞', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img2.jpg',
      		'to' : '/abouthero'
      	},
      	{
      		name : '雷恩加尔', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img3.jpg',
      		'to' : '/abouthero'
      	},
      	{
      		name : '阿狸', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img5.jpg',
      		'to' : '/abouthero'
      	},
      	{
      		name : '悟空', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img6.jpg',
      		'to' : '/abouthero'
      	},
      	{
      		name : '娜美', 
      		'pic' : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/img4.jpg',
      		'to' : '/abouthero'
      	}
      ]
    }
  }
}
</script>


