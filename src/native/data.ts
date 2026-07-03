import { PortfolioData } from "./types";

const avatar =
  "https://wadcvkjzukjklhqbfvgz.supabase.co/storage/v1/object/public/avatars/cmi1fiqdv0000l70465x3ok9l/409a7b02-32bd-431f-a4b9-27297ed67ee9";

export const DATA: PortfolioData = {
  name: "Ileri⚡️",
  headline: "Ileri⚡️ - Software Engineer",
  description: "Software Engineer",
  location: "Nigeria",
  avatar: { uri: avatar },
  resumeUrl:
    "https://drive.google.com/file/d/1hGJiT7lqBW-gFyNMX-PwNRL2o6Y0sRbV/view?usp=sharing",
  summary:
    "Self-taught fullstack software engineer with 6 years building scalable backend systems and cloud infrastructure. I work with React, TypeScript, Go, and PHP to architect microservices, manage monorepos, and design event-driven platforms.\n\nI have most experience in building cloud platforms, financial systems, Artificial intelligence and a few SAAS solutions.",
  skills: [
    "AWS",
    "Typescript",
    "React/NextJs",
    "Golang",
    "Docker",
    "Kubernetes",
    "Hashicorp Nomad",
    "Linux",
    "Docker",
    "PHP",
    "Grpc",
    "GraphQL",
    "RabbitMQ",
    "SQL",
    "Distributed systems",
  ],
  hobbies: [
    "Gaming",
    "Playing Chess",
    "Watching Lots of Movies",
    "Documentaries",
    "Hanging Out",
    "Watching soccer / Playing (Once in a while)",
  ],
  contact: [
    {
      display: "@pipe_dev",
      label: "Twitter",
      url: "https://x.com/pipe_dev",
    },
    {
      display: "ileri.engineering@gmail.com",
      label: "Email",
      url: "mailto:ileri.engineering@gmail.com",
    },
    {
      display: "Ileri⚡️",
      label: "Portfolio Page",
      url: "https://ileri.brimble.app",
    },
  ],
  navbar: [
    { label: "Home", url: "/" },
    { label: "Twitter", url: "https://x.com/pipe_dev" },
    { label: "Email", url: "mailto:ileri.engineering@gmail.com" },
    { label: "Portfolio", url: "https://ileri.brimble.app" },
  ],
  work: [
    {
      company: "Piggyvest",
      description: "Backend Engineer (Contract) · Nigeria (Remote)",
      employmentType: "Contract",
      location: "Nigeria",
      locationType: "Remote",
      logoText: "PV",
      role: "Backend Engineer",
      url: "https://piggyvest.com",
    },
    {
      company: "Ultramarkets",
      description: "Fullstack Engineer (Full-time) · Singapore (Remote)",
      employmentType: "Full-time",
      location: "Singapore",
      locationType: "Remote",
      logoText: "UM",
      role: "Fullstack Engineer",
      url: "https://ultramarkets.xyz",
    },
    {
      company: "Brimble",
      description: "Founding & Infrastructure Engineer (Full-time) · United States (Remote)",
      employmentType: "Full-time",
      location: "United States",
      locationType: "Remote",
      logoText: "BR",
      role: "Founding & Infrastructure Engineer",
      url: "https://brimble.io",
    },
    {
      company: "Novis A.I",
      description: "Software Engineer (Contract) · United Kingdom (Remote)",
      employmentType: "Contract",
      location: "United Kingdom",
      locationType: "Remote",
      logoText: "AI",
      role: "Software Engineer",
      url: "https://novis.ai",
    },
    {
      company: "9jaPay",
      description: "Backend Engineer (Full-time) · United Kingdom (Hybrid)",
      employmentType: "Full-time",
      location: "United Kingdom",
      locationType: "Hybrid",
      logoText: "9P",
      role: "Backend Engineer",
      url: "https://9japay.com",
    },
    {
      company: "Ebhidhaa",
      description: "Backend Engineer (Full-time) · Nigeria (Remote)",
      employmentType: "Full-time",
      location: "Nigeria",
      locationType: "Remote",
      logoText: "EB",
      role: "Backend Engineer",
      url: "",
    },
    {
      company: "AbangoHQ",
      description: "Fullstack Engineer (Contract) · Nigeria (Remote)",
      employmentType: "Contract",
      location: "Nigeria",
      locationType: "Remote",
      logoText: "AH",
      role: "Fullstack Engineer",
      url: "",
    },
  ],
  education: [
    {
      degree: "BSc Computer Science",
      period: "",
      school: "Landmark University",
      url: "https://lmu.edu.ng",
    },
  ],
  projects: [
    {
      title: "Brimble",
      href: "https://brimble.io/",
      description:
        "Brimble is a platform as a service solution, for developers and small engineering teams to deploy their frontend application effortlessly and no downtime 🙃",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/dWtN53rsC42zoJZaJJfjng/YSFmEz0VMu5W0JiVy2CwXESnw2PZvHPqMUE7vsNVgSEzaBXOgeu_BZqcb8j7bAcDopjQkkxVrMJHVcS6fnBXfz90nmjV6SK8hSkqSQJqWsfBPPZJl0kEBgUBmjKA5fN87_T2v_QK6N5AKCU-PB71og/0eCQYZAGqXbjZU90M59SPZapLkGw8WwWQSNPl8K96yw",
      links: [{ label: "Website", url: "https://brimble.io/" }],
    },
    {
      title: "Koyn",
      href: "https://www.getkoyn.com/",
      description:
        "Koyn is a crypto trading platform, it allows you sell, buy crypto and finally pay bills",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/da-SywiX4ISKOplwuXJ7sA/rRBqq3rDTPP0bhLM6dbAuquO3XjDnW-N4bnq_8tmCqKrwA7Y2Ih-k_dQHg2ZZSOaE5QYrQxNN81hEJtnuHf8RcM_OZ67gLeRpxGI89juHNZbpLLzYLI-yVsWnDJboRc0GNY0zBto7vASqSaIurOaHCXjbjNUxgjAqJwkbOsHslKzvR3hvga92duZu0Tk0L1N/uVWA2Z3mIBWcHFg1AC5EYI0IIv82XbOsyCbg_auVAkk",
      links: [{ label: "Website", url: "https://www.getkoyn.com/" }],
    },
    {
      title: "Hermes",
      href: "https://github.com/pipethedev/hermes",
      description:
        "A simple publisher and subscriber package using http as the underlying protocol",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/64IPXh_4BmwP3kka5VGhnQ/ME78yoYrCZrQ2Zo2A8uJxFt-qGGp2OtHLY2cVLb69dJvPZ3DLqZyNszVdL2N4HPcmrpTBXA7UjtAHmHxGQxeP_dOpSudFHhTmLiAwM6Cwdmko-twjODyfTDDNM2qSXZmnT81P3JMwOlXtEjK0VkJ1w/uml4Ch2jJ4mp3ZqMrvN2e5yok5J-XtULPDjO7AjENuI",
      links: [{ label: "Source", url: "https://github.com/pipethedev/hermes" }],
    },
    {
      title: "Cykmore",
      href: "https://cykmore.com/",
      description:
        "Cykmore is a UK technology firm bringing, high quality, early-found candidates from an international marketplace to national hiring managers.",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/UU8f-aQW2Ns7a6qAJv0DqQ/HGFu0SOKeXGZ3bkDKwoVqUJyAiDo7MebiaI4SKkMYtEW2dBH5s12zZrmEcyJg9O7UYKg68x2P1Ijl8HGnwVVdaFHTCOkuCz-fcJicpov2RznQ7YSDpl_oTxtVRnzJekO553nhwFG671--onM0qgehtYoBfu-izwu_dKuaToD6ZM/t7mcw7gPCAs9icCKBaRZgJXwhNnZCWTZJxxlKuXoHeM",
      links: [{ label: "Website", url: "https://cykmore.com/" }],
    },
    {
      title: "Fastrack",
      href: "https://getfastrack.app/",
      description:
        "Lead the backend team, to create a scalable backend solution for a logistics product",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/rIQtAf9rItlBw4z-ccm2UQ/nr3s8fTB5qgKhvusOFHwnHG4UFdTENv1na13_OkQtFp_2Wolc8dF7rm8T-dpjjiRCAVFzinUOFszYWWCY3Wfslw-k9ns2vtr1VUyL5kKt6qcEalWJQQ5dd-JDKZUpHs6fywtazgQ_s9wr109QgCIXw/N_2M_kjd7JCxzfO5g4Fki6rqFQh_yu9biHEDqg9GhtQ",
      links: [{ label: "Website", url: "https://getfastrack.app/" }],
    },
    {
      title: "Minimalist",
      href: "https://minimalistlimited.com/",
      description:
        "Worked as a backend engineer on the product fulltime. Minimalist & Co Ltd is an excellence driven Real Estate development company driven by professionals with the sole aim of building grandeur and ultra-modern homes for professionals, business and upwardly mobile individuals, providing them a seamless living experience",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/NCmNld98WNk3BqS_j8Thug/Z_X_Ac7bhsLEm7LqT7C3o8jFTRz6PAtTP0k_ur-4cbFjZD9gUTNW_BeUK62obZvx4pAO7P-2tZX5DZk2xQANcggSAmXzkM41ba7Yc3UkG1gBk_HYWIwH7lXkvyDChNAQjb5SCx3LpPOCUu60bTIJtw/BjDeDG3UlV8N4ZSrukB9DoNa0TFYuLtZ2-cB-7cDfpk",
      links: [{ label: "Website", url: "https://minimalistlimited.com/" }],
    },
    {
      title: "Cookout",
      href: "https://cookout.ng",
      description:
        "Cookout is an online food delivery platform tailored to users and businesses who like certain varieties of meal plans",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/5jfaXhkfRUDy3rMLoiYYvA/GFqiS61lGJuX-vKnS9asGA-7u-eN5lJdF7QzTPpUZyxaBwoFbNEcNS3vW2KQ2dkNxAR4CdDOTfg5dXL5JN6kbjBwnZoNMXcpO2Wki57jtINc3-V9bEdvSRk5XeaJQcBgRJEamJ2MiSCaRrGXu8y-yFbIyAHrVkpMOrTKh7dhoVHprTb0o5ZL9G27Pu3qBY3w/2VPfc68A249xyM_JCvogq2489pyUSv5qVDUnfrVUbxk",
      links: [{ label: "Website", url: "https://cookout.ng" }],
    },
    {
      title: "Lazerpay Laravel SDK",
      href: "https://github.com/pipethedev/lazerpay-laravelsdk",
      description: "Laravel sdk for lazerpay to use on a laravel project",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/64IPXh_4BmwP3kka5VGhnQ/ME78yoYrCZrQ2Zo2A8uJxFt-qGGp2OtHLY2cVLb69dJvPZ3DLqZyNszVdL2N4HPcmrpTBXA7UjtAHmHxGQxeP_dOpSudFHhTmLiAwM6Cwdmko-twjODyfTDDNM2qSXZmnT81P3JMwOlXtEjK0VkJ1w/uml4Ch2jJ4mp3ZqMrvN2e5yok5J-XtULPDjO7AjENuI",
      links: [
        {
          label: "Source",
          url: "https://github.com/pipethedev/lazerpay-laravelsdk",
        },
      ],
    },
    {
      title: "Nywata",
      href: "https://nyatwa.com/",
      description:
        "Nyatwa is a fintech app that allows you move money, with a virtual card. Provided backend engineering services in laravel to the development of this product",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/HQD8etorZprhlzJiWMELyQ/og63Mm9BZZuki-MPXlgQGvFnFUWmrIcjzSVDI_JyCry1stqGFHEpXjFUhKPn_lSv9Twx8vHfXMptQpAMITo9NFq1pMc0gOxohh7t4magfikLBqDPxpoH-pjoZO7cIftkRVJFxJYCGGm4VSB3s2V0ySgbG28kJnOg8qY6of4EWhEkHcJpAQ_mnSuVefn1yZUg/IRluXECiijJ8vMbruL5RqzNAjcwJ6SCMBbdP55vi4Y4",
      links: [{ label: "Website", url: "https://nyatwa.com/" }],
    },
    {
      title: "Couch",
      href: "https://joincouch.co/",
      description:
        "Lead the team and also worked on the backend solution for couch. Couch is a mental health and therapy solution",
      media:
        "https://v5.airtableusercontent.com/v3/u/54/54/1783072800000/w3LftyJIBe7OjLr-ZAS7Gg/PjDkZNmhHkrcEIym9dKtlta_V_3UuTbL_ljYCo8b31wS-Yux_kVk9Nu0zJmLVVgewSwGUjWS7fKvSRkqeBYt3kZ4cx5usN5sZQfzMZ84UsHKdT-ls9ZD_DNJjsyoEbSPO-NxlCFlqPNFTKvcjFrDgQ/hPX8XG7YLY2vNXmdaONlafJj6Tw4fS1sa45WkWwyom0",
      links: [{ label: "Website", url: "https://joincouch.co/" }],
    },
  ],
};
