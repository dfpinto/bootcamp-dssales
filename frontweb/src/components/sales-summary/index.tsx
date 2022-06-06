import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard icon={<DoneIcon />} label="Média" value={430} />
      <SalesSummaryCard icon={<SyncIcon />} label="Quantidade" value={630} />
      <SalesSummaryCard icon={<BarChartIcon />} label="Minima" value={130} />
      <SalesSummaryCard icon={<AvatarIcon />} label="Máxima" value={120} />
    </div>
  );
}

export default SalesSummary;
