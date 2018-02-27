"use strict";

console.log("jquery starter");

var topArticle = document.getElementById("top-article");
console.log("topArtice.js", topArticle);

//jQuery will put everything in an array
var article = $("#top-article");
console.log("article jquery", article[0]); 

var allButtons = document.getElementsByTagName("button");
 console.log("allButtons by TagName", allButtons);
 //rememeber this returns an array
 var jbutton = $("button");
 console.log("jbutton", jbutton, jbutton.html());


/////////////////////// Select DOM elements ////////////////////

//ar mainArticles = document.getElementsByClassName("article--main");
//  console.log("mainArticles", mainArticles);

$(".article--main").each((arrayIndex, currentElement) => {
    // console.log("article--main", arrayIndex,$(currentElement).html());
    $(currentElement).html("hello world");
 });
 
 //targets the first instance of the class umbrella in the h1 element
//  var umbreallaElement = $("h1[umbrella='open']");
//      console.log("umbrella text: ", umbreallaElement.html());


var umbreallaElement = $("[umbrella='open']");

// Handling events
// event hides and shows songs and changes the text
$("#destroyer").click((evt) => {
    if ($("#destroyer").text() == 'Hide Songs') {
       $(".song-container").hide("slow");
       $("#destroyer").text('Show Songs');
    } else {
       $(".song-container").show("fast");
       $("#destroyer").text('Hide Songs');
    }
 });


// Songs in songs.json file
 function functionIWantjQueryToExecute(songList) {
    console.log("who is this", songList);

    //parameter to make sure it only runs if there is a songList.songs
    if(songList.songs){
      for (var i = 0; i < songList.songs.length; i++) {
        var currentSong = songList.songs[i];
        $("#list-of-songs").append(`<h1>${currentSong.title}</h1>`);
        $("#list-of-songs").append(`<div>Performed by ${currentSong.artist}</div>`);
        $("#list-of-songs").append(`<div>On the album <strong>${currentSong.album}</strong></div>`);
      }
    }
  }


// AJAX call immediately returns a promise
function makeAPICall(url) {
    return $.ajax({
    url: url,
    dataType: "json"
    });
    }
    
// calling the function that returns a promise. 
makeAPICall('javascripts/songs.json')
    .then((resolve) => {
    console.log("makeCallResolve", resolve);
    functionIWantjQueryToExecute(resolve);
    },
    (reject) => {
    console.log("SOMETHING WENT REALLY WRONG");
    });


    //resolve means I'm happy
    


