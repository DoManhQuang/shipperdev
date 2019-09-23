
 document.addEventListener("DOMContentLoaded",function(){
	const nut = document.querySelector('.nut');
	const bongden = document.querySelector('.bongden');
	const menu = document.querySelector('.menu');
	const cover = document.querySelector('.cover');
	const xoay = document.querySelector('.xoay');
	nut.onclick = function(){
		bongden.classList.add('bongden_hien');
		cover.classList.add('dichphai');
		xoay.classList.add('action');
	}
	bongden.onclick = function(){
		bongden.classList.remove('bongden_hien');
		cover.classList.remove('dichphai');
		xoay.classList.remove('action');
	}
 },false)
