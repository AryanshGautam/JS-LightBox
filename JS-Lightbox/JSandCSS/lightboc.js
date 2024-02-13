// function yto include html popup code

function includepopupHTML(){
    let html = '<div id="popup"><span id="close" onclick="closePopUp()"><img src="JSandCSS\images\cross.png" alt="" id="cross"></span><img src="JSandCSS\images\left.png" alt="" id="leftarrow"><img src="JSandCSS\images\right.png" alt="" id="rightarrow"><img id="popimage" src="JSandCSS\images\las.jpg"></div>'

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild); //with help of this line hunmne isko body ka first chlid bna diya
}

//global variable
let img;
let currentimg;
//function to init (initialize) function
function imagePopupInit(target){
    //select all images with class target
    img = document.getElementsByClassName(target);//humne class independent rehne di user ko freedom di ki tu choose kr konsi class targer as a parameter

    //add event listner for all selected images to kyunki ye ek array bna h images ka so we will work with for loop
    for(var i = 0; i<img.length; i++){
        //add pointer
        //img[i].style.cursor = 'pointer';

        //add event listner
        img[i].addEventListener("click", function(){
            document.getElementById("popimage").src = this.src; //mtlb jis image pe click kiya gya h uska src-path
            document.getElementById("popup").style.display = 'block';
            checkarrow();
        })
    }
    includepopupHTML();

    //next buttopn 
        document.getElementById('rightarrow').addEventListener('click' , function(){
            nextimg();
        });
    //prev button
    document.getElementById('leftarrow').addEventListener('click' , function(){
        previmg();
    });
}

//close button

function closePopUp(){
    document.getElementById("popimage").src = ""; //no path therefore no image
            document.getElementById("popup").style.display = 'none';
} //isko jake jod do html tag pr jha close bnya tha onclick property lgake

//right image
    function nextimg(){
        getCurrentImage();
        currentimg++;
        document.getElementById("popimage").src = img[currentimg].src;
        checkarrow();
    }
//left image
    function previmg(){
        getCurrentImage();
        currentimg--;
        document.getElementById("popimage").src = img[currentimg].src;
        checkarrow();
    }

function getCurrentImage(){
    for (var i = 0; i<img.length; i++){
        if(img[i].src == document.getElementById("popimage").src){
            currentimg = i;
        }
    }
}

//arrow ko hide or show krwana h
function checkarrow(){
    getCurrentImage();
    if(currentimg == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }
    else if(currentimg == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }
    else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}