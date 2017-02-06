import React from 'react';
import styles from './style.css';

export default class Card extends React.Component {
  render(){
    const meta = this.props.meta ? this.props.meta.join(" - ") : '';
    return <a className={ styles.card } href={ this.props.url }>
        <div className={ styles.image }>
          <img className={ styles.fluidImage } src={ this.props.image } />
        </div>
        <div className={ styles.content }>
          <h3 className={ styles.header }>{ this.props.title }</h3>
          <p className={ styles.description }>{ this.props.children }</p>
          <p className={ styles.meta }>{ meta }</p>
        </div>
        <div className={ styles.bottomAttachedPrimaryButton }>View project</div>
      </a>
  }
}
