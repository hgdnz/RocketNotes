import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom'

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu Login</h2>

        <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        
        />

<Input
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        
        />

        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to="/register">
          Criar Conta
        </Link>


      </Form>
      <Background/>


  </Container>
  )  
}