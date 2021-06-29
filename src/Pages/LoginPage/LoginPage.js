import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { ScreenContainer, LoginContainer, LogoBoard } from './styled';
import LogoColorida from '../../assets/LogoRappi4Colored.svg';

const LoginPage = () => {
    return (
        <ScreenContainer>
            <LogoBoard src={LogoColorida} alt="logo Rappi4" />
            <LoginContainer>
                <Typography variant="h6">
                    Entrar
                </Typography>
                <form obSubmit={''}>
                    <TextField
                        id='email'
                        name='email'
                        type='email'
                        label="E-mail"
                        variant="outlined"
                        defaultValue="email@email.com"
                        required
                        margin='normal'
                        autoFocus
                        fullWidth
                    />
                    <TextField
                        id='password'
                        name='password'
                        type='password'
                        label="Senha"
                        variant="outlined"
                        defaultValue="Mínimo 6 caracteres"
                        required
                        margin='normal'
                        autoFocus
                        fullWidth
                        color='secondary'
                    />
                </form>
                <Button
                    type="submit"
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    Entrar
                </Button>
                <Button
                    type="submit"
                    fullWidth
                >
                    Não possui cadastro? Clique aqui.
                </Button>
            </LoginContainer>
        </ScreenContainer>
    )
}

export default LoginPage
