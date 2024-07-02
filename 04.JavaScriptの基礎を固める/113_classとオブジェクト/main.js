const obj = {
    first_name: "John",
    last_name: "John",
    printFullName: function(){
        console.log('hello');
    }
}

class MyObj{
    constructor(){
        this.first_name = 'john';
        this.last_name = 'Code';
    }

    printFullName(){
        console.log(this.first_name);
    }
}
obj.printFullName();
const obj2 = new MyObj();
obj2.printFullName();