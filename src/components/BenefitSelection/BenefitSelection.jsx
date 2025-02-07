import './BenefitSelection.css';
import BenefitImage from '../../assets/Benefit-image.jpeg';
import ProgressBar from '../../assets/ProgressBar.svg';
import PhotoShadow from '../../assets/PhotoShadow.svg';
import React, { useState } from 'react';

const benefits = [
    {
        title: 'Streamline operations',
        description: 'Let your future patients flow towards you even faster than before, by using our proven market tactics.',
        image: BenefitImage
    },
    {
        title: 'Increasing efficiency',
        description: 'Give us your responsibility for your online presence, so you can spend more time focusing on your happy and loyal patients.',
        image: BenefitImage
    },
    {
        title: 'Reduce costs',
        description: 'It\'s frustrating to spend valuable resources on unfocused social media campaigns that don\'t work. We\'ll make the most out of your resources.',
        image: BenefitImage
    },
    {
        title: 'Data insights',
        description: 'Tired of not knowing whether your marketing spend is actually paying off? Us too. You\'ll be able to track leads, new patients through your doors, and keep them coming back for more.',
        image: BenefitImage
    }
];

export default function BenefitSelection() {
    const [selectedBenefit, setSelectedBenefit] = useState(0);
    const [selectedImage, setSelectedImage] = useState(benefits[0].image);  
    
    const handleTitleClick = (index) => {
        setSelectedBenefit(index === selectedBenefit ? null : index);
        setSelectedImage(index === selectedBenefit ? null : benefits[index].image);
    };

    return (
        <div className="benefit-selection-container">
            <div className="benefits">
                {benefits.map((benefit, index) => (
                    <div key={index}>
                        <h1 
                            className={`benefit-title ${selectedBenefit === index ? 'selected' : 'deselected'}`} 
                            onClick={() => handleTitleClick(index)}
                        >
                            {benefit.title}   
                        </h1>
                        {selectedBenefit === index && (
                            <>
                            <img className='progress-bar' src={ProgressBar} alt="Progress Bar" />
                            <div className="benefit-description">
                                <p>{benefit.description}</p>
                                <a className='benefit-learn-more' href="*">Learn More</a>
                            </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <img className='benefit-image' src={selectedImage} alt="Benefit" />
            <img className='photo-shadow' src={PhotoShadow} alt="Photo Shadow" />
        </div>
    );
}