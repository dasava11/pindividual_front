import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css'
import {getAllDogs} from '../../redux/actions/actions';
import Card from '../Card/Card.jsx';
import FilterTempers from '../FilterTempers/FilterTempers.jsx';
import SearchBar from '../SearchBar/SearchBar';


const Home =()=>{
    const dispatch = useDispatch();

    const allDogs = useSelector((state)=>state.allDogs)

    useEffect(()=>{dispatch(getAllDogs())}, [dispatch]);
    
    return(
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.filters} >
            <FilterTempers/>
            <SearchBar /* onSearch={(dog)=>props.onSearch(dog)}  *//>
            </div>
            <div className={styles.gridDogs}>
            { allDogs && allDogs.map((dog)=> {
               if (dog.hasOwnProperty("temperament")) {
                return(
                   <Card id= {dog.id} image={dog.image.url? dog.image.url : dog.image} name={dog.name} weight={dog.weight?.metric} temperament={dog.temperament} />
                );  
               } else if(dog.hasOwnProperty("temperaments")) {
                return(
                   <Card id= {dog.id} image={dog.image.url? dog.image.url : dog.image} name={dog.name} weight={dog.weight?.metric? dog.weight?.metric : dog.weight} temperament={dog.temperaments[0]?.name} />
                );  
               } else {
                return(
                   <Card id= {dog.id} image={dog.image.url} name={dog.name} weight={dog.weight?.metric} />
                ); 
               } 
            })}
            </div>
        </div>
    );
};

export default Home;