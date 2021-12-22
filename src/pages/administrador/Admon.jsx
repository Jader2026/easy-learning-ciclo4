import "./admon.css"
import ListaUs from "../../components/ListaUsuarios";
import ListaPro from "../../components/ListaProyectos";
import ListaAv from "../../components/listaAvances"
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../graphql/client";


export default function Admon() {

    const [botonProyectos, setBpro] = useState(true);
    const [botonAvances, setAv] = useState(false);
    const [botonUsuarios, setUs] = useState(false);

    const isTrue1 = botonProyectos === true;
    const isTrue2 = botonAvances === true;
    const isTrue3 = botonUsuarios === true;

    var rend;
    if (isTrue1 === true) {
        rend = <ListaPro />;
        console.log(isTrue1, isTrue2, isTrue3);
    }
    else if (isTrue2 === true) {
        rend = <ListaAv />;
        console.log(isTrue1, isTrue2, isTrue3);
    }
    else if (isTrue3 === true) {
        rend = <ListaUs />;
        console.log(isTrue1, isTrue2, isTrue3);
    }

    return (
        <ApolloProvider client={client}>
            <>
                <div className="containeradmon">
                    <div>
                        <h1>GESTION ADMINISTRADORES</h1>
                    </div>
                    <div>
                        <button type="button" onClick={() => { setBpro(true); setAv(false); setUs(false) }} >Proyectos</button>
                        <button type="button" onClick={() => { setBpro(false); setAv(true); setUs(false) }}>Avances</button>
                        <button type="button" onClick={() => { setBpro(false); setAv(false); setUs(true) }}>Usuarios</button>
                    </div>
                    {rend}
                </div>
            </>
        </ApolloProvider>
    )
}
