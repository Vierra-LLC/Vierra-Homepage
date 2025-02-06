import './BenefitSection.css';
import BenefitSelection from '../BenefitSelection/BenefitSelection';
import EfficiencyCard from '../EfficiencyCard/EfficiencyCard';
import GraphCard from '../GraphCard/GraphCard';
import StatRect from '../../assets/statRect.svg';


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

            <div className="growth-stats-container">
                <EfficiencyCard 
                    type="purple" 
                    stat = "150%" 
                    description="Average of increase in profit for our partners"
                    w={350}
                    h={230}
                    x={0}
                    y={0}
                />
                <EfficiencyCard 
                    type="dark"
                    stat="120+"
                    description="Social media marketing campaigns created and launched by Vierra."
                    w={400}
                    h={340}
                    x={460}
                    y={-110}
                />
                <EfficiencyCard 
                    type="purple"
                    stat="30+"
                    description="Business-driven digital products created and launched in 2024."
                    w={330}
                    h={320}
                    x={670}
                    y={280}
                />
                <GraphCard 
                    title="Business growth."
                    w={690}
                    h={280}
                    x={-110}
                    y={310}
                />

                <img src={StatRect} className="stat-rect"/>
            </div>
        </section>
    )
}