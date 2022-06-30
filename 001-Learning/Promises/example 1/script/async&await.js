const myTestPromise = new Promise((resolve, reject) => {
  console.log("من یک پرامیس هستم");
  const x = 1362;

  if (x >= 1360 && x <= 1369) {
    setTimeout(() => {
      resolve("شما دهه شصتی هستید");
    }, 1500);
  } else {
    setTimeout(() => {
      reject("شما دهه شصتی نیستید");
    }, 1500);
  }
});

const testFunc = async function test(){
    const data = await myTestPromise;
    console.log(data);
};

testFunc();
