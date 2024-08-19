import React, { useState, useEffect } from 'react';
import { addImage, getImages, deleteImage, updateImage } from './db'; // Importa as funções do IndexedDB

function ImageUploader() {
  const [images, setImages] = useState([]);

  // Carrega as imagens do IndexedDB quando o componente é montado
  useEffect(() => {
    const loadImages = async () => {
      const storedImages = await getImages();
      setImages(storedImages);
    };

    loadImages();
  }, []);

  // Lida com o upload de múltiplas imagens
  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map(file => ({
      name: file.name, // Nome do arquivo original
      description: '', // Descrição vazia inicial
      file: URL.createObjectURL(file), // Cria um URL local para a exibição da imagem
    }));

    for (const image of newImages) {
      await addImage(image); // Adiciona a imagem ao IndexedDB
    }

    setImages(prevImages => [...prevImages, ...newImages]); // Atualiza o estado local
  };

  // Atualiza o nome do arquivo no estado e no IndexedDB
  const handleNameChange = async (index, newName) => {
    const updatedImages = [...images];
    updatedImages[index].name = newName;
    setImages(updatedImages);
    await updateImage(updatedImages[index]); // Atualiza a imagem no IndexedDB
  };

  // Atualiza a descrição no estado e no IndexedDB
  const handleDescriptionChange = async (index, newDescription) => {
    const updatedImages = [...images];
    updatedImages[index].description = newDescription;
    setImages(updatedImages);
    await updateImage(updatedImages[index]); // Atualiza a imagem no IndexedDB
  };

  // Deleta uma imagem do estado e do IndexedDB
  const handleDeleteImage = async (index) => {
    const imageId = images[index].id;
    await deleteImage(imageId); // Deleta a imagem do IndexedDB
    setImages(images.filter((_, i) => i !== index)); // Remove a imagem do estado local
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      {images.map((image, index) => (
        <div key={index}>
          <input 
            type="text" 
            value={image.name} 
            onChange={(e) => handleNameChange(index, e.target.value)} 
          />
          <input 
            type="text" 
            value={image.description} 
            placeholder="Description" 
            onChange={(e) => handleDescriptionChange(index, e.target.value)} 
          />
          <button onClick={() => handleDeleteImage(index)}>Delete</button>
          <img src={image.file} alt={image.name} style={{ width: '100px', height: '100px' }} />
        </div>
      ))}
    </div>
  );
}

export default ImageUploader;
