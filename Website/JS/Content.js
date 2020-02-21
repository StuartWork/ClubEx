var clicks = 0;
var fired = false;

var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe')) {
        if (!fired){
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        }
        fired = true;
    }
});

function Like(){
    document.getElementById('iframe').pauseVideo();
}

function Dislike(){
    document.getElementById('iframe').play();
}

function Views(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function test(){
    fired = false;
}

