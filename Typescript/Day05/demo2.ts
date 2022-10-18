//anonymous functions
// function does not have any name

 let temp1= function (){
        console.log("anonymous functions is called `")
    }

    // temp1();

let temp2=function (a:number,b:number):number{
        return (a+b);
    }

    // temp2(4,6);
    // console.log('Addition '+temp2(4,6));

//fat arrow functions/ Arrow function

 let temp3=()=>{
        console.log("fat arrow functions called ")
    }

    // temp3();

  let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // console.log(`Result is ${temp4(10,5)}`);