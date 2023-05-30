import React from 'react';
import styles from './Home.module.css'
import FilterTempers from '../FilterTempers/FilterTempers.jsx';
import SearchBar from '../SearchBar/SearchBar';
import GridDogs from '../GridDogs/GridDogs';

const Home =()=>{
   
   //const [searchDogs, SetSearchDogs] = useState([])

    return(
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.filters} >
            <FilterTempers/>
            <SearchBar /* onSearch={(dog)=>props.onSearch(dog)}  *//>
            </div>
            <GridDogs/>
        </div>
    );
};

export default Home;