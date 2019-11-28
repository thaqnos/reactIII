import React, { Fragment } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import { getUser, getRepos } from '../api/users'
import CardUser from '../components/CardUser/CardUser'
import './Produtos.css'


class Usuario extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            user: {},
            repos: []
        }
    }

    valorInput = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    pesquisar = () => {
        getUser(this.state.value).then(response => {
            this.setState({
                user: response.data
            })
        }).catch(erro => console.log(erro))
    }

    // começo da função que não preciso no teste
    pesquisarRepos = (login) => {
        getRepos(login).then(response => {
            this.setState ({
                repos: response.data
            })
        })
    }

    render() {
        const { avatar_url, login, name } = this.state.user
        return (
            <Fragment>
                <Input
                    placeholder='Pesquise o usuário'
                    tipo='text'
                    change={this.valorInput}
                ></Input>
                <Button
                    click={this.pesquisar}
                >Pesquisar</Button>
                <CardUser
                    img={avatar_url}
                    user={login}
                    nome={name}
                    clicar={() => this.pesquisarRepos(login)}
                />
                {/* MAP É SÓ EM ARRAY <div className='lista-item'>
                    {this.state.user.map(item => (
                        <Card
                            key={item.id}
                            produto={item} />
                    ))}
                </div> */}
            </Fragment>
        )
    }
}

export default Usuario;