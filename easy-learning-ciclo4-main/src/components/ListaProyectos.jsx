import React, { useEffect } from "react";
import "../pages/estudiantes/estudiantes.css";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import { GET_Proyectos } from "../graphql/querys";



export default function ListaPro() {

    const { loading, error, data} = useQuery(GET_Proyectos);

    return (
        <div className="listaPro">
            <h3>Proyectos Disponibles</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Estado</TableCell>
                            <TableCell>Fecha Fin</TableCell>
                            <TableCell>Fecha Inicio</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Presupuesto</TableCell>
                            {/*<TableCell>Lider Proyecto</TableCell>
                                <TableCell>Documento Lider</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Fase</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log("entrega de datos", data)}
                        {data && data.Proyectos.map((pt) => {
                            return <tr key={pt._id}>
                                <td>{pt.estado}</td>
                                <td>{pt.fechaFin}</td>
                                <td>{pt.fechaInicio}</td>
                                <td>{pt.nombre}</td>
                                <td>{pt.presupuesto}</td>
                                <td><button type="button" >Inscribirse</button></td>
                            </tr>
                        })}
                        </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
