import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllDogs} from '../../redux/actions/actions';
import styles from './Home.module.css'
import FilterTempers from '../FilterTempers/FilterTempers.jsx';
import SearchBar from '../SearchBar/SearchBar';
import GridDogs from '../GridDogs/GridDogs';

const Home =(/* {hanldeSearch} */)=>{

    const dispatch = useDispatch();
    const allDogs = useSelector((state)=>state.allDogs)
    useEffect(()=>{dispatch(getAllDogs())}, [dispatch]);

    const[pages, setPages] = useState(1);

    const [searchDogs, setSearchDogs] = useState([])

    const handleSearch = ({search, setSearch}) => {

    !search ? setSearchDogs(allDogs) : setSearch(allDogs.filter((dog)=> {dog.name.toString().toLowerCase.includes(search.toLowerCase())}))

   }
   
   
    return(
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.filters} >
            <FilterTempers/>
            <SearchBar handleSearch={handleSearch} />
            </div>
            <GridDogs allDogs={allDogs} pages={pages} setPages={setPages}/>
        </div>
    );
};

export default Home;