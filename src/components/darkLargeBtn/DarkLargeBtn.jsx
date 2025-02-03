import './DarkLargeBtn.css';
import arrow from '../../assets/arrow-right.svg';
export default function DarkLargeBtn({ text, onClick }) {
    return (
        <button onClick={onClick} className="dark-large-btn">
        {text}
        <img src={arrow} alt="" />
        </button>
    )
}