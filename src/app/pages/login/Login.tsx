import { useCallback, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/buttonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
    const inputPasswordRef= useRef<HTMLInputElement>(null);

    const {nomeDoUsuario} = useUsuarioLogado();

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email,password]);  

    return(
          <div>
            <form>

                    {nomeDoUsuario}
                    <InputLogin
                    label="Email"
                    value={email}
                    onChange= {newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    />

                    <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    onChange= {newValue => setPassword(newValue)}
                    ref= {inputPasswordRef}
                    />
    
                    <ButtonLogin
                    type="button" 
                    onClick={handleEntrar}>
                        Entrar
                    </ButtonLogin>

                    <ButtonLogin
                    type="button" 
                    >
                        Cadastrar-se
                    </ButtonLogin>
            </form>   
        </div>
    );
};

