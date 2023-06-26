'use client'

import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Grid, FormControlLabel, Checkbox } from '@mui/material';
import InputMask from 'react-input-mask';
import CloseIcon from '@mui/icons-material/Close';
import popupConfig from '../popupConfig.json';
import styles from './Popup.module.css';

const Popup = ({ open, onClose }) => {
  if (!open) return null;

  const { title, subtitle, content, numFields, consentCheckbox } = popupConfig;

  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    celular: '',
    genero: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClosePopup();
  };

  const handleClosePopup = () => {
    onClose();
  };

  const renderFormFields = () => {
    const formFields = [];

    for (let i = 0; i < numFields; i++) {
      switch (i) {
        case 0:
          formFields.push(
            <Grid item xs={6} key={i}>
              <TextField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                placeholder="Email"
                required
                fullWidth
              />
            </Grid>
          );
          break;
        case 1:
          formFields.push(
            <Grid item xs={6} key={i}>
              <TextField
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                label="Nome"
                placeholder="Nome"
                required
                fullWidth
              />
            </Grid>
          );
          break;
        case 2:
          formFields.push(
            <Grid item xs={6} key={i}>
              <InputMask
                mask="(99) 99999-9999"
                value={formData.celular}
                onChange={handleChange}
                name="celular"
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    label="Número de Celular"
                    placeholder="Número de Celular"
                    required
                    fullWidth
                  />
                )}
              </InputMask>
            </Grid>
          );
          break;
        case 3:
          formFields.push(
            <Grid item xs={6} key={i}>
              <Select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                label="Gênero"
                required
                fullWidth
              >
                <MenuItem value="">Selecione o Gênero</MenuItem>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
              </Select>
            </Grid>
          );
          break;
        default:
          break;
      }
    }

    return formFields;
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <div className={styles.closeIconContainer} onClick={handleClosePopup}>
            <CloseIcon className={styles.closeIcon} />
          </div>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.content}>
            <img src="desafiocacaniquel.png" width={250} alt="Example Image" />
            <form className={styles.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {renderFormFields()}
              </Grid>
              <Grid item xs={12}>
                <div className={styles.buttonContainer}>
                 <button className={styles.customButton}>Enviar</button>
                </div>
              </Grid>
              {consentCheckbox && (
                <FormControlLabel
                  control={<Checkbox name="consent" />}
                  label="Eu concordo com a coleta de dados"
                />
              )}

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
