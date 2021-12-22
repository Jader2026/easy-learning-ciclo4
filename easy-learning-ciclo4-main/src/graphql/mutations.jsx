import { gql} from '@apollo/client';

const crearUsuario = gql`
mutation CrearUsuario($nombre: String!, $apellido: String!, $identificacion: String!, $correo: String!, $rol: Enum_Rol!, $password: String!) {
    crearUsuario(nombre: $nombre, apellido: $apellido, identificacion: $identificacion, correo: $correo, rol: $rol, password: $password) {
      nombre
      apellido
      identificacion
      correo
      rol
    }
  }
`;

const LOGIN = gql`
mutation Login($correo: String!, $password: String!) {
  login(correo: $correo, password: $password) {
    token
    error
  }
}

`;


export {crearUsuario, LOGIN};