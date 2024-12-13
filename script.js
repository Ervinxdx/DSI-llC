

function cambiarImg(img) {
    const imgPrincipal = document.querySelector('.imgPrincipal')
    const minit = document.querySelectorAll('.mini')
    minit.forEach(min => {
        min.classList.remove('activo')
    });
    img.classList.add('activo')
    imgPrincipal.src = img.src



}

function eliminarItem(button) {
    button.parentElement?.remove()


}



function recuperandoLosDatos(){
    let user = document.querySelector('#user').value
    let password = document.querySelector('#password').value
    let userLocal =window.localStorage.getItem('usuarios')
    let usuarios = []
    let datos =[user,password,userLocal,usuarios]
    return datos

}



function btnRegistrate(){


    let [user,password,userLocal,usuarios] = recuperandoLosDatos()

    
    if (userLocal){
        usuarios = JSON.parse(userLocal)
        for (let usuario of usuarios){
            if (usuario.user === user){
                return alert("Ya existe ese usuario")
            }
        }
        alert("Usuario registrado exitosamente")
        usuarios.push({'user':user,'password':password})
        window.localStorage.setItem('usuarios',JSON.stringify(usuarios))
        window.location.href= "index.html"
            
    }else{
        usuarios.push({'user':user,'password':password})
        window.localStorage.setItem('usuarios',JSON.stringify(usuarios))
        window.location.href= "index.html"
    }  

}


function btnIniciarSesion() {

    let [user,password,userLocal,usuarios] = recuperandoLosDatos()

    if (userLocal){
        usuarios = JSON.parse(userLocal)
        console.log(usuarios)
        for (let usua of usuarios){
            if (usua.user === user && usua.password===password){
                alert("Usuario correcto")
                return window.location.href = "index.html"
                
            }else{
                return alert("Usuario incorrecto")
            }
        }
    }else{
        return alert("Usuario incorrecto ya tehas registrado?")
    }

    

}





let app = document.querySelector('#typewriter');

let typewriter = new Typewriter(app,{
    loop:true,
    delay:75,

});





typewriter
    .pauseFor(2500)
    .typeString("SAMSUNG S22 ULTRA 2024 SF-1242KF")
    .pauseFor(200)
    .deleteChars(10)
    .start()



let app2 = document.querySelector('#typewriter2');

let typewriter2 = new Typewriter(app2,{
        loop:true,
        delay:75,
    
    });
    
    typewriter2
        .pauseFor(2500)
        .typeString("XIOAMI 14 ULTRA")
        .pauseFor(200)
        .deleteChars(10)
        .start();





