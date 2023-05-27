import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css'
import {getAllDogs} from '../../redux/actions/actions';
import Card from '../Card/Card.jsx';


const Home =()=>{
    const dispatch = useDispatch();

    const allDogs = useSelector((state)=>state.allDogs)

    useEffect(()=>{dispatch(getAllDogs())}, [dispatch]);
    
    return(
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.gridDogs}>
            { allDogs && allDogs.map((dog)=> {
               
                return(
                   <Card id= {dog.id} image={dog.image.url} name={dog.name} weight={dog.weight?.metric} temperament={dog.temperament} />
                    ); 
                   
                
            })}
            </div>
        </div>
    );
};

export default Home;