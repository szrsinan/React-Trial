import React from 'react';
import validate from './loginInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <img className='form-img-2' src='success.png' alt='success' />
        <h1>Kayıt işlemi başarılı.
          <br></br>Kullanıcı bilgilerinizi girerek Giriş yapabilirsiniz.</h1>
          <div className='form-inputs'>
          <label className='form-label'>Kullanıcı Adı</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Kullanıcı adınızı giriniz'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Şifre</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Şifrenizi giriniz'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Şifre Tekrar</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Şifrenizi onaylayınız'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn-2' type='submit'>
          Giriş Yap
        </button>
          <h2>Demo version için database entegresi olmadığından;
          <br></br>Kullanıcı Adı: sinan
          <br></br>Şifre: sinan
          <br></br>
          </h2>
      </form>
    </div>
  );
};

export default FormSignup;