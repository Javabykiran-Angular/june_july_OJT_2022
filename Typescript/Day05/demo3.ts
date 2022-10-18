//optional paramter functions

function add1(a:number,b?:number){
    console.log("Value of a is "+a)//7
    console.log("Value of b is "+b) //undefined
    console.log("Addition of a+b is "+(a+b!)) //NAN=> Not a number
}

// add1(7)

function add2(a?:number,b?:number){
    console.log("Value of a is "+a)//7
    console.log("Value of b is "+b) //undefined
    console.log("Addition of a+b is "+(a!+b!)) //NAN=> Not a number
}

// add2();

//default paramter functions

function add3(a:number,b:number=5){
    console.log("Value of a is "+a)//10
    console.log("Value of b is "+b) //7
    console.log("Addition of a+b is "+(a+b!)) //17
}


// add3(10)
// add3(10,7)

function add4(a:number=2,b:number){
    console.log("Value of a is "+a)//10
    console.log("Value of b is "+b) //7
    console.log("Addition of a+b is "+(a+b!)) //17
}

// add4(5,10);


function add5(a:number=2,b?:number){
    console.log("Value of a is "+a)//2
    console.log("Value of b is "+b) //undefined
    console.log("Addition of a+b is "+(a+b!)) //nan
}

add5();