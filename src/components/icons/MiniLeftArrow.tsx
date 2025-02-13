import React from "react";
import ClickableIcon from '../../styles/ClickableIcon';

interface MiniLeftArrowProps {
    onClick?: () => void;
}

const MiniLeftArrow: React.FC<MiniLeftArrowProps> = ({ onClick }) => (
    <ClickableIcon 
    width="22" height="23" 
    viewBox="0 0 22 23" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}>
        <path d="M11 15.5L7 11.5L11 15.5ZM7 11.5L11 7.5L7 11.5ZM7 11.5H15H7ZM0.999996 11.5C0.999996 13.4778 1.58648 15.4112 2.6853 17.0557C3.78411 18.7002 5.34595 19.9819 7.17321 20.7388C9.00047 21.4956 11.0111 21.6937 12.9509 21.3079C14.8907 20.922 16.6725 19.9696 18.071 18.571C19.4696 17.1725 20.422 15.3907 20.8079 13.4509C21.1937 11.5111 20.9956 9.50042 20.2388 7.67316C19.4819 5.8459 18.2002 4.28412 16.5557 3.1853C14.9112 2.08649 12.9778 1.5 11 1.5C8.34783 1.5 5.80432 2.55359 3.92895 4.42896C2.05359 6.30432 0.999996 8.84784 0.999996 11.5Z" fill="white"/>
        <path d="M11 15.5L7 11.5M7 11.5L11 7.5M7 11.5H15M0.999996 11.5C0.999996 13.4778 1.58648 15.4112 2.6853 17.0557C3.78411 18.7002 5.34595 19.9819 7.17321 20.7388C9.00048 21.4956 11.0111 21.6937 12.9509 21.3079C14.8907 20.922 16.6725 19.9696 18.071 18.571C19.4696 17.1725 20.422 15.3907 20.8079 13.4509C21.1937 11.5111 20.9956 9.50042 20.2388 7.67316C19.4819 5.8459 18.2002 4.28412 16.5557 3.1853C14.9112 2.08649 12.9778 1.5 11 1.5C8.34783 1.5 5.80432 2.55359 3.92895 4.42896C2.05359 6.30432 0.999996 8.84784 0.999996 11.5Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </ClickableIcon>
);

export default MiniLeftArrow;
