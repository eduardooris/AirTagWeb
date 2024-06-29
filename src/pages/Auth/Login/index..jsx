import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
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
        <>
            <h1>Login</h1>
            <p>
                <Input placeholder={"Usuário"} name="username" onChange={setForm} />
                <Input placeholder={"Senha"} name='password' onChange={setForm} />
                <Button onClick={useLogin}>Fazer login</Button>
            </p>
        </>
    )
}