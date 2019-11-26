import React, { Fragment } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            nomes: [
                "Bruna",
                "Jani",
                "Raissa"
            ]
        }
    }

    onChangeInput = (element) => {
        //  let value = element.target.value
        this.setState({ value: element.target.value })
        // console.log(value)
    }

    adicionarItem = () => {
        this.setState({
            nomes: [
                this.state.value,
                ...this.state.nomes
            ]
        })
    }

    removerItem = (item) => {
        console.log(item);
        let novoArray = this.state.nomes.filter(nome => (
            nome !== item
        ));
            this.setState({
                nomes: novoArray
            })
    }

    render() {
        return (
            <Fragment>
                <Input placeholder="Digite seu nome"
                    tipo="text"
                    change={this.onChangeInput}></Input>
                {/* <Input placeholder="Digite sua senha" tipo="password"></Input> */}

                <Button click={this.adicionarItem}> Cadastrar </Button>
                <ul>
                    {this.state.nomes.map((value, i) => {
                        return (
                            <div key={i} className="lista_item">
                                <li>{value}</li>
                                <Button click={() => this.removerItem(value)}> x </Button>
                                
                            </div>
                        );
                    })}

                </ul>
            </Fragment>
        );
    }
}
export default Home;