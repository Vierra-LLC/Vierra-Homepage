import './EfficiencyCard.css';

export default function EfficiencyCard({ stat, description, type, w, h, x, y }) {
    const cardStyle = {
        width: `${w-50}px`,
        height: `${h-55}px`,
        top: `${y}px`,
        left: `${x}px`
    };
    const cardClass = `EfficiencyCard ${type==='purple' ? `purple-e-card` : 'dark-e-card'}`;
    if(type === 'dark') {
        return (
            <div className={cardClass} style={cardStyle}>
                    <h1 className='stat-e-card-dark'>
                        {stat.slice(0, -1)}
                        <span style={{ color: '#701CC0' }}>{stat.slice(-1)}</span>
                    </h1>
                    <p className='desc-e-card-dark'>{description}</p>
            </div>
        );
    }
    return(
        <div className={cardClass} style={cardStyle}>
            <h1 className='stat-e-card'>{stat}</h1>
            <p className='desc-e-card'>{description}</p>
        </div>
    )

}