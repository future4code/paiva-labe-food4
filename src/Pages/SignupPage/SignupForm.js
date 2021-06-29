import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { signup } from '../../services/User';
import { SignUpContainer } from './styled';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';


const SignupForm = () => {
    const history = useHistory();
    const [form, onChange, clear] = useForm({ email: "", password: "" });
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
                        variant="outlined"
                        margin="normal"
                        value={form.name}
                        onChange={onChange}
                        required
                        fullWidth
                        id="username"
                        label="Nome"
                        name="username"
                        autoComplete="username"
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
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={form.cpf}
                        onChange={onChange}
                        inputProps={ { pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" } }
                        required
                        fullWidth
                        name="cpf"
                        label="CPF"
                        type="cpf"
                        id="cpf"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={form.password}
                        onChange={onChange}
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        //type="password"
                        id="password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={form.confirm}
                        onChange={onChange}
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirmar a senha"
                        //type="password"
                        id="confirm"
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
        )
    }

    export default SignupForm
