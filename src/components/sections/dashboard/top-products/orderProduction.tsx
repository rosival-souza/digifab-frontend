import { useState, useEffect, ReactElement } from 'react';
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  Divider
} from '@mui/material';
// import { productTableRows } from 'data/product-data';
import Orders from './orders';
import SimpleBar from 'simplebar-react';

const TopProducts = (): ReactElement => {

  const [productTableRows, setProductTableRows] = useState<Array<object>>([])

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/order-production', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('response', data);
      if (data.length > 0) {
        setProductTableRows(data)
      }

    } catch (error) {
      console.error(error);
      alert('error');
    }
  };


  useEffect(() => {

    getData()

  }, [])

  return (

    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={8}>
        Listagem de Ordens de Produção
      </Typography>
      <TableContainer component={SimpleBar}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">código Produto</TableCell>
              <TableCell align="left">código Ordem Producao</TableCell>
              <TableCell align="left">código Lote Produto</TableCell>
              <TableCell align="center">código Linha Produção</TableCell>
              <TableCell align="center">QTD. Produzida</TableCell>
              <TableCell align="center">Data Hora</TableCell>
              <TableCell align="center">Visualizar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productTableRows.map((product: any) => (
              <Orders key={product.idOrdemProducao} productItem={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopProducts;
