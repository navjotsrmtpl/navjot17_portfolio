const CAREER_START = new Date(2018, 7, 1); // August 2018

export interface ExperienceData {
    years: number;
    months: number;
    label: string;       // e.g. "7+ Years"
    fullLabel: string;   // e.g. "7+ Years Experience"
    detailed: string;    // e.g. "7 Years 8 Months"
}

export const getExperience = (): ExperienceData => {
    const now = new Date();
    const totalMonths =
        (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
        (now.getMonth() - CAREER_START.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const hasHalf = months >= 6;

    const label = hasHalf ? `${years}+ Years` : `${years} Years`;
    const fullLabel = hasHalf ? `${years}+ Years Experience` : `${years} Years Experience`;
    const detailed = months > 0 ? `${years} Years ${months} Month${months > 1 ? 's' : ''}` : `${years} Years`;

    return { years, months, label, fullLabel, detailed };
};