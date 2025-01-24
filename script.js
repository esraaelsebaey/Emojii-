var emjoii=document.getElementById('emjoii');
var text=document.getElementById('text');
var parentText=document.getElementById('parentText')


function displayImg(){
    parentText.style.display="none";
    emjoii.style.display="block";
}
function displayText(){
    parentText.style.display="block";
    emjoii.style.display="none";
   
}
function laugh(){
    displayImg();
    emjoii.src="images/13.png";
}
function sad(){
    displayImg();
    emjoii.src="images/5.png";
}
function angery(){
    displayImg();
    emjoii.src="images/3.png";
}
function love(){
    displayImg();
    emjoii.src="images/8.png";
}
function sleep(){
    displayImg();
    emjoii.src="images/16.png";
}
function shocked(){
    displayImg();
    emjoii.src="images/10.png";
}
function devil(){
    displayImg();
    emjoii.src="images/1.png";
}
function melt(){
    displayImg();
    emjoii.src="images/15.png";
}


function laughText(){
    displayText();
    text.innerHTML+="<div>Laugh</div>"
}
function sadText(){
    displayText();
    text.innerHTML+="<div>Sad</div>"
}
function angeryText(){
    displayText();
    text.innerHTML+="<div>Angery</div>"
}
function loveText(){
    displayText();
    text.innerHTML+="<div>Love</div>"
}
function sleepText(){
    displayText();
    text.innerHTML+="<div>Sleep</div>"
}
function shockedText(){
    displayText();
    text.innerHTML+="<div>Shocked</div>"
}
function devilText(){
    displayText();
    text.innerHTML+="<div>Devil</div>"
}
function meltText(){
    displayText();
    text.innerHTML+="<div>Melt</div>"
}