import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Card,
   Col,CardTitle, CardBody,
} from "reactstrap";
import Link from "next/link";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuNotas from "./MenuNotas";
const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});


function createData(id,Cedula,Nombres,Apellido,SitiodePractica,NotaDefinitiva,ochenta,
Curso,
PALSACLS,
setenta,
SaberPro,
treinta,
Definitiva,
veinte,
Definitiva100 
) {
  return { id,Cedula,Nombres,Apellido,SitiodePractica,NotaDefinitiva,ochenta,
    Curso,
    PALSACLS,
    setenta,
    SaberPro,
    treinta,
    Definitiva,
    veinte,
    Definitiva100 };
}
const data = [
  { id: "1",
  Cedula: "10931039",
  Nombres: "Juan",
  Apellido: "Abadia",
  SitiodePractica: "Los cobos",
  NotaDefinitiva:"4.6",
  ochenta:"4.4",
  Curso:"4.3",
  PALSACLS:"4.7",
  setenta:"4.5",
  SaberPro:"3.8",
  treinta:"4.3",
  Definitiva:"4.1",
  veinte:"4.3",
  Definitiva100 :"4.4",
},
 
];

export default function DenseTable() {
  const classes = useStyles();

 
 
    return (
      
      <>
        <Container>
        <MenuNotas></MenuNotas>
        <br />
          
          <br />
          <br />
        
          
          <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Cedula</TableCell>
            <TableCell align="right">Nombres</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Sitio de Practica</TableCell>
            <TableCell align="right">Nota Definitiva</TableCell>
            <TableCell align="right">80&nbsp;(%)</TableCell>
            <TableCell align="right">Curso</TableCell>
            <TableCell align="right">PALS ACLS</TableCell>
            <TableCell align="right">70&nbsp;(%)</TableCell>
            <TableCell align="right">Saber Pro</TableCell>
            <TableCell align="right">30&nbsp;(%)</TableCell>
            <TableCell align="right">Definitiva</TableCell>
            <TableCell align="right">20&nbsp;(%)</TableCell>
            <TableCell align="right">Definitiva &nbsp;(100%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dato) => (
            <TableRow key={dato.name}>
              <TableCell component="th" scope="row">
                {dato.id}
              </TableCell>
              <TableCell align="right">{dato.Cedula}</TableCell>
              <TableCell align="right">{dato.Nombres}</TableCell>
              <TableCell align="right">{dato.Apellido}</TableCell>
              <TableCell align="right">{dato.SitiodePractica}</TableCell>
              <TableCell align="right">{dato.NotaDefinitiva}</TableCell>
              <TableCell align="right">{dato.ochenta}</TableCell>
              <TableCell align="right">{dato.Curso}</TableCell>
              <TableCell align="right">{dato.PALSACLS}</TableCell>
              <TableCell align="right">{dato.setenta}</TableCell>
              <TableCell align="right">{dato.SaberPro}</TableCell>
              <TableCell align="right">{dato.treinta}</TableCell>
              <TableCell align="right">{dato.Definitiva}</TableCell>
              <TableCell align="right">{dato.veinte}</TableCell>
              <TableCell align="right">{dato.Definitiva100}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
          <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/graficas'}>
                <Button className="btn" color="primary" size="lg">
                  Ver Graficas
                </Button>
                </Link>
                <Button className="btn" color="secondary" size="lg">
                 Descargar lista
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        </Container>


      </>
  
    );
          }
  DenseTable.layout ="MenuLayout";

