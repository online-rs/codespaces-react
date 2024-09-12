import React from 'react';
import './FirstBand.css'; // Importando o CSS externo

const FirstBand = () => {
    return (
        <div className="first-band-container">
            {/* Imagem da campanha */}
            <img 
                src="URL_DA_IMAGEM_AQUI" 
                alt="Luciano com a comunidade" 
                className="first-band-image"
            />

            {/* Título marcante */}
            <h1 className="first-band-title">Por uma Canoas Mais Justa e Transparente: Juntos, Povo Pelo Povo!</h1>
            
            {/* Subtítulo convocativo */}
            <h2 className="first-band-subtitle">
                Transformar nossa cidade é possível, com sua participação e meu compromisso de sempre estar ao lado do cidadão.
            </h2>

            {/* Frase de impacto */}
            <p className="first-band-call-to-action">
                Vamos construir juntos a cidade que merecemos. Sua voz é importante, seu apoio é essencial!
            </p>
        </div>
    );
};

export default FirstBand;
