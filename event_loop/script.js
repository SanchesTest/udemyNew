'use strict';

console.log(1); // Синхронный код

setTimeout(() => { // Асинхронный код
  console.log('Timeout');
}, 2000);

setTimeout(() => { // Асинхронный код
  console.log('Timeout_4000');
}, 4000);

console.log(2); // Синхронный код

//========= Выведет...
// 1
// 2
// Timeout
// Timeout_4000

//=========================================================
//=========================================================
//=========================================================

//Сначала выполняется синхронный код

setTimeout(() => { // Асинхронный код
  console.log(1);
}, 0);

console.log(2); // Синхронный код

// 2
// 1

//=========================================================
//=========================================================
//=========================================================

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D