export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Kullanıcı adı alanı boş bırakılamaz';
    }
    
    if (!values.email) {
      errors.email = 'Email alanı boş bırakılamaz';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email adresi doğru değil';
    }
    if (!values.password) {
      errors.password = 'Şifre alanı boş bırakılamaz';
    } else if (values.password.length < 5) {
      errors.password = 'Şifre en az 5 karakterden oluşmalı';
    }
  
    if (!values.password2) {
      errors.password2 = 'Şifre onayı gerekli';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Girdiğiniz şifre bir önceki şifre ile uyuşmuyor';
    }
    return errors;
  }