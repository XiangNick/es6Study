document.getElementById("container").innerHTML = "<h1>Hello!</h1>";


function* chef(foods){
    for( let i = 0; i < foods.length; i++){
        yield foods[i]
    }
}


let foods = chef(['cake','noodle']);

console.log(foods.next());
console.log(foods.next());
console.log(foods.next());