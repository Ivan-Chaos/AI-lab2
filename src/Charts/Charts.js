import { Bar, Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Charts = ({ mx, columns, data }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Функція належності нечіткої множини',
            },
        },
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Експертні парні порівняння',
            },
        },
    };


    const lineData = {
        labels: columns.map(column => column.name),
        datasets: [
            {
                label: "M(X)",
                data: Object.values(mx),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    const barData = {
        labels: columns.map(column => column.name),
        datasets: [
            {
                label: "A",
                data: Object.values(data[0]),
                borderColor: 'rgb(5, 99, 132)',
                backgroundColor: 'rgba(5, 99, 132, 0.5)',
            }
        ]
    }

    return (<div>
        <Line options={options} data={lineData} />
        <Bar options={barOptions} data={barData} />
    </div>);
}

export default Charts;