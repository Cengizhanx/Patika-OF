import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir e-mail girin").required("Zorunlu alan."),
    password: yup.string().min(6, "Parola en az 6 karakterden oluşmalıdır.").required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Parolalar uyuşmuyor.").required()

})

export default validations