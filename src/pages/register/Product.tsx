import {
  Box,
  Paper,
  Stack,
  Button,
  Divider,
  TextField,
  Modal,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  MenuItem,
  Chip
} from '@mui/material';
import { useState, ReactElement, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import IconifyIcon from 'components/base/IconifyIcon';

const App = (): ReactElement => {

  const [form, setForm] = useState({
    codigo: "OP-TESTE-010",
    idLoteProduto: 1,
    idLinhaProducao: 1,
    quantidadeProduzir: 5,
    dataHoraInicio: "2025-09-24"
  });
  const [formConsumer, setFormConsumer] = useState({
    idLoteMp: 1,
	  quantidade: 2
  });
 
  const [dataProductionLine, setDataProductionLine] = useState([])
  const [dataProductLote, setDataProductLote] = useState([])
  const [tokenGoogle, setTokenGoogle] = useState('')
  const authToken = localStorage.getItem('authToken')
  const [productTableRows, setProductTableRows] = useState<Array<object>>([])
  const [dataModal, setDataModal] = useState<any>([])
  const [dataCosumer, setDataConsumer] = useState<any>([])
  const handleOpenModalOrder = () => setOpenModalOrder(true);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModalOrder = () => setOpenModalOrder(false);
  const handleCloseModal = () => setOpenModal(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [idOrderProduction, setIdOrderProduction] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeConsumer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormConsumer({
      ...formConsumer,
      [e.target.name]: Number(e.target.value),
    });
  };
  const getProductionLine = async () => {

    try {
      const response = await fetch(`http://localhost:4000/api/order-production/production-line`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        setDataProductionLine(data)
      }

    } catch (error) {
      console.error(error);
      // alert('error');
    }

  }
  const getProductLote = async () => {

    try {
      const response = await fetch(`http://localhost:4000/api/order-production/product-lot`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        setDataProductLote(data)
      }

    } catch (error) {
      console.error(error);
      // alert('error');
    }

  }
  const getGoogle = async () => {

    try {
      const response = await fetch(`http://localhost:4000/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: authToken
        }),
      });

      const data = await response.json();
      setTokenGoogle(data.token)

    } catch (error) {
      console.error(error);
      // alert('error');
    }
  }

  const getOrderProduction = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/order-production', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        setProductTableRows(data)
      }

    } catch (error) {
      console.error(error);
      // alert('error');
    }
  };
  const listConsumer = async (idLoteMP: number) => {

    setOpenModal(true)
    setIdOrderProduction(idLoteMP)

    try {
      const response = await fetch(`http://localhost:4000/api/order-production/${idLoteMP}/balances-by-lot-mp`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (data.length > 0) {
        setDataConsumer(data)
      }

    } catch (error) {
      console.error(error);
      // alert('error');
    }
  };
  const registerOrders = async () => {

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenGoogle}`
      },
      body: JSON.stringify(form),
    }

    try {
      const response = await fetch('http://localhost:4000/api/order-production', config);

      if (!response.ok) {
        alert('Erro ao cadastrar Ordem de Produção')
        throw new Error('Erro ao cadastrar Ordem de Produção');
      }

      const data = await response.json();

      alert('Ordem de Produção cadastrado com sucesso!');

    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar Ordem de Produção!');
    }
  };
  const createConsumer = async () => {

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenGoogle}`
      },
      body: JSON.stringify(formConsumer),
    }

    try {
      const response = await fetch(`http://localhost:4000/api/order-production/${idOrderProduction}/consumption-item`, config);

      if (!response.ok) {
        alert('Erro ao cadastrar Consumo')
        throw new Error('Erro ao cadastrar Consumo');
      }

      const data = await response.json();
      console.log('createConsumer:', data);

      alert('Consumo cadastrado com sucesso!');

    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar Consumo!');
    }
  };

  useEffect(() => {
    getProductionLine()
    getProductLote()
    getGoogle()
    getOrderProduction()
  }, [])

  return (
    <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
      <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
        {/* ------------------ MODAL ORDER ------------------ */}
        <Modal open={openModalOrder} onClose={handleOpenModalOrder}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '80%',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Stack justifyContent="center" gap={5}>
            <Typography variant="h3" textAlign="left" color="text.secondary">
              Registro de Ordem de Produção
            </Typography>
            <TextField
              select
              name="codigo"
              value={form.codigo}
              onChange={handleChange}
              variant="filled"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              label="Lote Produto"
            >
              {dataProductLote.map((item: any) => (
                <MenuItem key={item.idLoteProduto} value={item.codigoLoteProduto}>
                  {item.codigoLoteProduto}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              name="idLinhaProducao"
              onChange={handleChange}
              variant="filled"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              label="Linha Produção"
            >
              {dataProductionLine.map((item: any) => (
                <MenuItem key={item.idLinhaProducao} value={item.idLinhaProducao}>
                  {item.idLinhaProducao} - {item.nome}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="quantidadeProduzir"
              onChange={handleChange}
              variant="filled"
              label="Quantidade Produzir"
              type="number"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            />

            <TextField
              name="dataHoraInicio"
              onChange={handleChange}
              variant="filled"
              label="Data Hora Inicio"
              type="date"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            />

            <Button
              onClick={registerOrders}
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            >
              Cadastrar
            </Button>
            <Divider />
          </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={3}>
              <Button variant="outlined" color="error" onClick={handleCloseModalOrder}>
                Fechar
              </Button>
            </Stack>
          </Box>
        </Modal>
        {/* ------------------ MODAL ORDER ------------------ */}

        {/* ------------------ MODAL CONSUMO ------------------ */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '60%',
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Stack justifyContent="center" gap={5}>
              <Typography variant="h3" textAlign="left" color="text.secondary">
                [{idOrderProduction}] - Adicionar Consumo 
              </Typography>
              <TextField
                select
                name="idLoteMp"
                onChange={handleChangeConsumer}
                variant="filled"
                sx={{ fontWeight: 'fontWeightRegular', width: '50%' }}
                label="Lote MP"
              >
                {dataCosumer.map((item: any) => (
                  <MenuItem key={item.idLoteMp} value={item.idLoteMp}>
                    ID: {item.idLoteMp} - Saldo: {item.saldoKg} - Nome: {item.codigoMp}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="quantidade"
                onChange={handleChangeConsumer}
                variant="filled"
                label="Quantidade"
                type="number"
                sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              />

              <Button
                onClick={createConsumer}
                sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              >
                Adicionar Consumo
              </Button>
              <Divider />
            </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={3}>
              <Button variant="outlined" color="error" onClick={handleCloseModal}>
                Fechar
              </Button>
            </Stack>
          </Box>
        </Modal>
        {/* ------------------ MODAL CONSUMO ------------------ */}

        <Button
          onClick={() => setOpenModalOrder(true)}
          sx={{ fontWeight: 'fontWeightRegular' }}
        >
         Nova OP
        </Button>
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
                  <TableCell align="center">Visualizar/Consumo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productTableRows.map((productItem: any) => (
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
                        onClick={() => listConsumer(productItem.idOrdemProducao)}
                        icon="mdi:pen" color="text.success" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Paper>
  );
};

export default App;
