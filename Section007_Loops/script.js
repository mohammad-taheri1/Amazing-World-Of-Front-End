// var mValue = 0;

// while (mValue < 10) {
//   console.log(mValue);

//   mValue++;
// }

var mList = [1, 2, 3, 4, 5]
var pos 

// for (pos = 0; pos < mList.length; pos++) {
//     if (pos > 3 ) break
//     console.log('Position => ' + pos + ' Value => ' + mList[pos])
// }

for (pos = 0; pos < mList.length; pos++) {
    if (pos %  2 !==0 ) continue
    console.log('Position => ' + pos + ' Value => ' + mList[pos])
}