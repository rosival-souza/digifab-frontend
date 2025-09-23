import { LinearProgressProps } from '@mui/material';

export interface ProductItem {

  CODIGO_PRODUTO: string;
  NOME_PRODUTO: string;
  TOTAL_PLANEJADO: String;
  color: LinearProgressProps['color'];
}

export const productTableRows: ProductItem[] = [
  {
    CODIGO_PRODUTO: "---",
    NOME_PRODUTO: "TAMPA 28MM PEAD",
    TOTAL_PLANEJADO: "10000",
    color: 'warning',
  },
  {
    CODIGO_PRODUTO: "---",
    NOME_PRODUTO: "ROTULO BOPP 500ML",
    TOTAL_PLANEJADO: "8000",
    color: 'primary',
  },
  {
    CODIGO_PRODUTO: "---",
    NOME_PRODUTO: "GARRAFA PET 500ML",
    TOTAL_PLANEJADO: "5000",
    color: 'info',
  },
  {
    CODIGO_PRODUTO: "---",
    NOME_PRODUTO: "POTE PEAD 1L",
    TOTAL_PLANEJADO: "2000",
    color: 'secondary',
  }
];