import React, { useState }  from 'react';
import Card from '../Card/Card.jsx';
import { Pages } from "../Pages/Pages";
import styles from './GridDogs.module.css'

const GridDogs = ({allDogs, pages, setPages}) =>{


    const[dogsByPage, /* setDogsByPage */] = useState(15);

    const indexMax = pages * dogsByPage;
    const indexMin = indexMax - dogsByPage;
    const currentDogs = allDogs.slice(indexMin, indexMax);

  return(
    <div className={styles.Grid} >
    <div className={styles.dogsPage} >
      { allDogs && currentDogs.map((dog)=> {
               if (dog.hasOwnProperty("temperament")) {
                return(
                   <Card id= {dog.id} image={dog.image?.url? dog.image?.url : dog.image} name={dog.name} weight={dog.weight?.metric} temperament={dog.temperament} />
                );  
               } else if(dog.hasOwnProperty("temperaments")) {
                return(
                   <Card id= {dog.id} image={dog.image?.url? dog.image?.url : dog.image} name={dog.name} weight={dog.weight?.metric} temperament={dog.temperaments[0]?.name} />
                );  
               } else {
                return(
                   <Card id= {dog.id} image={dog.image?.url} name={dog.name} weight={dog.weight?.metric} />
                ); 
               } 
            })}
    </div>
            <Pages pages={pages} setPages={setPages} indexMax={indexMax}/>
    </div>
  )
}

export default GridDogs;