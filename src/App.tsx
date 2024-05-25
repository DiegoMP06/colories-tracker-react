import Form from "./components/Form"

function App() {

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
                    <Form />
                </div>
            </section>
        </>
    )
}

export default App
