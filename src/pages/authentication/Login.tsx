import {
  Box,
  Link,
  Paper,
  Stack,
  Button,
  Divider,
  Checkbox,
  FormGroup,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState, ReactElement, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import Image from 'components/base/Image';
import logoWithText from 'assets/images/logo/digifab.png';
import { useAuth } from "../../contexts/AuthContext";

// Google Login
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// Google Login

const Login = (): ReactElement => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputLogin, setInputLogin] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');
  const { login, logout } = useAuth();

  const handleSubmit = () => {

    console.log('inputlogin ->', inputLogin)

    if (inputLogin === 'login@digifab.com' && inputPassword === '12345') {
      login("login@digifab.com", "12345");
    } else {
      alert('email ou senha incorretos!! (email: login@digifab.com, senha: 12345)')
    }

  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {

    logout()

  }, [])

  return (
    <>
      <Box component="figure" mb={5} mx="auto" textAlign="center">
        <Link href={rootPaths.homeRoot}>
          <Image src={logoWithText} alt="logo with text" height={100} />
        </Link>
      </Box>
      <Paper
        sx={{
          py: 6,
          px: { xs: 5, sm: 7.5 },
        }}
      >
        <Stack justifyContent="center" gap={5}>
          <Typography variant="h3" textAlign="center" color="text.secondary">
            Login
          </Typography>
          <Typography variant="h6" fontWeight={500} textAlign="center" color="text.primary">
            Não tem uma conta?{' '}
            <Link href="/authentication/sign-up" underline="none">
              Sign up
            </Link>
          </Typography>
          <TextField
            variant="filled"
            label="E-Mail"
            type="email"
            onChange={(e) => setInputLogin(e.target.value)}
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
            label="Senha"
            onChange={(e) => setInputPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    size="small"
                    edge="end"
                    sx={{
                      mr: 2,
                    }}
                  >
                    {showPassword ? (
                      <IconifyIcon icon="el:eye-open" color="text.secondary" />
                    ) : (
                      <IconifyIcon icon="el:eye-close" color="text.primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormGroup sx={{ ml: 1, width: 'fit-content' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Manter logado"
              sx={{
                color: 'text.secondary',
              }}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            sx={{
              fontWeight: 'fontWeightRegular',
            }}
          >
            Logar
          </Button>
          <Divider />
          <Typography textAlign="center" color="text.secondary" variant="body1">
            ou logar usando:
          </Typography>

          <Stack gap={1.5} direction="row" justifyContent="space-between">
            <Box sx={{ width: "100%"}}>
              <GoogleLogin
                theme="filled_black"   // opções: outline | filled_blue | filled_black
                size="large"           // opções: large | medium | small
                shape="rectangular"    // rectangular | pill | circle | square
                width="100%"           // <-- deixa ele ocupar todo o espaço

                onSuccess={(credentialResponse) => {
                  if (credentialResponse.credential) {
                    const userData: any = jwtDecode(credentialResponse.credential);
                    console.log("Google user ->", userData);
                    login(userData.email, credentialResponse.credential);
                  }
                }}
                onError={() => {
                  console.log("Erro no login com Google");
                }}
              />
            </Box>
          </Stack>


          {/* <Stack gap={1.5} direction="row" justifyContent="space-between">
            <Button
              startIcon={<IconifyIcon icon="flat-color-icons:google" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              Google
            </Button>
            <Button
              startIcon={<IconifyIcon icon="logos:facebook" />}
              variant="outlined"
              fullWidth
              sx={{
                fontSize: 'subtitle2.fontSize',
                fontWeight: 'fontWeightRegular',
              }}
            >
              Facebook
            </Button>
          </Stack> */}

        </Stack>
      </Paper>
    </>
  );
};

export default Login;
