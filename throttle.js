function throttle(func,delay){
   let flag = true;
   return function(...args){
    let context = this;
   if(!flag) return;
    
   flag = false;
   func.apply(context,args)
   setTimeout(() => {
    flag = true;
   }, delay);
   }
}