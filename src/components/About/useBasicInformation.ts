interface BasicInformation {
    key: number,
    label: string,
    value: string,
    href?: string
};

export const useBasicInformation: (isPrint?: boolean) => BasicInformation[] = (isPrint = false) => [
    {
        key: 0,
        label: "Email",
        value: isPrint ? "adam@nadamo.me" : "adam at nadamo.me"
    },
    {
        key: 1,
        label: "LinkedIn",
        value: isPrint ? "https://www.linkedin.com/in/nadamo" : "Ádám Németh",
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