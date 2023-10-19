// //№339 1
// const elem1 = document.querySelector('#elem1');
// const elem2 = document.querySelector('#elem2');
// const elem3 = document.querySelector('#elem3');

// console.log(elem1.textContent);
// console.log(elem2.textContent);
// console.log(elem3.textContent);
// //№340 1
// const p = document.querySelector('#block p');
// //№340 2
// const p = document.querySelector('.block p');
// //№340 3
// const p = document.querySelector('.www');
// //№341 1
// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');
// const button3 = document.querySelector('#button3');

// button1.addEventListener('click', function() {
//     console.log(1);
// });

// button2.addEventListener('click', function() {
//     console.log(2);
// });

// button3.addEventListener('click', function() {
//     console.log(3);
// });
// //№342 1
// function func1() {
//     console.log(1);
// }

// function func2() {
//     console.log(2);
// }

// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');

// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);
// //№343 1
// const elem1 = document.querySelector('#elem1');
// const elem2 = document.querySelector('#elem2');
// const elem3 = document.querySelector('#elem3');
// const elem4 = document.querySelector('#elem4');
// const elem5 = document.querySelector('#elem5');

// function func() {
//     console.log('message');
// }

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);
// //№344 1
// function func1() {
//     console.log('1');
// }

// function func2() {
//     console.log('2');
// }

// function func3() {
//     console.log('3');
// }

// const elem = document.querySelector('#elem');

// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);
// //№345 1
// const button = document.querySelector('button');

// button.addEventListener('dblclick', function() {
//     console.log('sdfgggdsg');
// });
// //№345 2
// const button = document.querySelector('button');

// button.addEventListener('mouseover', function() {
//     console.log('sdggsdgds');
// });
// //№345 3
// const button = document.querySelector('button');

// button.addEventListener('mouseout', function() {
//     console.log('asdfgggsdg');
// });
// //№345 4
// const button = document.querySelector('button');

// button.addEventListener('mouseover', function() {
//     console.log('feadfqwqwe');
// });
// button.addEventListener('mouseout', function() {
//     console.log('faef');
// });
// //№346 1
// const button = document.querySelector('button');
// const p = document.querySelector('p');

// button.addEventListener('click', function() {
//     console.log(p.textContent);
// });
// //№346 2
// const button = document.querySelector('button');
// const p = document.querySelector('p');

// button.addEventListener('click', function() {
//     p.textContent = 'текст';
// });
// //№346 3
// const button = document.querySelector('button');
// const p1 = document.querySelector('#elem1');
// const p2 = document.querySelector('#elem2');

// button.addEventListener('click', function() {
//     const num1 = parseFloat(p1.textContent);
//     const num2 = parseFloat(p2.textContent);
//     const sum = num1 + num2;
//     alert(sum);
// });
// //№346 4
// const pList = document.querySelectorAll('p');
// const div = document.querySelector('div');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   let sum = 0;
//   for (const p of pList) {
//     sum += parseFloat(p.textContent);
//   }
//   div.textContent = sum;
// });
// //№346 5
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   let value = parseFloat(p.textContent);
//   p.textContent = value + 1;
// });
// //№346 6
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   p.textContent += '!';
// });
// //№347 1
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   console.log(p.innerHTML);
// });
// //№347 2
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   p.innerHTML = '<b>текст</b>';
// });
// //№348 1
// const input = document.querySelector('#elem');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   alert(input.type);
// });
// //№348 2
// const input = document.querySelector('#elem');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   input.type = 'submit';
// });
// //№348 3
// const a = document.querySelector('a');
// const button = document.querySelector('button');
// const p = document.querySelector('p');

// button.addEventListener('click', function() {
//   p.textContent = a.href;
// });
// //№348 4
// const a = document.querySelector('a');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   a.textContent += ` (${a.href})`;
// });
// //№348 5
// const image = document.querySelector('img');
// const button = document.querySelector('button');
// const p = document.querySelector('p');

// button.addEventListener('click', function() {
//   p.textContent = image.src;
// });
// //№348 6
// const image = document.querySelector('img');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   image.width = '300px';
// });
// //№348 7
// const image = document.querySelector('img');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   let width = parseInt(image.width);
//   image.width = width * 2;
// });
// //№348 8
// const image = document.querySelector('img');
// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');

// button1.addEventListener('click', function() {
//   image.src = 'img1.jpg';
// });
// button2.addEventListener('click', function() {
//   image.src = 'img2.jpg';
// });
// //№349 1
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   input.value = 'текст';
// });
// //№349 2
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   p.textContent = input.value;
// });
// //№349 3
// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   const number = parseFloat(input1.value);
//   input2.value = Math.pow(number, 2);
// });
// //№349 4
// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   const temp = input1.value;
//   input1.value = input2.value;
//   input2.value = temp;
// });
// //№349 5
// const inputs = document.querySelectorAll('input');
// const button = document.querySelector('button');
// const p = document.querySelector('p');

