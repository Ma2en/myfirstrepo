// JavaScript Document

var imagecount = 1,
    total = 5,
    folder ="images/cars/",
	image;
	
	function slide(i){
		imagecount = imagecount + i;
		image = document.getElementsByName(slider)
		if(imagecount < 1 ){ imagecount = total; }
		if(imagecount > total) {imagecount = 1;}
		image.src = folder+imagecount+".jpg";
		}
	
	function slideNext(){
		
		     slide(+1);
		}
	function slidePrev(){
		
		      slide(-1);
		}
		
		
		
		
 var imgopacity=1;
 var titleopacity=0;
 var slideimgs=document.getElementsByName("Slide");
 var imgCounter=0;
 
function fadeout(){
	imgopacity=imgopacity-0.005;
	if(imgopacity<=0)
	{
		imgopacity=0;
		imgCounter++;
		if(imgCounter>=slideimgs.length)imgCounter=0;
		setTimeout(fadein,10);
	}
	else
	{
		slideimgs[imgCounter].style.opacity=imgopacity;
		setTimeout(fadeout,5);
	}
}

function fadein(){
	imgopacity=imgopacity+0.005;
	if(imgopacity>=1)
	{
		imgopacity=1;
		setTimeout(titlefadein,1000);
		setTimeout(fadeout,6000);
	}
	else
	{
		slideimgs[imgCounter].style.opacity=imgopacity;
		setTimeout(fadein,5);
	}
}

function titlefadein(){
	document.getElementById("slideTitle").innerHTML=slideimgs[imgCounter].title;
	titleopacity=titleopacity+0.005;
	if(titleopacity>=1)
	{
		titleopacity=1;
		setTimeout(titlefadeout,2000);
	}
	else
	{
		document.getElementById("slideTitle").style.opacity=titleopacity;
		setTimeout(titlefadein,5);
	}
}

function titlefadeout(){
	titleopacity=titleopacity-0.005;
	if(titleopacity<=0)
	{
		titleopacity=0;
	}
	else
	{
		document.getElementById("slideTitle").style.opacity=titleopacity;
		setTimeout(titlefadeout,5);
	}
}

function fade(){
	slideimgs[0].style.opacity=imgopacity;
	setTimeout(titlefadein,1000);
	setTimeout(fadeout,6000);
}
