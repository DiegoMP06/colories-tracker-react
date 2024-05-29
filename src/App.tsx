import { useReducer } from "react"
import Form from "./components/Form"
import { ActivityReducer, initialState } from "./reducers/activityReducer";

function App() {

    const [state, dispach] = useReducer(ActivityReducer, initialState);

    console.log(state)

    return (
        <>
            <header className="bg-lime-950 py-3">
                <div className="max-w-4xl mx-auto px-4 flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                      Contador de Calorias
                    </h1>
                </div>
            </header>

            <section className="bg-lime-800 py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <Form 
                        dispatch={dispach}
                    />
                </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl"></section>
        </>
    )
}

export default App
