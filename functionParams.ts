function totalPrice(item: number, price: number, text?: string,) {
  if (text) {
    console.log(text + price * item);
  } else {
    console.log("Total Price2: " + price * item);
  }
}
totalPrice(50, 100, "Total Price: ");
totalPrice(100, 200);

function simple(data: string | number) {
    console.log(data);
    
}
simple("Hello");
simple(123);