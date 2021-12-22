import React from "react";
import "../pages/estudiantes/estudiantes.css";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { GET_Avances } from "../graphql/querys";
import { useQuery } from "@apollo/client";


export default function ListaAv() {
    const { loading, error, data} = useQuery(GET_Avances);

    return (
        <div className="listaAv">
            <h3>Avances</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Presupuesto</TableCell>
                            <TableCell>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.Avances.map((av, index) => {
                            return <tr key={av._id}>
                                <td>{av.nombre}</td>
                                <td>{av.presupuesto}</td>
                                <td>{av.estado}</td>
                            </tr>
                        })}
                        </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
