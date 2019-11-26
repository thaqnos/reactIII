import React, { Fragment } from 'react';
import Input from '../components/Input/Input';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

 onChangeInput = (element) => {
  //  let value = element.target.value
    this.setState({value: element.target.value })
   // console.log(value)
}

render() {
    return (
        <Fragment>
        <Input placeholder="Digite seu nome" 
        tipo="text" 
        change={this.onChangeInput}></Input>
            {/* <Input placeholder="Digite sua senha" tipo="password"></Input> */}
        <button>Cadastrar</button>

        <p> {this.state.value} </p> 
        </Fragment>
        );
}
}
export default Home;