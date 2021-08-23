// If - Else

// if (7 > 5) {
//   console.log(true);
// }

// if (5 > 7) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (5 > 7) {
//     console.log(' 5 > 7');
// } else if ( 7 > 8) {
//     console.log('7 > 8');
// } else {
//     console.log('Nothing');
// }

// Switch statement

var currentDay = "Wed";

if (currentDay === "Mon") {
  console.log("Timing: 10:00-06:00");
} else if (currentDay === "Tue") {
  console.log("Timing: 10:00-05:00");
} else if (currentDay === "Wed") {
  console.log("Timing: 09:30-05:30");
} else if (currentDay === "Thu") {
  console.log("Timing: 10:15-06:15");
} else if (currentDay === "Fri") {
  console.log("Timing: 09:05-05:05");
} else if (currentDay === "Sat") {
  console.log("Timing: 09:00-05:00");
} else if (currentDay === "Sun") {
  console.log("Timing: 09:00-01:00");
}

switch (currentDay) {
  case "Mon":
    console.log("Timing: 10:00-06:00");
    break;
  case "Tue":
    console.log("Timing: 10:00-05:00");
    break;
  case "Wed":
    console.log("Timing: 09:30-05:30");
    break;
  case "Thu":
    console.log("Timing: 10:15-06:15");
    break;
  case "Fri":
    console.log("Timing: 09:05-05:05");
    break;
  case "Sat":
    console.log("Timing: 09:00-05:00");
    break;
  case "Sun":
    console.log("Timing: 09:00-01:00");
    break;
  default:
    console.log("Timing: 09:00-01:00");
}
