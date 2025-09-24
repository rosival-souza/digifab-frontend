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
} from '@mui/material';
// import { productTableRows } from 'data/product-data';
import ProductItemRow from './ProductItemRow';
import SimpleBar from 'simplebar-react';

const TopProducts = (): ReactElement => {

  const [productTableRows, setProductTableRows] = useState<Array<object>>([])

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/dashboard/rankings/top-products', {
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
      <Typography variant="h4" color="common.white" mb={6}>
        Top Produtos
      </Typography>
      <TableContainer component={SimpleBar}>
        <Table sx={{ minWidth: 440 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Popularidade</TableCell>
              <TableCell align="center">Total Planejado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productTableRows.map((product: any) => (
              <ProductItemRow key={product.CODIGO_PRODUTO} productItem={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopProducts;
