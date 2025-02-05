import './GraphCard.css';
import Ellipse from '../../assets/ellipse.svg';
import Path1 from '../../assets/Path.svg';
import Path2 from '../../assets/Path-1.svg';
export default function GraphCard({ title, w, h}) {
    const cardStyle = {
        width: `${w-50}px`,
        height: `${h-55}px`
    };
    return(
        <div className="graph-card" style={cardStyle}>
            <h1 className='graph-card-title'>{title}<span style={{ color: '#701CC0CC' }}>.</span></h1>
            <img src={Ellipse} className='card-ellipse'/>
                <img src={Path1} className='line-1'/>
                <img src={Path2} className='line-2'/>
        </div>
    )

}