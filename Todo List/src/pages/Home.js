import React, { Fragment } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import './Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "", // valor vazio
            nomes: [  ] // lista vazia
        }
    }

    onChangeInput = (element) => {
        this.setState({ value: element.target.value }) // função que busca o valor do elemento (target)
    }

    adicionarItem = () => {
        this.setState({
            nomes: [
                this.state.value, // acessa o valor do input
                ...this.state.nomes // função com spread que acessa todos os elementos da lista nomes
            ]
        })
    }

    removerItem = (item) => {
        console.log(item);
        let novoArray = this.state.nomes.filter(nome => ( // função que busca o elemento de target e pega todos os elementos que não forem o target (pega mas não deleta por padrão o elemento selecionado)
            nome !== item
        ));
            this.setState({
                nomes: novoArray // agora vai sobrescrever o array nomes com os itens
            })
    }

    render() {
        return (
            <Fragment>
                <Input placeholder="Digite seu nome"
                    tipo="text"
                    change={this.onChangeInput}></Input>

                <Button click={this.adicionarItem}> Cadastrar </Button>
                <ul>
                    {this.state.nomes.map((value, i) => {
                        return (
                            <div key={i} className="lista_item">
                                <li>{value}</li>
                                <Button className="btn-excluir" click={() => this.removerItem(value)}> x </Button>                                
                            </div>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}
export default Home;