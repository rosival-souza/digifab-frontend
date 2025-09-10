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
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
// import Image from 'components/base/Image';
// import logoWithText from 'assets/images/logo/digifab.png';

const SignUp = (): ReactElement => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = () => {
    navigate(rootPaths.homeRoot);
  };

  // const handleShowPassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };
  // const handleShowConfirmPassword = () => {
  //   setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  // };

  return (
    <>

      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
        }}
      >
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            Registro de Produto
          </Typography>
          <TextField
            variant="filled"
            label="Nome"
            type="text"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Tipo"
            type="text"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Quantidade"
            type="text"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Valor"
            type="text"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />
          <TextField
            variant="filled"
            label="Email"
            type="text"
            sx={{
              '.MuiFilledInput-root': {
                bgcolor: 'grey.A100',
                ':hover': {
                  bgcolor: 'background.default',
                },
                ':focus': {
                  bgcolor: 'background.default',
                },
                ':focus-within': {
                  bgcolor: 'background.default',
                },
              },
              borderRadius: 2,
            }}
          />

          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
            }}
          >
            Cadastrar
          </Button>
          <Divider />
        </Stack>
      </Paper>
    </>
  );
};

export default SignUp;
