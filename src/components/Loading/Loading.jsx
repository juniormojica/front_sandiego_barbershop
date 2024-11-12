import React from 'react'
import s from './Loading.module.css' // Asegúrate de que la ruta sea correcta

const Loading = () => {
    return (
        <div className={s.container}>
            <ion-icon name="sync" className={s.spinner} />
            <p>Cargando...</p>
        </div>
    )
}

export default Loading
