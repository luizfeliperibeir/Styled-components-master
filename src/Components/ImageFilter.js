import React from 'react'
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from '../Components/UI'

export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} />,
        Utilidades: <Icone src={utilidades} />,
        Saude: <Icone src={saude} />,
        Transporte: <Icone src={transporte} />,
        default: <Icone src={outros} />,
    };
    return Images[type] || Images.default;
}