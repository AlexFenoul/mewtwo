import React from 'react';
import '../../App.css';
import './Question.css'


class Question extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            text: '',
        }
    }   

    render(){
        let {character, isSelected, isGoodResponse, numberQuestion} = this.props
        let {text} = this.state;
        numberQuestion = numberQuestion + 1

        return(
            <div>
                <h1>{isSelected? 'Question numéro ' + numberQuestion + ' : ' +  text + ' ?' : 'Veuillez sélectionner un personnage'}</h1>
            </div>  
        )
    }

}


export default Question;
