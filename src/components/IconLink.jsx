import React from 'react';
import "./IconLink.css";

function IconLink({ src, alt, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className='rede' src={src} alt={alt} />
    </a>
  );
}

export default IconLink;
