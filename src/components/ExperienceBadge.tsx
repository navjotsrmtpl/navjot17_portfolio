import React from 'react';
import { getExperience } from '../utils/getExperience';

type Variant = 'label' | 'fullLabel' | 'detailed';

interface ExperienceBadgeProps {
    variant?: Variant;
    className?: string;
}

const ExperienceBadge: React.FC<ExperienceBadgeProps> = ({
    variant = 'label',
    className = '',
}) => {
    const exp = getExperience();
    return <span className={className}>{exp[variant]}</span>;
};

export default ExperienceBadge;