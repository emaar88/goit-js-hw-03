'use strict';

const countProps = function(obj) {
  let counters_obj = 0;
  const sizeObj = Object.entries(obj);
  for (let k = 0; k < sizeObj.length; k += 1) {
    counters_obj++;
  }
  return counters_obj;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
