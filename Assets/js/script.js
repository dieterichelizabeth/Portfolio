let featuredEl = document.getElementById("card1");
let contentCardEl = document.getElementById("content-box");
let frontEl = document.getElementById("front");

document.getElementById("back").style.visibility = "hidden";
document.getElementById("back1").style.visibility = "hidden";
document.getElementById("back2").style.visibility = "hidden";
document.getElementById("back3").style.visibility = "hidden";

// THIS WILL CLEAR THE FRONT SIDE OF THE CARD!!!
featuredEl.addEventListener("mouseover", function(){
    console.log("flipped!")
    $("#front").hide();     
    document.getElementById("back").style.visibility = "visible"; 
});

// THIS WILL REVERT THE CARD!!!
featuredEl.addEventListener("mouseleave", function() {
    $("#front").show();
    document.getElementById("back").style.visibility = "hidden";
});
  


// contentCardEl.addEventListener("mouseover", function() {
//     console.log("flipped!")
//     $("#front").hide();     
//     document.getElementById("back").style.visibility = "visible";
// })

// contentCardEl.addEventListener("mouseleave", function() {
//     $("#front").show();
//     document.getElementById("back").style.visibility = "hidden";
// });



// GAME PLAN!!

/*
Done: Refactor navbar/title styling - should take 100% of spacing
Done: - Same with recent projects
Done: Highlighted content is now one section
Done: - flex it 100%, figure out the spacing for the card
Add github links/further card details
- transition works with jquery: keep it simple!
other projects (content) is now one section
- flex it 100%, figure out the spacing
- keep the design the same for each card, so the HTML can be adjusted, but cards stay the same
    - possibly use persentages instead of pixels
Will need to revisit media queries
    - review needed changes before re-linking
Done: About me and down is fine.
Add delay on javascript eventListener
*/