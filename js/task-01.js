'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let keysObject = Object.keys(user);

for (let keys of keysObject) {
  console.log(`${keys} : ${user[keys]} `);
}
