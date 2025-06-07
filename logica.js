let numero = 0
let number = 0
function mais() {
    numero += 1
    render()
}
function mais1(){
    number += 1
    render()
}
function reset() {
    numero = 0
    render()
}
function render() {
    document.querySelector("button").innerText = `total ${numero}`;
    const zero3 = document.querySelector("#zero3")
    zero3.innerText = number
    const zero = document.querySelector("#zero")
    zero.innerText = numero
}