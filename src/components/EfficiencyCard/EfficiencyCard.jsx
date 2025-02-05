import './EfficiencyCard.css';

export default function EfficiencyCard({ stat, description, type, w, h}) {
    const cardStyle = {
        width: `${w-50}px`,
        height: `${h-55}px`
    };
    const cardClass = `EfficiencyCard ${type==='purple' ? `purple-e-card` : 'dark-e-card'}`;
    return (
        <div className={cardClass} style={cardStyle}>
                <h1 className='stat-e-card'>{stat}</h1>
                <p className='desc-e-card'>{description}</p>
        </div>
    );

}