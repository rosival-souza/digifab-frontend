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
    nome: '',
    tipo: '',
    quantidade: '',
    valor: '',
    email: '',
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
    try {
      const response = await fetch('http://localhost:4000/api/healths', {
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
          Registro de Produto
        </Typography>

        <TextField
          name="nome"
          value={form.nome}
          onChange={handleChange}
          variant="filled"
          label="Nome"
          type="text"
        />
        <TextField
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          variant="filled"
          label="Tipo"
          type="text"
        />
        <TextField
          name="quantidade"
          value={form.quantidade}
          onChange={handleChange}
          variant="filled"
          label="Quantidade"
          type="number"
        />
        <TextField
          name="valor"
          value={form.valor}
          onChange={handleChange}
          variant="filled"
          label="Valor"
          type="number"
        />
        <TextField
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="filled"
          label="E-Mail"
          type="email"
        />

        <Button
          onClick={getHealths}
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
