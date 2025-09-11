// 'use client';
// import { useState } from "react";

// // export const teamData = useState({
// //     companyHead: [
// //       {
// //         id: 1,
// //         name: "Nikita Singh",
// //         role: "Founder and Lead",
// //         image: "/team/Nikita.jpeg",
// //         linkedin: "https://www.linkedin.com/in/authornikitasingh",
// //         description:
// //           "Visionary leader with expertise in creative strategy and team management. Drives innovation and fosters collaborative excellence across all projects.",
// //       },
// //       {
// //         id: 2,
// //         name: "Asha Singh",
// //         role: "Advisor",
// //         image: "/team/AshaSingh.jpeg",
// //         linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
// //         description:
// //           "Strategic advisor with deep industry insights and extensive experience in business development and organizational growth.",
// //       },
// //       {
// //         id: 3,
// //         name: "Digvijay Singh",
// //         role: "Advisor",
// //         image: "/team/DigvijaySingh.jpeg",
// //         linkedin:
// //           "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //         description:
// //           "Seasoned professional providing strategic guidance and mentorship to drive organizational success and innovation.",
// //       },
// //     ],
// //     leadership: [
// //       {
// //         id: 4,
// //         name: "Godhuli Vyas",
// //         role: "Operation & Client Retention manager",
// //         image: "/team/godhuli.jpg",
// //         linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",
// //         description:
// //           "Operations expert focused on streamlining processes and maintaining strong client relationships for sustainable business growth.",
// //       },
// //       {
// //         id: 5,
// //         name: "Pratham Bhimnani",
// //         role: "Founder's Office Associate",
// //         image: "/team/Pratham Bhimnani.png",
// //         linkedin: "https://www.linkedin.com/in/pratham-bhimnani-36736725a",
// //         description:
// //           "Dynamic associate supporting executive operations and strategic initiatives while driving organizational efficiency.",
// //       },
// //     ],
// //     creative: [
// //       {
// //         id: 6,
// //         name: "Arnab Mukherjee",
// //         role: "Full Stack Website Developer",
// //         image: "/team/arnab.JPG",
// //         linkedin: "https://www.linkedin.com/in/0xarnab",
// //         description:
// //           "Full-stack developer specializing in modern web technologies, creating scalable and user-friendly digital solutions.",
// //       },
// //       {
// //         id: 8,
// //         name: "Binith Kumar",
// //         role: "Team Lead / UI UX Designer",
// //         image: "/team/binith.jpg",
// //         linkedin: "https://www.linkedin.com/in/binith-kumar",
// //         description:
// //           "Creative UI/UX designer and team lead crafting intuitive and visually appealing user experiences across digital platforms.",
// //       },
// //       {
// //         id: 9,
// //         name: "Abhirami. M",
// //         role: "UI/UX design intern",
// //         image: "/team/abhirami.jpg",
// //         linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
// //         description:
// //           "Passionate design intern contributing fresh perspectives and innovative ideas to create engaging user interfaces.",
// //       },
// //     ],
// // });

//   export const [teamData] = useState({
//     companyHead: [
//       {
//         id: 1,
//         name: "Nikita Singh",
//         role: "Founder and Lead",
//         image: "/team/Nikita.jpeg",
//         linkedin: "https://www.linkedin.com/in/authornikitasingh",
//         description: "With 8+ years of experience in venture capital and startups, I’ve led impactful marketing initiatives while also authoring books and mentoring changemakers. Backed by academic roots from DU, St. Bede’s, and MICA, I bring a blend of strategy, creativity, and purpose to every project.",
//       },
//       {
//         id: 2,
//         name: "Asha Singh",
//         role: "Advisor",
//         image: "/team/AshaSingh.jpeg",
//         linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
//         description:
// "Asha Singh is an alumna of Miranda House, Delhi University, and IMT-Ghaziabad. She brings with her the experience of serving as a Director at a 30–35-year-old company, a role that has shaped her deep expertise in finance and strategy. With her strong academic pedigree and proven leadership, she contributes invaluable advisory support and financial acumen to the team.",
//       },
//       {
//         id: 3,
//         name: "Digvijay Singh",
//         role: "Advisor",
//         image: "/team/DigvijaySingh.jpeg",
//         linkedin:
//           "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//         description:
// "Digvijay Singh, an IIT-BHU graduate with a Johns Hopkins (USA) pedigree, brings global exposure, prize-winning design innovations, and entrepreneurial experience from building his own diagnostic company in the U.S. A seasoned professional, he adds strategic guidance, mentorship, and organizational depth to our advisory.",
//       },
//     ],
//     leadership: [
//       {
//         id: 4,
//         name: "Godhuli Vyas",
//         role: "Operation & Client Retention manager",
//         image: "/team/godhuli.jpg",
//         linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",
//         description:
//           "Operations expert focused on streamlining processes and maintaining strong client relationships for sustainable business growth.",
//       },
//       {
//         id: 5,
//         name: "Pratham Bhimnani",
//         role: "Founder's Office Associate",
//         image: "/team/Pratham Bhimnani.png",
//         linkedin: "https://www.linkedin.com/in/pratham-bhimnani-36736725a",
//         description:
//           "Dynamic associate supporting executive operations and strategic initiatives while driving organizational efficiency.",
//       },
//     ],
//     creative: [
//       {
//         id: 6,
//         name: "Arnab Mukherjee",
//         role: "Full Stack Website Developer",
//         image: "/team/arnab.JPG",
//         linkedin: "https://www.linkedin.com/in/0xarnab",
//         description:
//           "Full-stack developer specializing in modern web technologies, creating scalable and user-friendly digital solutions.",
//       },
//       {
//         id: 8,
//         name: "Binith Kumar",
//         role: "Team Lead / UI UX Designer",
//         image: "/team/binith.jpg",
//         linkedin: "https://www.linkedin.com/in/binith-kumar",
//         description:
//           "Creative UI/UX designer and team lead crafting intuitive and visually appealing user experiences across digital platforms.",
//       },
//       {
//         id: 9,
//         name: "Abhirami. M",
//         role: "UI/UX design intern",
//         image: "/team/abhirami.jpg",
//         linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
//         description:
//           "Passionate design intern contributing fresh perspectives and innovative ideas to create engaging user interfaces.",
//       },
//     ],
//   });

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
}

