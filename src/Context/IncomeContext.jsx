import React, { createContext, useContext, useState, useEffect } from 'react';
import { incomeService } from '../Services/incomeService';

const IncomeContext = createContext();

export const useIncome = () => {
    const context = useContext(IncomeContext);
    if (!context) {
        throw new Error('useIncome must be used within an IncomeProvider');
    }
    return context;
};

export const IncomeProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Direct Income State
    const [directIncomeHistory, setDirectIncomeHistory] = useState([]);
    const [directIncomeStats, setDirectIncomeStats] = useState({
        totalIncome: 0,
        todayIncome: 0,
        thisMonthIncome: 0
    });

    // Level Income State
    const [levelIncomeHistory, setLevelIncomeHistory] = useState([]);
    const [levelIncomeStats, setLevelIncomeStats] = useState({
        todayIncome: 0,
        totalIncome: 0
    });

    // Monthly ROI State
    const [monthlyROIHistory, setMonthlyROIHistory] = useState([]);
    const [monthlyROIStats, setMonthlyROIStats] = useState({
        totalAmount: 0,
        totalReturn: 0,
        todayCredit: 0,
        totalCredit: 0
    });
    const [pooldata, setPoolData] = useState([]);
    const [totalinvestment, setTotalInvestment] = useState();
    const [totalincome, setTotalIncome] = useState();


    const [pooltreedata, setPoolTreeData] = useState([]);



    // Get Direct Income History
    const getDirectIncomeHistory = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await incomeService.getDepositBonus();
            console.log("Response", response);

            if (response.success) {
                setDirectIncomeHistory(response.data || []);
                // Calculate stats from the data
                const total = response.data?.reduce((sum, item) => sum + (item.amount || 0), 0) || 0;
                const today = new Date().toDateString();
                const todayIncome = response.data?.filter(item =>
                    new Date(item.created_at).toDateString() === today
                ).reduce((sum, item) => sum + (item.amount || 0), 0) || 0;

                setDirectIncomeStats({
                    totalIncome: total,
                    todayIncome: todayIncome,
                    thisMonthIncome: total // You can calculate monthly income based on your needs
                });
            }
        } catch (err) {
            setError(err.message || 'Failed to fetch direct income history');
        } finally {
            setIsLoading(false);
        }
    };

    // Get Level Income History
    const getLevelIncomeHistory = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await incomeService.getLevelIncome();
            if (response.success) {
                setLevelIncomeHistory(response.data || []);
                // Calculate stats from the data
                const total = response.data?.reduce((sum, item) => sum + (item.amount || 0), 0) || 0;
                const today = new Date().toDateString();
                const todayIncome = response.data?.filter(item =>
                    new Date(item.created_at).toDateString() === today
                ).reduce((sum, item) => sum + (item.amount || 0), 0) || 0;

                setLevelIncomeStats({
                    todayIncome: todayIncome,
                    totalIncome: total
                });
            }
        } catch (err) {
            setError(err.message || 'Failed to fetch level income history');
        } finally {
            setIsLoading(false);
        }
    };

    // Get Monthly ROI History
    const getMonthlyROIHistory = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await incomeService.getMiningDetails();
            if (response.success) {
                setMonthlyROIHistory(response?.data?.data || []);

            }
        } catch (err) {
            setError(err.message || 'Failed to fetch monthly ROI history');
        } finally {
            setIsLoading(false);
        }
    };

    const getPoolData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await incomeService.getPoolData();
            console.log("getdatapool", response);
            setPoolData(response?.data || []);
            setTotalInvestment(response?.totalInvestment);
            setTotalIncome(response?.totalIncome);
            console.log(response?.totalInvestment);
            console.log(response?.totalIncome);

        } catch (err) {
            setError(err.message || 'Failed to fetch pool data ');
        } finally {
            setIsLoading(false);
        }
    };
    const getPoolTreeData = async (request) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await incomeService.getPoolTreeData(request);
            console.log("getdatatreepool", response);
            setPoolTreeData(response?.data || []);


        } catch (err) {
            setError(err.message || 'Failed to fetch pool data ');
        } finally {
            setIsLoading(false);
        }
    };

    // Clear error
    const clearError = () => {
        setError(null);
    };

    // Refresh all data
    const refreshAllData = async () => {
        await Promise.all([
            getDirectIncomeHistory(),
            getLevelIncomeHistory(),
            getMonthlyROIHistory()
        ]);
    };

    const value = {
        // State
        isLoading,
        error,
        directIncomeHistory,
        directIncomeStats,
        levelIncomeHistory,
        levelIncomeStats,
        monthlyROIHistory,
        monthlyROIStats,
        pooldata,
        totalinvestment,
        totalincome,
        pooltreedata,
        // Functions
        getDirectIncomeHistory,
        getLevelIncomeHistory,
        getMonthlyROIHistory,
        clearError,
        refreshAllData,
        getPoolData,
        getPoolTreeData
    };

    return (
        <IncomeContext.Provider value={value}>
            {children}
        </IncomeContext.Provider>
    );
};