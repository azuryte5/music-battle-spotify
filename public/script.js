var calculateBtn = document.getElementById("button")

var calculateRatingChange = function()
{
var elo1 = parseInt(document.getElementById("elo1").value)
var elo2 = parseInt(document.getElementById("elo2").value)
var k = 40;

var eloDifference = elo2 - elo1;
var eloDifference2 = elo1 - elo2;
var percentage = 1 / ( 1 + Math.pow( 10, eloDifference / 400 ) );
var percentage2 = 1 / ( 1 + Math.pow( 10, eloDifference2 / 400 ) );
console.log(percentage)
var win = Math.round( k * ( 1 - percentage ) );
var win2 = Math.round( k * ( 1 - percentage2 ) );
var loss = Math.round( k * ( 0 - percentage ) );
var loss2 = Math.round( k * ( 0 - percentage2 ) )
console.log(win)
console.log(loss)
document.ratingchange.win_1.value = win;
document.ratingchange.loss_1.value = loss;
document.ratingchange.score_1.value = elo1 + win;
document.ratingchange.score_1b.value = elo1 + loss;

document.ratingchange2.win_2.value = win2;
document.ratingchange2.loss_2.value = loss2;
document.ratingchange2.score_2.value = elo2 + win2;
document.ratingchange2.score_2b.value = elo2 + loss2;
}

calculateBtn.addEventListener("click", calculateRatingChange)


// function calculateRatingChange()
// {
// var Elo1 = document.rating.elo1.value * 1;
// var Elo2 = document.rating.elo2.value * 1;
// var K = 40;
// var EloDifference = Elo2 - Elo1;
// var percentage = 1 / ( 1 + Math.pow( 10, EloDifference / 400 ) );
// var win = Math.round( K * ( 1 - percentage ) );
// if (win > 0 ) win = "+" + win;
// document.ratingchange.win.value = win;
// document.ratingchange.loss.value = Math.round( K * ( 0 - percentage ) );
// document.ratingchange.percent.value =  Math.round( percentage * 100 ) + "%";
// }
