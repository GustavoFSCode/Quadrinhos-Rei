// ModalDescartation.tsx

import { useState } from 'react';
import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalButtons,
  ModalText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';
import Textarea from '@/components/Textarea';

interface ModalDescartationProps {
  onClose: () => void;
  onYes: () => void;
}

const ModalDescartation: React.FC<ModalDescartationProps> = ({ onClose, onYes }) => {
  const [formData, setFormData] = useState({
    motivo: '',
  });

  const handleSubmit = () => {
    onYes();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent>
          <Image
            src={ExcludeIcon}
            width={60}
            height={60}
            alt="Check Icon"
          />
          <ModalText>Deseja finalizar a rodada?</ModalText>
          <Textarea
            name="motivo"
            label="Motivo"
            placeholder="Digite o motivo para finalizar a rodada..."
            value={formData.motivo}
            onChange={handleInputChange}
            height="90px"
            width="275px"
          />
          <ModalButtons>
            <Button
              text="Não"
              type="button"
              variant="outline"
              className="red"
              width="100px"
              height="39px"
              onClick={handleCancel}
            />
            <Button
              text="Sim"
              type="button"
              variant="red"
              width="100px"
              height="39px"
              onClick={handleSubmit}
            />
          </ModalButtons>
        </ModalContent>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ModalDescartation;
