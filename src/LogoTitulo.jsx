import './LogoTitulo.css';
import IconLink from './components/IconLink';

function LogoTitulo() {
    return (
        <div className='logo'>
            <img className='lucianofoto' src="/logo.png" alt="Descrição da imagem" />
            <div className='logo_coluna'>
                <IconLink
                    src="/instagram.png" 
                    alt="Instagram Luciano da São Luis" 
                    href="https://www.instagram.com/luciano_sao_luis/" 
                />
                <IconLink
                    src="/face.svg" 
                    alt="Facebook Luciano da São Luis" 
                    href="https://www.facebook.com/luciano.expressooliveira" 
                />
                <IconLink
                    src="/whatsapp.svg" 
                    alt="Whatsapp Luciano da São Luis" 
                    href="https://wa.me/5551996993725?text=Oi.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20Luciano%20da%20São%20Luis." 
                />
            </div>
        </div>
    );
}

export default LogoTitulo;
