// var userData: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// } = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };
// userData.name = "Jane"; // Update name
// userData.age = 31; // Update age
// userData.isAdmin = false; // Update isAdmin
// console.log(userData);

// var userData: {
//     // name: string;
//     // age: number;
//     // company: string | undefined;
//     // city: string | undefined;
//   [key: string]: string | number | undefined;
// } = {
//   name: "Jane",
//   age: 31,
//   company: undefined,
// };
// userData.company = "Tech Corp"; // Add company property
// userData.city = "New York"; // Add city property
// console.log(userData);
var userData: {
  name: string;
  age: number;
  company: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
} = {
  name: "John",
  age: 30,
  company: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};
console.log(userData);
