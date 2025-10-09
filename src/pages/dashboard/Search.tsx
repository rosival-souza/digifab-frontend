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
  // MenuItem,
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
        />
        <br/>
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
