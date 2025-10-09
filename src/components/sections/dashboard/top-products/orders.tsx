import { Chip, TableCell, TableRow } from '@mui/material';
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
                {productItem.codigoProduto}
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
                {productItem.codigoOrdemProducao}
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
                {productItem.codigoLoteProduto}
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
                {productItem.codigoLinhaProducao}
            </TableCell>
            <TableCell align="center">
                <Chip
                    label={`${productItem.quantidadeProduzir}`}
                    color='warning'
                    variant="outlined"
                    size="medium"
                />
            </TableCell>
            <TableCell align="center">
                <Chip
                    label={`${productItem.dataHoraInicio}`}
                    color='warning'
                    variant="outlined"
                    size="medium"
                />
            </TableCell>
        </TableRow>
    );
};

export default ProductDeviations;
