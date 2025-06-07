let numero = 0
function mais() {
    numero += 1
    render()
}
function reset() {
    numero = 0
    render()
}
function render() {
    document.querySelector("button").innerText = `total ${numero}`
    // p.innerHTML = numero

    // const zero = document.querySelector("#zero")
    // zero.innerHTML = numero

    // const zero2 = document.querySelector("#zero2")
    // zero2.innerHTML = 
}