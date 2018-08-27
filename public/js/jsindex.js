$('#home .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		}
	},
	navigation: false,
	nav: false,
	loop: true,
	dots: false,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplay: true,
	autoplayTimeout: 5000,
	mouseDrag: false
});
var m = 1;
function next(){
	var nombre = $('#nombre').val();
	var pais   = $('#pais').val();
	if(nombre == null || nombre == '') {
		msj('error', 'Ingrese su nombre');
		return;
	}
	m++;
	if(m == 2){
		$('#title').text('¿De dónde eres?');
		$('#subtitle').text('Necesitamos saber tu ubicación para proporcionarte los planes y precios de tu pais.');
		// $('#buttonNetflix').text('Si, de aquí soy!')
		$('#input-nombre').fadeOut();
		$('#input-pais').fadeIn();
	}else if(m == 3){
		if(pais == null || pais == '') {
			msj('error', 'Ingrese su país');
			return;
		}
		$('#title').text('Configura tu Netflix');
		$('#subtitle').text('Estos seran los datos que registraremos en Netflix, osea que apenas pagues podras acceder a tu cuenta con estos datos:');
		// $('#buttonNetflix').text('Así quiero mi cuenta');
		$('#input-pais').fadeOut();
		$('#input-configuracion').fadeIn();
	}else if(m == 4){
		$('#title').text('Selecciona tu plan');
		$('#subtitle').text('Este sera el plan que configuraremos en tu cuenta:');
		$('#buttonNetflix').css('display','none');
		$('#input-configuracion').fadeOut();
		$('#input-plan').fadeIn();
	}
}
function goToPlan(){
	$('#title').text('¿Cómo pagarás?');
	$('#subtitle').text('Por favor seleccione un método de pago:');
	$('#input-plan').fadeOut();
	$('#input-pago').fadeIn();
}
function goToPago(metodo){
	$('#title').text('Datos de Pago');
	$('#subtitle').css('display','none');
	$('#input-pago').fadeOut();
	if(metodo == 1)
		$('#input-tarjeta').fadeIn();
	else
		$('#input-efectivo').fadeIn();
}
function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function verificarDatos(e) {
	if(e.keyCode === 13){
		e.preventDefault();
		ingresar();
    }
}