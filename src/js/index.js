function addVideo(vid, id)
{
	var video = new tvp.VideoInfo();
	video.setVid(vid);
	var player = new tvp.Player();
	player.create({
		width: '100%',
		height: '100%',
		video: video,
		modId: id,
		pic: '', //瑙嗛灏侀潰鍦板潃
		vodFlashSkin: "//imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf", //绮剧畝鐨偆 
		autoplay: true, //鏄惁鑷姩鎾斁
		onplaying : function(){
			if (typeof $audio != 'undefined') {
				$audio.pause();
				$musicBtn.addClass('pause');
			};
		},
		onpause : function(){
			if (typeof $audio != 'undefined') {
				$audio.play();
			};
		},
		onended : function(){
			if (typeof $audio != 'undefined') {
				$audio.play();
			};
		},
		onresume : function(){
			
			if (typeof $audio != 'undefined') {
				$audio.pause();
				$musicBtn.addClass('pause');
			};
		}

	});
}

function showTc(id){
	document.getElementById(id).style.display = 'block';
}

function hideTc(id){
	document.getElementById(id).style.display = 'none';
	if (id == 'mod') {
		document.getElementById('mod_player').innerHTML = '';
	};
}










