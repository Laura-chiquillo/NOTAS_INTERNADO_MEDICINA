import styles from '../../styles/ProfileCard.module.scss'

import User3 from '../assets/images/users/user3.jpg'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useColors } from '../../hooks/useColor'
import { getApiAdmin } from '../../api/admin'

export default function ProfileCard() {

  const { setColor } = useColors()

  const changeColor = (color) => {
    setColor(color)
    localStorage.setItem('color', color)
  }

  const [admin, setAdmin] = useState([])

  useEffect(() => {
    getApiAdmin("torresyira@unbosque.edu.co")
      .then((Datos) => {
        if (Datos.correo === "torresyira@unbosque.edu.co") {
          setAdmin(Datos)       
        }
      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])


  return (
    <div className={styles.container}>
      <Image src={User3} width={150} height={150} className={styles.perfil__img} />
  
          <>
            <div className={styles.perfil}>
            {admin?.primerNombre + " "} {admin?.segundoNombre + " "} {admin?.primerApellido + " "}{admin?.segundoApellido + " "}

              </div>

            <ul className={styles.listProfileContent}>
      
              <li className={styles.infop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                <p className={styles.infoText}>{admin?.correo}</p>
              </li>
            </ul>
          </>



      <div className={styles.chosenColor}>
        <button onClick={() => changeColor("yellow")} className={styles.bola1}></button>
        <button onClick={() => changeColor("#90EE90")} className={styles.bola2}></button>
        <button onClick={() => changeColor("orange")} className={styles.bola3}></button>
      </div>




    </div>
  )
}
