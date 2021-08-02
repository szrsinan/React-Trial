export default function loginInfo(values) {
    let errors = {};
  
    if (!values.username) {
      errors.username = 'Kullanıcı adı alanı boş bırakılamaz';
    }
    else if (values.username !== "sinan") {
        errors.username = 'Kullanıcı adı hatalı';
      } 
    
    if (!values.password) {
      errors.password = 'Şifre alanı boş bırakılamaz';
    }
    else if (values.password.length < 5 || values.password !== "sinan") {
        errors.password = 'Şifre hatalı';
    } 

    if (!values.password2) {
      errors.password2 = 'Şifre onayı gerekli';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Girdiğiniz şifre bir önceki şifre ile uyuşmuyor';
    }
    return errors;
  }