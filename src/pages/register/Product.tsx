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
  // InputAdornment,
} from '@mui/material';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement } from 'react';

const App = (): ReactElement => {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    codigo: "OP-TESTE-010",
    idLoteProduto: 1,
    idLinhaProducao: 1,
    idResponsavel: 4,
    quantidadeProduzir: 5,
    dataHoraInicio: "2025-09-24"
  });

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

        <TextField
          name="codigo"
          value={form.codigo}
          onChange={handleChange}
          variant="filled"
          label="Código"
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
