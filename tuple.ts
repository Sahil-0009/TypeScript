var emp: string[] = ["John", "Doe", "Smith"];
var empData: [string, boolean, number] = ["John", true, 30];
empData.push("Smith"); // This will cause a TypeScript error because empData is a tuple with fixed types
console.log(empData);
