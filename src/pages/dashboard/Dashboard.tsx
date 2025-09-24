import { ReactElement, useEffect, useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

// import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
// import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
// import Earnings from 'components/sections/dashboard/earnings/Earnings';
// import Level from 'components/sections/dashboard/level/Level';
import Image from 'components/base/Image';
import totalSales from 'assets/images/todays-sales/total-sales.png';
import totalOrder from 'assets/images/todays-sales/total-order.png';
import productSold from 'assets/images/todays-sales/product-sold.png';
import newCustomer from 'assets/images/todays-sales/new-customer.png';

export interface SaleItem {
  id?: number;
  icon?: string;
  title: string;
  subtitle: string;
  increment: number;
  color: string;
}

const salesData: SaleItem[] = [
  {
    id: 1,
    icon: totalSales,
    title: '$5k',
    subtitle: 'Total Vendas',
    increment: 10,
    color: 'warning.main',
  },
  {
    id: 3,
    icon: productSold,
    title: '9',
    subtitle: 'Produtos Vendidos',
    increment: 2,
    color: 'secondary.main',
  },
];

const Dashboard = (): ReactElement => {

  const [dataOrders, setDataOrders] = useState<any>([
    {
      id: 2,
      icon: totalOrder,
      title: '500',
      subtitle: 'Total de Ordens',
      increment: 8,
      color: 'primary.main',
    },
  ])

  const [dataUsers, setDataUsers] = useState<any>([
    {
      id: 4,
      icon: newCustomer,
      title: '12',
      subtitle: 'Usuários',
      increment: 3,
      color: 'info.main',
    },
  ])

  const getOrders = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/dashboard/kpis/orders-count',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log('response', data);

      setDataOrders((prev: any) =>
        prev.map((item: any) =>
          item.id === 2 ? { ...item, title: String(data[0].dados) } : item
        )
      );
    } catch (error) {
      console.error(error);
      alert('error');
    }
  };

   const getUsers = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/dashboard/kpis/orders-count',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log('response', data);

      setDataOrders((prev: any) =>
        prev.map((item: any) =>
          item.id === 4 ? { ...item, title: String(data[0].dados) } : item
        )
      );
    } catch (error) {
      console.error(error);
      alert('error');
    }
  };

  useEffect(() => {

    getOrders()
    getUsers()

  }, [])

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 12', '2xl': 'span 8' }} order={{ xs: 0 }}>
          {/* <TodaysSales /> */}
          <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
            <Typography variant="h4" color="common.white" mb={1.25}>
              Produtos
            </Typography>
            <Typography variant="subtitle2" color="text.disabled" mb={6}>
              Tipos
            </Typography>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 4, sm: 6 }}>
              {salesData.map((saleItem) => (
                <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
                  {/* <SaleCard saleItem={saleItem} /> */}
                  <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
                    <Image src={saleItem.icon} alt={saleItem.subtitle} width={26} height={26} />
                    <Box>
                      <Typography variant="h4" color="common.white" mb={4}>
                        {saleItem.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={2}>
                        {saleItem.subtitle}
                      </Typography>
                      <Typography variant="body2" color={saleItem.color} lineHeight={1.25}>
                        {/* +{saleItem.increment}% from yesterday */}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}

              {dataOrders.map((saleItem: any) => (
                <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
                  {/* <SaleCard saleItem={saleItem} /> */}
                  <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
                    <Image src={saleItem.icon} alt={saleItem.subtitle} width={26} height={26} />
                    <Box>
                      <Typography variant="h4" color="common.white" mb={4}>
                        {saleItem.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={2}>
                        {saleItem.subtitle}
                      </Typography>
                      <Typography variant="body2" color={saleItem.color} lineHeight={1.25}>
                        {/* +{saleItem.increment}% from yesterday */}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}

              {dataUsers.map((saleItem: any) => (
                <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
                  {/* <SaleCard saleItem={saleItem} /> */}
                  <Stack gap={6} p={5} borderRadius={4} height={1} bgcolor="background.default">
                    <Image src={saleItem.icon} alt={saleItem.subtitle} width={26} height={26} />
                    <Box>
                      <Typography variant="h4" color="common.white" mb={4}>
                        {saleItem.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" mb={2}>
                        {saleItem.subtitle}
                      </Typography>
                      <Typography variant="body2" color={saleItem.color} lineHeight={1.25}>
                        {/* +{saleItem.increment}% from yesterday */}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
        {/* <Box gridColumn={{ xs: 'span 12', lg: 'span 4' }} order={{ xs: 1, '2xl': 1 }}>
          <Level />
        </Box> */}
        <Box gridColumn={{ xs: 'span 12', lg: 'span 8' }} order={{ xs: 2, '2xl': 2 }}>
          <TopProducts />
        </Box>
        {/* <Box
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
          order={{ xs: 3, xl: 3, '2xl': 3 }}
        >
          <CustomerFulfillment />
        </Box> */}
        {/* <Box
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }}
          order={{ xs: 4, xl: 5, '2xl': 4 }}
        >
          <Earnings />
        </Box> */}
        {/* <Box gridColumn={{ xs: 'span 12', xl: 'span 8' }} order={{ xs: 5, xl: 4, '2xl': 5 }}>
          <VisitorInsights />
        </Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