export interface TeamData {
  companyHead: TeamMember[];
  leadership: TeamMember[];
  creative: TeamMember[];
}

export const teamData = {
  companyHead: [
    {
      id: 1,
      name: "Nikita Singh",
      role: "Founder and Lead",
      image: "/team/Nikita.jpeg",
      linkedin: "https://www.linkedin.com/in/authornikitasingh",
      description:
        "With 8+ years of experience in venture capital and startups, I've led impactful marketing initiatives while also authoring books and mentoring changemakers. Backed by academic roots from DU, St. Bede's, and MICA, I bring a blend of strategy, creativity, and purpose to every project.",
    },
    {
      id: 2,
      name: "Asha Singh",
      role: "Advisor",
      image: "/team/AshaSingh.jpeg",
      linkedin: "https://www.linkedin.com/company/aam-pannaa-creations/",
      description:
        "Asha Singh is an alumna of Miranda House, Delhi University, and IMT-Ghaziabad. She brings with her the experience of serving as a Director at a 30–35-year-old company, a role that has shaped her deep expertise in finance and strategy. With her strong academic pedigree and proven leadership, she contributes invaluable advisory support and financial acumen to the team.",
    },
    {
      id: 3,
      name: "Digvijay Singh",
      role: "Advisor",
      image: "/team/DigvijaySingh.jpeg",
      linkedin:
        "https://www.linkedin.com/in/digvijay-singh-4724a440/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description:
        "Digvijay Singh, an IIT-BHU graduate with a Johns Hopkins (USA) pedigree, brings global exposure, prize-winning design innovations, and entrepreneurial experience from building his own diagnostic company in the U.S. A seasoned professional, he adds strategic guidance, mentorship, and organizational depth to our advisory.",
    },
  ],
  leadership: [
    {
      id: 4,
      name: "Godhuli Vyas",
      role: "Operation & Client Retention manager",
      image: "/team/godhuli.jpg",
      linkedin: "https://www.linkedin.com/in/godhuli-vyas-4b7128253/",

      description: "",
    },
    {
      id: 5,
      name: "Pratham Bhimnani",
      role: "Founder's Office Associate",
      image: "/team/Pratham Bhimnani.png",
      linkedin: "https://www.linkedin.com/in/pratham-bhimnani-36736725a",
      description: "",
    },
  ],
  creative: [
    {
      id: 6,
      name: "Arnab Mukherjee",
      role: "Full Stack Website Developer",
      image: "/team/arnab.JPG",
      linkedin: "https://www.linkedin.com/in/0xarnab",
      description: "",
    },
    {
      id: 8,
      name: "Binith Kumar",
      role: "Team Lead / UI UX Designer",
      image: "/team/binith.jpg",
      linkedin: "https://www.linkedin.com/in/binith-kumar",
      description: "",
    },
    {
      id: 9,
      name: "Abhirami. M",
      role: "UI/UX design intern",
      image: "/team/abhirami.jpg",
      linkedin: "https://www.linkedin.com/in/abhirami-m-35909b19b",
      description: "",
    },
  ],
};
