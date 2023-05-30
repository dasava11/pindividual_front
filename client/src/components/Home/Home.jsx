import React from 'react';
import styles from './Home.module.css'
import FilterTempers from '../FilterTempers/FilterTempers.jsx';
import SearchBar from '../SearchBar/SearchBar';
import GridDogs from '../GridDogs/GridDogs';

const Home =(/* {hanldeSearch} */)=>{
   
 /*   const [searchDogs, SetSearchDogs] = useState([])

   const handleSearch = ({search, setSearch}) => {

    !search ? setSearchDogs(allDogs) : setSearch(allDogs.filter((dog)=> {dog.name.toString().toLowerCase.includes(search.toLowerCase())}))

   } */
   

    return(
        <div className={styles.containerHome}>
            <h1>Home</h1>
            <div className={styles.filters} >
            <FilterTempers/>
            <SearchBar /* {search, setSearch} *//>
            </div>
            <GridDogs/>
        </div>
    );
};

export default Home;