import { useRouter } from 'next/navigation';
import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalButtons,
  ModalTextArea,
  ModalText,
  ModalSubText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import QuestIcon from '@/components/icons/QuestionBox.png';

interface ModalNovaLiveProps {
  onClose: () => void;
}

const ModalNovaLive: React.FC<ModalNovaLiveProps> = ({ onClose }) => {
  const router = useRouter();

  const handleNo = () => {
    onClose(); // Fecha o modal
    router.push('/rodadas'); // Navega para a rota "/rodadas"
  };

  const handleYes = () => {
    onClose(); // Fecha o modal
    router.refresh(); // Recarrega a página
  };

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent>
          <Image src={QuestIcon} width={60} height={60} alt="Quest Icon" />
          <ModalTextArea>
            <ModalText>Deseja iniciar outra rodada?</ModalText>
            <ModalSubText>
              (será usado as mesmas configurações dessa rodada)
            </ModalSubText>
          </ModalTextArea>
          <ModalButtons>
            <Button
              text="Não"
              type="button"
              variant="outline"
              width="100px"
              height="39px"
              onClick={handleNo}
            />
            <Button
              text="Sim"
              type="button"
              variant="purple"
              width="100px"
              height="39px"
              onClick={handleYes}
            />
          </ModalButtons>
        </ModalContent>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ModalNovaLive;
