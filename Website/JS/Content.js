

var clicks = 0;
var fired = false;

windows.onload = function(){
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe')) {
        if (!fired){
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        }
        fired = true;
    }
});
};

var likes = 0;
var dislikes = 0;
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

function calculateBar(){
    var total = likes + dislikes;
    var percentageLikes = (likes/total)*100;
    var percentageDislike = (dislikes/total)*100;
    document.getElementById("likes").style.width= percentageLikes.toString()+"%";
    document.getElementById("dislikes").style.width= percentageDislike.toString()+"%";

    document.getElementById('LikeButton').value="Like("+likes.toString()+")";
    document.getElementById('DislikeButton').value="Disike("+dislikes.toString()+")";
}

var clicks1 = 0;
var fired1 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe1')) {
        if (!fired2){
        clicks1 += 1;
        document.getElementById("clicks1").innerHTML = clicks1;
        }
        fired1 = true;
    }
});

likes1 = 0;
dislikes1 = 0;
function Like1(){
    if(likes1 == 0){
        likes1 ++;
        calculateBar1();
    }
    if(likes1 == 0 && dislikes1 == 1){
        likes1++;
        dislikes1--;
        calculateBar1();
    }
    if(likes1 ==1 && dislikes1 == 1){
        dislikes1--;
        calculateBar1();
    }
}

function Dislike1(){
    if(dislikes1 == 0){
        dislikes1++;
        calculateBar1();
    }
    if(likes1 == 1 && dislikes1 == 0){
        likes1--;
        dislikes1++;
        calculateBar1();
    }
    if(likes1 ==1 && dislikes1 ==1){
        likes1--;
        calculateBar1();
    }
}

function calculateBar1(){
    var total1 = likes1 + dislikes1;
    var percentageLikes1 = (likes1/total1)*100;
    var percentageDislike1 = (dislikes1/total1)*100;
    document.getElementById("likes1").style.width= percentageLikes1.toString()+"%";
    document.getElementById("dislikes1").style.width= percentageDislike1.toString()+"%";

    document.getElementById('LikeButton1').value="Like("+likes1.toString()+")";
    document.getElementById('DislikeButton1').value="Disike("+dislikes1.toString()+")";
}

var clicks2 = 0;
var fired2 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe2')) {
        if (!fired2){
        clicks2 += 1;
        document.getElementById("clicks2").innerHTML = clicks2;
        }
        fired2 = true;
    }
});

likes2 = 0;
dislikes2 = 0;
function Like2(){
    if(likes2 == 0){
        likes2 ++;
        calculateBar2();
    }
    if(likes2 == 0 && dislikes2 == 1){
        likes2++;
        dislikes2--;
        calculateBar2();
    }
    if(likes2 ==1 && dislikes2 == 1){
        dislikes2--;
        calculateBar2();
    }
}

function Dislike2(){
    if(dislikes2 == 0){
        dislikes2++;
        calculateBar2();
    }
    if(likes2 == 1 && dislikes2 == 0){
        likes2--;
        dislikes2++;
        calculateBar2();
    }
    if(likes2 ==1 && dislikes2 ==1){
        likes2--;
        calculateBar2();
    }
}

function calculateBar2(){
    var total2 = likes2 + dislikes2;
    var percentageLikes2 = (likes2/total2)*100;
    var percentageDislike2 = (dislikes2/total2)*100;
    document.getElementById("likes2").style.width= percentageLikes2.toString()+"%";
    document.getElementById("dislikes2").style.width= percentageDislike2.toString()+"%";

    document.getElementById('LikeButton2').value="Like("+likes2.toString()+")";
    document.getElementById('DislikeButton2').value="Disike("+dislikes2.toString()+")";
}

var clicks3 = 0;
var fired3 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe3')) {
        if (!fired3){
        clicks3 += 1;
        document.getElementById("clicks3").innerHTML = clicks3;
        }
        fired3 = true;
    }
});

likes3 = 0;
dislikes3 = 0;
function Like3(){
    if(likes3 == 0){
        likes3 ++;
        calculateBar3();
    }
    if(likes3 == 0 && dislikes3 == 1){
        likes3++;
        dislikes3--;
        calculateBar3();
    }
    if(likes3 ==1 && dislikes3 == 1){
        dislikes3--;
        calculateBar3();
    }
}

