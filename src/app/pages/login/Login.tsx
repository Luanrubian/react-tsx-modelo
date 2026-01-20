import { useCallback, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
    const inputPasswordRef= useRef<HTMLInputElement>(null);

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email,password]);  

    return(
          <div>
            <form>
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

                    {/* <label>
                        <span>Senha</span>
                        <input 
                        type="password" 
                        value={password} 
                        ref= {inputPasswordRef}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </label> */}
                    <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>   
        </div>
    );
};

