    // 1 functions without paramter & without return type
	// 2 functions with paramter & without return type
	// 3 functions without paramter & with return type
	// 4 functions with paramter & with return type

      // 1 functions without paramter & without return type

        function add1(){
            console.log("first type function is called ")
        }

        // add1();

        // 2 functions with paramter & without return type

            function add2(a:number,b:number){
                console.log("Addition is "+(a+b))
            }

            // add2(7,8);

 // 3 functions without paramter & with return type
    
    function add3():number{
        return (10+8);
    }

    let temp1=add3();
    // console.log(`Addition is ${temp1}`)

    // 4 functions with paramter & with return type

    function add4(a:number,b:number):number{
        return (a+b);        
    }

    console.log(`Result is ${add4(8,4)} `);