// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click:function(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        currIndex:index
      });
      this.triggerEvent('click',{index,title:this.properties.list[index]});
    }
  }
})
