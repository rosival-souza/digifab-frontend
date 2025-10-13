import {
  Box,
  // Link,
  Paper,
  Stack,
  Button,
  Divider,
  TextField,
  // IconButton,
  Typography,
  MenuItem
  // InputAdornment,
} from '@mui/material';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement, useEffect } from 'react';
import OrderProduction from 'components/sections/dashboard/top-products/orderProduction';

const App = (): ReactElement => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    idOrdemProducao: 5,
    codigoOrdemProducao: "OP-TESTE-010",
    idLoteProduto: 1,
    idLinhaProducao: 1,
    idResponsavel: 4,
    quantidadeProduzir: 5,
    dataHoraInicio: "2025-09-24"
  });

  const [isEnable, setIsEnable] = useState(false)
  const [dataProductionLine, setDataProductionLine] = useState([])
  const [dataProductLote, setDataProductLote] = useState([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    console.log(form, localStorage.getItem('accessTokenUser'))

    // idOrdemProducao: 5,
    // codigoOrdemProducao: "OP-TESTE-010",
    // idLoteProduto: 1,
    // idLinhaProducao: 1,
    // idResponsavel: 4,
    // quantidadeProduzir: 5,
    // dataHoraInicio: "2025-09-24"
  
    console.log("Form:", form);

    try {
      const response = await fetch('http://localhost:4000/api/order-production', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' 
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);

      alert('Produto cadastrado com sucesso!');

    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar produto!');
    }
  };

  const getProductionLine = async () =>{
    
    try {
      const response = await fetch(`http://localhost:4000/api/order-production/production-line`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('getProductionLine ->', data);

      if (data.length > 0) {
        setDataProductionLine(data)
      }

    } catch (error) {
      console.error(error);
      alert('error');
    }

  }
  const getProductLote = async () =>{
    
    try {
      const response = await fetch(`http://localhost:4000/api/order-production/product-lot`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('getProductLote ->', data);

      if (data.length > 0) {
        setDataProductLote(data)
      }

    } catch (error) {
      console.error(error);
      alert('error');
    }

  }
  const getGoogle = async () =>{
      try {
      const response = await fetch(`http://localhost:4000/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: localStorage.getItem('accessTokenUser')
        }),
      });

      const data = await response.json();
      console.log('getGoogle ->', data);

      // if (data.length > 0) {
      //   setDataProductionLine(data)
      // }

    } catch (error) {
      console.error(error);
      alert('error');
    }
  }

  useEffect(()=>{
    getProductionLine()
    getProductLote()
    getGoogle()
  },[])

  return (
    <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
      <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
        <Button
          onClick={() => setIsEnable(!isEnable)}
          sx={{ fontWeight: 'fontWeightRegular' }}
        >
          {
            isEnable ? 'Esconder' : 'Nova OP'
          }
        </Button>
        <OrderProduction />
      </Box>
      {
        isEnable
          ?
          <Stack justifyContent="center" gap={5}>
            <Typography variant="h3" textAlign="left" color="text.secondary">
              Registro de Ordem de Produção
            </Typography>
            <TextField
              select
              name="codigoOrdemProducao"
              value={form.codigoOrdemProducao}
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
                <MenuItem key={item.codigo} value={item.codigo}>
                  {item.codigo} - {item.nome}
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
              onClick={handleSubmit}
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            >
              Cadastrar
            </Button>
            <Divider />
          </Stack>
          :
          <></>
      }
    </Paper>
  );
};

export default App;
