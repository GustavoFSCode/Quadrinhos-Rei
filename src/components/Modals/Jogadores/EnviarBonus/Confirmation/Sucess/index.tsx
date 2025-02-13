import { useRouter } from 'next/navigation';
import { ModalOverlay, ModalBox, ModalContent, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import CheckIcon from '@/components/icons/CheckBox.png';

interface ModalSucessProps {
    onClose: () => void; // Função para fechar todos os modais
}

const ModalSucess: React.FC<ModalSucessProps> = ({ onClose }) => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('Bônus enviado com sucesso!');
        onClose(); // Fecha todos os modais
        router.push('/jogadores'); // Redireciona para a página de jogadores
    };

    return (
        <ModalOverlay>
            <ModalBox>
                <ModalContent>
                    <Image src={CheckIcon} width={60} height={60} alt="Check Icon" />
                    <ModalText>Bônus enviados com sucesso!</ModalText>
                    <Button 
                        text="Continuar"
                        type="button" 
                        variant="green"
                        width='120px'
                        height='39px' 
                        onClick={handleSubmit} // Fecha todos os modais e redireciona
                    />
                </ModalContent>
            </ModalBox>
        </ModalOverlay>
    );
};

export default ModalSucess;
