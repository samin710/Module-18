let myScore = 89;
let frndScore = 80;

// if you get more then 80 then inside your friend score.
//     If your friend get more than 80. then go for a lunch.
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

if (myScore > 80) {
  if (frndScore > 80) {
    console.log("Let's go for a lunch");
  } else if (frndScore < 80 && frndScore >= 60) {
    console.log("Good luck next time");
  } else if (frndScore < 60 && frndScore >= 40) {
    console.log("Keep your friend's message unseen");
  } else {
    console.log("Block you friend");
  }
} else {
  console.log("Go to home and sleep and act sad");
}
