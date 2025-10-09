import {
  Box,
  // Link,
  Paper,
  // Stack,
  Button,
  // Divider,
  TextField,
  // IconButton,
  // Typography,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';
// import OrderProduction from 'components/sections/dashboard/top-products/orderProduction';

const App = (): ReactElement => {

  // const [isEnable, setIsEnable] = useState(false)

  return (
    <Paper sx={{ py: 6, px: { xs: 5, sm: 7.5 } }}>
      <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>

        <TextField
          select
          fullWidth
          name="codigo"
          // value={form.codigoOrdemProducao}
          onChange={(e) => alert(e.target.value)}
          variant="filled"
          label="Lote Produto:"
        >
          {/* {ordens.map((ordem) => (
                <MenuItem key={ordem.idOrdemProducao} value={ordem.idOrdemProducao}>
                  {ordem.codigoOrdemProducao}
                </MenuItem>
              ))} */}
          <MenuItem value="Item 1">Item 1</MenuItem>
          <MenuItem value="Item 2">Item 2</MenuItem>
          <MenuItem value="Item 3">Item 3</MenuItem>
          <MenuItem value="Item 4">Item 4</MenuItem>
        </TextField>

        {/* <TextField
          variant="filled"
          fullWidth
          placeholder="Search here..."
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="akar-icons:search" width={13} height={13} />
              </InputAdornment>
            ),
          }}
        /> */}
        <br />
        <br />
        <Button
          onClick={() => alert('Search...')}
          sx={{ fontWeight: 'fontWeightRegular' }}
        >
          Buscar
        </Button>
      </Box>
    </Paper>
  );
};

export default App;
