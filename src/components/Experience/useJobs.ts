export type Job = {
    role: string;
    workplace: string;
    description: string;
    date: string;
}

export const useJobs: () => Job[] = () => [
    {
        date: "2022 Jan - present",
        role: "(Frontend) Team Lead",
        workplace: "Webshippy Kft",
        description: `I am a team lead of a scrum team. My main responsibilty is to help the team to deliver on time.
        I take part in their technical planning, code review and deploy process. I hold regular one-to-one meetings with my team members.
        I also work together with the CIO and the CTO to implement strategic technical and organisational reforms within the company.`
    },
    {
        date: "2018 Sept - 2021 Nov",
        role: "(Frontend) Team Lead",
        workplace: "DPC Consulting Kft",
        description: `I was the lead developer and the scrum master of 5-10 developers, while we worked on various Thai webshops.
Since May 2019 I am the frontend architect of a new webshop for an Italian luxury brand and also work as a team lead of 5-10 people.Since September 2020 I coordinate the backend development team daily work.
I improve our team with interviewing new candidates and help transforming project team structure.I'm also responsible for regular feedbacks for the team members and report for the managers about the people.
`
    },
    {
        date: "2017 Apr - 2018 Sept",
        role: "Frontend Trainer",
        workplace: "DPC Consulting Kft",
        description: `I participated in several 8-12 weeks long bootcamps as a Lead Frontend Instructor.
I created teaching materials such as slides, handouts, coding exercises, exams. I also was on a daily face-to-face contact with the students in the classroom. I explained them the subject, helped them with the coding exercises and we did live coding and pair programming together.
These bootcamps also included a final project where I usually acted as a PO and agile coach. I provided feedback for the students and the stakeholders, managers about the development of each student.`
    },
    {
        date: "2016 Apr - 2017 Apr",
        role: "Frontend Lead developer",
        workplace: "Mortoff IT Consulting and Services Ltd.",
        description: `
I took part in various projects and mentored 1-3 junior developers working on different projects. I also worked closely with the sales team and helped them with estimations and project solution plans and also made proof of concepts for the sales demos.`
    },
    {
        date: "2013 Apr - 2016 Apr",
        role: "Software Engineer",
        workplace: "Mortoff IT Consulting and Services Ltd.",
        description: ` worked on the CRM solution of one of Hungary's well-known media publisher company. We introduced and customised the SugarCRM for their needs.
I took part in the introduction of a new CRM system (Siebel) for a housing fund company as part of
a bigger program where their changed multiple system in the same time. So it was a challenge to integrate with the other systems which were developed with different pace by multiple vendors.
    `
    },
    {
        date: "2011 Dec - 2013 Nov",
        role: "Developer",
        workplace: "Pikcsörsz Kft",
        description: `I founded the company with a friend and we did project based works for marketing agencies.
I created various interactive ads and banners for websites.
We created a website for 2 online magazines.
I developed a CRM solution for a small business and integrated with their Virtual Call Center software. As the founder of the company I brought in new leads and negotiated with them about the contracts. During this time I was also the part of the startup community and I helped organizing meet-ups for the IT community
`
    },
    {
        date: "2007 Sept - 2011 Dec",
        role: "Freelance Web Developer",
        workplace: "Self-employed",
        description: `During my studies I created small websites like landing pages, one-pagers, blogs and interactive games for events.
    `
    },
]