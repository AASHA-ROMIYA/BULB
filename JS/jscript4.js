

function pictureon(){
    
let bulbobj=document.querySelector("#pic");
bulbobj.setAttribute("src" , "IMAGES/pic_bulbon.png");
}

function pictureoff(){
    
    let bulbobj=document.querySelector("#pic");
    bulbobj.setAttribute("src" , "IMAGES/pic_bulboff.gif");
    }

    function changeimage(){
        var img=document.getElementById('pic');
        if(img.src.match("bulbon")){
            img.src="IMAGES/pic_bulboff.gif";
        }
        else{
            img.src="IMAGES/pic_bulbon.png";
        }
    }