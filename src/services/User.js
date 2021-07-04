import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed, goToSignUpAdd } from "../Routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
      clear();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const signup = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      alert('Conta criada com sucesso')
      goToSignUpAdd(history);
      clear();
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const addaddress = (body, clear, history) => {

  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("tokenSignUp"),
      },
    })
    .then((response) => {
      localStorage.removeItem("tokenSignUp")
      localStorage.setItem("token", response.data.token);
      alert("O endereço foi cadastrado com sucesso!");
      goToFeed(history);
      clear();
    })
    .catch((error) => {
      alert("Erro ao cadastrar endereço. Tente novamente");
    });
};

// Usuários = pegar dados

export const setProfile = () => {
  axios
    .get(`${BASE_URL}/profile`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setProfile(res.data.user);
    })
    .catch((err) => {
      console.log(err);
      alert("ERRO CATCH (TESTE)");
    });
};
