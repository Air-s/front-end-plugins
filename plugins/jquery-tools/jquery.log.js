// 作用：封装控制台输出信息
// 调用：$.log(message)
// 说明：参数为空时只输出调用时间
$.extend({
	log: function (message) {
		var now = new Date(),	// 获取调用时间
			y = now.getFullYear(),
			m = now.getMonth() + 1,		// JavaScript中月份是从0开始的
			d = now.getDate(),
			h = now.getHours(),
			min = now.getMinutes(),
			s = now.getSeconds(),
			time = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;

		console.log(time + ' ' + (message ? message : ''));
	}
})