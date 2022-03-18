 import monstruo1 from '../assets/monstruos-svg/monstruo1.svg'
 import monstruo2 from '../assets/monstruos-svg/monstruo2.svg'
 import monstruo3 from '../assets/monstruos-svg/monstruo3.svg'
 import monstruo4 from '../assets/monstruos-svg/monstruo4.svg'
 import monstruo5 from '../assets/monstruos-svg/monstruo5.svg'
 import monstruo7 from '../assets/monstruos-svg/monstruo7.svg'
 import monstruo8 from '../assets/monstruos-svg/monstruo8.svg'
 import monstruo9 from '../assets/monstruos-svg/monstruo6.svg'
 
 const data = [
    {
        nombre: 'deudas',
        url: monstruo1,
        pregunta: 'Tu deuda tiene dos pagos pendientes pero este fin hay venta nocturna, tú: ',
        left: 'Aprovechas a comprar la freidora de aire que tanto querías.',
        right: 'Renuevas tu guardarropa porque hay muchas ofertas.', 
        score: 0,
        color: '#dbcfc3',
        customClass: true
    },
    {
        nombre: 'compras',
        url: monstruo2,
        pregunta: 'Revisando tus redes sociales, observas el anuncio de unos tenis de edición limitada que no tenías planeado comprar, tú:',
        left: 'Los compras porque tienen descuento aunque el diseño no vaya tanto contigo.',
        right: 'En este momento no tienes el dinero, pero los pagas con tu tarjeta de crédito..',
        score: 0,
        color: '#d3e3d6', 
        customClass: true
    },
    {
        nombre: 'impostor',
        url: monstruo3,
        pregunta: 'Te hablan de un número desconocido para decirte que tienes un cargo no reconocido en tu tarjeta, tú:',
        left: 'Te asustas e inmediatamente das todos tus datos para confirmar que no realizaste ese movimiento.',
        right: 'No recuerdo si hice esas compras, de haberlas hecho, no están consideradas en mis gastos y no tengo ahorros para pagarlas.',
        score: 0,
        color: '#efc5b9',
        customClass: true
    },
    {
        nombre: 'meses',
        url: monstruo4,
        pregunta: 'Es navidad y decides comprar regalos para toda tu familia, tú:',
        left: 'Pagas a meses sin intereses, ya te preocuparás de eso cuando llegue el estado de cuenta.',
        right: 'Usas todo tu aguinaldo para comprar los regalos.',
        score: 0,
        color: '#f5eee8',
        customClass: true
        
    },
    {
        nombre: 'saboteador',
        url: monstruo5,
        pregunta: 'Tomaste un curso de repostería y te gustó tanto que piensas emprender un negocio, tú:',
        left: 'Compras algunos materiales que necesitas, pero por temor al qué dirán ya no continúas con tu negocio.',
        right: 'No tienes un plan, pero empiezas a comprar utensilios y materiales, al fin que con tu tarjeta de crédito puedes pagarlos a meses sin intereses.',
        score: 0,
        color: '#e0c8bc',
        customClass: true
    },
    {
        nombre: 'credito',
        url: monstruo9,
        pregunta: 'Un día vas con tus amigos al centro comercial, tú:',
        left: 'Llevas tu tarjeta de crédito para poder comprar todo lo que quieras.',
        right: 'No llevas mucho dinero, si te gusta algo le pides prestado a tus amigos, ya después pensarás cómo pagarles.',
        score: 0,
        color: '#f5eee8',
        customClass: true
    },
    {
        nombre: 'imprevistos',
        url: monstruo7,
        pregunta: 'Estás tomando clases virtuales o en home office y por accidente derramas café en tu computadora, tú:',
        left: 'Como no tienes ahorros suficientes, tendrás que vender alguna de tus pertenencias para repararla. ',
        right: 'En lugar de repararla, decides aprovechar el momento y comprar una nueva computadora.',
        score: 0,
        color: '#dbcfc3',
        customClass: true
    },
    {
        nombre: 'hormiga',
        url: monstruo8,
        pregunta: 'El trayecto de tu casa a tu trabajo o escuela es un poco largo, tú: ',
        left: 'No sueles desayunar en tu casa porque casi siempre sales con el tiempo justo, entonces compras algo para desayunar en la escuela o trabajo.',
        right: 'Para ir más cómodo y llegar temprano, tomas taxi y sin querer te gastas los ahorros que tenías para cumplir una meta.',
        score: 0,
        color: '#dac2d0',
        customClass: true
    },
    {
        nombre: 'ultimo',
        url: monstruo9,
        pregunta: 'En redes sociales está de moda una invesión que genera grandes ganancias, solo necesitas invertir poco e invitar a otros amigos para que se unan, tú:',
        left: 'Haces una transferencia para participar en el negocio ya que quieres dinero rápido e invitas a tres de tus conocidos',
        right: 'Rechazas la oferta, pero pides un crédito para poner tu propio negocio aunque no sabes cómo iniciar.',
        score: 0,
        color: '#D3E3D6',
        customClass: true
    },
 ]

 export default data