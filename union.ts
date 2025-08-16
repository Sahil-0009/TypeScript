var data: string | number | [] = "Sahil";
data = [];
data = 111;
function fruits(): string | string[] | number {
  var item = 1;
  if (item > 1) {
    return ["Banana", "Mango"];
  } else {
    return "Apple";
  }
}
console.log(fruits());

function studentInfo(name: string, age: number, ...subjects: string[]): string {
  return `Name: ${name}, Age: ${age}, Subjects: ${subjects.join(", ")}`;
}
console.log(studentInfo("John", 25, "Math", "Science"));

function studentINFO(name: string | number | boolean) {
  if (typeof name === "number") {
    return name;
  } else if (typeof name === "boolean") {
    return name ? "Yes" : "No";
  }
  return name;
}
console.log(studentINFO("Sahil"));
console.log(studentINFO(123));
console.log(studentINFO(true));
