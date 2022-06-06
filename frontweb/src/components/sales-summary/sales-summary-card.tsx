import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="sales-summary-card base-card">
      {icon}
      <h4 className="sales-summary-card-value">{value}</h4>
      <span className="sales-summary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;