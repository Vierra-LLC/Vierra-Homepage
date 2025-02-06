import './BenefitSection.css';
import BenefitSelection from '../BenefitSelection/BenefitSelection';
import EfficiencyCard from '../EfficiencyCard/EfficiencyCard';
import GraphCard from '../GraphCard/GraphCard';


export default function BenefitSection() {
    return(
        <section className="benefit-section">
            <div className="solution-banner">
                <h1 className="solution-banner-title">We offer real-time solution tools for your entire business</h1>
                <p className="solution-banner-description">
                Our comprehensive tools offers small business owners a one-stop-shop solution to manage their accounting, sales, marketing, outreach efforts, CRM, financial models, email campaigns, QuickBooks integration, record-keeping, and a range of other crucial business functions.
                </p>
            </div>

            <BenefitSelection />
        </section>
    )
}