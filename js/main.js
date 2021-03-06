const mybutton = document.getElementById("myBtn");


const name = document.querySelector('#name');
const mail = document.querySelector('#email');
const textarea = document.querySelector('#description');
const send = document.querySelector("#submit");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('#contact');

const navlink = document.querySelectorAll('.nav-link')



//eventlisteners


document.addEventListener('DOMContentLoaded', iniciarApp);
name.addEventListener('blur', validarFormulario);
mail.addEventListener('blur', validarFormulario);
textarea.addEventListener('blur', validarFormulario);
formulario.addEventListener('submit', enviarEmail);

function iniciarApp() {
    send.disabled = true;
}



function validarFormulario(e) {

    if (e.target.value.length > 0) {
        //eliminar errores
        const error = document.querySelector('p.error');

        if (error) {
            error.remove();
        }


        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')

    } else {
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid');

        send.disabled = true;
        mostrarError('All fields are required');

    }


    if (e.target.type === 'email') {

        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');

            if (error) {
                error.remove();
            }
            e.target.classList.add('is-valid')
        } else {
            send.disabled = true;

            mostrarError('The email is not valid')
        }
    }

    if (name.value !== '' && mail.value !== '' && textarea.value !== '') {
        send.disabled = false;
    }


}
//send email
function enviarEmail(e) {
    e.preventDefault();

    swal({
        title: "Message Sent!",
        icon: "success",
        button: "Accept",
    });

    resetForm();
}

//reset
function resetForm() {

    formulario.reset();


    name.classList.remove('is-valid')
    mail.classList.remove('is-valid')
    textarea.classList.remove('is-valid')

    iniciarApp();

    return
}


function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('alert', 'alert-danger', 'container', 'mb-5', 'width', 'error', 'mt-2', 'text-center', 'errorr');

    const errores = document.querySelectorAll('.error');


    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = ("block");


    } else {
        mybutton.style.display = "none";

    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function linkAction() {
    /*Active link*/
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navlink.forEach(n => n.addEventListener('click', linkAction));



$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {

        if (this.hash !== "") {

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 600, function () {

                // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    window.location.hash = hash;
                }
            });
            return false;
        } // End if
        if (history.replaceState) {
            history.replaceState(null, null, hash);
        }
    });


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


ScrollReveal().reveal('.navbar', {
    delay: 375,
    duration: 1500,
    origin: 'top',
    distance: '50px'
});
ScrollReveal().reveal('.home_title', {
    delay: 375,
    duration: 1500,
    origin: 'left',
    distance: '50px'
});
ScrollReveal().reveal('.imgaen-hero', {
    delay: 375,
    duration: 1500,
    origin: 'bottom',
    distance: '50px'
});
ScrollReveal().reveal('.about', {
    delay: 375,
    duration: 1500,
    origin: 'bottom',
    distance: '50px'
});
ScrollReveal().reveal('.text-center', {
    delay: 375,
    duration: 1500,
    origin: 'bottom',
    distance: '50px'
});
ScrollReveal().reveal('.card', {
    delay: 375,
    duration: 1500,
    origin: 'bottom',
    distance: '30px'
});

ScrollReveal().reveal('.contact', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '100px'
});
ScrollReveal().reveal('#contact', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.section-title', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});


ScrollReveal().reveal('.skills__container', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});



ScrollReveal().reveal('.skillimg', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});



ScrollReveal().reveal('.image-about', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.text-about', {
    delay: 600,
    duration: 1200,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.footer-text', {
    delay: 600,
    duration: 700,
    origin: 'bottom',
    distance: '30px'
});