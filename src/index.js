import React from 'react';
import ReactDOM from 'react-dom';

function JesseButton(props) {
    return (
      <button className="square" onClick={props.onClick}>
        Is Jesse wrong?
      </button>
    );
  }

class JesseWrong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrong_list : [
                "Definitely.",
                "Does a bear shit in the woods?",
                "Big wrong.",
                "Bongus Wrongus.",
                "Yurp",
                "Is a frogs ass water tight?",
                "Is a bear catholic?",
                "Does the pope shit in the woods?",
                "Is the pope catholic?",
                "Does a Polish rifle shoot white flags?",
                "Is the atomic weight of Cobalt 58.9?",
                "Is the space pope reptilian?",
                "Beeg Beeg"
            ],
            idx: 0,
        };
    }

    handleClick() {
        let new_idx = Math.floor(Math.random() * (this.state.wrong_list.length))
        this.setState({
            idx : new_idx
        })
    }

    render() {
        return(
            <div>
            <JesseButton
                onClick = {() => this.handleClick()}
            />
            <h1>{this.state.wrong_list[this.state.idx]}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <JesseWrong />,
    document.getElementById('root')
  );
