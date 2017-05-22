var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  



vegetables.pop();
fruit.shift();
var index = fruit.indexOf("orange");
fruit.push(index);
vegetables.push(3);
var food = fruit.concat(vegetables);

fruit.push('apple');  
fruit.push('banana');  
vegetables.push('lettuce');








food.splice(4,2);
food.reverse();

var str = food.toString();
console.log(str);



console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
console.log("index:"+index );
