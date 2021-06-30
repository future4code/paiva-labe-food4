import React from 'react'
import { Button, TextField, Typography } from '@material-ui/core';
import { SignUpAddContainer } from './styled';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/User';

const SignupAddForm = () => {
    const history = useHistory();
    const [form, onChange, clear] = useForm({
        street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        signup(form, clear, history);
    };

    return (
        <SignUpAddContainer>
            <Typography variant="h6">
                Meu Endereço
            </Typography>
            <form onSubmit={onSubmitForm}>
                <TextField
                    onChange={onChange}
                    value={form.address}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Logradouro"
                    name="address"
                    autoComplete="logradouro"
                    autoFocus
                    type='text'
                />
                <TextField
                    onChange={onChange}
                    value={form.number}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="number"
                    label="Número"
                    name="number"
                    autoComplete="number"
                    autoFocus
                    type='number'
                />
                <TextField
                    value={form.complement}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="complement"
                    label="Complemento"
                    name="complement"
                    autoComplete="complement"
                    autoFocus
                    type='text'
                />
                <TextField
                    value={form.neighbourhood}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="neighbourhood"
                    label="Bairro"
                    name="neighbourhood"
                    autoComplete="neighbourhood"
                    autoFocus
                    type='text'
                />
                <TextField
                    value={form.city}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="Cidade"
                    name="city"
                    autoComplete="city"
                    autoFocus
                    type='text'
                />
                <TextField
                    value={form.state}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="state"
                    label="Estado"
                    name="state"
                    autoFocus
                    autoComplete="state"
                    type='text'
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    margin="normal"
                >
                    Salvar
                </Button>
            </form>
        </SignUpAddContainer>
    )
}

export default SignupAddForm
