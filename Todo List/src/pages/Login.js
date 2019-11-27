import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import './Login.css'

const Login = (props) => (
    <div>
        <form className='login-form'>
            <div>
            <label>Usuario:</label>
            <Input tipo='text'></Input>
            </div>
            <div>
            <label>Senha:</label>
            <Input tipo='password'></Input>
            </div>
            <Button>Entrar</Button>
        </form>
    </div>
)

export default Login