import { LinearProgressProps } from '@mui/material';

export interface ProductItem {
  id?: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
}

export const productTableRows: ProductItem[] = [
  {
    id: '01',
    name: 'TAMPA 28MM PEAD',
    color: 'warning',
    sales: 78,
  },
  {
    id: '02',
    name: 'GARRAFA PET 500ML',
    color: 'primary',
    sales: 62,
  },
  {
    id: '03',
    name: 'ROTULO BOPP 500ML',
    color: 'info',
    sales: 51,
  },
  {
    id: '04',
    name: 'POTE PEAD 1L',
    color: 'secondary',
    sales: 29,
  },
];
