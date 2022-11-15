function GenerationTemp(min, max) { // min and max inclu.
    return Math.floor(Math.random() * (max - min + 1) + min)
}


var temp1 = GenerationTemp(-20, 30)

var temp2 = GenerationTemp(-20, 30)

console.log(temp1)

console.log(temp2)