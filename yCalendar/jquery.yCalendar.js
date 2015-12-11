;(function($) {
	$.fn.yCalendar = function(options) {
		
		// 设置容器的style
		$(this).css("display","inline-block");

		// 封装HTML
		var strHTML = '<a class="yCal-btn yCal-btn-minus" href="#">&lt;</a>';
		strHTML += '<input class="yCal-text" type="text" value="" readonly="readonly">';
		strHTML += '<a class="yCal-btn yCal-btn-add" href="#">&gt;</a>';
		$(this).append(strHTML);

		// 封装CSS
		var strStyle = '<style>'
		strStyle += '.yCal-text{width:40px;text-align:center;font-size:15px;color:#666;border:none}';
		strStyle += '.yCal-btn{text-decoration:none;display:inline-block;width:20px;text-align:center;padding:3px;color:#666}';
		strStyle += '.yCal-btn:hover{color:#fff;background-color:#65aff2}';
		strStyle += '</style>'
		$(this).append(strStyle);

		// 获取系统当前年份，用于默认值
		var now = new Date();
		var now_year = now.getFullYear();

		// 默认值
		var defaultVal = {
			text_year: now_year,
			min_year: '1978',
			max_year: '2050'
		};

		// 接收自定义参数
		var obj = $.extend(defaultVal, options);

		$(this).find('.yCal-text').val(obj.text_year);

		// 获取当前选择年份
		var _year = parseFloat($(this).find('.yCal-text').val());

		// 左右按钮事件
		$(this).find('.yCal-btn-minus').click(function() {
			if (_year > obj.min_year) {
				_year--;
			} else {
				return false;
			}
			$(this).siblings('.yCal-text').val(_year);
		});
		$(this).find('.yCal-btn-add').click(function() {
			if (_year < obj.max_year){
				_year++;	
			} else {
				return false;	
			}
			$(this).siblings('.yCal-text').val(_year);
		});
	};
})(jQuery);