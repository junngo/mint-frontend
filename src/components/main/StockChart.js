import styled from 'styled-components';
import Responsive from '../common/Responsive';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Container = styled(Responsive)`
`;

const dataLineColor = [
    "#393E46",
    "#CBF1F5",
    "#F9ED69",
    "#F38181",
    "#3F72AF",
    "#7D5A50",
    "#11999E",
    "#FFC7C7",
    "#C86B85",
    "#753422",
];
const getData = stocks => {
    // 가로축: 날짜
    const labels = stocks[0].stock_price.map(stock => stock.stock_date);
    
    // 세로축: 가격, 항목(레이블)
    const datasets = stocks.map((stock, index) => {
        return {
            type: "line",
            label: stock.ticker,
            backgroundColor: dataLineColor[index],
            borderColor: dataLineColor[index],
            data: stock.stock_price.map(price => price.close_price),
            pointRadius: 1,
        };
    });
    const data = {labels, datasets}
    return data;
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const StockChart = ({ stocks }) => {
    return (
        <Container>
            <Line 
                type="line"
                data={getData(stocks)}
                options={options}
            />
        </Container>
    );
};

export default StockChart;
