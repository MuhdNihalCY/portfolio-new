import React from 'react';
import './BottomDock.css';

interface NavButtonProps {
    title: string;
    icon: React.ReactNode;
    link: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, icon, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="nav-button">
            <button type="button" data-title={title}>
                {icon}
            </button>
        </a>
    );
};

const DockNavigation: React.FC = () => {
    const buttons = [
        {
            title: 'LinkedIn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            ),
            link: 'https://www.linkedin.com/in/nihalcy/'
        },
        {
            title: 'Github',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
            ),
            link: 'https://github.com/muhdnihalcy'
        },
        {
            title: 'Mail',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                </svg>
            ),
            link: 'mailto:mnihalcy@gmail.com'
        }
    ];

    return (
        <section className='bottom-nav-btn'>
            <nav className="buttons">
                {buttons.map((button, index) => (
                    <NavButton
                        key={index}
                        title={button.title}
                        icon={button.icon}
                        link={button.link}
                    />
                ))}
            </nav>
        </section>
    );
};

export default DockNavigation;