//1.
const list1 = [10, 20, 30];

function changeElements(list) {
    list[1] = list.splice(0,1, list[1])[0]
}

changeElements(list1)
console.log(list1);


//2.

const list2 = [30, -5, 0, 10, 5];

function mySort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for ( var j = 0; j < list.length - 1 - i; j++) {
            if (list[j + 1] < list[j]) {
                let t = list[j + 1];
                list[j + 1] = list[j];
                list[j] = t;
            }
        }
    }
    return list;
}

mySort(list2);
console.log(list2);

//3.
var func1 = function(message) {
	this(message);
}

var func2 = func1.bind(alert);
func2('Test');

function myBind(func, context) {
    let args = [].slice.call(arguments, 2);
    return function() {
        let funcArgs = [].slice.call(arguments);
        return func.apply(context, args.concat(funcArgs));
    }
}

var func3 = myBind(func1, alert);
func3('Test');
