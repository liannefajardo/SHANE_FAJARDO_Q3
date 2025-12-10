   //1 Sort Three Nubers
   let a = 0;
   let b = -1;
   let c = 4;

   //a
   let sorted;
    if(a >= b && a >= c){
    if(b >= c){
        sorted = [a,b,c];

    }else{
       sorted = [a,b,c];
    }
    //b
} else if(b >= a && b >= c){

    if(a >= c){
        sorted = [b,a,c];
    }else{
        sorted = [b,c,a];
    }
     //c
} else {
    if(a >= b) {
        sorted = [c,a,b];
    } else {
        sorted = [c,b,a];
    }
}
   console.log(sorted);

    
    //2  Largest of Five Numbers
   let e = -5;
   let f =  -2;
   let g = -6;
   let h =  0;
   let i = -1;
   //output 0
   let largest = e;
   if(h > largest){
    largest = h;
   }
   console.log(largest);


   // Largest of five numbers #2
   let FizzBuzz = 0;
   let output = "";

   for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        output = "FizzBuzz";
    } else if(i % 3 === 0){
        output = "Fizz";
    } else if(i % 5 === 0){
        output = "Buzz";
    } else {
        output = i;
    }
     console.log(output);
   }












  