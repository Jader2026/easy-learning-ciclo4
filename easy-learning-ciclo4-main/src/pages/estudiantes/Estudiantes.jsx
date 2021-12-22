import React from "react";
import "./estudiantes.css";
import ListaPro from "../../components/ListaProyectos";
import ListaAv from "../../components/listaAvances";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../graphql/client";

export default function Estudiantes() {
 
    const [botonProyectos, setBpro] = useState(false);
    const isTrue = botonProyectos=== "True";

    return (
        <ApolloProvider client = {client}>
        <>
            <div className="containerestudiantes">
                <div>
                    <h1>GESTION ESTUDIANTES</h1>
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