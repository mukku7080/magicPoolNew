import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
    HStack,
    Progress,
    Badge,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useColorModeValue,
    Icon,
    Flex,
    Avatar,
    Button,
    Divider,
} from '@chakra-ui/react';
import {
    FiTrendingUp,
    FiTrendingDown,
    FiDollarSign,
    FiCreditCard,
    FiActivity,
    FiUsers,
    FiArrowUpRight,
    FiArrowDownRight,
} from 'react-icons/fi';
import { AiOutlineWallet, AiOutlineBank } from 'react-icons/ai';
import ReferralButton from '../../Components/ReferralButton';
import { useUser } from '../../Context';
import axios from 'axios';
import Tickermarque from '../../Pages/Tickermarque';


const Dashboard = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400');
    const { profile } = useUser();
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [data, setData] = useState(null);

    // Sample data
    const stats = [
        {
            label: 'Total Balance',
            value: `$ ${profile?.USER.available_amount}`,
            change: '+12.5%',
            isPositive: true,
            icon: AiOutlineWallet,
            color: 'blue',
        },
        {
            label: 'Active Investments',
            value: `$ ${profile?.USER.my_stake}`,
            change: '+8.2%',
            isPositive: true,
            icon: FiTrendingUp,
            color: 'green',
        },
        {
            label: 'Total Profit',
            value: `$ ${profile?.USER.total_income}`,
            change: '+15.3%',
            isPositive: true,
            icon: FiDollarSign,
            color: 'purple',
        },
        {
            label: 'Total Withdrawals',
            value: `$ ${profile?.USER.withdraw_amount}`,
            change: '-5.1%',
            isPositive: false,
            icon: AiOutlineBank,
            color: 'orange',
        },
    ];

    const recentTransactions = [
        {
            id: 1,
            type: 'Deposit',
            amount: '+$500.00',
            status: 'Completed',
            date: '2024-01-15',
            method: 'Bank Transfer',
            isPositive: true,
        },
        {
            id: 2,
            type: 'Investment',
            amount: '-$1,000.00',
            status: 'Active',
            date: '2024-01-14',
            method: 'Gold Package',
            isPositive: false,
        },
        {
            id: 3,
            type: 'Profit',
            amount: '+$125.50',
            status: 'Completed',
            date: '2024-01-13',
            method: 'Daily Return',
            isPositive: true,
        },
        {
            id: 4,
            type: 'Withdrawal',
            amount: '-$300.00',
            status: 'Processing',
            date: '2024-01-12',
            method: 'PayPal',
            isPositive: false,
        },
    ];

    const activePackages = [

        {
            name: 'Silver Package',
            investment: '$500.00',
            dailyReturn: '1.8%',
            totalReturn: '$45.20',
            daysLeft: 15,
            progress: 80,
            status: 'Active',
        },
        {
            name: 'Gold Package',
            investment: '$1,000.00',
            dailyReturn: '2.5%',
            totalReturn: '$125.50',
            daysLeft: 28,
            progress: 65,
            status: 'Active',
        },
        {
            name: 'Diamond Package',
            investment: '$2,000.00',
            dailyReturn: '3.2%',
            totalReturn: '$320.00',
            daysLeft: 45,
            progress: 35,
            status: 'Active',
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/transactions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authToken')}`, // <-- Use your token here
                    },
                    body: JSON.stringify({
                        page: '1',
                        per_page: '20',
                    }),
                });

                const result = await response.json();
                setData(result.data);
                console.log('Transaction data', result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <Box>
            {/* Welcome Section */}
            <Box mb={8} mt={10}>
                <Flex justify="space-between" align="center" mb={2}>
                    <Box>
                        <Heading size="lg" mb={2}>
                            Welcome back, {profile?.USER.name}
                        </Heading>
                    </Box>
                    <ReferralButton
                        colorScheme="blue"
                        size="md"
                        display={{ base: 'none', md: 'flex' }}
                    >
                        Invite Friends
                    </ReferralButton>
                </Flex>
            </Box>

            {/* Stats Grid */}
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} mb={8}>
                {stats.map((stat, index) => (
                    <GridItem key={index}>
                        <Card bg={cardBg} border="1px" borderColor={borderColor}>
                            <CardBody>
                                <HStack justify="space-between" mb={4}>
                                    <Box
                                        p={3}
                                        borderRadius="lg"
                                        bg={`${stat.color}.100`}
                                        color={`${stat.color}.600`}
                                    >
                                        <Icon as={stat.icon} boxSize={6} />
                                    </Box>
                                </HStack>
                                <Stat>
                                    <StatNumber fontSize="2xl" fontWeight="bold">
                                        {stat.value}
                                    </StatNumber>
                                    <StatLabel color={textColor} fontSize="sm">
                                        {stat.label}
                                    </StatLabel>
                                </Stat>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>

            <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6} mb={8}>
                {/* Recent Transactions */}
                <GridItem>
                    <Card bg={cardBg} border="1px" borderColor={borderColor}>
                        <CardHeader>
                            <HStack justify="space-between">
                                <Heading size="md">Recent Transactions</Heading>
                                <Button size="sm" variant="ghost" colorScheme="blue">
                                    View All
                                </Button>
                            </HStack>
                        </CardHeader>
                        <CardBody pt={0}>
                            <TableContainer>
                                <Table variant="simple" size="sm">
                                    <Thead>
                                        <Tr>
                                            <Th>Title</Th>
                                            <Th>Amount</Th>
                                            <Th>Status</Th>
                                            <Th>Date</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data && data.length > 0 ? (
                                            data.map((transaction) => (
                                                <Tr key={transaction.id}>
                                                    <Td>
                                                        <VStack align="start" spacing={0}>
                                                            <Text fontSize="sm" fontWeight="medium">
                                                                {transaction.title}
                                                            </Text>
                                                        </VStack>
                                                    </Td>
                                                    <Td>
                                                        <Text
                                                            fontSize="sm"
                                                            fontWeight="semibold"
                                                            color={transaction.isPositive ? 'green.500' : 'red.500'}
                                                        >
                                                            {transaction.amount}
                                                        </Text>
                                                    </Td>
                                                    <Td>
                                                        <Badge
                                                            size="sm"
                                                            colorScheme={'green'}
                                                            variant="subtle"
                                                        >
                                                            {'success'}
                                                        </Badge>
                                                    </Td>
                                                    <Td>
                                                        <Text fontSize="sm" color={textColor}>
                                                            {transaction.date_time}
                                                        </Text>
                                                    </Td>
                                                </Tr>
                                            ))
                                        ) : (
                                            <Tr>
                                                <Td colSpan="4" textAlign="center">
                                                    No Data Found
                                                </Td>
                                            </Tr>
                                        )}
                                    </Tbody>

                                </Table>
                            </TableContainer>

                        </CardBody>
                    </Card>
                </GridItem>

                {/* Quick Actions */}
                <GridItem>
                    <Card bg={cardBg} border="1px" borderColor={borderColor} mb={6}>
                        <CardHeader>
                            <Heading size="md">Quick Actions</Heading>
                        </CardHeader>
                        <CardBody pt={0}>
                            <VStack spacing={3}>
                                <Button
                                    w="full"
                                    leftIcon={<FiArrowUpRight />}
                                    colorScheme="green"
                                    variant="outline"
                                    onClick={() => window.location.href = '/user/deposit'}
                                >
                                    Make Deposit
                                </Button>
                                <Button
                                    w="full"
                                    leftIcon={<FiArrowDownRight />}
                                    colorScheme="blue"
                                    variant="outline"
                                    onClick={() => window.location.href = '/user/Withdraw'}
                                >
                                    Request Withdrawal
                                </Button>
                                <Button
                                    w="full"
                                    leftIcon={<FiActivity />}
                                    colorScheme="purple"
                                    variant="outline"
                                    onClick={() => window.location.href = '/user/packages'}

                                >
                                    View Packages
                                </Button>
                            </VStack>
                        </CardBody>
                    </Card>

                    {/* Account Status */}
                    <Card bg={cardBg} border="1px" borderColor={borderColor}>
                        <CardHeader>
                            <Heading size="md">Account Status</Heading>
                        </CardHeader>
                        <CardBody pt={0}>
                            <VStack spacing={4} align="stretch">
                                <HStack justify="space-between">
                                    <Text fontSize="sm" color={textColor}>
                                        Verification Status
                                    </Text>
                                    <Badge colorScheme="green" variant="subtle">
                                        {profile?.USER.user_status}
                                    </Badge>
                                </HStack>
                                <HStack justify="space-between">
                                    <Text fontSize="sm" color={textColor}>
                                        Package Status
                                    </Text>
                                    <Badge colorScheme="purple" variant="subtle">
                                        {profile?.USER.stake_status}
                                    </Badge>
                                </HStack>
                                <HStack justify="space-between">
                                    <Text fontSize="sm" color={textColor}>
                                        Member Since
                                    </Text>
                                    <Text fontSize="sm" fontWeight="medium">
                                        {/* {new Date(profile.USER.created_at).toLocaleDateString()} */}
                                        {new Date(profile?.USER.created_at).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </Text>
                                </HStack>
                            </VStack>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>

            {/* Active Packages */}
            {/* <Card bg={cardBg} border="1px" borderColor={borderColor}>
                <CardHeader>
                    <Heading size="md">Active Investment Packages</Heading>
                </CardHeader>
                <CardBody pt={0}>
                    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
                        {activePackages.map((pkg, index) => (
                            <Box
                                key={index}
                                p={4}
                                border="1px"
                                borderColor={borderColor}
                                borderRadius="lg"
                                bg={useColorModeValue('gray.50', 'gray.700')}
                            >
                                <VStack align="stretch" spacing={3}>
                                    <HStack justify="space-between">
                                        <Text fontWeight="semibold">{pkg.name}</Text>
                                        <Badge colorScheme="green" variant="subtle">
                                            {pkg.status}
                                        </Badge>
                                    </HStack>

                                    <VStack align="stretch" spacing={2}>
                                        <HStack justify="space-between">
                                            <Text fontSize="sm" color={textColor}>Investment:</Text>
                                            <Text fontSize="sm" fontWeight="medium">{pkg.investment}</Text>
                                        </HStack>
                                        <HStack justify="space-between">
                                            <Text fontSize="sm" color={textColor}>Daily Return:</Text>
                                            <Text fontSize="sm" fontWeight="medium" color="green.500">
                                                {pkg.dailyReturn}
                                            </Text>
                                        </HStack>
                                        <HStack justify="space-between">
                                            <Text fontSize="sm" color={textColor}>Total Earned:</Text>
                                            <Text fontSize="sm" fontWeight="medium" color="green.500">
                                                {pkg.totalReturn}
                                            </Text>
                                        </HStack>
                                    </VStack>

                                    <Box>
                                        <HStack justify="space-between" mb={1}>
                                            <Text fontSize="sm" color={textColor}>Progress</Text>
                                            <Text fontSize="sm" color={textColor}>{pkg.daysLeft} days left</Text>
                                        </HStack>
                                        <Progress
                                            value={pkg.progress}
                                            colorScheme="blue"
                                            size="sm"
                                            borderRadius="full"
                                        />
                                    </Box>
                                </VStack>
                            </Box>
                        ))}
                    </Grid>
                </CardBody>
            </Card> */}
        </Box>
    );
};

export default Dashboard;