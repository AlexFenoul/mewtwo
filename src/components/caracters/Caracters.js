import React from 'react';
import ChoiceCaracter from './choiceCaracter/ChoiceCaracter';

import '../../App.css';
import './Caracters.css'

class Caracter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            characters:  [{id: 1 ,name: "Mewtwo", image: "mewtwo.png" }, {id: 2, name: "Roy", image: "roy.png"}, {id: 3, name: "Falco", image: "falco.png"}],
        }
    }

    ChooseCharacter(character){
        this.setState({characters: [character]})
        this.props.getCharacter(character)
    };

    render() {
        let {characters} = this.state

        return (
            <div className="Character">
                {     
                    characters.map((character, i) => {
                        return <button key={character.id} onClick={() => this.ChooseCharacter(character)} className="chooseCaracter"><ChoiceCaracter key={character.id} name={character.name} image={character.image} ></ChoiceCaracter></button>
                    })       
                }
            </div>
        )
    }
  }

export default Caracter;
