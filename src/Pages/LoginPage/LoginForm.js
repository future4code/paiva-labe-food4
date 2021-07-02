import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { LoginContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/User";
import { goToFeed } from "../../Routes/coordinator";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, history);
  };
  return (
    <LoginContainer>
      <Typography variant="h6">Entrar</Typography>
      <form obSubmit={onSubmitForm}>
        <TextField
          id={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          type={"email"}
          label={"E-mail"}
          variant={"outlined"}
          required
          margin={"normal"}
          autoFocus
          fullWidth
        />
        <TextField
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={"password"}
          label={"Senha"}
          variant={"outlined"}
          required
          margin={"normal"}
          autoFocus
          fullWidth
        />
        <Button type={"submit"} variant={"contained"} color={"primary"} fullWidth onClick={() => goToFeed(history)}>
          Entrar
        </Button>
      </form>
    </LoginContainer>
  );
};

export default LoginForm;