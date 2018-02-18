<style scoped>
.tit{margin: 1rem 0;}
  .header{ height: 13rem;}
  .zym{text-align: center;}
  
  .herolist{font-size: 1.4rem !important;}
  .hero_box{  width: 31.5rem; height: 6.4rem; border: 0.1rem solid #2f2c25; background: #1c171e; margin-top: 1rem; text-align: center;}
  .hero_box dl{display: inline-block; padding-top: 0.5rem; }
  .hero_box dt span{display: block; width: 4.8rem;}
  .hero_box dt em{width: 0.1rem; height: 3rem; background: #2f2c25; position: absolute; left: 5.2rem; top: 1.2rem;}
  .hero_box dd{text-align: left; line-height: 1.7rem; padding: 1rem 0 0 2rem;}
  .hero_box dd h3{font-weight: normal; }
  .hero_box dt,.hero_box dd{float: left; display: inline; position: relative;}
  .hero_msg{ width: 31.5rem; text-align: justify; line-height: 1.8rem; padding-top: 1rem;}
  .lookgs{width:32rem; height:3.8rem; background-position:0 -11.3rem; margin-left: -0.3rem; }
  .hero_bnt{padding-bottom: 2rem;}
  .hero_bnt .icon_bnt{width: 31.5rem;}
  .hero_bnt .paint{display: block; width: 1.15rem; height: 1.15rem; background-position: 0 0; }
  .hero_bnt ul{width: 31.7rem; overflow: hidden;}
  .hero_bnt ul li{float: left; display: inline; width: 31.5rem; margin-top: 1.6rem; position: relative;}
  .hero_bnt .sm{ width: 15.08rem; float: left; }
  .hero_bnt .smx{margin-right: 0.9rem;}
  .player_opus{clear: both; padding-top: 1rem;}
  .player_opus ul :nth-child(1){margin-right: 1rem;}
  .player_opus ul{width: 31.7rem; overflow: hidden;}
  .player_opus li{width: 15.05rem; float: left; position: relative;}
  .player_opus li a{display: block; width: 100%;}
  .hero_bnt .under_text:after{ content: ''; display: block; width: 1.15rem; background: url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/sp.png') no-repeat 0 -23.85rem; background-size: 51.15rem; height: 1.15rem; position: absolute; bottom: 0.5rem; left: 12.3rem; }
</style>
<template>
  <div>
    <div class='book'>
    <div class='header' :style='hero[name].headerStyle'>
      <a href="javascript:;" @click='goBack' class='sp back sp bnt hidet' title='返回上一页'>返回上一页</a>
    </div>
    <div class='section'>
      <div class='herolist'>
        <h2 class='tit'>{{hero[name].name}}</h2>
        <p class='zym'>{{hero[name].zym}}</p>
        <div class='hero_box auto'>
          <dl>
            <dt>
              <span><img :src="hero[name].type.typepic"></span>
              <em></em>
            </dt>
            <dd>
              <h3>所属阵营 <span>{{hero[name].type.zy}}</span></h3>
              <p>角色定位：<span>{{hero[name].type.herotype}}</span></p>
            </dd>
          </dl>
        </div>
        <p class='hero_msg auto'>{{hero[name].story}}</p>
        <div class='hero_bnt auto'>
          <ul class='auto'>
            <li>
              <router-link class='lookstory icon_bnt' :to="'/story?name='+this.name" title='查看完整故事'>
              <span class='bookmark sp'></span>
              查看完整故事
              </router-link></li>
            <li class='bg noan'>
              <router-link class='under_text' :to='"/scenery?name="+this.name'><img :src="hero[name].yshl" alt='艺术画廊' border='0'><span>艺术画廊</span></router-link>
            </li>
            <li v-for='(item,key) in hero[name].cg' :class='item.className'>
              <router-link :to="item.url">
                <img :src="item.pic" border='0'>
                <em :class='item.emClassName' v-html='item.name'></em>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <bot-link></bot-link>
    </div>
    <div class='tc fx' onclick='hideTc("fx")' id='fx' style='display:none;'>
      <span class='sp hidet SG' bg='12.png'>加入我们的城邦</span>
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
      hero : {
         '洛' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/rakan.png')"
            },
            name : '幻翎 洛',
            zym : '“自由为伍，佳人为伴，还有值得献身的道义”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz5.png',
                zy : '艾欧尼亚',
                herotype : '辅助'
            },
            story : '对洛特兰部落而言，瓦斯塔亚的洛是臭名远播的捣蛋鬼，同时也是有史以来最为出色的战舞舞者。他风流潇洒，魅力无穷，同时却令人难以捉摸。在艾欧尼亚高地的居民眼中，“洛”这个名字一直都跟热闹非凡的节日庆典、热火朝天的狂欢派对和杂乱无章的音乐划上等号。很少人知道，这个精力充沛的浪荡子和叛逆的霞是一对儿，而他的一举一动就是为了全力配合她的行动...',
            yshl : 'http://yz.lol.qq.com/v1/assets/images/rakan-concept.jpg',
            cg : [{
               url : '',
               name : '听有声故事：洛&霞',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_1.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=万法复苏',
               name : '观看CG《万法复苏》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_8.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=登录界面',
               name : '欣赏音乐',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_5.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/story?name=怒火冲天的火弩',
               name : '阅读故事<br/>《怒火冲天的火弩》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img6.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_g : 'button_g', longtext : 'longtext'}
            }]
         },
         '霞' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/xayah.png')"
            },
            name : '逆羽 霞',
            zym : '“你知道羽毛能有多锋利么？”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz3.png',
                zy : '艾欧尼亚',
                herotype : '射手'
            },
            story : '身为瓦斯塔亚的志士，霞要掀起一场革命来拯救她的族群。她身法敏捷又慧心独具，凭借锋芒逼人的羽刃，扫除任何异己。霞与她的灵魂伴侣洛并肩作战，共同守护他们日渐衰落的部族，同时韬光养晦，希望终有一天能率领全族重夺昔日荣光...',
            yshl : '//yz.lol.qq.com/v1/assets/images/xayah-concept.jpg',
            cg : [{
               url : '',
               name : '听有声故事：洛&霞',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_1.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=万法复苏',
               name : '观看CG《万法复苏》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_8.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=登录界面',
               name : '欣赏音乐',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_2.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/story?name=普玻越狱之旅',
               name : '阅读故事<br/>《普玻越狱之旅》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img7.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_g : 'button_g', longtext : 'longtext'}
            }]
         },
         '雷恩加尔' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/rengar.png')"
            },
            name : '傲之追猎者 雷恩加尔',
            zym : '“猎杀弱者，能让你延续生命；猎杀强者，能让你享受人生”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz4.png',
                zy : '符文之地',
                herotype : '刺客'
            },
            story : '瓦斯塔亚的雷恩加尔是一名声名远扬又凶残无比的猎手。他的人生充满着追寻猎杀危险的生物的快感。他寻遍整个世界，只为寻找他能找到的最可怕的野兽，特别是寻找任何关于卡兹克的踪迹...',
            yshl : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_rengar_3.jpg',
            cg : [{
               url : '/video?name=新的曙光',
               name : '观看CG《新的曙光》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_3a.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=幕后花絮',
               name : '《新的曙光》幕后花絮',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_3.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/story?name=猎',
               name : '阅读故事《猎》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_6.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_g : 'button_g'}
            },{
               url : '/video?name=登录界面视频',
               name : '登录界面视频',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_7.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_v : 'button_v'}
            }]
         },
         '阿狸' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/ahri.png')"
            },
            name : '九尾狐妖 阿狸',
            zym : '“人心善变，甚于最深奥的魔法。”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz2.png',
                zy : '艾欧尼亚',
                herotype : '法师'
            },
            story : '符文之地的潜在力量是她与生俱来的纽带，原始的魔法在她手中凝为魔法宝珠。瓦斯塔亚人阿狸醉心于玩弄猎物的情感，然后吞噬他们的生命精魄。虽然阿狸是天生的掠食者，但她却对猎物始终保存着一份同情，因为每吞噬一个灵魂，都伴随着他们生前的记忆...',
            yshl : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_ahri_1.jpg',
            cg : [{
               url : '/story?name=忘忧花园',
               name : '阅读故事《忘忧花园》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img3.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_g : 'button_g'}
            },{
               url : '/story?name=公平交易',
               name : '阅读故事《公平交易》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img4.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_g : 'button_g'}
            },{
               url : '/video?name=新的曙光',
               name : '观看CG《新的曙光》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_3a.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_v : 'button_v'}
            },{
               url : '/video?name=幕后花絮',
               name : '《新的曙光》电影幕后',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/s_mg_3.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_v : 'button_v'}
            }]
         },
         '悟空' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/monkeyking.png')"
            },
            name : '齐天大圣 悟空',
            zym : '“有本事来拦我呀！”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz1.png',
                zy : '艾欧尼亚',
                herotype : '战士'
            },
            story : '悟空是一个瓦斯塔亚族的机灵鬼，用自己的力量、灵敏和机智迷惑对手并抢得先机。机缘巧合让他结识了一位剑客并与之成为一生的挚友，这位剑客被人称作易大师。后来，悟空就成为了古老武术门派“无极”的最后一位弟子。如今，附魔长棍傍身的悟空，目标是让艾欧尼亚免遭崩溃的命运...',
            yshl : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_monkeyking_3.jpg',
            cg : [{
               url : '/story?name=快而糙',
               name : '阅读故事《快而糙》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img5.jpg',
               className : {bg : 'bg', krc : 'krc'},
               emClassName : {button_g : 'button_g'}
            }]
         },
         '娜美' : {
            headerStyle : {
              backgroundImage: "url('//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/nami.png')"
            },
            name : '唤潮鲛姬 娜美',
            zym : '“潮浪带来什么，由我决定”',
            type : {
                typepic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/hz5.png',
                zy : '符文之地',
                herotype : '辅助'
            },
            story : '娜美作为强大年轻的瓦斯塔亚海族，可以运用她神奇的唤潮者之杖改变浪潮的形态，保护她的族人免受危险。她是族中第一个离开海洋、踏上陆地的人。面对眼前无法想象的未知局面，她咬紧牙关，怀着无比决心和无所畏惧的斗志一往无前...',
            yshl : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/scenery_nami_1.jpg',
            cg : [{
               url : '/story?name=初见',
               name : '阅读故事《初见》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img1.jpg',
               className : {bg : 'bg', sm : 'sm', smx : 'smx'},
               emClassName : {button_g : 'button_g'}
            },{
               url : '/video?name=唤潮者',
               name : '欣赏音乐《唤潮者》',
               pic : '//game.gtimg.cn/images/lol/universe/m/act/a20170415vastaya/t_img2.jpg',
               className : {bg : 'bg', sm : 'sm'},
               emClassName : {button_g : 'button_g'}
            }]
         }
      }
    }
  }
}
</script>


