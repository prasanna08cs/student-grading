let c =[73,67,38,33];
let r =[];
for(let k=0;k<c.length;k++){
let n= c[k];

 for(let i=5;i<n+5;i=i+5){
          if(i>n){
             if(i-n < 3){
               console.log(i)
//               break;
               r.push(i)
              // return i;
             }
             else {
               r.push(n);
               //console.log(n)
              // return n;
             }
            
          }
 }
}
console.log(r);

// https://www.hackerrank.com/challenges/grading/problem