// button.addEventListener('click', function() {
//   let sum = 0;
//   let count = 0;
//   for (const input of inputs) {
//     const number = parseFloat(input.value);
//     sum += number;
//     count++;
//   }
//   const average = sum / count;
//   p.textContent = average;
// });
// //№350 1
// const input = document.querySelector('input');

// input.addEventListener('focus', function() {
//     input.value = '1';
// });

// input.addEventListener('blur', function() {
//     input.value = '2';
// });
// //№350 2
// const input = document.querySelector('input');

// input.addEventListener('blur', function() {
//   const number = parseFloat(input.value);
//   alert(number * number);
// });
// //№350 3
// const input = document.querySelector('input');

// input.addEventListener('focus', function() {
//   input.value = '';
// });
// //№351 1
// const div = document.querySelector('#elem');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   alert(div.class);
// });
// //№351 2
// const div = document.querySelector('#elem');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   div.class = 'classss';
// });
// //№351 3
// const div = document.querySelector('#elem');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   const classArr = div.classList;
//   console.log(classArr);
// });
// //№352 1
// console.log(document.querySelector('#image').src);
// //№354 1
// const input = document.querySelector('input');

// input.addEventListener('focus', function() {
//   input.value = 1;
// })

// input.addEventListener('blur', function() {
//   input.value = 2;
// })
// //№354 2
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//   button.textContent = parseInt(button.textContent) + 1; 
// });
// //№355 1 
// const pList = document.querySelectorAll('p');
// for (const p of pList) {
//   p.addEventListener('click',function() {
//     p.textContent += "!";
//   })
// }
// //№355 2
// const inputs = document.querySelectorAll('input');
// for (const input of inputs) {
//   input.addEventListener('blur', function() {
//     input.value = parseFloat(input.value) * parseFloat(input.value);
//   })
// }
// //№356 1
// const pList = document.querySelectorAll('p');
// const button = document.querySelectorAll('button');

// button.addEventListener('click', function() {
//   for (const p of pList) {
//     p.textContent = 'text';
//   }
// })
// //№356 2
// const pList = document.querySelectorAll('p');
// const button = document.querySelectorAll('button');

// button.addEventListener('click', function() {
//   for (let i = 0; i < pList.length; i++) {
//     pList[i].textContent += i+1;
//   }
// })
// //№356 3
// const inputs = document.querySelectorAll('input');
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   let sum = 0;
//   for (const input of inputs) {
//     const number = parseFloat(input.value);
//     sum += number;
//   }
//   p.textContent = sum;
// });
// //№357 1
// function func() {
// 	this.value = Number(this.value) + 1;
// }

// const inputs = document.querySelectorAll('input');
// for (const input of inputs) {
//   input.addEventListener('blur', function() {
//     func()
//   })
// }
// //№357 2
// const pList = document.querySelectorAll('p');
// for (const p of pList) {
//   p.addEventListener('blur', function() {
//     p.textContent = parseFloat(p.textContent) ** 2;
//   })
// }
// //№358 1
// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function() {
//     this.textContent++;
//   });
// }
// //№359 1
// const button = document.querySelector('button');
// const a = document.querySelector('a');

// button.addEventListener('click', function func() {
//   a.textContent += ' (' + a.href + ')';
//   this.removeEventListener('click', func);
// })
// //№359 2
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const value = parseInt(button.textContent);
//   if (value < 10) {
//       button.textContent = value + 1;
//   } else {
//       button.removeEventListener('click', handleClick);
//   }
// });
// //№360 1
// const pList = document.querySelectorAll('p');

// for (let i = 0; i < pList.length; i++) {
//     pList[i].addEventListener('click', function func() {
//       p.textContent += '!';
//       p.removeEventListener('click', func);
//     })
//   }
// //№361 1
// const ul = document.querySelectorAll('ul li');

// for (const li of ul) {
//   li.addEventListener('click', function() {
//     li.textContent = parseInt(li.textContent) + 1;
//   })
// };
// //№361 2
// const ul = document.querySelectorAll('ul li');

// for (const li of ul) {
//   li.addEventListener('click', function func() {
//     li.textContent = parseInt(li.textContent) + 1;
//     li.removeEventListener('click', func);
//   })
// };
// //№361 3
// const ul = document.querySelectorAll('ul li');

// for (const li of ul) {
//   li.addEventListener('click', function func() {
//     if (parseInt(li.textContent) < 10) {
//       li.textContent = parseInt(li.textContent) + 1;
//     }
//   })
// };
// //№362 1
// const years = document.querySelectorAll('ul li');
// let yearsWithSum6 = [];
// let sum = 0;

// for (var i = 0; i < years.length; i++) {
//     let year = years[i];
//     let yearNumber = parseInt(year.textContent);
//     let yearString = yearNumber.toString();
//     let digitSum = 0;
//     for (var j = 0; j < yearString.length; j++) {
//         digitSum += parseInt(yearString[j]);
//     }
//     if (digitSum === 6) {
//         yearsWithSum6.push(yearNumber);
//         sum += yearNumber;
//     }
// }

// console.log(sum);
