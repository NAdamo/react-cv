import React, { ReactElement } from 'react';
import { LanguageJavascript, LanguageTypescript, LanguageCss3, LanguageHtml5, Angular, React as ReactIcon, MaterialDesign, Nodejs, Docker } from 'mdi-material-ui'


interface Skill {
    key: number,
    label: string,
    icon?: ReactElement,
};


export const useSkills: () => Skill[] = () => [
    { key: 0, label: "HTML", icon: <LanguageHtml5 /> },
    { key: 1, label: "CSS", icon: <LanguageCss3 /> },
    { key: 2, label: "JavaScript", icon: <LanguageJavascript /> },
    { key: 3, label: "TypeScript", icon: <LanguageTypescript /> },
    { key: 4, label: "Angular", icon: <Angular /> },
    { key: 5, label: "React", icon: <ReactIcon /> },
    { key: 6, label: "Material Design", icon: <MaterialDesign /> },
    { key: 7, label: "NodeJS", icon: <Nodejs /> },
    { key: 8, label: "Docker", icon: <Docker /> },
    { key: 9, label: "User Experience" },
    { key: 10, label: "Mentoring" },
    { key: 11, label: "Agile" },
];