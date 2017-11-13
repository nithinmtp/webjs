

  var image1=new Image();
  image1.src="imgs/four.jpg" 
  var image2=new Image();
  image2.src="imgs/six.png"
  var image3=new Image();
  image3.src="imgs/five.jpg"


 //<img id="cover_pic" src="imgs/five.jpg" name="slide"> 
 var step=1
  function slideit()
  {
    document.images.slide.src=eval("image"+step+".src")
    if(step<3)
      step++
    else 
      step=1
    setTimeout("slideit()",2500)
  }
  slideit() 




