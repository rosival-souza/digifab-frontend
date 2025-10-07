import {
  // Box,
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
import { useState, ReactElement } from 'react';

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
  const getHealths = async () => {

    try {
      const response = await fetch('http://localhost:4000/api/healths', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('response', data);

      alert('Conectado com digifab-backend!!');
      console.log('form->', form);
      // navigate(rootPaths.homeRoot);
    } catch (error) {
      console.error(error);
      alert('error');
    }
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

  return (
    <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
      <Stack justifyContent="center" gap={5}>
        <Typography variant="h3" textAlign="center" color="text.secondary">
          Registro de Ordens de Produção
        </Typography>

        {/* Combo de Lote Produto */}
        <TextField
        
          select
          name="codigo"
          value={form.codigoOrdemProducao}
          onChange={handleChange}
          variant="filled"
          label="Código Combo"
        >
          {ordens.map((ordem) => (
            <MenuItem key={ordem.idOrdemProducao} value={ordem.idOrdemProducao}>
              {ordem.codigoOrdemProducao}
            </MenuItem>
          ))}
        </TextField>
        {/* Combo de Linha Produção */}

        <TextField
          name="codigo"
          value={form.codigoOrdemProducao}
          onChange={handleChange}
          variant="filled"
          label="Código Text"
          type="text"
        />
        <TextField
          name="idLoteProduto"
          value={form.idLoteProduto}
          onChange={handleChange}
          variant="filled"
          label="ID Lote Produto"
          type="number"
        />
        <TextField
          name="idLinhaProducao"
          value={form.idLinhaProducao}
          onChange={handleChange}
          variant="filled"
          label="ID Linha Produção"
          type="number"
        />
        <TextField
          name="idResponsavel"
          value={form.idResponsavel}
          onChange={handleChange}
          variant="filled"
          label="ID Responsável"
          type="number"
        />
        <TextField
          name="quantidadeProduzir"
          value={form.quantidadeProduzir}
          onChange={handleChange}
          variant="filled"
          label="Quantidade Produzir"
          type="number"
        />

        <TextField
          name="data Inicio"
          value={form.dataHoraInicio}
          onChange={handleChange}
          variant="filled"
          label="Data Inicio"
          type="date"
        />

        <Button
          onClick={handleSubmit}
          sx={{ fontWeight: 'fontWeightRegular' }}
        >
          Cadastrar
        </Button>
        <Divider />
      </Stack>
    </Paper>
  );
};
// return (
//   <>

//     <Paper
//       sx={{
//         py: 6,
//         px: { xs: 5, sm: 7.5 },
//       }}
//     >
//       <Stack justifyContent="center" gap={5}>
//         <Typography variant="h3" textAlign="center" color="text.secondary">
//           Registro de Produto
//         </Typography>
//         <TextField
//           variant="filled"
//           label="Nome"
//           type="text"
//           sx={{
//             '.MuiFilledInput-root': {
//               bgcolor: 'grey.A100',
//               ':hover': {
//                 bgcolor: 'background.default',
//               },
//               ':focus': {
//                 bgcolor: 'background.default',
//               },
//               ':focus-within': {
//                 bgcolor: 'background.default',
//               },
//             },
//             borderRadius: 2,
//           }}
//         />
//         <TextField
//           variant="filled"
//           label="Tipo"
//           type="text"
//           sx={{
//             '.MuiFilledInput-root': {
//               bgcolor: 'grey.A100',
//               ':hover': {
//                 bgcolor: 'background.default',
//               },
//               ':focus': {
//                 bgcolor: 'background.default',
//               },
//               ':focus-within': {
//                 bgcolor: 'background.default',
//               },
//             },
//             borderRadius: 2,
//           }}
//         />
//         <TextField
//           variant="filled"
//           label="Quantidade"
//           type="text"
//           sx={{
//             '.MuiFilledInput-root': {
//               bgcolor: 'grey.A100',
//               ':hover': {
//                 bgcolor: 'background.default',
//               },
//               ':focus': {
//                 bgcolor: 'background.default',
//               },
//               ':focus-within': {
//                 bgcolor: 'background.default',
//               },
//             },
//             borderRadius: 2,
//           }}
//         />
//         <TextField
//           variant="filled"
//           label="Valor"
//           type="text"
//           sx={{
//             '.MuiFilledInput-root': {
//               bgcolor: 'grey.A100',
//               ':hover': {
//                 bgcolor: 'background.default',
//               },
//               ':focus': {
//                 bgcolor: 'background.default',
//               },
//               ':focus-within': {
//                 bgcolor: 'background.default',
//               },
//             },
//             borderRadius: 2,
//           }}
//         />
//         <TextField
//           variant="filled"
//           label="Email"
//           type="text"
//           sx={{
//             '.MuiFilledInput-root': {
//               bgcolor: 'grey.A100',
//               ':hover': {
//                 bgcolor: 'background.default',
//               },
//               ':focus': {
//                 bgcolor: 'background.default',
//               },
//               ':focus-within': {
//                 bgcolor: 'background.default',
//               },
//             },
//             borderRadius: 2,
//           }}
//         />

//         <Button
//           onClick={handleSubmit}
//           sx={{
//             fontWeight: 'fontWeightRegular',
//           }}
//         >
//           Cadastrar
//         </Button>
//         <Divider />
//       </Stack>
//     </Paper>
//   </>
// );


export default App;
