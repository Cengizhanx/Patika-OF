import { object, string, ref } from 'yup';

const validations = object({
    email: string().email('Geçersiz e-mail.').required('Alan boş bırakılamaz.'),
    password: string().min(5, 'Parola min. 5 karakterden oluşmalıdır.').required('Alan boş bırakılamaz.'),
    passwordConfirm: string().oneOf([ref('password')],'Parolalar uyuşmuyor.').required('Alan boş bırakılamaz.')
});

export default validations;