function carro() {
let carrito = document.getElementById('carrito')
    carrito.addEventListener('click', () => {
        if(carrito){
            window.location.href = '/carrtito.html';   
        }else{
            console.log("a")
        }
    });

}

function b(a){
    const btn = document.querySelector('button')
    const bo = document.querySelector(a)
    btn.addEventListener('click', () =>{
        bo.innerHTML = ``
    })
    console.log(btn.target)
}



carro()

const barra = document.querySelector('#uno');
const barra2 = document.querySelector('#dos');
const barra3 = document.querySelector('#tres');
const barra4 = document.querySelector('#cuatro');
const barra5 = document.querySelector('#cinco');
const barra6 = document.querySelector('#seis');
const barra7 = document.querySelector('#siete');




const a = document.querySelector('.box')
a.innerHTML = `<div id="cafe" class="menu">
    <h3>Cafe Expreso</h3>
    <img src="imagenes/cafeexpreso.jpeg" alt="">
    <p><b>Cafe en de 220ml
    <br> 
    Precio: 2500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="Capuchino" class="menu">
    <h3>Capuchino</h3>
    <img src="imagenes/capuchiniasesini.jpeg" alt="">
    <p> <b> Capuchino natural <br>
    Precio: 2700$ </b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="milk" class="menu">
    <h3>Milkshake</h3>
    <img src="imagenes/milkshake.jpeg" alt="">
    <p> <b>Milkshake de oreo
    <br> 
    Precio: 7000$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="leche" class="menu">
    <h3>Leche</h3>
    <img src="imagenes/leche.jpeg" alt="">
    <p> <b>Leche de 270ml
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="tecito" class="menu">
    <h3>Té</h3>
    <img src="imagenes/te.jpeg" alt="">
    <p> <b>Tecito
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="pingado" class="menu">
    <h3>Pingado</h3>
    <img src="imagenes/brasil/pingado.jpeg" alt="">
    <p> <b>Cafe Expreso con leche
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="licua" class="menu">
    <h3>Licuado de banana</h3>
    <img src="imagenes/brasil/licuado.jpeg" alt="">
    <p> <b>Contiene banana
    <br> 
    Precio: 2100$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>`
            
