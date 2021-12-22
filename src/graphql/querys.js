import { gql } from "@apollo/client";

const GET_Proyectos = gql`
query Proyectos {
    Proyectos {
        _id
        estado
        fechaFin
        fechaInicio
        nombre
        presupuesto
    }
}
`;

const GET_Usuarios = gql`
query Usuarios {
    Usuarios {
    _id
    nombre
    apellido
    identificacion
    }
}
`;

const GET_Avances = gql`
query Proyecto {
    Avances {
    proyecto {
        _id
        nombre
        presupuesto
        estado
    }
    }
}
`;


export { GET_Proyectos, GET_Usuarios, GET_Avances };