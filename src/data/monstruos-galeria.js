import ficha1 from '../assets/monstruos-galeria-desktop/ficha-1.svg'
import ficha2 from '../assets/monstruos-galeria-desktop/ficha-2.svg'
import ficha3 from '../assets/monstruos-galeria-desktop/ficha-3.svg'
import ficha4 from '../assets/monstruos-galeria-desktop/ficha-4.svg'
import ficha5 from '../assets/monstruos-galeria-desktop/ficha-5.svg'
import ficha6 from '../assets/monstruos-galeria-desktop/ficha-6.svg'
import ficha7 from '../assets/monstruos-galeria-desktop/ficha-7.svg'
import ficha8 from '../assets/monstruos-galeria-desktop/ficha-8.svg'
import ficha9 from '../assets/monstruos-galeria-desktop/ficha-9.svg'

import credito from '../data/credito'
import autosabotaje from '../data/autosabotaje'
import compulsivo from '../data/compulsivo'
import deudas from '../data/deudas'
import impostor from '../data/impostor'
import meses from '../data/meses'
import hormiga from './hormiga'
import imprevistos from './imprevistos'
import estafador from './estafador'

const galeria = [
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
        img: ficha2,
        nombre: 'Deudas',
        customClass: false,
        frase: 'El culpable de devorar cada mes a tus finanzas.',
        desc: 'de las deudas',
        slideshow: deudas,
        url: 'Mu4QG1YDPtI'
    },
    {
        img: ficha3,
        nombre: 'Gasto Hormiga',
        customClass: false,
        frase: 'De poquito en poquito te hará acabarte tu dinerito.',
        desc: 'del gasto hormiga',
        url: 'C-DwqzwucV4',
        slideshow: hormiga
    },
    {
        img: ficha4,
        nombre: 'Meses',
        customClass: false,
        frase: 'El desorden y las compras a largo plazo le encantan.',
        desc: 'de los MSI',
        slideshow: meses,
        url: 'kz_rwbrAa20'
    },
    {
        img: ficha5,
        nombre: 'Comprador Compulsivo',
        customClass: false,
        frase: 'Gracias a él comprarás lo que se te ponga enfrente.',
        desc: 'de las compras compulsivas',
        slideshow: compulsivo,
        url: 'Y-y0SaEXdD8'
    },
    {
        img: ficha6,
        nombre: 'Adicto al crédito',
        customClass: false,
        frase: 'Te hará creer que todo puedes comprarlo aunque luego, no puedas pagarlo.',
        desc: 'del crédito',
        slideshow: credito,
        url: 'U0Sx1M3MKK8'
    },
    {
        img: ficha7,
        nombre: 'Autosaboteador',
        customClass: false,
        frase: 'Creará dudas y desconfianza en ti para que no tomes decisiones financieras relevantes.',
        desc: 'autosaboteador',
        slideshow: autosabotaje,
        url: 'tBB8MwPtd2Y'
    },
    {
        img: ficha8,
        nombre: 'Imprevistos',
        customClass: false,
        frase: 'Pondrá trampas en el camino para poner a prueba tu capacidad de ahorro.',
        desc: 'de los imprevistos',
        url: 'oWSo9PFl0Yo',
        slideshow: imprevistos
    },
    {
        img: ficha9,
        nombre: 'Estafador',
        customClass: false,
        frase: 'Te bajará la luna y las estrellas con tal de apropiarse de tu dinero.',
        desc: 'estafador',
        url: 'ipaKoK0Rbn0',
        slideshow: estafador
    },
   
]

export default galeria