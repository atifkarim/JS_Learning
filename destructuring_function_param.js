const color = {
    x : 4,
    y : 8,
    z : 12,
};

const half = (function(){
    return function half ({x,y}){
        return (x+y)/2.0; 
    };

})();

console.log(color);
console.log(half(color));