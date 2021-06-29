import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { ScreenContainer, SignUpAddContainer } from './styled';

const SignupAddPage = () => {
    return (
        <ScreenContainer>
            <SignUpAddContainer>
                <Typography component="h1" variant="h5">
                    Meu Endereço
                </Typography>
                <form onSubmit={''}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="logradouro"
                        label="Logradouro"
                        defaultValue="Rua/Av."
                        name="logradouro"
                        autoComplete="logradouro"
                        autoFocus
                        type='text'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="numero"
                        label="Número"
                        defaultValue="Número"
                        name="numero"
                        autoComplete="numero"
                        autoFocus
                        type='number'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="complemento"
                        label="Complemento"
                        defaultValue="Apto./Bloco"
                        name="complemento"
                        autoComplete="complemento"
                        autoFocus
                        type='text'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="bairro"
                        label="Bairro"
                        defaultValue="Bairro"
                        name="bairro"
                        autoComplete="bairro"
                        autoFocus
                        type='text'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="cidade"
                        label="Cidade"
                        defaultValue="Cidade"
                        name="cidade"
                        autoComplete="cidade"
                        autoFocus
                        type='text'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="estado"
                        label="Estado"
                        defaultValue="Estado"
                        name="estado"
                        autoFocus
                        autoComplete="estado"
                        type='text'
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Salvar
                    </Button>
                </form>
            </SignUpAddContainer>
        </ScreenContainer>
    )
}

export default SignupAddPage;
