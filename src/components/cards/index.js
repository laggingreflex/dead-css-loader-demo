import React from 'react';
import Card from '../card';
import logo from '../../images/webpack.jpg';
import { fourStackableLinkCards } from './style.css';

export default class Cards extends React.Component {
    render(){
        return <div className={ fourStackableLinkCards }>
                <Card image={ logo } title="webpack" url="#" meta={ ['webpack', 'software'] }>
                    Lorem ipsum dolor sit amet
                </Card>
                <Card image={ logo } title="webpack" url="#" meta={ ['webpack', 'software'] }>
                    Lorem ipsum dolor sit amet
                </Card>
                <Card image={ logo } title="webpack" url="#" meta={ ['webpack', 'software'] }>
                    Lorem ipsum dolor sit amet
                </Card>
                <Card image={ logo } title="webpack" url="#" meta={ ['webpack', 'software'] }>
                    Lorem ipsum dolor sit amet
                </Card>
            </div>
    }
}
