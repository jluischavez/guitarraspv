import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"
import { useState, useEffect, use } from "react"


function App() {


    //State
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState(db);

    useEffect(() => {
        console.log('Componente Listo ó escuchando por Auth')
    }, [auth]);


    setTimeout(() => {
        setAuth(true)
    }, 3000);

    // console.log(auth);



    //RETURN
  return (
    <>
    <Header />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar
                key={guitar.id}
                guitar={guitar}
                />
            ))}
            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
