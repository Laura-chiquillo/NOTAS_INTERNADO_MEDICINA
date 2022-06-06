import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Row } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { useColors } from '../../hooks/useColor';
import Link from "next/link";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

{/* grafica en dona*/ }
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {

      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


{/* grafica en barra */ }
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const datas = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [3, 45, 74, 3, 2, 4, 2],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [3, 5, 4, 3, 2, 4, 2],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Badges = () => {
  const { color } = useColors();
  return (
    <>
      {/*se crea una etiqueta para poder meter mas etiquetas adentro y poder retornarlo*/}

      <Row style={{ textAlign: 'center' }}>
        <h1>
          Graficas
        </h1>
      </Row>
      <Row>
        <Doughnut data={data} style={{ maxHeight: 500, maxWidth: 500 }} />
        <Bar options={options} data={datas} style={{ maxHeight: 500, maxWidth: 500 }} />
      </Row>
        <Row>
      <div>
        <Link href={'/ui/ListaEstudiantes'}>
          <Button style={{ backgroundColor: color, color: "black" }} size="lg">
            Atrás
          </Button>
        </Link>
      </div>
        </Row>
    </>
  );
}
Badges.layout = "MenuLayout"

export default Badges;


