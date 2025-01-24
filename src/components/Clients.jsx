import React from 'react'
import { clients } from '../constants'
import styles from '../style'


const Clients = () => (

    <section className={`${styles.flexCenter} mr-4`}>

        <div className={`${styles.flexCenter} w-full flex-wrap`}>

            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] `}>
                    <img src={client.logo} alt="client" className='w-[100px] sm:w-[192px] object-contain' />
                </div>
            ))}
        </div>
    </section>

)

export default Clients
