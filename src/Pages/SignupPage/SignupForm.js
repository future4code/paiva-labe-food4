import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { signup } from '../../services/User';
import { SignUpContainer } from './styled';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';


const SignupForm = () => {
    const history = useHistory();
    const [form, onChange, clear, setForm] = useForm({ name: "", email: "", cpf: "", password: "" });

    const onSubmitForm = (e) => {
        e.preventDefault();
        signup(form, clear, history);
    };

    return (
        <SignUpContainer>
            <Typography variant="h6">
                Cadastro
            </Typography>
            <form onSubmit={onSubmitForm}>
                <TextField
                    type="text"
                    variant="outlined"
                    margin="normal"
                    value={form.name}
                    onChange={onChange}
                    required
                    fullWidth
                    id="name"
                    label="Nome e sobrenome"
                    name="name"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    value={form.email}
                    onChange={onChange}
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    value={form.cpf}
                    onChange={onChange}
                    inputProps={{
                        maxLength: 14,
                        pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`,
                    }}
                    required
                    fullWidth
                    name="cpf"
                    label="CPF 000.000.000-00"
                    id="cpf"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    value={form.password}
                    onChange={onChange}
                    inputProps={{ minLength: 6 }}
                    required
                    fullWidth
                    name="password"
                    label="Senha - 6 caracteres"
                    type="password"
                    id="password"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    value={form.confirm}
                    onChange={onChange}
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirmar senha"
                    type="password"
                    id="confirm"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    margin="normal"
                >
                    Continuar Cadastro
                </Button>
            </form>
        </SignUpContainer>
    )
}

export default SignupForm
