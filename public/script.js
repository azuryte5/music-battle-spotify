  var calculateRatingChange =  function () {
  var eloWin = parseInt($("#score-0").text());
  var eloLose = parseInt($("#score-1").text());
  console.log(eloWin);
  console.log(eloLose);
  var k = 40;

  var eloDifference = eloLose - eloWin;

  var percentage = 1 / (1 + Math.pow(10, eloDifference / 400));

  // console.log(percentage)
  var win = Math.round(k * (1 - percentage));
  var loss = Math.round(k * (0 - percentage));
  console.log(win);
  console.log(loss);

  const id0 = parseInt($("#tag-0").text());
  const id1 = parseInt($("#tag-1").text());

  const score0 = eloWin + win;
  const score1 = eloLose + loss;
  console.log(score0);
  console.log(score1);

  $("#score-0").text(score0);
  $("#score-1").text(score1);

fetch(`/api/import-songs/1/${id0}`, {
    method: "PUT",
    body: JSON.stringify({
      score0
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

fetch(`/api/import-songs/2/${id1}`, {
    method: "PUT",
    body: JSON.stringify({
      score1
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

var calculateRatingChange2 = async function () {
var eloWin2 = parseInt($("#score-1").text());
var eloLose2 = parseInt($("#score-0").text());
var k2 = 40;
var eloDifference2 = eloLose2 - eloWin2;
var percentage2 = 1 / (1 + Math.pow(10, eloDifference2 / 400));

  // console.log(percentage)
var win2 = Math.round(k2 * (1 - percentage2));
var loss2 = Math.round(k2 * (0 - percentage2));

console.log(win2);
console.log(loss2);

const id0 = parseInt($("#tag-0").text());
const id1 = parseInt($("#tag-1").text());

const score2 = eloLose2 + loss2;
const score3 = eloWin2 + win2;
console.log(score2);
console.log(score3);

$("#score-0").text(score2);
$("#score-1").text(score3);

await fetch(`/api/import-songs/3/${id0}`, {
    method: "PUT",
    body: JSON.stringify({
      score2
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

await fetch(`/api/import-songs/4/${id1}`, {
    method: "PUT",
    body: JSON.stringify({
      score3
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

$("button").click(function () {
  switch ($("button").index(this)) {
    case 0:
      calculateRatingChange();
      document.getElementById("button-0").disabled = true;
      document.getElementById("button-1").disabled = true;
      break;
    case 1:
      calculateRatingChange2();
      document.getElementById("button-1").disabled = true;
      document.getElementById("button-0").disabled = true;
      break;
    case 2:
      window.location.href = "/home";
      break;
  }
});
