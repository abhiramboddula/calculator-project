import React from 'react';

const PortfolioSection: React.FC = () => {
    const portfolioItems = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: '#'
        }
    ];

    return (
        <section className="portfolio-section">
            <h2>My Portfolio</h2>
            <div className="portfolio-items">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;