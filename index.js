let obj1 = {
        model:'malibu',

        tech_pasport:{
            year:'2023',
        },
        Ok:{
            ojj:'k',
         },
}
let obj2 = {
        model:'malibu',

        tech_pasport:{
            year:'2023',
        },
        Ok:{
            ojj:'k',
         },
}
console.log(Object.assign({}, obj1, obj2 ));
let keys = Object.keys(obj1, obj2);
console.log(keys);
let znach= [];

for (let key in obj1) {
    znach.push(obj1, obj2[key]);
}

console.log(znach); 


console.log(Object.entries(obj1, obj2))
