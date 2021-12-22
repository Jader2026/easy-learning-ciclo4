import "./lideres.css"
import ListaAv from "../../components/listaAvances";
import ListaPro from "../../components/ListaProyectos";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../graphql/client";


export default function Lideres() {
    
    const [botonProyectos, setBpro] = useState(false);
    const isTrue = botonProyectos=== "True";
    return (
        <ApolloProvider client = {client}>
        <>
            <div className="containerlideres">
                <div>
                    <h1>GESTION LIDERES DE PROYECTO</h1>
                </div>
                <div>
                    <button type="button" onClick={ () => setBpro("True") }>Proyectos</button>
                    <button type="button" onClick={() => setBpro("False") }>Avances</button>
                </div>
                <div>{ isTrue ? <ListaPro />: <ListaAv/>}</div>
            </div>
        </>
        </ApolloProvider>
    )
}
