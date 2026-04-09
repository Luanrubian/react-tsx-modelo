import { useCallback, useEffect, useState } from "react";
import {ITarefa, tarefasService} from "../../services/api/tarefas/tarefasService"
import { ApiException } from "../../services/api/ErrorException";

export const Dashboard = () => {

    const [lista,setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        tarefasService.getAll()
        .then((result) => {
            if (result instanceof ApiException){
                alert(result.message);
            } else{
                setLista(result);
            }
        })
    },[]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter'){
          if(e.currentTarget.value.trim().length === 0) return;

          const  value = e.currentTarget.value;

           e.currentTarget.value = '';

           if(lista.some((listItem) => listItem.title === value)) return;

           tarefasService.create({title: value,isCompleted: false})
           .then((result)=> {
            if (result instanceof ApiException){
                alert(result.message);
            } else{
                setLista((oldLista) => [...oldLista,result]);
            }
        });
        }
    }, [lista]);

    return (
    <div>  
        <p>Lista</p>
        <input
        onKeyDown={handleInputKeyDown}
        />

        <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
         <ul>
                {lista.map((listItem) => (
                    <li key={listItem.id}>
                        <input 
                            type="checkbox"
                            checked={listItem.isCompleted}
                            onChange={() =>
                                setLista(oldLista => {
                                    return oldLista.map(oldItem => {
                                        if(oldItem.title === listItem.title){
                                            return {
                                                ...oldItem,
                                                isCompleted: !oldItem.isCompleted,
                                            };
                                        }
                                        return oldItem;
                                    });
                                })
                            }
                        />
                        {listItem.title}
                    </li>
                ))}
            </ul>
    </div>
    );
}