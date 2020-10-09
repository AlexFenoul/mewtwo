import React from 'react';
import '../../App.css';

class Answers extends React.Component {

    goodReponse(isGood){
        this.props.isGoodReponse(isGood)
        this.props.getNumberQuestion()
    };

    render() {
        return (
            <div className="Answers">
               <button onClick={() => this.goodReponse(true)}>Changer de question</button>
            </div>
        )
    }
  }
export default Answers;
