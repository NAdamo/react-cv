interface BasicInformation {
    key: number,
    label: string,
    value: string,
    href?: string
};

export const useBasicInformation: () => BasicInformation[] = () => [
    {
        key: 0,
        label: "Email",
        value: "adam at nadamo.me"
    },
    {
        key: 1,
        label: "LinkedIn",
        value: "Ádám Németh",
        href: "https://www.linkedin.com/in/nadamo"
    },
    {
        key: 2,
        label: "Nationality",
        value: "Hungarian"
    },
    {
        key: 3,
        label: "Language",
        value: "Hungarian, English"
    },
];