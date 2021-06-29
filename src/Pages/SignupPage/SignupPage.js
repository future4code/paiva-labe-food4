import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { LogoBoard, ScreenContainer, SignUpContainer, MainContainer } from './styled'
import LogoColorida from '../../assets/LogoRappi4Colored.svg'

const SignupPage = () => {
    return (
        <ScreenContainer>
        <MainContainer>
            <LogoBoard src={LogoColorida} alt="logo Rappi4" />
            <SignUpContainer>
                <Typography  variant="h6">
                    Cadastro
                </Typography>
                <form onSubmit={''}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nome"
                        defaultValue="Nome e sobrenome"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        defaultValue="email@email.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="cpf"
                        label="CPF"
                        type="cpf"
                        id="cpf"
                        autoComplete="current-password"
                        defaultValue="000.000.000-00"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        defaultValue="Mínimo 6 caracteres"
                        //type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Confirmar"
                        defaultValue="Confirme a senha anterior"
                        //type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Continuar Cadastro
                    </Button>
                </form>
            </SignUpContainer>
        </MainContainer>
        </ScreenContainer>
    )
}

export default SignupPage
