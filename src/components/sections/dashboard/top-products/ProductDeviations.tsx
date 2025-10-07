import { Chip, LinearProgress, TableCell, TableRow } from '@mui/material';
import { ProductItem } from 'data/product-data';
import { ReactElement } from 'react';

const ProductDeviations = ({ productItem }: { productItem: any }): ReactElement => {
  return (
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
        {productItem.CODIGO_MP}
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
        {productItem.NOME_MP}
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
        {productItem.PLANEJADO_KG}
      </TableCell>
      <TableCell align="center">
        <Chip
          label={`${productItem.CONSUMIDO_KG}`}
          color='warning'
          variant="outlined"
          size="medium"
        />
      </TableCell>
      <TableCell align="center">
        <Chip
          label={`${productItem.DESVIO_KG}`}
          color='warning'
          variant="outlined"
          size="medium"
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductDeviations;
