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

  const ordens = [
    {
      idOrdemProducao: 5,
      codigoOrdemProducao: "OP-20250905-001",
      codigoLoteProduto: "LP-TAM-20250905-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 3000,
      dataHoraInicio: "2025-09-05T11:00:00.000Z"
    },
    {
      idOrdemProducao: 6,
      codigoOrdemProducao: "OP-20250905-002",
      codigoLoteProduto: "LP-GAR-20250905-1",
      codigoLinhaProducao: "LIN-002",
      codigoProduto: "PRD-GAR-500",
      quantidadeProduzir: 2000,
      dataHoraInicio: "2025-09-05T12:00:00.000Z"
    },
    {
      idOrdemProducao: 7,
      codigoOrdemProducao: "OP-20250905-003",
      codigoLoteProduto: "LP-ROT-20250905-1",
      codigoLinhaProducao: "LIN-003",
      codigoProduto: "PRD-ROT-500",
      quantidadeProduzir: 2000,
      dataHoraInicio: "2025-09-05T13:00:00.000Z"
    },
    {
      idOrdemProducao: 8,
      codigoOrdemProducao: "OP-20250906-001",
      codigoLoteProduto: "LP-GAR-20250906-1",
      codigoLinhaProducao: "LIN-002",
      codigoProduto: "PRD-GAR-500",
      quantidadeProduzir: 750,
      dataHoraInicio: "2025-09-06T11:00:00.000Z"
    },
    {
      idOrdemProducao: 9,
      codigoOrdemProducao: "OP-20250906-002",
      codigoLoteProduto: "LP-TAM-20250906-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 2000,
      dataHoraInicio: "2025-09-06T14:00:00.000Z"
    },
    {
      idOrdemProducao: 10,
      codigoOrdemProducao: "OP-20250907-001",
      codigoLoteProduto: "LP-POT-20250907-1",
      codigoLinhaProducao: "LIN-004",
      codigoProduto: "PRD-POT-1L",
      quantidadeProduzir: 500,
      dataHoraInicio: "2025-09-07T16:00:00.000Z"
    },
    {
      idOrdemProducao: 11,
      codigoOrdemProducao: "OP-20250907-002",
      codigoLoteProduto: "LP-ROT-20250907-1",
      codigoLinhaProducao: "LIN-003",
      codigoProduto: "PRD-ROT-500",
      quantidadeProduzir: 1000,
      dataHoraInicio: "2025-09-07T18:00:00.000Z"
    },
    {
      idOrdemProducao: 12,
      codigoOrdemProducao: "OP-20250908-001",
      codigoLoteProduto: "LP-TAM-20250908-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 4000,
      dataHoraInicio: "2025-09-08T11:30:00.000Z"
    },
    {
      idOrdemProducao: 13,
      codigoOrdemProducao: "OP-20250908-002",
      codigoLoteProduto: "LP-GAR-20250908-1",
      codigoLinhaProducao: "LIN-002",
      codigoProduto: "PRD-GAR-500",
      quantidadeProduzir: 500,
      dataHoraInicio: "2025-09-08T13:30:00.000Z"
    },
    {
      idOrdemProducao: 14,
      codigoOrdemProducao: "OP-20250909-001",
      codigoLoteProduto: "LP-GAR-20250909-1",
      codigoLinhaProducao: "LIN-002",
      codigoProduto: "PRD-GAR-500",
      quantidadeProduzir: 1000,
      dataHoraInicio: "2025-09-09T12:15:00.000Z"
    },
    {
      idOrdemProducao: 15,
      codigoOrdemProducao: "OP-20250909-002",
      codigoLoteProduto: "LP-ROT-20250909-1",
      codigoLinhaProducao: "LIN-003",
      codigoProduto: "PRD-ROT-500",
      quantidadeProduzir: 3000,
      dataHoraInicio: "2025-09-09T17:45:00.000Z"
    },
    {
      idOrdemProducao: 1,
      codigoOrdemProducao: "OP-20250910-001",
      codigoLoteProduto: "LP-TAM-20250910-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 10000,
      dataHoraInicio: "2025-09-10T11:30:00.000Z"
    },
    {
      idOrdemProducao: 2,
      codigoOrdemProducao: "OP-20250910-002",
      codigoLoteProduto: "LP-GAR-20250910-1",
      codigoLinhaProducao: "LIN-002",
      codigoProduto: "PRD-GAR-500",
      quantidadeProduzir: 5000,
      dataHoraInicio: "2025-09-10T12:00:00.000Z"
    },
    {
      idOrdemProducao: 3,
      codigoOrdemProducao: "OP-20250910-003",
      codigoLoteProduto: "LP-ROT-20250910-1",
      codigoLinhaProducao: "LIN-003",
      codigoProduto: "PRD-ROT-500",
      quantidadeProduzir: 8000,
      dataHoraInicio: "2025-09-10T12:30:00.000Z"
    },
    {
      idOrdemProducao: 4,
      codigoOrdemProducao: "OP-20250910-004",
      codigoLoteProduto: "LP-POT-20250910-1",
      codigoLinhaProducao: "LIN-004",
      codigoProduto: "PRD-POT-1L",
      quantidadeProduzir: 2000,
      dataHoraInicio: "2025-09-10T13:00:00.000Z"
    },
    {
      idOrdemProducao: 16,
      codigoOrdemProducao: "OP-TESTE-001",
      codigoLoteProduto: "LP-TAM-20250910-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 5,
      dataHoraInicio: "2025-09-30T03:00:00.000Z"
    },
    {
      idOrdemProducao: 17,
      codigoOrdemProducao: "OP-TESTE-010",
      codigoLoteProduto: "LP-TAM-20250910-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 10,
      dataHoraInicio: "2025-09-30T03:00:00.000Z"
    },
    {
      idOrdemProducao: 19,
      codigoOrdemProducao: "OP-TESTE-111",
      codigoLoteProduto: "LP-TAM-20250910-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 5,
      dataHoraInicio: "2025-09-24T03:00:00.000Z"
    },
    {
      idOrdemProducao: 21,
      codigoOrdemProducao: "OP-TESTE-112",
      codigoLoteProduto: "LP-TAM-20250910-1",
      codigoLinhaProducao: "LIN-001",
      codigoProduto: "PRD-TAM-28",
      quantidadeProduzir: 5,
      dataHoraInicio: "2025-09-24T03:00:00.000Z"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    console.log(form)

    const ordemSelecionada = ordens.find(
      (o) => o.idOrdemProducao === Number(form.idOrdemProducao)
    );
    console.log("Form:", form);
    console.log("Ordem selecionada:", ordemSelecionada);
    alert(
      ordemSelecionada
        ? `Selecionou ${ordemSelecionada.codigoOrdemProducao}`
        : "Nenhuma ordem selecionada"
    );

    try {
      const response = await fetch('http://localhost:4000/api/order-production', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);

      alert('Produto cadastrado com sucesso!');

      // navigate(rootPaths.homeRoot);
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar produto!');
    }
  };
  const getGoogle = async () =>{
      try {
      const response = await fetch(`http://localhost:4000/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: "" 
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

            {/* <TextField
              name="codigo"
              // value={form.codigoOrdemProducao}
              onChange={handleChange}
              variant="filled"
              label="Código Text"
              type="text"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            /> */}
            <TextField
              select
              name="idLoteProduto"
              value={form.idLoteProduto}
              onChange={handleChange}
              variant="filled"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              label="Lote Produto"
            >
              {dataProductLote.map((item: any) => (
                <MenuItem key={item.idLoteProduto} value={item.idLoteProduto}>
                  {item.codigoLoteProduto}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              name="idLinhaProducao"
              value={form.idLinhaProducao}
              onChange={handleChange}
              variant="filled"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
              label="Linha Produção"
            >
              {dataProductionLine.map((item: any) => (
                <MenuItem key={item.codigo} value={item.codigo}>
                  {item.nome}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="quantidadeProduzir"
              // value={form.quantidadeProduzir}
              onChange={handleChange}
              variant="filled"
              label="Quantidade Produzir"
              type="number"
              sx={{ fontWeight: 'fontWeightRegular', width: '30%' }}
            />

            <TextField
              name="data Inicio"
              // value={form.dataHoraInicio}
              onChange={handleChange}
              variant="filled"
              label="Data Inicio"
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
