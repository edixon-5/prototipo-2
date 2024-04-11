win.onload= function() {
 document.querySelector('.Loading-screen').style.display = 'flex';
setTimeOut(function() {
   document.querySelector('.Loading-screen').style.display = 'none';
   document.querySelector('.Content2').style.display = 'block';
}, 1000);
};
