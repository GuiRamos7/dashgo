import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header, Sidebar } from 'components';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-14T00:00:00.000Z',
      '2022-04-15T00:00:00.000Z',
      '2022-04-16T00:00:00.000Z',
      '2022-04-17T00:00:00.000Z',
      '2022-04-18T00:00:00.000Z',
      '2022-04-19T00:00:00.000Z',
      '2022-04-20T00:00:00.000Z',
      '2022-04-21T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.6,
      opacityTo: 1,
    },
  },
};

const series = [
  { name: 'series1', data: [30, 120, 45, 170, 100, 200, 232, 198] },
];

const Dashboard = () => {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
        >
          <Box p={['6', '8']} pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Subscribes of the week
            </Text>
            <Chart series={series} options={options} type='area' height={160} />
          </Box>
          <Box p={['6', '8']} pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Open rate
            </Text>
            <Chart series={series} options={options} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
