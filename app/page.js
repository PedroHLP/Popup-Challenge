'use client'
import React, { useState } from 'react';
import PopupGame from './components/PopupGame';
import PopupVideo from './components/PopupVideo';

const HomePage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openVideoPopup, setOpenVideoPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleOpenVideoPopup = () => {
    setOpenVideoPopup(true);
  };

  const handleCloseVideoPopup = () => {
    setOpenVideoPopup(false);
  };

  return (
    <div>
      <h1>Exemplo de Pop-up em Next.js</h1>
      <button onClick={handleOpenPopup}>Abrir Pop-up de Imagem</button>
      <button onClick={handleOpenVideoPopup}>Abrir Pop-up de Vídeo</button>
      <PopupGame open={openPopup} onClose={handleClosePopup} />
      <PopupVideo open={openVideoPopup} onClose={handleCloseVideoPopup} />
    </div>
  );
};

export default HomePage;
