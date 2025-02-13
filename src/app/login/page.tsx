"use client";

import { useRouter } from "next/navigation";
import {
  Container,
  Content,
  AdminArea,
} from "./styled";
import InputText from "@/components/Input/InputText";
import InputPassword from "@/components/Input/InputPassword";
import Button from "@/components/Button";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/clientes");
  };

  return (
    <Container>
      <Content>
        <AdminArea>Quadrinhos Rei</AdminArea>
        <p>Informe seus dados para continuar</p>
        <form onSubmit={handleLogin}>
          <InputText
            label="E-mail ou usuário"
            name="user"
            placeholder="Digite seu e-mail/usuário..."
            width="365px"
            height="45px"
          />
          <InputPassword
            label="Senha"
            name="password"
            placeholder="Digite sua senha..."
            width="365px"
            height="45px"
          />

          <Button text="Entrar" variant="purple" type="submit" />
        </form>
      </Content>
    </Container>
  );
}
