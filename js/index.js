window.onload = function (){
//	底部箭头动画效果
var jiantou = document.getElementById('jiantou');
var jiantouSpan = jiantou.children[0];
console.log(jiantouSpan.style.color);
fn();
var timer=null;
	timer = setInterval(fn,500);
	function fn (){
		if(jiantouSpan.style.color == ''||jiantouSpan.style.color == 'rgb(241, 241, 241)'){
			jiantouSpan.style.color = '#a3a3a3';
			jiantou.style.bottom = '35px';
		}else{
			jiantouSpan.style.color = '#f1f1f1';
			jiantou.style.bottom = '39px';
			
		}
		
	}
//	logo图片卷到一定地方之后就改变
var logo = document.getElementById('logo');
var logoImg = logo.children[0];

	 window.onscroll = function () {
	 	var scrollTop =  document.documentElement.scrollTop;
//	 	console.log(scrollTop)
        if(scrollTop<700){
        	logo.innerHTML = '滴滴';
        	logo.style.background = 'url(img/footer-logo.abbb68d2.svg) no-repeat left 0';
	}else{
		logo.style.background = 'url(img/logo-zh.a7abd90d.svg)';
		logo.innerHTML = '';
	}
}



}