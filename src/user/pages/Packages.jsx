import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Badge,
    useColorModeValue,
    Icon,
    Progress,
    Divider,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Flex,
    Image,
} from '@chakra-ui/react';
import {
    FiStar,
    FiTrendingUp,
    FiClock,
    FiDollarSign,
    FiShield,
    FiAward,
    FiTarget,
    FiCalendar,
} from 'react-icons/fi';
import { AiOutlineRocket, AiOutlineCrown, AiOutlineStar } from 'react-icons/ai';
import { useAccount, useUser } from '../../Context';
import { toast, ToastContainer } from 'react-toastify';
import { useIncome } from '../../Context/IncomeContext';

const Packages = () => {
    const {
        monthlyROIHistory,
        monthlyROIStats,
        isLoading,
        error,
        getMonthlyROIHistory,
        clearError,
        getPoolData,
        pooldata,
        totalinvestment,
        totalincome,
        pooltreedata,
        getPoolTreeData,
    } = useIncome();

    const { loadUserProfile } = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [joinLoading, setJoinLoading] = useState(false)
    // const toast = useToast();

    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400');
    const { handleJoinPackage } = useAccount();
    useEffect(() => {
        getMonthlyROIHistory();
        getPoolData();// Fetch data when the component mounts
    }, [])
    console.log("history", pooldata);

    // Available packages
    const availablePackages = [
        {
            id: 1,
            name: 'Silver Package',
            icon: AiOutlineRocket,
            imgsrc: '/assets/images/pool1.png',
            color: 'blue',
            btnType: monthlyROIHistory.filter(item => item.stake_amount == 10)?.[0]?.status === 'success' ? 'Already Joined' : 'Join Now',
            minInvestment: 10,
            // maxInvestment: 49,
            dailyReturn: 3,
            duration: new Date(monthlyROIHistory.filter(item => item.stake_amount == 10)?.[0]?.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            referelIncome: ['10', '15', '20'],
            totalReturn: 10,
            features: [
                'Daily returns',
                'Basic support',
                'Mobile app access',
                'Email notifications'
            ],
            popular: false,
            risk: 'Low',
        },
        {
            id: 2,
            name: 'Gold Package',
            icon: AiOutlineCrown,
            imgsrc: '/assets/images/pool2.png',

            color: 'yellow',
            btnType: monthlyROIHistory.filter(item => item.stake_amount == 50)?.[0]?.status === 'success' ? 'Already Joined' : 'Join Now',

            minInvestment: 50,
            // maxInvestment: 99,
            dailyReturn: 4,
            referelIncome: [10, 15, 20],
            duration: new Date(monthlyROIHistory.filter(item => item.stake_amount == 50)?.[0]?.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            totalReturn: 12,
            features: [
                'Higher daily returns',
                'Priority support',
                'Advanced analytics',
                'SMS notifications',
                'Dedicated account manager'
            ],
            popular: true,
            risk: 'Medium',
        },
        {
            id: 3,
            name: 'Diamond Package',
            icon: FiAward,
            imgsrc: '/assets/images/pool3.png',
            color: 'cyan',
            minInvestment: 100,
            btnType: monthlyROIHistory.filter(item => item.stake_amount == 100)?.[0]?.status === 'success' ? 'Already Joined' : 'Join Now',

            // maxInvestment: 1499,
            dailyReturn: 5,
            referelIncome: [10, 15, 20],
            duration: new Date(monthlyROIHistory.filter(item => item.stake_amount == 100)?.[0]?.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            totalReturn: 15,
            features: [
                'Maximum daily returns',
                'White-glove support',
                'Custom analytics',
                'All premium features',
                'Direct line to executives',
                'Exclusive events',
                'Custom investment strategies'
            ],
            popular: false,
            risk: 'High',
        },
        {
            id: 4,
            name: 'Platinum Package',
            icon: AiOutlineStar,
            imgsrc: '/assets/images/pool4.png',
            color: 'purple',
            minInvestment: 1500,
            btnType: monthlyROIHistory.filter(item => item.stake_amount == 1500)?.[0]?.status === 'success' ? 'Already Joined' : 'Join Now',

            // maxInvestment: 19999,
            dailyReturn: 10,
            referelIncome: [5, 5, 5],
            duration: new Date(monthlyROIHistory.filter(item => item.stake_amount == 1500)?.[0]?.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            totalReturn: 5,
            features: [
                'Premium daily returns',
                'VIP support',
                'Real-time analytics',
                'All notifications',
                'Personal advisor',
                'Exclusive webinars'
            ],
            popular: false,
            risk: 'Medium-High',
        },

    ];


    const handleViewTree = async (data) => {
        console.log(data);
        const dto = {
            pool: data?.name,
            pool_id: data?.details?.id,
        }
        const response = await getPoolTreeData(dto);
        console.log(response);
    }

    const handleClickJoinNow = async (amount) => {
        // console.log("clicked")
        // if (monthlyROIHistory?.[0]?.status !== 'success') {
        //     toast.warning(`Please join ${pkg.name} package first`);
        //     return;
        // }
        setJoinLoading(true);
        const dto = {
            amount: amount,
        }
        const result = await handleJoinPackage(dto)
        console.log("join", result);
        if (result.status) {
            toast.success(result?.message)
            await getMonthlyROIHistory();
            await loadUserProfile()
            setJoinLoading(false);

        }
        else {
            toast.error(result?.message)
            setJoinLoading(false);
        }
    }

    const handleInvestmentSubmit = () => {
        const amount = parseFloat(investmentAmount);

        if (!amount || amount < selectedPackage.minInvestment || amount > selectedPackage.maxInvestment) {
            toast({
                title: 'Invalid Amount',
                description: `Investment amount must be between $${selectedPackage.minInvestment} and $${selectedPackage.maxInvestment}`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        toast({
            title: 'Investment Successful!',
            description: `You have successfully invested $${amount} in ${selectedPackage.name}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

        setInvestmentAmount('');
        onClose();
    };

    const getRiskColor = (risk) => {
        switch (risk) {
            case 'Low': return 'green';
            case 'Medium': return 'yellow';
            case 'Medium-High': return 'orange';
            case 'High': return 'red';
            default: return 'gray';
        }
    };

    return (
        <>

            <ToastContainer />

            <Box>

                <Heading size="lg" mb={6}>
                    Investment Packages
                </Heading>

                <Tabs variant="enclosed" colorScheme="blue">
                    <TabList>
                        <Tab>Available Packages</Tab>
                        <Tab>Pool History</Tab>
                        <Tab>Investment History</Tab>
                    </TabList>

                    <TabPanels>
                        {/* Available Packages Tab */}
                        <TabPanel p={0} pt={6}>


                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
                                {availablePackages.map((pkg) => (
                                    <GridItem key={pkg.id}>
                                        <Card
                                            bg={cardBg}
                                            border="2px"
                                            borderColor={pkg.popular ? `${pkg.color}.300` : borderColor}
                                            position="relative"
                                            _hover={{
                                                transform: 'translateY(-4px)',
                                                shadow: 'xl',
                                            }}
                                            transition="all 0.3s"
                                        >
                                            {pkg.popular && (
                                                <Badge
                                                    position="absolute"
                                                    top="-10px"
                                                    left="50%"
                                                    transform="translateX(-50%)"
                                                    colorScheme={pkg.color}
                                                    px={3}
                                                    py={1}
                                                    borderRadius="full"
                                                    fontSize="xs"
                                                    fontWeight="bold"
                                                >
                                                    MOST POPULAR
                                                </Badge>
                                            )}

                                            <CardHeader textAlign="center" pb={4}>
                                                <VStack spacing={3}>
                                                    <Box
                                                        p={4}
                                                        borderRadius="full"
                                                        bg={`${pkg.color}.100`}
                                                        color={`${pkg.color}.600`}
                                                    >
                                                        <Image src={pkg.imgsrc} boxSize={10} />
                                                    </Box>
                                                    <VStack spacing={1}>
                                                        <Heading color={'gray.500'} size="md">{pkg.name}</Heading>
                                                        {/* <Badge
                                                        colorScheme={getRiskColor(pkg.risk)}
                                                        variant="subtle"
                                                    >
                                                        {pkg.risk} Risk
                                                    </Badge> */}
                                                    </VStack>
                                                </VStack>
                                            </CardHeader>

                                            <CardBody pt={0}>
                                                <VStack spacing={4} align="stretch">
                                                    {/* Key Stats */}
                                                    <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={4}>
                                                        <Box textAlign="center" p={3} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
                                                            <Box fontSize="2xl" fontWeight="bold" color={`${pkg.color}.500`}>
                                                                {pkg.dailyReturn}%
                                                            </Box>
                                                            <Text fontSize="sm" color={textColor}>
                                                                Monthly Return
                                                            </Text>
                                                        </Box>
                                                        <Box textAlign="center" p={3} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
                                                            <Box fontSize="2xl" fontWeight="bold" color="green.500">
                                                                {pkg.totalReturn}%
                                                            </Box>
                                                            <Text fontSize="sm" color={textColor} fontWeight={600}>
                                                                3 Level AutoPool Income
                                                            </Text>
                                                        </Box>
                                                        <Box textAlign="center" p={3} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
                                                            <Flex justify={'center'}>
                                                                {
                                                                    pkg.referelIncome.map((income, index) => (
                                                                        <Box textAlign={'center'} fontSize="xl" fontWeight="bold" color="green.500" key={index}>
                                                                            {income}%
                                                                        </Box>
                                                                    ))
                                                                }
                                                            </Flex>
                                                            <Text fontSize="sm" color={textColor} fontWeight={600}>
                                                                3 Level Referral Income
                                                            </Text>
                                                        </Box>
                                                    </Grid>

                                                    {/* Investment Range */}
                                                    <Flex justifyContent={'space-between'} direction={'column'}>
                                                        <HStack justify="space-between" mb={2}>
                                                            <Text fontSize="sm" fontWeight="medium">
                                                                Package Amount
                                                            </Text>

                                                            <Text fontSize="lg" fontWeight="bold">
                                                                ${pkg.minInvestment.toLocaleString()}
                                                            </Text>
                                                        </HStack>
                                                        <HStack justifyContent={'space-between'}>
                                                            <Box color={textColor} alignSelf={'end'} fontSize="sm" fontWeight="medium">Join Date</Box>
                                                            <HStack>

                                                                <Icon as={FiClock} boxSize={4} color={textColor} />
                                                                <Box color={textColor} fontSize="md" fontWeight="bold">
                                                                    {pkg.duration}
                                                                </Box>
                                                            </HStack>
                                                        </HStack>
                                                    </Flex>


                                                    <Divider />

                                                    {/* Features */}
                                                    {/* <Box>
                                                    <Text fontSize="sm" fontWeight="medium" mb={3}>
                                                        Package Features
                                                    </Text>
                                                    <VStack spacing={2} align="stretch">
                                                        {pkg.features.map((feature, index) => (
                                                            <HStack key={index} spacing={3} mb={1}>
                                                                <Icon as={FiTarget} color="green.500" boxSize={4} />
                                                                <Box color={'gray.500'} fontSize="sm">{feature}</Box>
                                                            </HStack>
                                                        ))}
                                                    </VStack>
                                                </Box> */}

                                                    <Button
                                                        isLoading={isLoading}
                                                        colorScheme={pkg.color}
                                                        size="lg"
                                                        onClick={() => handleClickJoinNow(pkg.minInvestment)}
                                                        // leftIcon={<FiDollarSign />}
                                                        isDisabled={pkg.btnType === "Already Joined"}
                                                    >
                                                        {pkg?.btnType}
                                                    </Button>
                                                </VStack>
                                            </CardBody>
                                        </Card>
                                    </GridItem>
                                ))}
                            </Grid>
                        </TabPanel>

                        {/* Pool History Tab */}
                        <TabPanel p={0} pt={6}>
                            {/* Summary Cards */}
                            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }} mb={8}>
                                <Card
                                    bg={cardBg}
                                    border="2px"
                                    borderColor="blue.200"
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        shadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                >
                                    <CardBody>
                                        <HStack spacing={4}>
                                            <Box
                                                p={3}
                                                borderRadius="full"
                                                bg="blue.100"
                                                color="blue.600"
                                            >
                                                <Icon as={FiDollarSign} boxSize={6} />
                                            </Box>
                                            <Stat>
                                                <StatLabel fontSize="sm" color={textColor}>Total Invested</StatLabel>
                                                <StatNumber color="blue.500" fontSize={{ base: "lg", md: "xl" }}>${totalinvestment}</StatNumber>
                                                <StatHelpText>Active Pools</StatHelpText>
                                            </Stat>
                                        </HStack>
                                    </CardBody>
                                </Card>

                                <Card
                                    bg={cardBg}
                                    border="2px"
                                    borderColor="green.200"
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        shadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                >
                                    <CardBody>
                                        <HStack spacing={4}>
                                            <Box
                                                p={3}
                                                borderRadius="full"
                                                bg="green.100"
                                                color="green.600"
                                            >
                                                <Icon as={FiTrendingUp} boxSize={6} />
                                            </Box>
                                            <Stat>
                                                <StatLabel fontSize="sm" color={textColor}>Total Earned</StatLabel>
                                                <StatNumber color="green.500" fontSize={{ base: "lg", md: "xl" }}>${totalincome}</StatNumber>
                                                <StatHelpText>All Time</StatHelpText>
                                            </Stat>
                                        </HStack>
                                    </CardBody>
                                </Card>

                                <Card
                                    bg={cardBg}
                                    border="2px"
                                    borderColor="purple.200"
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        shadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                >
                                    <CardBody>
                                        <HStack spacing={4}>
                                            <Box
                                                p={3}
                                                borderRadius="full"
                                                bg="purple.100"
                                                color="purple.600"
                                            >
                                                <Icon as={FiTarget} boxSize={6} />
                                            </Box>
                                            <Stat>
                                                <StatLabel fontSize="sm" color={textColor}>Active Pools</StatLabel>
                                                <StatNumber color="purple.500" fontSize={{ base: "lg", md: "xl" }}>{pooldata.filter(p => p.detail !== null).length}</StatNumber>
                                                <StatHelpText>Running</StatHelpText>
                                            </Stat>
                                        </HStack>
                                    </CardBody>
                                </Card>
                            </Grid>

                            {/* Pool Cards */}
                            <Box>
                                <Heading size="md" mb={6} color={textColor}>
                                    <HStack spacing={2}>
                                        <Icon as={FiShield} color="blue.500" />
                                        <Text>Your Pool History</Text>
                                    </HStack>
                                </Heading>

                                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap={{ base: 4, md: 6 }}>
                                    {pooldata.map((investment, index) => {
                                        // Function to get package color based on name
                                        const getPackageColor = (name) => {
                                            const packageName = name?.toLowerCase() || '';
                                            if (packageName.includes('basic') || packageName.includes('starter')) return 'blue';
                                            if (packageName.includes('silver')) return 'gray';
                                            if (packageName.includes('gold')) return 'yellow';
                                            if (packageName.includes('platinum')) return 'purple';
                                            if (packageName.includes('diamond')) return 'cyan';
                                            if (packageName.includes('premium')) return 'teal';
                                            return 'blue'; // default
                                        };

                                        // Function to get pool image based on index or ID
                                        const getPoolImage = (index, id) => {
                                            const poolImages = [
                                                '/assets/images/pool1.png',
                                                '/assets/images/pool2.png',
                                                '/assets/images/pool3.png',
                                                '/assets/images/pool4.png'
                                            ];
                                            return poolImages[index % poolImages.length];
                                        };

                                        const packageColor = getPackageColor(investment?.name);
                                        const poolImage = getPoolImage(index, investment?.details?.id);

                                        return (
                                            investment.details !== null && (
                                                <Card
                                                    key={investment?.details?.id}
                                                    bg={cardBg}
                                                    border="2px"
                                                    borderColor={`${packageColor}.200`}
                                                    _hover={{
                                                        transform: 'translateY(-4px)',
                                                        shadow: 'xl',
                                                        borderColor: `${packageColor}.400`,
                                                    }}
                                                    transition="all 0.3s"
                                                    overflow="hidden"
                                                >
                                                    {/* Header with package-specific color */}
                                                    <Box
                                                        bg={`${packageColor}.500`}
                                                        p={4}
                                                        color="white"
                                                        position="relative"
                                                    >
                                                        <HStack justify="space-between" mb={2}>
                                                            <HStack spacing={3}>
                                                                <Box
                                                                    borderRadius="full"
                                                                    overflow="hidden"
                                                                    bg="white"
                                                                    p={1}
                                                                    border="2px"
                                                                    borderColor="white"
                                                                >
                                                                    <Image
                                                                        src={poolImage}
                                                                        alt={`Pool ${index + 1}`}
                                                                        boxSize={8}
                                                                        objectFit="cover"
                                                                        borderRadius="full"
                                                                    />
                                                                </Box>
                                                                <Heading size="sm">{investment?.name || 'Pool'}</Heading>
                                                            </HStack>
                                                            <Badge colorScheme="green" variant="solid" fontSize="xs">
                                                                {investment?.details?.status}
                                                            </Badge>
                                                        </HStack>
                                                        <Text fontSize="xs" opacity={0.9}>
                                                            Pool ID: #{investment?.details?.id}
                                                        </Text>
                                                    </Box>

                                                    <CardBody>
                                                        <VStack spacing={4} align="stretch">
                                                            {/* Team Statistics */}
                                                            <Box>
                                                                <HStack justify="space-between" mb={3}>
                                                                    <Text fontSize="sm" fontWeight="bold" color={textColor}>
                                                                        Team Overview
                                                                    </Text>
                                                                    <Badge colorScheme="blue" variant="subtle">
                                                                        {investment?.details?.team_count} Total
                                                                    </Badge>
                                                                </HStack>

                                                                <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                                                                    <Box
                                                                        p={3}
                                                                        bg={useColorModeValue('gray.50', 'gray.700')}
                                                                        borderRadius="lg"
                                                                        textAlign="center"
                                                                    >
                                                                        <HStack justify="center" spacing={2}>
                                                                            <Icon as={FiTrendingUp} color="green.500" boxSize={4} />
                                                                            <Text fontSize="xs" color={textColor}>Left</Text>
                                                                        </HStack>
                                                                        <Text fontSize="lg" fontWeight="bold" color="green.500">
                                                                            {investment?.details?.left_count}
                                                                        </Text>
                                                                    </Box>

                                                                    <Box
                                                                        p={3}
                                                                        bg={useColorModeValue('gray.50', 'gray.700')}
                                                                        borderRadius="lg"
                                                                        textAlign="center"
                                                                    >
                                                                        <HStack justify="center" spacing={2}>
                                                                            <Icon as={FiTrendingUp} color="blue.500" boxSize={4} />
                                                                            <Text fontSize="xs" color={textColor}>Right</Text>
                                                                        </HStack>
                                                                        <Text fontSize="lg" fontWeight="bold" color="blue.500">
                                                                            {investment?.details?.right_count}
                                                                        </Text>
                                                                    </Box>
                                                                </Grid>
                                                            </Box>

                                                            <Divider />

                                                            {/* Income Section */}
                                                            <Box>
                                                                <HStack justify="space-between" align="center">
                                                                    <VStack align="start" spacing={1}>
                                                                        <Text fontSize="sm" color={textColor}>Total Income</Text>
                                                                        <Text fontSize="xl" fontWeight="bold" color="green.500">
                                                                            ${investment?.details?.income}
                                                                        </Text>
                                                                    </VStack>
                                                                    <Box
                                                                        p={3}
                                                                        borderRadius="full"
                                                                        bg="green.100"
                                                                        color="green.600"
                                                                    >
                                                                        <Icon as={FiDollarSign} boxSize={6} />
                                                                    </Box>
                                                                </HStack>
                                                            </Box>

                                                            {/* Progress Bar */}
                                                            <Box>
                                                                <HStack justify="space-between" mb={2}>
                                                                    <Text fontSize="sm" color={textColor}>Pool Progress</Text>
                                                                    <Text fontSize="sm" color={textColor}>
                                                                        {Math.round((investment?.details?.team_count / 100) * 100)}%
                                                                    </Text>
                                                                </HStack>
                                                                <Progress
                                                                    value={Math.round((investment?.details?.team_count / 100) * 100)}
                                                                    colorScheme="blue"
                                                                    size="md"
                                                                    borderRadius="full"
                                                                    bg={useColorModeValue('gray.200', 'gray.600')}
                                                                />
                                                            </Box>

                                                            {/* Action Button */}
                                                            <Button
                                                                size="sm"
                                                                colorScheme="blue"
                                                                variant="outline"
                                                                leftIcon={<Icon as={FiCalendar} />}
                                                                onClick={() => handleViewTree(investment)}
                                                                w="full"
                                                            >
                                                                View Tree
                                                            </Button>
                                                        </VStack>
                                                    </CardBody>
                                                </Card>
                                            )
                                        )
                                    })}

                                    {/* Empty State */}
                                    {pooldata.filter(p => p.detail !== null).length === 0 && (
                                        <Box
                                            gridColumn="1 / -1"
                                            textAlign="center"
                                            py={12}
                                            px={6}
                                        >
                                            <Icon as={FiShield} boxSize={16} color="gray.400" mb={4} />
                                            <Heading size="md" color="gray.500" mb={2}>
                                                No Pool History Found
                                            </Heading>
                                            <Text color="gray.400" mb={6}>
                                                You haven't joined any pools yet. Start by joining a package to see your pool history here.
                                            </Text>
                                            <Button
                                                colorScheme="blue"
                                                size="lg"
                                                leftIcon={<Icon as={FiTarget} />}
                                            >
                                                Explore Packages
                                            </Button>
                                        </Box>
                                    )}
                                </Grid>
                            </Box>
                        </TabPanel>

                        {/* Investment History Tab */}
                        <TabPanel p={0} pt={6}>
                            <Card bg={cardBg} border="1px" borderColor={borderColor}>
                                <CardHeader>
                                    <Heading size="md">Investment History</Heading>
                                </CardHeader>
                                <CardBody pt={0}>
                                    <TableContainer>
                                        <Table variant="simple">
                                            <Thead>
                                                <Tr>
                                                    <Th>Package</Th>
                                                    <Th>Investment</Th>
                                                    <Th>Duration</Th>
                                                    <Th>Total Return</Th>
                                                    <Th>Status</Th>
                                                    <Th>Date</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>Gold Package</Td>
                                                    <Td>$1,000</Td>
                                                    <Td>45 days</Td>
                                                    <Td color="green.500">$125.50</Td>
                                                    <Td>
                                                        <Badge colorScheme="green" variant="subtle">
                                                            Active
                                                        </Badge>
                                                    </Td>
                                                    <Td>2024-01-01</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>Silver Package</Td>
                                                    <Td>$500</Td>
                                                    <Td>30 days</Td>
                                                    <Td color="green.500">$45.20</Td>
                                                    <Td>
                                                        <Badge colorScheme="green" variant="subtle">
                                                            Active
                                                        </Badge>
                                                    </Td>
                                                    <Td>2023-12-15</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>Starter Package</Td>
                                                    <Td>$200</Td>
                                                    <Td>30 days</Td>
                                                    <Td color="green.500">$29.00</Td>
                                                    <Td>
                                                        <Badge colorScheme="gray" variant="subtle">
                                                            Completed
                                                        </Badge>
                                                    </Td>
                                                    <Td>2023-11-01</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </CardBody>
                            </Card>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                {/* Investment Modal */}
                <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            Invest in {selectedPackage?.name}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {selectedPackage && (
                                <VStack spacing={6} align="stretch">
                                    {/* Package Summary */}
                                    <Box p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
                                        <Grid templateColumns="repeat(3, 1fr)" gap={4} textAlign="center">
                                            <Box>
                                                <Text fontSize="lg" fontWeight="bold" color={`${selectedPackage.color}.500`}>
                                                    {selectedPackage.dailyReturn}%
                                                </Text>
                                                <Text fontSize="sm" color={textColor}>Daily Return</Text>
                                            </Box>
                                            <Box>
                                                <Text fontSize="lg" fontWeight="bold" color="green.500">
                                                    {selectedPackage.totalReturn}%
                                                </Text>
                                                <Text fontSize="sm" color={textColor}>Total Return</Text>
                                            </Box>
                                            <Box>
                                                <Text fontSize="lg" fontWeight="bold">
                                                    {selectedPackage.duration}
                                                </Text>
                                                <Text fontSize="sm" color={textColor}>Days</Text>
                                            </Box>
                                        </Grid>
                                    </Box>

                                    <FormControl>
                                        <FormLabel>Investment Amount</FormLabel>
                                        <Input
                                            type="number"
                                            placeholder={`Min: $${selectedPackage.minInvestment} - Max: $${selectedPackage.maxInvestment}`}
                                            value={investmentAmount}
                                            onChange={(e) => setInvestmentAmount(e.target.value)}
                                        />
                                        <Text fontSize="sm" color={textColor} mt={1}>
                                            Investment range: ${selectedPackage?.minInvestment?.toLocaleString()} - ${selectedPackage?.maxInvestment?.toLocaleString()}
                                        </Text>
                                    </FormControl>

                                    {investmentAmount && (
                                        <Box p={4} bg={useColorModeValue('blue.50', 'blue.900')} borderRadius="lg">
                                            <Text fontSize="sm" fontWeight="medium" mb={2}>Investment Summary:</Text>
                                            <VStack spacing={1} align="stretch" fontSize="sm">
                                                <HStack justify="space-between">
                                                    <Text>Investment Amount:</Text>
                                                    <Text fontWeight="bold">${parseFloat(investmentAmount || 0).toLocaleString()}</Text>
                                                </HStack>
                                                <HStack justify="space-between">
                                                    <Text>Daily Return ({selectedPackage.dailyReturn}%):</Text>
                                                    <Text fontWeight="bold" color="green.500">
                                                        ${((parseFloat(investmentAmount || 0) * selectedPackage.dailyReturn) / 100).toFixed(2)}
                                                    </Text>
                                                </HStack>
                                                <HStack justify="space-between">
                                                    <Text>Total Expected Return:</Text>
                                                    <Text fontWeight="bold" color="green.500">
                                                        ${((parseFloat(investmentAmount || 0) * selectedPackage.totalReturn) / 100).toFixed(2)}
                                                    </Text>
                                                </HStack>
                                            </VStack>
                                        </Box>
                                    )}

                                    <Alert status="warning" borderRadius="lg">
                                        <AlertIcon />
                                        <AlertDescription fontSize="sm">
                                            Please ensure you understand the risks involved. All investments carry the risk of loss.
                                        </AlertDescription>
                                    </Alert>
                                </VStack>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="blue"
                                onClick={handleInvestmentSubmit}
                                isDisabled={!investmentAmount}
                            >
                                Confirm Investment
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
};

export default Packages;