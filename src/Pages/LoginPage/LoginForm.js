import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { LoginContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/User";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginForm = () => {
  const history = useHistory();
  const [form, setForm, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, history);
  };
  return (
    <LoginContainer>
      <Typography variant="h6">Entrar</Typography>
      <form onSubmit={onSubmitForm}>
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          label="E-mail"
          variant="outlined"
          required
          margin="normal"
          autoFocus
          fullWidth
          id="email"
          autoComplete="email"
        />
        <TextField
          id="password"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          label="Senha"
          variant="outlined"
          required
          margin="normal"
          autoFocus
          fullWidth
          id="password"
        />
        <Button type={"submit"} variant={"contained"} color={"primary"} fullWidth >
          Entrar
        </Button>
      </form>
    </LoginContainer>
  );
};

export default LoginForm;