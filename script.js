function carro() {


let carrito = document.getElementById('carrito')
    carrito.addEventListener('click', e => {
        if(carrito){
            window.location.href = '/carrtito.html';   
        }else{
            console.log("algo no piolaba")
        }
    });

}