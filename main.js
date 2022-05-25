//Show when clicked
 function show(){
  document.getElementById('menu-btn').style.display = "none";
  document.getElementById('cancel-btn').style.display = "block";
  document.getElementById('content-sector').style.display = "block";
 }
 
//Hide when clicked
 function hide(){
  document.getElementById('cancel-btn').style.display = "none";
  document.getElementById('menu-btn').style.display = "block";
  document.getElementById('content-sector').style.display = "none";    
 }
 
 
//SHOWING VIDEO GAMES WHEN CLICKED
 function showvideo(){
  document.getElementById('video-wrapper').style.display = "block";
   var a = confirm('Do you want to view?');
   
   if(a==true){
    document.getElementById('video-wrapper').style.display = "block";
    document.getElementById('videobtn').textContent = "Viewing...";
   }else{
    document.getElementById('video-wrapper').style.display = "none";
    document.getElementById('videobtn').textContent = "View video";
   }
 }