import React from "react";
import styles from "./Pages.module.css"
import { useSelector } from 'react-redux';

export const Pages = ({pages, setPages,})=>{

    const allDogs = useSelector((state)=>state.allDogs)

const maximunIndex = Math.ceil(allDogs.length/15)
    
const handleClickNext = (e)=> {
if(e && pages < maximunIndex ) {
    setPages(pages + 1)
};
};

const handleClickPrev = (e)=>{
if(e && pages > 1) {
    setPages(pages - 1)
}; 
};
    return(
        <div className={styles.containerButtons} >
            <button className={styles.numbersPages} onClick={handleClickPrev}>{'<'}</button>
            <button className={styles.numbersPages}>1</button>
            <button className={styles.numbersPages}>2</button>
            <button className={styles.numbersPages}>3</button>
            <button className={styles.numbersPages}>4</button>
            <button className={styles.numbersPages}>5</button>
            <button className={styles.numbersPages}>6</button>
            <button className={styles.numbersPages}>7</button>
            <button className={styles.numbersPages}>8</button>
            <button className={styles.numbersPages}>9</button>
            <button className={styles.numbersPages}>10</button>
            <button className={styles.numbersPages}>11</button>
            <button className={styles.numbersPages}>12</button>
            <button className={styles.numbersPages} onClick={handleClickNext}>{'>'}</button>
        </div>
    )
}