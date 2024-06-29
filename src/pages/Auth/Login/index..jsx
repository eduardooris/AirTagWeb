import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Style from "./login.module.css";
import { useForm } from "../../../hooks/useForm";
import { login } from "../../../services/login";

import { toast } from 'react-toastify';
export default function Login() {
    const [form, setForm] = useForm({ username: "", password: "" })
    const navigate = useNavigate()


    const useLogin = async () => {
        try {
            toast.info('Aguarde...');
            const response = await login(form)
            if (response?.data?.id) {
                localStorage.setItem("token", response.data.id)
                navigate('/home')
                toast.success('Sucesso!');
            } else {
                toast.error('Usuário ou senha incorretos!');
            }
        } catch (error) {
            toast.error('Erro!');
        }
    }



    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <img src="./logo.png" alt="logo" className={Style.logo} />
            <h3 className={Style.textLog}>LOGIN</h3>
            <p className={Style.infoLog}>Digite seu Usuário e Senha para continuar</p>
                <Input type="text" placeholder={"Usuário"} name="username" onChange={setForm} />
                <Input type="password" placeholder={"Senha"} name='password' onChange={setForm} />
                <Button className={Style.fzLog} onClick={useLogin}>Fazer login</Button>
                <div className={Style.entrar}>
                        <span>Não tem uma conta?</span>
                    <button className={Style.registre}>Registre-se</button>
                    </div>
            </div>
            <div className={Style.imgLog}>Imagem</div>
        </div>
    )
}