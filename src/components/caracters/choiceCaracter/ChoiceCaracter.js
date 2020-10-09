import React from 'react';
import '../../../App.css';
import './ChoiceCaracter.css'

class ChoiceCaracter extends React.Component {
    render() {
        const {name, image} = this.props;
      
        return (
            <div className="ChoiceCaracter">
                <p className="CaracterName">{name}</p>
                <img className="CaracterImage" alt= "caracterImage" src={process.env.PUBLIC_URL + '/images/' + image} /> 
            </div>
        )
    }
  }
export default ChoiceCaracter;
