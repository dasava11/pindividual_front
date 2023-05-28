import React, {useEffect, useState} from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const {REACT_APP_GET_ALL_TEMPER, REACT_APP_GET_ALL_DOGS} = process.env

//
const Form =()=>{
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: '', 
        weight:'', 
        height:'', 
        life_span:'', 
        image:'', 
        temperament:''
    })

const handleChangeInput =(event)=>{
     const {value, name}= event.target;

     setInput({
        ...input, 
        [name]: value
     })
}

const handleSubmit =(event)=>{
   event.preventDefault()
   console.log(input);

   axios.post(REACT_APP_GET_ALL_DOGS, input).then(()=>
    alert('the dog has been created')).catch(()=>("the dog hasn't been created"))
}

const [tempers, setTempers]= useState([])

useEffect(()=>{
    axios.get(REACT_APP_GET_ALL_TEMPER).then(response=>{
        const resTempers = response.data
        setTempers(resTempers);
    })
},[])

    return(
        <div className={styles.containerForm}>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.labelsForm}>Name:</label>
                <input name='name' className={styles.inputsForm}  onChange={handleChangeInput} type="text" />
                <label className={styles.labelsForm}>weight:</label>
                <input name='weight' className={styles.inputsForm} onChange={handleChangeInput} type="text" />
                <label className={styles.labelsForm}>height:</label>
                <input name='height' className={styles.inputsForm} onChange={handleChangeInput} type="text" />
                <label className={styles.labelsForm}>life span:</label>
                <input name='life_span' className={styles.inputsForm}onChange={handleChangeInput} type="text" />
                <label className={styles.labelsForm}>image:</label>
                <input name='image' className={styles.inputsForm} onChange={handleChangeInput} type="text" />
                <label className={styles.labelsForm}>temperament:</label>
                <select name={'temperament'} className={styles.inputsForm} onChange={handleChangeInput}>
                    <option>Select tempers</option>
                    {tempers && tempers.map((temper)=>(
                        <option key={temper.id} value={temper.name}>{temper.name}</option>
                    ))}
                </select>
                <button className={styles.addButton} type='submit'>Add</button>
            </form>
            <button className={styles.backHome} onClick={()=>navigate('/home')} >Volver</button>
        </div>
    )
}

export default Form