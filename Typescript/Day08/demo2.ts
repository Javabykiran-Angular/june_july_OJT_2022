//Functions that return multiple values (JS interview Question)

    function operation(a:number,b:number){
            return ([a+b,a-b,a*b])
    }

    let [add,sub,mul]=operation(5,2);
    console.log(`
        addition       = ${add}
        substraction   = ${sub}
        Multiplication = ${mul}
    `)
