import React, { useEffect } from 'react';
import styles from './Header.module.css';

const Header = props => {

    //po każdym renderowaniu komponentu didMount i didUpdate
    useEffect(() => {
        console.log("Header useEffect");

        //wywoływanie funkcji jako pierwszy parametr po czasie określonym w drugim parametrze ms
        setTimeout(() => {
            console.log("http request is done");
        }, 1500);
    },[props.showArticles]); //drugi parametr opcjonalny - wszyskie zmiany w zmiennych które wywoływują tą funcję - jak jest pusta to wykona się tylko raz podczas tworzenia komponentu


    let buttonStyles = [styles.toggleButton];

    if(props.showArticles){ 
        buttonStyles.push(styles.red);
    }

    return(
        <div>
            <h1>Article app</h1>
            <button className={buttonStyles.join(' ')}
            onClick={props.toggleArticles}>
            Toggle articles</button>
        </div>
    );
    
}

export default Header;