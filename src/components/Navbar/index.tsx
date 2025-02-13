'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePathname, useRouter } from "next/navigation";
import { SidebarContainer, TopIconContainer, IconPart, MiddleIconContainer, BottomIconContainer, TopIcon } from "./styled"
import ModalLogout from '@/components/Modals/Logout';

import {
    Rodadas,
    Administradores,
    Jogadores,
    Avaliacoes,
    ChatComUsuario,
    Saques,
    Configuracoes,
    Dashboard,
    Faq,
    Faturamento,
    HistoricoDeJogos,
    Perfil,
    Sair,
    Termos
} from "../icons/notBold";
import {
    BoldRodadas,
    BoldAdministradores,
    BoldJogadores,
    BoldAvaliacoes,
    BoldChatComUsuarios,
    BoldSaques,
    BoldConfiguracoes,
    BoldDashboard,
    BoldFaq,
    BoldFaturamento,
    BoldHistoricoDeJogos,
    BoldPerfil,
    BoldTermos
} from "../icons/bold";
import MiniLogo from "../icons/MiniLogo";
import LogoNav from '../icons/logoNav';
import Seta from "../icons/Seta";

interface NavbarProps {
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isExpanded, setIsExpanded }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { logout, user } = useAuth(); // Inclui o usuário no destructuring

    const handleLinkClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const handleLogoutClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsModalOpen(true);
    };

    const handleModalClose = (shouldLogout: boolean) => {
        setIsModalOpen(false);
        if (shouldLogout) {
            logout();
            router.push('/login');
        }
    };

    // Definição dos ícones e suas rotas com roles permitidas
    const menuItems = [
        { id: 'icon1', href: '/clientes', label: 'Clientes', Icon: Jogadores, BoldIcon: BoldJogadores, roles: [3, 6] },
        { id: 'icon2', href: '/jogadores', label: 'Jogadores', Icon: Jogadores, BoldIcon: BoldJogadores, roles: [3, 6, 4, 5, 7] },
    ];

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(path + "/");
    };

    const toggleNavbar = () => {
        if (!isExpanded){
            setIsExpanded(true);
        }
    };

    const collapseNavbar = () => {
        setIsExpanded(false);
    };

    return (
        <>
        <SidebarContainer isExpanded={isExpanded} onClick={toggleNavbar}>
            <TopIconContainer isExpanded={isExpanded}>

            </TopIconContainer>

            {isExpanded && (
               <Seta
               onClick={collapseNavbar}
                />
            )}

            <MiddleIconContainer isExpanded={isExpanded}>
                {menuItems.map(item => {
                    // if (!item.roles.includes(user?.role.id || 0)) {
                    //     return null; // Não renderiza se o usuário não tiver acesso
                    // }

                    const active = isActive(item.href);
                    const IconComponent = active ? item.BoldIcon : item.Icon;

                    return (
                        <IconPart
                            key={item.id}
                            href={item.href}
                            id={item.id}
                            isActive={active}
                            isExpanded={isExpanded}
                            onClick={handleLinkClick}
                        >
                            <IconComponent />
                            {isExpanded && <span>{item.label}</span>}
                        </IconPart>
                    );
                })}
            </MiddleIconContainer>

            <BottomIconContainer>
                    <IconPart
                    id="icon13"
                    href="/perfil"
                    isExpanded={isExpanded}
                    isActive={isActive("/perfil")}
                    onClick={handleLinkClick}
                    >
                        {isActive("/perfil") ? <BoldPerfil /> : <Perfil />}
                        {isExpanded && <span> Meu perfil</span>}
                    </IconPart>
                    <IconPart
                        href="#" // Evita a navegação
                        isExpanded={isExpanded}
                        onClick={handleLogoutClick} // Novo handler
                    >
                        <Sair/>
                        {isExpanded && <span> Sair</span>}
                    </IconPart>
            </BottomIconContainer>
        </SidebarContainer>
        {isModalOpen && (
            <ModalLogout onClose={handleModalClose} />
          )}
        </>

    )
}

export default Navbar;
