import './LogoTitulo.css';
import IconLink from './components/IconLink';

function LogoTitulo(){
    return(
     <logo className='logo'>
        <img className='lucianofoto' src="/public/logo.png" alt="Descrição da imagem" />
        <div className='logo_coluna'>
        <IconLink
             src="public/instagram.png" 
             alt="Intagram Luciano da São Luis" 
             href="https://www.instagram.com/luciano_sao_luis/" 
        />
        <IconLink
             src="public/face.svg" 
             alt="Facebook Luciano da São Luis" 
             href="https://www.facebook.com/luciano.expressooliveira" 
        />
                <IconLink
             src="public/whatsapp.svg" 
             alt="Whatsapp Luciano da São Luis" 
             href="https://wa.me/5551996993725?text=Oi.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20Luciano%20da%20S%C3%A3o%20Luis." 
        />
        </div>
    </logo>   
    )
}

export default LogoTitulo;