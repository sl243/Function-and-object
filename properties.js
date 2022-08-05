var shoppingCart = {
    books: 5,
    mobile: 1,
    sunglass: 2,
    mouse: 4,
    pen: 20,
    pendrive: 10,
}

// When you know the specific name, use the dot notation to get the keys value
var penCount = shoppingCart.pen;

// alternative system
// When you know the specific name, use the dot notation to get the keys value
var penCount2 = shoppingCart['pen'];

// Dynamic system
var propertyName = 'mobile';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertiesValues = Object.values(shoppingCart);
// console.log(propertiesValues);

console.log(shoppingCart);
// set property value
shoppingCart.mobile = 5;
console.log(shoppingCart);

shoppingCart['mobile'] = 10;
console.log(shoppingCart);

shoppingCart[propertyName] = 20;
console.log(shoppingCart);