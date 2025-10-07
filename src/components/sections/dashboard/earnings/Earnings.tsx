import { Box, Paper, Typography } from '@mui/material';
import EarningsChart from './EarningsChart';
import { ReactElement, useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
// import { currencyFormat } from 'helpers/format-functions';

const Earnings = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  const [data, setData] = useState<any>(0)

  const getData = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/dashboard/kpis/line-utilization-simple-average',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log('response', data.dados);
      setData(data.dados)

    } catch (error) {
      console.error(error);
      alert('error');
    }
  };
  useEffect(()=>{
    getData()
  },[])
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const echartsInstance = chartRef.current.getEchartsInstance();
        echartsInstance.resize({ width: 'auto', height: 'auto' });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={2.5}>
        Utilização de média Ponderada
      </Typography>
      {/* <Typography variant="body1" color="text.primary" mb={4.5}>
        Total Expense
      </Typography> */}
      <Typography
        variant="h1"
        color="primary.main"
        mb={4.5}
        fontSize={{ xs: 'h2.fontSize', sm: 'h1.fontSize' }}
      >
        {data}
      </Typography>
      {/* <Typography variant="body1" color="text.primary" mb={15}>
        Profit is 48% More than last Month
      </Typography> */}
      <Box
        flex={1}
        sx={{
          position: 'relative',
        }}
      >
        <EarningsChart
          chartRef={chartRef}
          value={data}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            maxHeight: 152,
          }}
        />
        <Typography
          variant="h1"
          color="common.white"
          textAlign="center"
          mx="auto"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
        >
          {data}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Earnings;
