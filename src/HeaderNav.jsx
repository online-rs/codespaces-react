import LogoTitulo from "./LogoTitulo";
import './HeaderNav.css';
import Button from "./components/Button";
import Proposta from "./components/Proposta";

function HeaderNav() {
    // Array com os dados dos botões
    const buttons = [
        { text: 'Início' },
        { text: 'Sobre Mim' },
        { text: 'Propostas' },
        { text: 'Agenda' },
        { text: 'Pariticpe' },
        { text: 'Contato' }
    ];




    return (
        <div className="fundoheader">
            <div className="headernav">
                <LogoTitulo />
                <div className='conainterMenus'>
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            text={button.text}
                            classe='custom-button'
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default HeaderNav;
