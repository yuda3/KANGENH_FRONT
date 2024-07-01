const array = [1,2,3,4,5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.forEach((item) => {console.log(item)});

for (let i in array){
    console.log(i);
}

for (let i of array){
    console.log(i);
}

const todos = [
    {id: 1, title: 'Go to School', completed: true},
    {id: 2, title: 'Go to museum', completed: false},
    {id: 3, title: 'Go to shopping', completed: true}
]

for (let i in todos){
    console.log(todos[i]);
}


for (const todo of todos) {
    console.log(todo);
}

for (let i = 0; i < todos.length; i++) {
    if(todos[i].completed === true){
        console.log(todos[i]);
    }
}

function hello(callback){
    console.log('hello ' + callback);
}

function getName(){
    return 'kim'
}

hello(getName);

function doSomething(a, b, callback){
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b){
    return a * b;
}

doSomething(2,2, multiply);