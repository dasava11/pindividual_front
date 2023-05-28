import React, {useEffect, useState} from 'react';
import styles from './Detail.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const {REACT_APP_GET_DOGS_BYID} = process.env


const Detail =()=>{

    const [dog, setDog] =  useState({})
    const {id} = useParams()
     const navigate = useNavigate();

    useEffect( ()=>{
    
       axios.get(REACT_APP_GET_DOGS_BYID+id).then((response)=>{
        
        const resDog = response.data
        if (resDog.name) {
          console.log(resDog)
        setDog(resDog);
        } else{
        window.alert("No hay perros con ese ID");
        };
        }).catch((error)=>{
          window.alert("UPS!!! Algo salió mal");  
        });
        return setDog({});
    },[id])

    return(
    <div className={styles.containerDetail}>
        <h1>Detail</h1>
            <div className={styles.contenedorP}>
          <div className={styles.info}>
            {dog && <h1>Name: {dog.name}</h1>}
            {dog && <h2>ID: {dog.id}</h2>}
            {dog && <h2>Height: {dog.height?.metric}</h2>}
            {dog && <h2>Weight: {dog.weight?.metric}</h2>}
            {dog && <h2>life span: {dog.life_span}</h2>}
            {dog && <h2>Temperaments: {dog.temperament}</h2>}
          </div>
            {dog && <img src={dog.image?.url} alt={dog.name} className={styles.foto}/>}
        </div>
        <button className={styles.backHome} onClick={()=>navigate('/home')} >Volver</button>
    </div>
    )
}

export default Detail;