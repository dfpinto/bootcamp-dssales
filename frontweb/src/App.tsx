import Filter from './components/filter';
import Header from './components/header';
import './App.css';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';
import SalesTable from './components/sales-table';
import { useState } from 'react';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
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
        <div>
          <SalesTable />
        </div>
      </div>
    </>
  );
}

export default App;
