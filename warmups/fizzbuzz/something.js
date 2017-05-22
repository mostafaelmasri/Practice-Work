//make a function
//loop through numbers from 1 -->100
//check if the number is % 3 if so replace it with 'fizz'

// check if the number is % 5 if so replace it with 'buzz'
// check if the number is % 3 and 5 if so replace it with 'fizzbuzz'
// else return the number

function fizzbuzz(){
    var myArr=[];
    for(i=0; i<=100; i++){
        myArr.push(i);
        
        if (myArr[i] % 3===0 && myArr[i] % 5===0){
        myArr[i] = 'fizzbuzz';
             
    }
        
       else if( myArr[i] % 3===0) {
            myArr[i] = 'fizz'; 
        }

    
        
    }
        
                       
}
    console.log(myArr);
}

fizzbuzz(); 