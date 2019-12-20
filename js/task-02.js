'use strict';

const countProps = function(obj) {
  let counters_obj = 0;
  for (let count in obj) {
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
