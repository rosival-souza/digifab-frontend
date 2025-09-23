import { Chip, LinearProgress, TableCell, TableRow } from '@mui/material';
import { ProductItem } from 'data/product-data';
import { ReactElement } from 'react';

const ProductItemRow = ({ productItem }: { productItem: ProductItem }): ReactElement => {
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
        {productItem.CODIGO_PRODUTO}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {productItem.NOME_PRODUTO}
      </TableCell>
      <TableCell align="left">
        <LinearProgress
          variant="determinate"
          color='warning'
          value={Number(productItem.TOTAL_PLANEJADO)}
          sx={{
            bgcolor: 'grey.900',
          }}
        />
      </TableCell>
      <TableCell align="center">
        <Chip
          label={`${productItem.TOTAL_PLANEJADO}`}
          color='warning'
          variant="outlined"
          size="medium"
        />
      </TableCell>
    </TableRow>
  );
};

export default ProductItemRow;
