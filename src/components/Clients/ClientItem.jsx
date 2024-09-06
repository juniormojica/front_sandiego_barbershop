
import s from './ClientItem.module.css'
export default function ClientItem({ name }) {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-nowrap'>
                <li className='w-75 text-truncate me-5'>{name}</li>
                <div className='w-25 d-flex justify-content-end'>
                    <button className={`${s.detailButton} me-2`}>Detalles</button>

                    <button className={`${s.deleteButton}`}>Eliminar</button>
                </div>
            </div>
        </>

    )
}