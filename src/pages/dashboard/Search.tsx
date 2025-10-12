import {
  Box,
  // Link,
  Paper,
  // Stack,
  Button,
  // Divider,
  TextField,
  Chip,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  MenuItem,
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import { ReactElement, useEffect, useState } from 'react';
// import OrderProduction from 'components/sections/dashboard/top-products/orderProduction';

const App = (): ReactElement => {

  const [data, setData] = useState([])
  const [dataTrackability, setDataTrackability] = useState<any>({})
  const [codigoLoteProduto, setCodigoLoteProduto] = useState<string>('SELECIONE UM LOTE DE PRODUTO')

  const getData = async () => {

    try {
      const response = await fetch(`http://localhost:4000/api/order-production/product-lot`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('product-lot ->', data);

      if (data.length > 0) {
        setData(data)
      }

    } catch (error) {
      console.error(error);
      alert('error');
    }
  };

  const getTrackability = async () => {

    try {
      const response = await fetch(`http://localhost:4000/api/trackability?codigoLoteProduto=${codigoLoteProduto}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('getTrackability ->', data);

      if (data.length > 0) {
        setDataTrackability(data[0])
      }

    } catch (error) {
      console.error(error);
      alert('error');
    }
  }

  useEffect(() => {

    getData()

  }, [])

  return (
    <>
      <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
          <Typography variant="h4" color="common.white" mb={8}>
            Lote Produto:
          </Typography>
          <TextField
            select
            fullWidth
            name="codigoLoteProduto"
            value={codigoLoteProduto}
            onChange={(e) => setCodigoLoteProduto(e.target.value)}
            variant="filled"
          >
            <MenuItem value="SELECIONE UM LOTE DE PRODUTO">
            SELECIONE UM LOTE DE PRODUTO
            </MenuItem>
            {data.map((item: any) => (
              <MenuItem key={item.idLoteProduto} value={item.codigoLoteProduto}>
                {item.codigoLoteProduto}
              </MenuItem>
            ))}
          </TextField>

          <br />
          <br />
          <Button
            disabled={codigoLoteProduto === '' || codigoLoteProduto === 'SELECIONE UM LOTE DE PRODUTO' ? true : false}
            onClick={() => getTrackability()}
            sx={{ fontWeight: 'fontWeightRegular' }}
          >
            Buscar
          </Button>
        </Box>
      </Paper>
      <br />
      <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
        <Typography variant="h4" color="common.white" mb={8}>
          Rastreamento
        </Typography>
        {
          "codigoProduto" in dataTrackability &&
          <TableContainer component={SimpleBar}>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">COD. Produto</TableCell>
                  <TableCell align="left">Nome Produto</TableCell>
                  <TableCell align="left">Lote Produto</TableCell>
                  <TableCell align="left">COD. OP</TableCell>
                  <TableCell align="center">Responsável OP</TableCell>
                  <TableCell align="center">Nome MP</TableCell>
                  <TableCell align="center">DT. INI OP</TableCell>
                  <TableCell align="center">Consumo Kg</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="left"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.codigoProduto}
                  </TableCell>
                  <TableCell
                    align="left"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.nomeProduto}
                  </TableCell>
                  <TableCell
                    align="left"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.loteProduto}
                  </TableCell>
                  <TableCell
                    align="left"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.codigoOp}
                  </TableCell>
                  <TableCell
                    align="center"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.responsavelOp}
                  </TableCell>
                  <TableCell
                    align="center"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.nomeMp}
                  </TableCell>
                  <TableCell
                    align="center"
                    component="th"
                    variant="head"
                    scope="row"
                    sx={{
                      color: 'common.white',
                      fontSize: 'body1.fontSize',
                    }}
                  >
                    {dataTrackability.inicioOp}
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      label={`${dataTrackability.consumoKg}`}
                      color='warning'
                      variant="outlined"
                      size="medium"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        }

      </Paper>
    </>
  );
};

export default App;
