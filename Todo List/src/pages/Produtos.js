import React, { Fragment } from 'react'
import Card from '../components/Card/Card'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import produtos from '../mock/produtos'
import './Produtos.css'
class Produtos extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            produtos
        }
    }

    valorInput = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    pesquisar = () => {
       let novoArray = this.state.produtos.filter(valor => valor.title.includes(this.state.value))
       this.setState({
           produtos: novoArray
       })
    }

    render() {
        return (
            <Fragment>
                <Input
                    placeholder='Pesquise o produto'
                    tipo='text'
                    change={this.valorInput}
                ></Input>
                <Button
                    click={this.pesquisar}
                >Pesquisar</Button>
                <div className='lista-item'>
                    {this.state.produtos.map(item => (
                        <Card
                            key={item.id}
                            produto={item} />
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default Produtos;