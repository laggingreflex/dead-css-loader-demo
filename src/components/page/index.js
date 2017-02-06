import React from 'react';
import Cards from '../cards';
import { container, header } from './style.css';
// import styles from "./style.css";

export default class Page extends React.Component {
    render(){
        return <div className={ container }>
            <h1 className={ header }>Webpack!</h1>
            <Cards />
        </div>
    }
}
