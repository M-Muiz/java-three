

// let ul = document.querySelector('.ul');

// function openNav() {
//     console.log("hy", ul)
//     ul.classList.toggle("hide")
// }


// function abc() {
//         let code = '1234567890ACDEF032121';
//         let newCode = '#';

//         for (var i = 0; i < 6; i++) {
//             let num = Math.round(Math.random() * 100 / code.length);
//             newCode += code[num]
//         }
//         console.log(newCode)
//         document.body.style.backgroundColor = newCode;
// };
// setInterval(() => {abc()}, 200)



// let input = document.getElementById('input');


// function notify() {
//     Notification.requestPermission().then(permission => {
//         permission === 'granted' ? new Notification(input.value) : ''
//     });
// };


// function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);

// console.log(0.1 + 0.2 === 0.3);


function multiply(a) {
    function inner(b) {
        return a * b;
    }
    inner()
}

let a = multiply(10)

console.log(a(20))
