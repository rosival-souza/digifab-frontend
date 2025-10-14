import { Chip, TableCell, TableRow } from '@mui/material';
import { ReactElement, useState } from 'react';
import IconifyIcon from 'components/base/IconifyIcon';

const ProductDeviations = ({ productItem }: { productItem: any }): ReactElement => {

    const [dataModal, setDataModal] = useState<any>([])

    const getData = async (id: number) => {

        try {
            const response = await fetch(`http://localhost:4000/api/order-production/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log('getData ->', data);
    
            alert(`
                    ##### Lote Produto #####
                    -----------------------------------------------
                    ID: ${data.loteProduto.idLoteProduto}
                    COD LoteProduto: ${data.loteProduto.codigoLoteProduto}
                    COD Fábrica: ${data.loteProduto.codigoFabrica}
                    DT Produção: ${data.loteProduto.dataProducao}

                    ##### Produto #####
                    -----------------------------------------------
                    ID: ${data.loteProduto.produto.idProduto}
                    COD Produto: ${data.loteProduto.produto.codigoProduto}
                    nomeProduto: ${data.loteProduto.produto.nomeProduto}
                    Peso Bruto: ${data.loteProduto.produto.pesoBruto}
                    UN. Medida: ${data.loteProduto.produto.unidadeMedida}
                    COD Barras: ${data.loteProduto.produto.codigoBarras}

                    ##### Linha Produção #####
                    -----------------------------------------------
                    ID: ${data.linhaProducao.idLinhaProducao}
                    COD Linha Produção: ${data.linhaProducao.codigoLinhaProducao}
                    capacidade Hora: ${data.linhaProducao.capacidadeHora}
                    descrição: ${data.linhaProducao.descricao}
                    Status: ${data.linhaProducao.status}
                    Responsável: ${data.linhaProducao.responsavel.nomeUsuario}
                `)
            if (data.length > 0) {
                setDataModal(data)
            }

        } catch (error) {
            console.error(error);
            alert('error');
        }
    };

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
                {productItem.idOrdemProducao}
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
                    color='primary'
                    variant="outlined"
                    size="medium"
                />
            </TableCell>
            <TableCell align="center">
                <IconifyIcon
                    fontSize={30}
                    style={{ cursor: 'pointer' }}
                    onClick={() => getData(productItem.idOrdemProducao)}
                    icon="mdi:pen" color="text.success" />
            </TableCell>
        </TableRow>
    );
};

export default ProductDeviations;
