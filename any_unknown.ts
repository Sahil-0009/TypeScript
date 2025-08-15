var value: any = "Sahil";
value = true;
value = 100;
value = ["ram"];

var value1: unknown = "Sahil";
value1 = "John";
value1 = 100;
value1 = ["ram"];

if (typeof value1 === "string") {
  console.log(value1.toUpperCase());
}
if (typeof value1 === "number") {
  console.log(value1.toFixed(2));
}
