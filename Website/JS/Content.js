var clicks = 0;
var fired = false;
var likes = 0;
var dislikes = 0;

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
    if(likes == 0){
        likes ++;
        calculateBar();
    }
    if(likes == 0 && dislikes == 1){
        likes++;
        dislikes--;
        calculateBar();
    }
    if(likes ==1 && dislikes == 1){
        dislikes--;
        calculateBar();
    }
}

function Dislike(){
    if(dislikes == 0){
        dislikes++;
        calculateBar();
    }
    if(likes == 1 && dislikes == 0){
        likes--;
        dislikes++;
        calculateBar();
    }
    if(likes ==1 && dislikes ==1){
        likes--;
        calculateBar();
    }
}

function Views(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function calculateBar(){
    var total = likes + dislikes;
    var percentageLikes = (likes/total)*100;
    var percentageDislike = (dislikes/total)*100;
    document.getElementById("likes").style.width= percentageLikes.toString()+"%";
    document.getElementById("dislikes").style.width= percentageDislike.toString()+"%";

    document.getElementById('LikeButton').value="Like("+likes.toString()+")";
    document.getElementById('DislikeButton').value="Disike("+dislikes.toString()+")";
}