function Dislike3(){
    if(dislikes3 == 0){
        dislikes3++;
        calculateBar3();
    }
    if(likes3 == 1 && dislikes3 == 0){
        likes3--;
        dislikes3++;
        calculateBar3();
    }
    if(likes3 ==1 && dislikes3 ==1){
        likes3--;
        calculateBar3();
    }
}

function calculateBar3(){
    var total3 = likes3 + dislikes3;
    var percentageLikes3 = (likes3/total3)*100;
    var percentageDislike3 = (dislikes3/total3)*100;
    document.getElementById("likes3").style.width= percentageLikes3.toString()+"%";
    document.getElementById("dislikes3").style.width= percentageDislike3.toString()+"%";

    document.getElementById('LikeButton3').value="Like("+likes3.toString()+")";
    document.getElementById('DislikeButton3').value="Disike("+dislikes3.toString()+")";
}

var clicks4 = 0;
var fired4 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe4')) {
        if (!fired4){
        clicks4 += 1;
        document.getElementById("clicks4").innerHTML = clicks4;
        }
        fired4 = true;
    }
});

likes4 = 0;
dislikes4 = 0;
function Like4(){
    if(likes4 == 0){
        likes4 ++;
        calculateBar4();
    }
    if(likes4 == 0 && dislikes4 == 1){
        likes4++;
        dislikes4--;
        calculateBar4();
    }
    if(likes4 ==1 && dislikes4 == 1){
        dislikes4--;
        calculateBar4();
    }
}

function Dislike4(){
    if(dislikes4 == 0){
        dislikes4++;
        calculateBar4();
    }
    if(likes4 == 1 && dislikes4 == 0){
        likes4--;
        dislikes4++;
        calculateBar4();
    }
    if(likes4 ==1 && dislikes4 ==1){
        likes4--;
        calculateBar4();
    }
}

function calculateBar4(){
    var total4 = likes4 + dislikes4;
    var percentageLikes4 = (likes4/total4)*100;
    var percentageDislike4 = (dislikes4/total4)*100;
    document.getElementById("likes4").style.width= percentageLikes4.toString()+"%";
    document.getElementById("dislikes4").style.width= percentageDislike4.toString()+"%";

    document.getElementById('LikeButton4').value="Like("+likes4.toString()+")";
    document.getElementById('DislikeButton4').value="Disike("+dislikes4.toString()+")";
}

var clicks5 = 0;
var fired5 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe5')) {
        if (!fired5){
        clicks5 += 1;
        document.getElementById("clicks5").innerHTML = clicks5;
        }
        fired5 = true;
    }
});

likes5 = 0;
dislikes5 = 0;
function Like5(){
    if(likes5 == 0){
        likes5 ++;
        calculateBar5();
    }
    if(likes5 == 0 && dislikes5 == 1){
        likes5++;
        dislikes5--;
        calculateBar5();
    }
    if(likes5 ==1 && dislikes5 == 1){
        dislikes5--;
        calculateBar5();
    }
}

function Dislike5(){
    if(dislikes5 == 0){
        dislikes5++;
        calculateBar5();
    }
    if(likes5 == 1 && dislikes5 == 0){
        likes5--;
        dislikes5++;
        calculateBar5();
    }
    if(likes5 ==1 && dislikes5 ==1){
        likes5--;
        calculateBar5();
    }
}

function calculateBar5(){
    var total5 = likes5 + dislikes5;
    var percentageLikes5 = (likes5/total5)*100;
    var percentageDislike5 = (dislikes5/total5)*100;
    document.getElementById("likes5").style.width= percentageLikes5.toString()+"%";
    document.getElementById("dislikes5").style.width= percentageDislike5.toString()+"%";

    document.getElementById('LikeButton5').value="Like("+likes5.toString()+")";
    document.getElementById('DislikeButton5').value="Disike("+dislikes5.toString()+")";
}

var clicks6 = 0;
var fired6 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe6')) {
        if (!fired6){
        clicks6 += 1;
        document.getElementById("clicks6").innerHTML = clicks6;
        }
        fired6 = true;
    }
});

likes6 = 0;
dislikes6 = 0;
function Like6(){
    if(likes6 == 0){
        likes6 ++;
        calculateBar6();
    }
    if(likes6 == 0 && dislikes6 == 1){
        likes6++;
        dislikes6--;
        calculateBar6();
    }
    if(likes6 ==1 && dislikes6 == 1){
        dislikes6--;
        calculateBar6();
    }
}

