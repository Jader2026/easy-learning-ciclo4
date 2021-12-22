import React from "react";
import "../pages/estudiantes/estudiantes.css";
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import { useQuery } from "@apollo/client";
import { GET_Usuarios } from "../graphql/querys";


export default function ListaUs() {
    const { loading, error, data} = useQuery(GET_Usuarios);

        return (
            <div className="listaUs">
                <h3>Usuarios</h3>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Identificacion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.Usuarios.map((us) => {
                                return <tr key={us._id}>
                                    <td>{us.nombre}</td>
                                    <td>{us.apellido}</td>
                                    <td>{us.identificacion}</td>
                                </tr>})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
}