barra.addEventListener('click', () => {
    a.innerHTML = `<div id="cafe" class="menu">
    <h3>Cafe Expreso</h3>
    <img src="imagenes/cafeexpreso.jpeg" alt="">
    <p><b>Cafe en de 220ml
    <br> 
    Precio: 2500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="Capuchino" class="menu">
    <h3>Capuchino</h3>
    <img src="imagenes/capuchiniasesini.jpeg" alt="">
    <p> <b> Capuchino natural <br>
    Precio: 2700$ </b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="milk" class="menu">
    <h3>Milkshake</h3>
    <img src="imagenes/milkshake.jpeg" alt="">
    <p> <b>Milkshake de oreo
    <br> 
    Precio: 7000$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="leche" class="menu">
    <h3>Leche</h3>
    <img src="imagenes/leche.jpeg" alt="">
    <p> <b>Leche de 270ml
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="tecito" class="menu">
    <h3>Té</h3>
    <img src="imagenes/te.jpeg" alt="">
    <p> <b>Tecito
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="pingado" class="menu">
    <h3>Pingado</h3>
    <img src="imagenes/brasil/pingado.jpeg" alt="">
    <p> <b>Cafe Expreso con leche
    <br> 
    Precio: 1500$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="licua" class="menu">
    <h3>Licuado de banana</h3>
    <img src="imagenes/brasil/licuado.jpeg" alt="">
    <p> <b>Contiene banana
    <br> 
    Precio: 2100$</b> </p>
    <button class="boton">añadir al carrito</button>
    </div>` 

})   
barra2.addEventListener('click', () => {
    a.innerHTML = `
    <div id="tosta" class="menu">
        <h3>Tostadas</h3>
        <img src="imagenes/Almuerzo/tostadas.jpeg" alt="">
        <p><b>Tostadas de JyQ
            <br> 
            Precio: 4000$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
     
    <div id="caño" class="menu">
        <h3>Cañoncitos</h3>
        <img src="imagenes/Almuerzo/cañoncitos.jpeg" alt="">
        <p><b>De dulce de leche 
            <br> 
            Precio: 3500$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>

    <div id="chipa" class="menu">
        <h3>Chipa</h3>
        <img src="imagenes/Almuerzo/chipa.jpeg" alt="">
        <p><b>Media docena de pão de queijo
            <br> 
            Precio: 2000$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
    <div id="donas" class="menu">
        <h3>Donas</h3>
        <img src="imagenes/Almuerzo/donas.jpeg" alt="">
        <p><b>con dulce de leche o sin 
            <br> 
            Precio: 1000$ por unidad</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
    <div id="media" class="menu">
        <h3>Medialunas</h3>
        <img src="imagenes/Almuerzo/medialunas.jpeg" alt="">
        <p><b>De jamon y queso o dulces
            <br> 
            Precio: 2000$ media docena</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
    <div id="beiju" class="menu">
        <h3>Beiju de Tapioca</h3>
        <img src="imagenes/brasil/Beiju.jpeg" alt="">
        <p> <b>Beiju con nuez y coco rayado
        <br> 
        Precio: 3500$</b> </p>
        <button class="boton">añadir al carrito</button>
        </div>
`
})
barra3.addEventListener('click', () => {
    a.innerHTML = `
    <div id="cafe" class="menu">
    <h3>Cafe Expreso</h3>
    <img src="imagenes/cafeexpreso.jpeg" alt="">
    <p><b>Cafe en de 220ml
    <br> 
    Precio: 2500$</b></p>
        <button class="boton">añadir al carrito</button>
        </div>
        <div id="Capuchino" class="menu">
        <h3>Capuchino</h3>
        <img src="imagenes/capuchiniasesini.jpeg" alt="">
        <p> <b> Capuchino natural <br>
        Precio: 2700$ </b></p>
        <button class="boton">añadir al carrito</button>
        </div>
        <div id="milk" class="menu">
        <h3>Milkshake</h3>
        <img src="imagenes/milkshake.jpeg" alt="">
        <p> <b>Milkshake de oreo
        <br> 
            Precio: 7000$</b> </p>
            <button class="boton">añadir al carrito</button>
            </div>
            <div id="leche" class="menu">
            <h3>Leche</h3>
            <img src="imagenes/leche.jpeg" alt="">
            <p> <b>Leche de 270ml
            <br> 
            Precio: 1500$</b> </p>
            <button class="boton">añadir al carrito</button>
            </div>
            <div id="tecito" class="menu">
            <h3>Té</h3>
            <img src="imagenes/te.jpeg" alt="">
            <p> <b>Tecito
            <br> 
            Precio: 1500$</b> </p>
            <button class="boton">añadir al carrito</button>
            </div>
    <div id="tosta" class="menu">
        <h3>Tostadas</h3>
        <img src="imagenes/Almuerzo/tostadas.jpeg" alt="">
        <p><b>Tostadas de JyQ
            <br> 
            Precio: 4000$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
     
    <div id="caño" class="menu">
        <h3>Cañoncitos</h3>
        <img src="imagenes/Almuerzo/cañoncitos.jpeg" alt="">
        <p><b>De dulce de leche 
            <br> 
            Precio: 3500$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>

    <div id="chipa" class="menu">
        <h3>Chipa</h3>
        <img src="imagenes/Almuerzo/chipa.jpeg" alt="">
        <p><b>Media docena de Chipa
            <br> 
            Precio: 2000$</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
    <div id="donas" class="menu">
        <h3>Donas</h3>
        <img src="imagenes/Almuerzo/donas.jpeg" alt="">
        <p><b>con dulce de leche o sin 
            <br> 
            Precio: 1000$ por unidad</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>

    <div id="media" class="menu">
        <h3>Medialunas</h3>
        <img src="imagenes/Almuerzo/medialunas.jpeg" alt="">
        <p><b>De jamon y queso o dulces
            <br> 
            Precio: 2000$ media docena</b> </p>
        <button class="boton">añadir al carrito</button>
    </div>
`
console.log(menu)
})
barra4.addEventListener('click', () => {
    a.innerHTML = `
    
        <div id="pingado" class="menu">
        <h3>Pingado</h3>
        <img src="imagenes/brasil/pingado.jpeg" alt="">
        <p> <b>Cafe Expreso con leche
        <br> 
        Precio: 1500$</b> </p>
        <button class="boton">añadir al carrito</button>
        </div>
        <div id="licua" class="menu">
        <h3>Licuado de banana</h3>
        <img src="imagenes/brasil/licuado.jpeg" alt="">
        <p> <b>Contiene banana
        <br> 
        Precio: 2100$</b> </p>
        <button class="boton">añadir al carrito</button>
        </div>
        <div id="Chipa" class="menu">
        <h3>Pão de queijo</h3>
        <img src="imagenes/Almuerzo/chipa.jpeg" alt="">
        <p> <b>Media docena por porción
        <br> 
        Precio: 1500$</b> </p>
        <button class="boton">añadir al carrito</button>
        </div>
        <div id="beiju" class="menu">
        <h3>Beiju de Tapioca</h3>
        <img src="imagenes/brasil/Beiju.jpeg" alt="">
        <p> <b>Beiju con nuez y coco rayado
        <br> 
        Precio: 3500$</b> </p>
        <button class="boton">añadir al carrito</button>
        </div>
            ` 
})
barra5.addEventListener('click', () => {
    a.innerHTML = `<div id="cafe" class="menu">
    <h3>Cafe Expreso</h3>
    <img src="imagenes/cafeexpreso.jpeg" alt="">
    <p><b>Cafe en de 220ml
    <br> 
    Precio: 2500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="te" class="menu">
    <h3>Té</h3>
    <img src="imagenes/te.jpeg" alt="">
    <p><b>Té en de 220ml
    <br> 
    Precio: 1500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="combod" class="menu">
    <h3>Combo Dulce</h3>
    <img src="imagenes/chile/combodul.jpeg" alt="">
    <p><b>se puede pedir a elección
    <br> 
    Precio: 8500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="combos" class="menu">
    <h3>Combo Salado</h3>
    <img src="imagenes/chile/combosal.jpeg" alt="">
    <p><b>se puede pedir a elección
    <br> 
    Precio: 8500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>`
})
barra6.addEventListener('click', () => {
    a.innerHTML = `<div id="cafe" class="menu">
    <h3>Cafe Expreso</h3>
    <img src="imagenes/cafeexpreso.jpeg" alt="">
    <p><b>Cafe en de 220ml
    <br> 
    Precio: 2500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="gammel" class="menu">
    <h3>Gammel Dansk</h3>
    <img src="imagenes/dinamarca/gammel.jpeg" alt="">
    <p><b>Bebida alcoholica 
    <br> 
    Precio: 5500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>

    <div id="pastelm" class="menu">
    <h3>Æblekage</h3>
    <img src="imagenes/dinamarca/pastel.jpeg" alt="">
    <p><b>Pastel de Manzana
    <br> 
    Precio: 6500$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>

    <div id="bolas" class="menu">
    <h3>Æbleskiver</h3>
    <img src="imagenes/dinamarca/bolitas.jpeg" alt="">
    <p><b>Bolas de masa con mermelada
    <br> 
    Precio: 4600$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    `
})
barra7.addEventListener('click', () => {
    a.innerHTML = `<div id="yogurt" class="menu">
    <h3>Yogurt</h3>
    <img src="imagenes/francia/yogut.jpeg" alt="">
    <p><b>vaso de yogurt
    <br> 
    Precio: 2800$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="vien" class="menu">
    <h3>viennoiseriesk</h3>
    <img src="imagenes/francia/2do.jpeg" alt="">
    <p><b>Pan Frances dulce 
    <br> 
    Precio: 5900$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>
    <div id="zumos" class="menu">
    <h3>Zumos frutales</h3>
    <img src="imagenes/francia/zumos.jpeg" alt="">
    <p><b>jugos de frutas
    <br> 
    Precio: 3200$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>

    <div id="crisant" class="menu">
    <h3>Croissant</h3>
    <img src="imagenes/francia/croissant.jpeg" alt="">
    <p><b>Medialunas especial de francia
    <br> 
    Precio: 3600$</b></p>
    <button class="boton">añadir al carrito</button>
    </div>

    
    `
})
