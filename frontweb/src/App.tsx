import Filter from './components/filter';
import Header from './components/header';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            name="Lojas"
            series={[40, 30, 30]}
          />
          <PieChartCard
            labels={['Crêdito', 'Débito', 'Dinheiro']}
            name="Pagamento"
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
