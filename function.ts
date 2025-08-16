function fruits(): string[] {
  return ["apple", "banana", "mango"];
}

function simple(): boolean {
  return true;
}

function complex(): number | string | boolean {
  let data = 10;
  let type = "age";
  let name = "John";
  if (type === "age") {
    return data;
  } else {
    return name;
  }
}

function anything(): any {
  return "This can be anything";
}
