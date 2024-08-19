import React, { useState } from 'react';
import './Proposta.css';

const Proposta = ({ numero, titulo, proposta, comoFunciona, objetivo, area }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="proposta-container">
            <h2 className="proposta-numero">Proposta {numero}: {area}</h2>
            <h3 className="proposta-titulo">{titulo}</h3>
            <p className="proposta-descricao"><strong>Proposta:</strong> {proposta}</p>
            {isExpanded && (
                <>
                    <div className="proposta-como-funciona">
                        <h4>Como Funciona:</h4>
                        <p>
                            {comoFunciona.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </p>
                    </div>
                    <p className="proposta-objetivo"><strong>Objetivo:</strong> {objetivo}</p>
                </>
            )}
            <button className="proposta-toggle-button" onClick={handleToggle}>
                {isExpanded ? 'Mostrar Menos' : 'Mostrar Mais'}
            </button>
        </div>
    );
};

export default Proposta;
