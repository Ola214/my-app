import React from 'react';
import styles from './Header.module.css';

const header = props => {

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

export default header;