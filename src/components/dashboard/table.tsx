import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import MuiTable from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const headers = ["Nombre","Descripción", "Historial", "Invima", "Facturación","Responsable", "Área", "Marca", "Proveedor"];

function Table() {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow hover>
            <TableCell>Monitor de signos vitales</TableCell>
            <TableCell>Dispositivo médico que detecta, procesa y muestra los parámetros fisiologicos de un paciente.</TableCell>
            <TableCell>Revisión realizada</TableCell>
            <TableCell>200EBC-0002816-R1</TableCell>
            <TableCell>MS01</TableCell>
            <TableCell>Juan Perez</TableCell>
            <TableCell>UCI</TableCell>
            <TableCell>GE Healthcare</TableCell>
            <TableCell>Medline Industries</TableCell>
          </TableRow>

          <TableRow hover>
            <TableCell>Equipo de rayos x portátil</TableCell>
            <TableCell>Dispositivo médico que utiliza radiación ionizante para generar imágenes médicas.</TableCell>
            <TableCell>Mantenimiento preventivo realizado</TableCell>
            <TableCell>2019EBC-0003588</TableCell>
            <TableCell>RP02</TableCell>
            <TableCell>Maria Lopez</TableCell>
            <TableCell>Hospitalización</TableCell>
            <TableCell>Philips Healthcare</TableCell>
            <TableCell>Henry Schein Medical</TableCell>
          </TableRow>

          <TableRow hover>
            <TableCell>Ventilador mecánico</TableCell>
            <TableCell>Dispositivo médico diseñado para asistir o reemplazar la función respiratoria de un paciente.</TableCell>
            <TableCell>Mantenimiento correctivo realizado</TableCell>
            <TableCell>2021DCE-000116-L</TableCell>
            <TableCell>VM03</TableCell>
            <TableCell>Pedro Martinez</TableCell>
            <TableCell>UCI</TableCell>
            <TableCell>Siemens Healthineers</TableCell>
            <TableCell>Cardinal Health</TableCell>
          </TableRow>

          <TableRow hover>
            <TableCell>Máquina de anestesia</TableCell>
            <TableCell>Dispositivo médico usado para generar y mezclar agentes anestésicos por inhalación.</TableCell>
            <TableCell>Sin revisión, control o mantenimiento programado.</TableCell>
            <TableCell>1931A-03098D</TableCell>
            <TableCell>MA04</TableCell>
            <TableCell>Ana Fernandez</TableCell>
            <TableCell>Cirugía</TableCell>
            <TableCell>Baxter</TableCell>
            <TableCell>Braun</TableCell>
          </TableRow>

          <TableRow hover>
            <TableCell>Desfibrilador</TableCell>
            <TableCell>Dispositivo médico que envía descarga eléctrica al corazón para restaurar el latido normal.</TableCell>
            <TableCell>Calibración realizada</TableCell>
            <TableCell>121FR-0010D-R</TableCell>
            <TableCell>DD05</TableCell>
            <TableCell>Daniel Ruiz</TableCell>
            <TableCell>Urgencias</TableCell>
            <TableCell>Siemens Healthineers</TableCell>
            <TableCell>Cardinal Health</TableCell>
          </TableRow>

        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
