import React from "react";
import { useState } from "react";
//import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import {profile} from "../../services/User"

import {
  ContainerProfilePage,
  ContainerAddress,
  ContainerUser,
  ContainerOrderHistoric,
} from "./styled";

export const ProfilePage = () => {
  useProtectedPage();
  const [profile, setProfile] = useState({});
  const history = useHistory({});

  return (
    
      <ContainerProfilePage>
        <ContainerUser>
          <p>Nome: {profile.name}</p>
          <p>E-mail: {profile.email}</p>
          <p>CPF: {profile.cpf}</p>
        </ContainerUser>

        <ContainerAddress>
          <p>Endereço cadastrado:</p>
          <p>{profile.address}</p>
        </ContainerAddress>

        <ContainerOrderHistoric>
          <p>Histórico de pedidos</p>
        </ContainerOrderHistoric>
      </ContainerProfilePage>
    
  );
};