function Dislike6(){
    if(dislikes6 == 0){
        dislikes6++;
        calculateBar6();
    }
    if(likes6 == 1 && dislikes6 == 0){
        likes6--;
        dislikes6++;
        calculateBar6();
    }
    if(likes6 ==1 && dislikes6 ==1){
        likes6--;
        calculateBar6();
    }
}

function calculateBar6(){
    var total6 = likes6 + dislikes6;
    var percentageLikes6 = (likes6/total6)*100;
    var percentageDislike6 = (dislikes6/total6)*100;
    document.getElementById("likes6").style.width= percentageLikes6.toString()+"%";
    document.getElementById("dislikes6").style.width= percentageDislike6.toString()+"%";

    document.getElementById('LikeButton6').value="Like("+likes6.toString()+")";
    document.getElementById('DislikeButton6').value="Disike("+dislikes6.toString()+")";
}

var clicks7 = 0;
var fired7 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe7')) {
        if (!fired7){
        clicks7 += 1;
        document.getElementById("clicks7").innerHTML = clicks7;
        }
        fired7 = true;
    }
});

likes7 = 0;
dislikes7 = 0;
function Like7(){
    if(likes7 == 0){
        likes7 ++;
        calculateBar7();
    }
    if(likes7 == 0 && dislikes7 == 1){
        likes7++;
        dislikes7--;
        calculateBar7();
    }
    if(likes7 ==1 && dislikes7 == 1){
        dislikes7--;
        calculateBar7();
    }
}

function Dislike7(){
    if(dislikes7 == 0){
        dislikes7++;
        calculateBar7();
    }
    if(likes7 == 1 && dislikes7 == 0){
        likes7--;
        dislikes7++;
        calculateBar7();
    }
    if(likes7 ==1 && dislikes7 ==1){
        likes7--;
        calculateBar7();
    }
}

function calculateBar7(){
    var total7 = likes7 + dislikes7;
    var percentageLikes7 = (likes7/total7)*100;
    var percentageDislike7 = (dislikes7/total7)*100;
    document.getElementById("likes7").style.width= percentageLikes7.toString()+"%";
    document.getElementById("dislikes7").style.width= percentageDislike7.toString()+"%";

    document.getElementById('LikeButton7').value="Like("+likes7.toString()+")";
    document.getElementById('DislikeButton7').value="Disike("+dislikes7.toString()+")";
}

var clicks8 = 0;
var fired8 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe8')) {
        if (!fired8){
        clicks8 += 1;
        document.getElementById("clicks8").innerHTML = clicks8;
        }
        fired8 = true;
    }
});

likes8 = 0;
dislikes8 = 0;
function Like8(){
    if(likes8 == 0){
        likes8 ++;
        calculateBar8();
    }
    if(likes8 == 0 && dislikes8 == 1){
        likes8++;
        dislikes8--;
        calculateBar8();
    }
    if(likes8 ==1 && dislikes8 == 1){
        dislikes8--;
        calculateBar8();
    }
}

function Dislike8(){
    if(dislikes8 == 0){
        dislikes8++;
        calculateBar8();
    }
    if(likes8 == 1 && dislikes8 == 0){
        likes8--;
        dislikes8++;
        calculateBar8();
    }
    if(likes8 ==1 && dislikes8 ==1){
        likes8--;
        calculateBar8();
    }
}

function calculateBar8(){
    var total8 = likes8 + dislikes8;
    var percentageLikes8 = (likes8/total8)*100;
    var percentageDislike8 = (dislikes8/total8)*100;
    document.getElementById("likes8").style.width= percentageLikes8.toString()+"%";
    document.getElementById("dislikes8").style.width= percentageDislike8.toString()+"%";

    document.getElementById('LikeButton8').value="Like("+likes8.toString()+")";
    document.getElementById('DislikeButton8').value="Disike("+dislikes8.toString()+")";
}

var clicks9 = 0;
var fired9 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe9')) {
        if (!fired9){
        clicks9 += 1;
        document.getElementById("clicks9").innerHTML = clicks9;
        }
        fired9 = true;
    }
});

