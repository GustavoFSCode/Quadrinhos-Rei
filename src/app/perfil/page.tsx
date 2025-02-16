"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  ContentContainer,
  Header,
  Content,
  ModalBodyRow,
  ModalBodyText,
  ModalBodyButton
} from './styled';
import Button from "@/components/Button";
import InputPassword from "@/components/Inputs/InputPassword";
import InputRead from "@/components/Inputs/InputRead";
import InputEdit from "@/components/Inputs/InputEdit";
import ModalSuccess from '@/components/Modals/Perfil/Confirmation'; // Importação atualizada

interface FormData {
  email: string;
  supportNumber: string; // Alterado para string
  senhaAtual: string;
  novaSenha: string;
  confirmarNovaSenha: string;
}

export default function Perfil() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "quarinhosrei@gmail.com",
    supportNumber: "(11) 91234-5678", // Valor inicial formatado
    senhaAtual: "ReiQuadrinho!",
    novaSenha: "",
    confirmarNovaSenha: ""
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal

  useEffect(() => {
    // Verifica se os campos de senha estão preenchidos e correspondem
    if (
      formData.novaSenha !== "" &&
      formData.confirmarNovaSenha !== "" &&
      formData.novaSenha === formData.confirmarNovaSenha
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData.novaSenha, formData.confirmarNovaSenha]);

  // Manipulador para inputs de texto (email e senhas)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manipulador para inputs de telefone
  const handleNumberChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      supportNumber: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples para verificar o comprimento do número
    const digits = formData.supportNumber.replace(/\D/g, "");
    if (digits.length !== 11) {
      alert("Por favor, insira um número de telefone válido com 11 dígitos.");
      return;
    }

    console.log("Formulário enviado:", formData);
    setIsModalOpen(true); // Abre o modal após submissão
    // Aqui você pode adicionar lógica adicional, como chamadas a APIs para salvar os dados
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Resetar os campos de senha
    setFormData(prev => ({
      ...prev,
      novaSenha: "",
      confirmarNovaSenha: ""
    }));
    // Opcional: Se desejar resetar outros campos, adicione aqui
  };

  return (
    <>
      <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ContentContainer isExpanded={isExpanded}>
        <Header>Meu perfil</Header>
        <Content>
          <form onSubmit={handleSubmit}>
            <ModalBodyRow>
              <InputRead
                name="email"
                label="E-mail"
                value={formData.email}
                width="500px"
              />
            </ModalBodyRow>
            <ModalBodyRow>
              <InputEdit
                name="supportNumber"
                label="Número do suporte"
                value={formData.supportNumber}
                onChange={handleNumberChange} // Usando o manipulador de números
                width="500px"
              />
            </ModalBodyRow>
            <ModalBodyText>Alterar a senha</ModalBodyText>
            <ModalBodyRow>
              <InputPassword
                name="senhaAtual"
                label="Senha atual"
                value={formData.senhaAtual}
                onChange={handleInputChange}
                width="500px"
              />
            </ModalBodyRow>
            <ModalBodyRow>
              <InputPassword
                name="novaSenha"
                label="Nova senha"
                value={formData.novaSenha}
                onChange={handleInputChange}
                width="500px"
              />
            </ModalBodyRow>
            <ModalBodyRow>
              <InputPassword
                name="confirmarNovaSenha"
                label="Confirmar senha"
                value={formData.confirmarNovaSenha}
                onChange={handleInputChange}
                width="500px"
              />
            </ModalBodyRow>
            <ModalBodyButton>
              <Button
                text="Salvar"
                type="submit"
                variant={isButtonDisabled ? "disabled" : "purple"}
                width="150px"
                disabled={isButtonDisabled}
              />
            </ModalBodyButton>
          </form>
        </Content>
      </ContentContainer>

      {/* Renderiza o ModalSuccess condicionalmente */}
      {isModalOpen && <ModalSuccess onClose={handleCloseModal} />}
    </>
  );
}
