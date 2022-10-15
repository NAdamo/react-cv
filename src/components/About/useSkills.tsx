import React, { ReactElement } from 'react';
import { LanguageJavascript, LanguageTypescript, LanguageCss3, LanguageHtml5, Angular, React as ReactIcon, MaterialDesign, Nodejs, Docker } from 'mdi-material-ui'


interface Skill {
    key: number,
    label: string,
    icon?: ReactElement,
};


const HTML = { key: 0, label: "HTML", icon: <LanguageHtml5 /> };
const CSS = { key: 1, label: "CSS", icon: <LanguageCss3 /> };
const JAVASCRIPT = { key: 2, label: "JavaScript", icon: <LanguageJavascript /> };
const TYPESCRIPT = { key: 3, label: "TypeScript", icon: <LanguageTypescript /> };
const ANGULAR = { key: 4, label: "Angular", icon: <Angular /> };
const REACT = { key: 5, label: "React", icon: <ReactIcon /> };
const MATERIAL_DESIGN = { key: 6, label: "Material Design", icon: <MaterialDesign /> };
const NODEJS = { key: 7, label: "NodeJS", icon: <Nodejs /> };
const DOCKER = { key: 8, label: "Docker", icon: <Docker /> };
const UX = { key: 9, label: "UX" };
const USEREXPERIENCE = { key: 9, label: "User Experience" };
const MENTORING = { key: 10, label: "Mentoring" };
const AGILE = { key: 11, label: "Agile" };
export const useSkills: (isPrint?: boolean) => Skill[] = (isPrint = false) => [
    HTML,
    CSS,
    JAVASCRIPT,
    TYPESCRIPT,
    ANGULAR,
    REACT,
    ...(isPrint ? [
        DOCKER,
        UX,
        MENTORING,
        AGILE,
        MATERIAL_DESIGN,
        NODEJS] : [
        MATERIAL_DESIGN,
        NODEJS,
        DOCKER,
        USEREXPERIENCE,
        MENTORING,
        AGILE])
];
