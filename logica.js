let numero = 0
function mais(){
    numero += 1
    render()
}
function render(){
    const p = document.querySelector("button")
    p.innerHTML = numero
}