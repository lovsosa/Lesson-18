// ! 1 level
// try {
//   //код
//   console.log('start');
//   let res = dadadada + 10;
//   console.log('finish');
// } catch (error) {
//   console.log('error');
  
// }
// console.log('alo');

//  ! 2 level
// setTimeout(() => {
//   try {
//     let result = foo();
//   } catch (error) {
//     console.log('error');
//   }
// }, 3000)

// ! 3 level
// let data = '{"name": "Mike"}'
// try {
//   let user = JSON.parse(data);
//   if(!user.age) {
//     throw new SyntaxError(`Даные некоректны`)
//   }
//   user.age++
// } catch (error) {
//   console.log(error);
// }

// ! 4 level
// class Obs {
//   constructor() {
//     this.listeners = {};
//   }
//   on(type, handler) {
//     if(!(type in this.listeners)) {
//       this.listeners[type] = []
//     }
//     this.listeners[type].push(handler);
//   }
//   off(type, handler) {
//     if(type in this.listeners) {
//       this.listeners[type] = this.listeners[type].filter(item => {
//         return item !== handler;
//       })
//     }
//   }
//   trigger(type, agr) {
//     if(type in this.listeners) {
//       this.listeners[type].forEach((listeners) => listeners(agr));
//     }
//   }
// }
// const observer = new Obs();
// observer.on("myEvent", function () {
//   console.log('1');
// })
// observer.on("myEvent", function () {
//   console.log('2');
// })
// observer.trigger('myEvent')
// const questArrived = function (name) {
//   console.log(`Гость ${name} прибывает в отель`);

// }
// const questDep = function (name) {
//   console.log(`Гость ${name} уезжает`);
// }
// observer.on("arrived", questArrived);
// observer.on("arrived", questDep); // departed

// observer.trigger(`arrived`, "Mike");
// observer.trigger(`arrived`, "alo");
// observer.trigger(`arrived`, "Sam");

// observer.off('arrived', questArrived);

// ! задание 01
// class PigiBank {
//   constructor() {
//     this.coins = { 1: 0, 3: 0, 5: 0, 10: 0 };
//     this.total = 0;
//   }
//   addCoins(value) {
//     try {
//       if (this.total < 100) {
//         this.coins[value]++;
//         this.total += value;
//       } else {
//         throw new Error("Уже полная");
//       }
//       if (this.total > 100) {
//         this.total = 100
//       }
//     } catch (error) {
//       alert(error);
//     }
//   }
//   showCoins() {
//     let item = document.querySelector(`.item__js`);
//     item.innerHTML = "";
//     for (const key in this.coins) {
//       const value = this.coins[key];
//       item.innerHTML += `
//         <div class="coins__item">
//         <span class="money">${key}: ${value}</span>
//         </div>`;
//     }
//   }
//   getTotal() {
//     let title = document.querySelector(`.total__title`);
//     title.innerHTML = "total: ";
//     title.innerHTML += `<span class="coin">${this.total}</span>`;
//   }
// }
// const observer = new PigiBank();
// let body = document.querySelector("body");


// let money = document.querySelector(".coin").textContent;

// let oneCoin = document.querySelectorAll(".btn__coin");
//   for (item of oneCoin) {
//     item.addEventListener("click", function () {
//       observer.addCoins(+this.textContent);
//       observer.showCoins();
//       observer.getTotal();
//     });
//   }