likes9 = 0;
dislikes9 = 0;
function Like9(){
    if(likes9 == 0){
        likes9 ++;
        calculateBar9();
    }
    if(likes9 == 0 && dislikes9 == 1){
        likes9++;
        dislikes9--;
        calculateBar9();
    }
    if(likes9 ==1 && dislikes9 == 1){
        dislikes9--;
        calculateBar9();
    }
}

function Dislike9(){
    if(dislikes9 == 0){
        dislikes9++;
        calculateBar9();
    }
    if(likes9 == 1 && dislikes9 == 0){
        likes9--;
        dislikes9++;
        calculateBar9();
    }
    if(likes9 ==1 && dislikes9 ==1){
        likes9--;
        calculateBar9();
    }
}

function calculateBar9(){
    var total9 = likes9 + dislikes9;
    var percentageLikes9 = (likes9/total9)*100;
    var percentageDislike9 = (dislikes9/total9)*100;
    document.getElementById("likes9").style.width= percentageLikes9.toString()+"%";
    document.getElementById("dislikes9").style.width= percentageDislike9.toString()+"%";

    document.getElementById('LikeButton9').value="Like("+likes9.toString()+")";
    document.getElementById('DislikeButton9').value="Disike("+dislikes9.toString()+")";
}

var clicks10 = 0;
var fired10 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe10')) {
        if (!fired10){
        clicks10 += 1;
        document.getElementById("clicks10").innerHTML = clicks10;
        }
        fired10 = true;
    }
});

likes10 = 0;
dislikes10 = 0;
function Like10(){
    if(likes10 == 0){
        likes10 ++;
        calculateBar10();
    }
    if(likes10 == 0 && dislikes10 == 1){
        likes10++;
        dislikes10--;
        calculateBar10();
    }
    if(likes10 ==1 && dislikes10 == 1){
        dislikes10--;
        calculateBar10();
    }
}

function Dislike10(){
    if(dislikes10 == 0){
        dislikes10++;
        calculateBar10();
    }
    if(likes10 == 1 && dislikes10 == 0){
        likes10--;
        dislikes10++;
        calculateBar10();
    }
    if(likes10 ==1 && dislikes10 ==1){
        likes10--;
        calculateBar10();
    }
}

function calculateBar10(){
    var total10 = likes10 + dislikes10;
    var percentageLikes10 = (likes10/total10)*100;
    var percentageDislike10 = (dislikes10/total10)*100;
    document.getElementById("likes10").style.width= percentageLikes10.toString()+"%";
    document.getElementById("dislikes10").style.width= percentageDislike10.toString()+"%";

    document.getElementById('LikeButton10').value="Like("+likes10.toString()+")";
    document.getElementById('DislikeButton10').value="Disike("+dislikes10.toString()+")";
}

var clicks11 = 0;
var fired11 = false;
var listener = addEventListener('blur', function() {
	if(document.activeElement === document.getElementById('iframe11')) {
        if (!fired11){
        clicks11 += 1;
        document.getElementById("clicks11").innerHTML = clicks11;
        }
        fired11 = true;
    }
});

likes11 = 0;
dislikes11 = 0;
function Like11(){
    if(likes11 == 0){
        likes11 ++;
        calculateBar11();
    }
    if(likes11 == 0 && dislikes11 == 1){
        likes11++;
        dislikes11--;
        calculateBar11();
    }
    if(likes11 ==1 && dislikes11 == 1){
        dislikes11--;
        calculateBar11();
    }
}

function Dislike11(){
    if(dislikes11 == 0){
        dislikes11++;
        calculateBar11();
    }
    if(likes11 == 1 && dislikes11 == 0){
        likes11--;
        dislikes11++;
        calculateBar11();
    }
    if(likes11 ==1 && dislikes11 ==1){
        likes11--;
        calculateBar11();
    }
}

function calculateBar11(){
    var total11 = likes11 + dislikes11;
    var percentageLikes11 = (likes11/total11)*100;
    var percentageDislike11 = (dislikes11/total11)*100;
    document.getElementById("likes11").style.width= percentageLikes11.toString()+"%";
    document.getElementById("dislikes11").style.width= percentageDislike11.toString()+"%";

    document.getElementById('LikeButton11').value="Like("+likes11.toString()+")";
    document.getElementById('DislikeButton11').value="Disike("+dislikes11.toString()+")";
}