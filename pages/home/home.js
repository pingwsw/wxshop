// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
      "image": "https://img.alicdn.com/tfs/TB18.SngoY1gK0jSZFMXXaWcVXa-520-280.jpg",
      "target": ""
    }, {
      "image": "https://img.alicdn.com/simba/img/TB1c6RTgUz1gK0jSZLeSuv9kVXa.jpg",
      "target": ""
    }, {
      "image": "https://img.alicdn.com/simba/img/TB1l83ReUY1gK0jSZFMSuuWcVXa.jpg",
      "target": ""
    }, {
      "image": "https://img.alicdn.com/simba/img/TB1WGr6gQT2gK0jSZPcSuwKkpXa.jpg",
      "target": ""
    }, {
      "image": "https://img.alicdn.com/tfs/TB1DGmtghD1gK0jSZFyXXciOVXa-520-280.jpg",
      "target": ""
    }],
    recommends:[
      {
        "image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=982962057,916106502&fm=26&gp=0.jpg",
        "title": "十点抢券"
      },
      {
        "image": "http://img1.imgtn.bdimg.com/it/u=2133420516,455599681&fm=26&gp=0.jpg",
        "title": "好物特卖"
      },
      {
        "image": "http://img.wxcha.com/file/201809/14/ad2d9362ad.jpg",
        "title": "内购福利"
      },
      {
        "image": "http://www.agri35.com/UploadFiles/img_0_2631382258_2791316770_27.jpg",
        "title": "初秋上新"
      }
    ],
    tabData:[
      '流行','新款','精选'
    ],
    goodsList:[
      {
        image: "https://img.alicdn.com/bao/uploaded/i3/1122110005/O1CN01cixZMU1BuKXaZ7PG4_!!1122110005.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 90.56,
        favnum: 10  
      },
      {
        image: "http://wx4.sinaimg.cn/large/d2e27164gy1fdg0631x1vj21hc0xo7of.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 33.56,
        favnum: 20
      },
      {
        image: "http://wx4.sinaimg.cn/large/d2e27164gy1fdg0631x1vj21hc0xo7of.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 44.56,
        favnum: 30
      },
      {
        image: "https://img.alicdn.com/bao/uploaded/i3/1122110005/O1CN01cixZMU1BuKXaZ7PG4_!!1122110005.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 55.56,
        favnum: 40
      }
      ,
      {
        image: "http://wx4.sinaimg.cn/large/d2e27164gy1fdg0631x1vj21hc0xo7of.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 44.56,
        favnum: 30
      },
      {
        image: "https://img.alicdn.com/bao/uploaded/i3/1122110005/O1CN01cixZMU1BuKXaZ7PG4_!!1122110005.jpg",
        title: 'JackJones杰克琼斯男初秋季新百搭休闲运动卫衣男',
        price: 55.56,
        favnum: 40
      }
  
    ]
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('拉到底了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  handleTabClick:function(event){
    console.log(event);
    console.log(event.detail.index);
    console.log(event.detail.title);
  }
})