function fizzBuzz() {  
	// Your code here
  
	for(let i=1; i<=100; i++){
		if(i % 5 === 0 && i % 3 === 0){
		  console.log("FizzBuzz")
		}else if (i % 5 === 0){
		  console.log("Buzz")  
		}else if (i % 3 === 0){
		  console.log("Fizz")
		}else{
		  console.log(i)
		}
	  }
	}
	
fizzBuzz();

// // 	let i = 1
  
// //   while(i <= 100){
// //     if(i % 5 === 0 && i % 3 === 0){
// //       console.log(i,"FizzBuzz")
// //     }else if (i % 3 === 0){
// //       console.log(i,"Fizz")  
// //     }else if (i % 5 === 0){
// //       console.log(i,"Buzz")
// //     }else{
// //       console.log(i)
// //     }
// //     i++
// //   }
// }

// fizzBuzz();