var shoppingCart = {
    books: 5,
    mobile: 1,
    sunglass: 2,
    mouse: 4,
    pen: 20,
    pendrive: 10,
}

// complex system 
var propertyName = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);

for (var i = 0; i < propertyName.length; i++) {
    var properties = propertyName[i];
    var value = shoppingCart[properties];
    // console.log(properties, value);
}

// easy system

for (var property in shoppingCart) {
    var value = shoppingCart[property];
    console.log(property, value);
}