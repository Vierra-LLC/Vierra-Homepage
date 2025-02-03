import './LightLargeBtn.css';
import arrow from '../../assets/arrow-right.svg';
export default function DarkLargeBtn({ text, onClick }) {
    return (
        <button onClick={onClick} className="light-large-btn">
        {text}
        <img className='arrow-right' src={arrow} alt="" />
        </button>
    )
}