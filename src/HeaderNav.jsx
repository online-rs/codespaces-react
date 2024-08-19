import LogoTitulo from "./LogoTitulo";
import './HeaderNav.css';
import Button from "./components/Button";

function HeaderNav() {
    // Array com os dados dos botões
    const buttons = [
        { text: 'Início' },
        { text: 'Sobre' },
        { text: 'Serviços' },
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;
