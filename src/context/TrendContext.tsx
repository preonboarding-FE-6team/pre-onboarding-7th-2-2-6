import React, { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { addDays } from 'date-fns';
import { TrendService } from '../service/TrendService';
import { getFluctucation, getPeriod, parseString } from '../utils/utils';
import { DropdownOption, Trend } from '../types';
import { graphOptions } from '../utils/conts';

type TrendProviderProps = {
  children: React.ReactNode;
  trendService: TrendService;
};

type SummaryDataValues = {
  title: string;
  content: string;
  fluctuation: string;
  isIncreased: boolean;
  difference: number;
};

type State = {
  trends: Trend[];
  summaryData: SummaryDataValues[];
  getTrend: (fromDate: Date, toDate: Date) => void;
  dateRange: {
    fromDate: Date;
    toDate: Date;
  };
  setDateRange: React.Dispatch<
    React.SetStateAction<{
      fromDate: Date;
      toDate: Date;
    }>
  >;
  graphOption: DropdownOption[];
  setGraphOption: React.Dispatch<React.SetStateAction<DropdownOption[]>>;
};

const TrendContext = createContext<State | null>(null);
export const useTrend = () => useContext(TrendContext);

export function TrendProvider({ children, trendService }: TrendProviderProps) {
  const [dateRange, setDateRange] = useState({ fromDate: new Date(2022, 3, 14), toDate: new Date(2022, 3, 20) });
  const [summaryData, setSummaryData] = useState<SummaryDataValues[]>([]);
  const [trends, setTrends] = useState<Trend[]>([]);
  const [graphOption, setGraphOption] = useState([graphOptions[0], { id: -1, content: '선택안함', option: '' }]);

  const getTrendsAverage = (trends: Trend[]) => {
    const average = { imp: 0, click: 0, cost: 0, conv: 0, convValue: 0, roas: 0 };

    trends.forEach(({ imp, click, cost, conv, convValue, roas }) => {
      average.imp += imp;
      average.click += click;
      average.cost += cost;
      average.conv += conv;
      average.convValue += convValue;
      average.roas += roas;
    });

    const { length } = trends;
    average.imp /= length;
    average.click /= length;
    average.cost /= length;
    average.conv /= length;
    average.convValue /= length;
    average.roas /= length;

    return average;
  };

  const parseTrendData = (prev: Trend, cur: Trend) => {
    const parseData = [
      {
        title: 'ROAS',
        content: Math.round(cur.roas) + '%',
        fluctuation: getFluctucation(prev.roas, cur.roas) + '%',
        isIncreased: prev.roas ? cur.roas >= prev.roas : false,
        difference: prev.roas ? cur.roas - prev.roas : 0,
      },
      {
        title: '광고비',
        content: parseString(cur.cost) + ' 원',
        fluctuation: getFluctucation(prev.cost, cur.cost) + ' 원',
        isIncreased: prev.cost ? cur.cost >= prev.cost : false,
        difference: prev.cost ? cur.cost - prev.cost : 0,
      },
      {
        title: '노출수',
        content: parseString(cur.imp) + ' 회',
        fluctuation: getFluctucation(prev.imp, cur.imp) + ' 회',
        isIncreased: prev.imp ? cur.imp >= prev.imp : false,
        difference: prev.imp ? cur.imp - prev.imp : 0,
      },
      {
        title: '클릭수',
        content: parseString(cur.click) + ' 회',
        fluctuation: getFluctucation(prev.click, cur.click) + ' 회',
        isIncreased: prev.click ? cur.click >= prev.click : false,
        difference: prev.click ? cur.click - prev.click : 0,
      },
      {
        title: '전환수',
        content: parseString(cur.conv) + ' 회',
        fluctuation: getFluctucation(prev.conv, cur.conv) + ' 회',
        isIncreased: prev.conv ? cur.conv >= prev.click : false,
        difference: prev.conv ? cur.conv - prev.conv : 0,
      },
      {
        title: '매출',
        content: parseString(cur.convValue) + ' 원',
        fluctuation: getFluctucation(prev.convValue, cur.convValue) + ' 원',
        isIncreased: prev.convValue ? cur.convValue >= prev.click : false,
        difference: prev.convValue ? cur.convValue - prev.convValue : 0,
      },
    ];

    setSummaryData(parseData);
  };

  const getTrend = async (fromDate: Date, toDate: Date) => {
    const period = getPeriod(fromDate, toDate);

    const data = await trendService.get(fromDate, toDate);

    setTrends(data);
    const curTrendsAverage = getTrendsAverage(data);

    const prevData = await trendService.get(addDays(fromDate, -period), addDays(toDate, -period));
    const prevTrendsAverage = getTrendsAverage(prevData);

    parseTrendData(prevTrendsAverage, curTrendsAverage);
  };

  useEffect(() => {
    setTimeout(() => {
      getTrend(dateRange.fromDate, dateRange.toDate);
    }, 500);
  }, [dateRange]);

  const value = useMemo(
    () => ({ trends, summaryData, getTrend, dateRange, setDateRange, graphOption, setGraphOption }),
    [trends, summaryData, dateRange, graphOption]
  );

  return <TrendContext.Provider value={value}>{children}</TrendContext.Provider>;
}
