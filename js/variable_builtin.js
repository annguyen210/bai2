// input, output -------------------------
// alert("This is notification!");
// const full_name = prompt("Nhap ten cua ban");
// console.log(typeof full_name);
// const is_human = confirm("Are you human?");
// console.log(is_human);
// variable (scope) ------------------------
// *** var
// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }

// console.log(index); // 10
// ***let
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// console.log(index); // error (is not defined)
// *** const
const object = { name: "abc", age: 15 };
// object += {} // error (is constant var)
object.name = "xyz";
console.table(object);


// builtin (set timeout, set interval ) ----------
//way1
// setTimeout(() =) {
    // arrow function
    //document.write("<h1>Hello</h1>");
  // }, 1000);

   //way2
//function say_hello() {
 //   console.warn("hello friend!");
    //}

    //setTimeout(say_hello, 1000);

    //** set interval ***
   // const id = setInterval(() => {
//HTML dom
// document.getElementsByTagName("body")[0]
//.innerHtML += "<h1>Hello</h1>";

  //   },1000);


// const id2 = setInterval (() => {
// HTML dom
// document.getElementsByTagName("body")[0]
// .innerHtML += "<h1>Bye</h1>";

   // }, 1000);

    //sau 5 Lan chay -) dung lai
 //   setTimeout(() => {
 // clearInterval (id);
//callback function
// setTimeout(() => {
   // clearInterval(id2);

// },5000);

 //   },5000);


