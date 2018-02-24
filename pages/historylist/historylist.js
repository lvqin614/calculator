Page({
    data: {
    	logs:[]
    },
    onLoad: function() {
        var logs = wx.getStorageSync('callogs');
        this.setData({ logs: logs });
    }
})