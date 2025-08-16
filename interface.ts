interface info {
  name: string;
  age: number;
  college: string;
}
interface teacherType extends info {
  subject: string;
}
var studentObj: info = {
  name: "John",
  age: 25,
  college: "XYZ University",
};
var teacherObj: teacherType = {
  name: "Mr. Smith",
  age: 40,
  college: "ABC College",
  subject: "Mathematics",
};
var staffObj: info = {
  name: "Alice",
  age: 30,
  college: "DEF Institute",
};
