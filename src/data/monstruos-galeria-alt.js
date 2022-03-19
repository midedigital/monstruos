import ficha1 from '../assets/monstruos-galeria/ficha-1.svg'
import ficha2 from '../assets/monstruos-galeria/ficha-2.svg'
import ficha3 from '../assets/monstruos-galeria/ficha-3.svg'
import ficha4 from '../assets/monstruos-galeria/ficha-4.svg'
import ficha5 from '../assets/monstruos-galeria/ficha-5.svg'
import ficha6 from '../assets/monstruos-galeria/ficha-6.svg'
import ficha7 from '../assets/monstruos-galeria/ficha-7.svg'
import ficha8 from '../assets/monstruos-galeria/ficha-8.svg'
import ficha9 from '../assets/monstruos-galeria/ficha-9.svg'

import credito from '../data/credito'
import autosabotaje from '../data/autosabotaje'
import compulsivo from '../data/compulsivo'
import deudas from '../data/deudas'
import impostor from '../data/impostor'
import meses from '../data/meses'

const galeria = [
    {
        img: ficha2,
        nombre: 'Gasto Hormiga',
        customClass: false,
        frase: 'De poquito en poquito te hará acabarte tu dinerito.',
        desc: 'del gasto hormiga',
        url: 'C-DwqzwucV4'
    },
    {
        img: ficha1,
        nombre: 'Impostor',
        customClass: false,
        frase: 'Hará de todo para engañarte y quedarse tu dinero o identidad.',
        desc: 'impostor',
        slideshow: impostor,
        url: 'Wa3snph_NJs'
    },
    {
        img: ficha4,
        nombre: 'Estafador',
        customClass: false,
        frase: 'Te bajará la luna y las estrellas con tal de apropiarse de tu dinero.',
        desc: 'estafador',
        url: 'ipaKoK0Rbn0'
    },
    {
        img: ficha3,
        nombre: 'Meses',
        customClass: false,
        frase: 'El desorden y las compras a largo plazo le encantan.',
        desc: 'de los MSI',
        slideshow: meses
    },
    {
        img: ficha6,
        nombre: 'Autosaboteador',
        customClass: false,
        frase: 'Creará dudas y desconfianza en ti para que no tomes decisiones financieras relevantes.',
        desc: 'autosaboteador',
        slideshow: autosabotaje,
        url: 'tBB8MwPtd2Y'
    },
    {
        img: ficha5,
        nombre: 'Imprevistos',
        customClass: false,
        frase: 'Pondrá trampas en el camino para poner a prueba tu capacidad de ahorro.',
        desc: 'de los imprevistos'
    },
    {
        img: ficha8,
        nombre: 'Deudas',
        customClass: false,
        frase: 'El culpable de devorar cada mes a tus finanzas.',
        desc: 'de las deudas',
        slideshow: deudas,
        url: 'Mu4QG1YDPtI'
    },
    {
        img: ficha7,
        nombre: 'Adicto al crédito ',
        customClass: false,
        frase: 'Te hará creer que todo puedes comprarlo aunque luego, no puedas pagarlo.',
        desc: 'del crédito',
        slideshow: credito
    },
    {
        img: ficha9,
        nombre: 'Comprador Compulsivo',
        customClass: false,
        frase: 'Gracias a él comprarás lo que se te ponga enfrente.',
        desc: 'de las compras compulsivas',
        slideshow: compulsivo,
        url: 'Y-y0SaEXdD8'
    },
   
]

export default galeria