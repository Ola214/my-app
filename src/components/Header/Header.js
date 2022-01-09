import React, { useEffect } from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

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

    const futureYear = props.year + 10;

    console.log("Header return");
    return(
        <div>
            <h1>Article app</h1>
            <h2>Future year: {futureYear}</h2>
            <button className={buttonStyles.join(' ')}
            onClick={props.toggleArticles}>
            Toggle articles</button>
        </div>
    );
    
}

Header.propTypes = {
    year: PropTypes.number,
    propsArrays: PropTypes.array,
    propsBool: PropTypes.bool,
    propsFunc: PropTypes.func,
    propsEnum: PropTypes.oneOf(['Menu', 'Help', 'Contact']),
    propsStringOrNumber: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    propsObject: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
}

export default React.memo(Header);