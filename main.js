var audio = $("audio")[0];

function sizeControls(){
  var audioWidth = $("audio").width();
  $("#audio-controls").css("width", audioWidth+"px");
  console.log(audioWidth);
}

window.onload = sizeControls;
window.onresize = sizeControls;


//Buttons

//fast-backwards
$("#fastBackward").click(function(){
  var audio = $("audio")[0];
  if (!$("audio")[0].paused){
    audio.currentTime = Math.max(0, audio.currentTime-5);
  }
})

//fast-forward
$("#fastForward").click(function(){
  var audio = $("audio")[0];
  if (!$("audio")[0].paused){
    audio.currentTime = Math.max(0, audio.currentTime+5);
  }
})

$("#slowDown").click(function(){
  var audio = $("audio")[0];
  if (!$("audio")[0].paused){
    audio.playbackRate = audio.playbackRate - .25;
  }
})

$("#speedUp").click(function(){
  var audio = $("audio")[0];
  if (!$("audio")[0].paused){
    audio.playbackRate = audio.playbackRate + .25;
  }
})
