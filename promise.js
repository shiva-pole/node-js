//ES6 Promises
let isSuccess = false;

let promise = new Promise((resolve, reject)=>{
      if(isSuccess){
        resolve('yay!!');
      }else{
        reject('boo..');
      }
});

promise.then((success)=>{
     console.log(success);
}).catch((error)=>{
      console.log(error);
})