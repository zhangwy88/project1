Page({
  data:{
    src:"",
    videosrc:"http://1257627524.vod2.myqcloud.com/1a9eb630vodtransgzp1257627524/f7a41c575285890782264605588/v.f20.mp4"
  },
  bindButtonTap:function(){
    var that = this;
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:['front','back'],
      success:function(res){
        that.setData({
          src:res.tempFilePath
        })
      }
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },
  onReady:function(){
    this.vedioctx = wx.createVideoContext('myVideo');
    
  },
  continuePlay:function(){
    
    this.setData({
      videosrc: "http://1257627524.vod2.myqcloud.com/1a9eb630vodtransgzp1257627524/aa6f71d35285890782080274676/v.f20.mp4"});
    //this.vedioctx = wx.createVideoContext('myVideo');
    this.vedioctx.pause();
    this.vedioctx.seek(4);
    var that = this;
    setTimeout(function(){
      that.vedioctx.play();
    },1000)
    
    
  }
})