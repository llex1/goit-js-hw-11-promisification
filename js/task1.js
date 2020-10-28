// todo task 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
const delay = function(ms){
  return new Promise((res, rej) => {
    setTimeout(()=>{
      res(ms);
    }, ms)
  });
}
const logger = time => console.log(`Resolved after ${time} ms`);
delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 
