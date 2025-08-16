function loopfunction(): never {
  while (true) {
    console.log("This will run forever");
  }
}
function simple(): never {
    throw new Error("This function never returns");
}
