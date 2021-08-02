import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>Haydi başlayalım! Üyeliğin yoksa aşağıdaki formu doldurarak hemen kayıt olabilirsin.</h1>
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email adresinizi giriniz'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <button className='form-input-btn' type='submit'>
          Kayıt Ol
        </button>
        <span className='form-input-login'>
          Zaten bir hesabın var mı? <a href='Login'>Giriş Yap</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;