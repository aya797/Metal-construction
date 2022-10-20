let sec1 =document.querySelector(".sec1")
let images=["linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/9_slider_2.jpg')",
"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('images/17756.jpeg')",
"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('images/images.jfif')",
"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('images/منشات-معدنية-300x215.jpg')"];
var i=0;

window.setInterval(function(){
     sec1.style.backgroundImage=images[i];
     if(i==images.length-1)
     {
        i=0;
     }
     else{
        i++;
     }
},4000)



//scroll top     
var scrollButton = $(".scrolltop");
scrollButton.hide()
$(window).scroll(function () {
if ( $(this).scrollTop() >= 800 ) { 
scrollButton.show();
} else {
scrollButton.hide();
}
});
scrollButton.click(function () {
$("html,body").animate({ scrollTop: 0}, 600);
});