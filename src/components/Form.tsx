import { type ChangeEvent, useState, type FormEvent, type Dispatch } from "react"
import { v4 as uuid } from "uuid";
import { categories } from "../data/categories"
import type { Activity } from "../types";
import { type ActivityActions } from "../reducers/activityReducer";

type FormProps = {
    dispatch: Dispatch<ActivityActions>;
}

export default function Form({dispatch}: FormProps) {

    const INITIAL_STATE : Activity = {
        id: uuid(),
        category: 1,
        name: '',
        calories: 0,
    }

    const [activity, setActivity] = useState(INITIAL_STATE);

    const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({...activity, [e.target.id]: isNumberField ? Number(e.target.value) : e.target.value});
    }

    const isValidActivity = () => {
        const { category, name, calories } = activity;

        return name.trim().length > 0 && calories > 0 && [1, 2].includes(category);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch({type: 'save-activity', payload: {newActivity: activity}})
        setActivity({...INITIAL_STATE, id: uuid()});
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Categoria: 
                </label>

                <select 
                    id="category" 
                    className="border border-slate-30 p-2 rounded-lg bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    { categories.map(category => (
                        <option key={category.id} value={category.id}>
                            { category.name }
                        </option>
                    )) }
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    Actividad: 
                </label>

                <input 
                    type="text"
                    id="name" 
                    className="border border-slate-300 p-2 rounded-lg" 
                    placeholder="Ej. Comida: Jugo de Naranja, Ensalada, Ejercicio: Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">
                    Calorias: 
                </label>

                <input 
                    type="number"
                    id="calories" 
                    className="border border-slate-300 p-2 rounded-lg" 
                    placeholder="Ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit" 
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'} 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10 disabled:cursor-default"
                disabled= {!isValidActivity()}
            />
        </form>
    )
}
