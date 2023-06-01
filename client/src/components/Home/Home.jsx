import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllDogs} from '../../redux/actions/actions';
import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import FilterTempers from '../FilterTempers/FilterTempers';
import GridDogs from '../GridDogs/GridDogs';

const Home =()=>{

    /* !search ? setSearchDogs(allDogs) : setSearch(allDogs.filter((dog)=> {dog.name.toString().toLowerCase.includes(search.toLowerCase())}))*/

    const dispatch = useDispatch();
    const allDogs = useSelector((state)=>state.allDogs)
    useEffect(()=>{dispatch(getAllDogs())}, [dispatch]);

    const[pages, setPages] = useState(1);

    return(
        <div>
        <NavBar allDogs={allDogs}/>
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.filters} >
            <FilterTempers /* handleFilterTempers={handleFilterTempers}  *//>
            </div>
            <GridDogs allDogs={allDogs} pages={pages} setPages={setPages}/>
        </div>
        </div>
    );
};

export default Home;