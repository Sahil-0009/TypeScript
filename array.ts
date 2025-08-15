var users: string[] = ["Sahil", "John", "Doe"];
var marks: number[] = [85, 90, 78];
marks.push(98);
var students: Array<string> = ["Alice", "Bob", "Charlie"];
students.push("David");
console.log(students);
var collegeName: ReadonlyArray<string> = ["Harvard", "Stanford", "MIT"];
// collegeName.push("Yale"); // Error: Property 'push' does not exist on type 'readonly string[]'.
