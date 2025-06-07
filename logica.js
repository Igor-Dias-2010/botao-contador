let numero = 0
function mais(){
    numero += 1
    render()
}
function reset(){
    numero = 0
    render()
}
function render(){
    const p = document.querySelector("button")
    p.innerHTML = numero
    const zero = document.querySelector("#zero")
    zero.innerHTML = numero
}