import color_box_img from "./assets/color-box.png";
import creative_navbar_img from "./assets/creative-navbar.png";
import keo_bua_bao from "./assets/keo_bua_bao.png";
import meme from "./assets/meme.jpg";
import user_list from "./assets/user_list.png";



const data = {
    name: {
        first: 'Nguyen',
        middle: 'Viet',
        last: 'Thai'
    },
    nick_name: 'White-Bear',
    position: ['Front End Developer', 'Back End Developer', 'Full Stack Developer'],
    about: {
        experiment_years: 1,
        worked_for: 1,
        projects_number: 2
    },
    contact : {
        phone : "0398655613",
        gmail : "thainv25@gmail.com",
    },
    skills: [
        {
            title: 'Front End Skills',
            detail: [
                {
                    skill_name: 'HTML',
                    level: "Medium",
                },
                {
                    skill_name: 'CSS',
                    level: "Medium"
                },
                {
                    skill_name: 'Java Script',
                    level: "Medium"
                },
                {
                    skill_name: 'React JS',
                    level: "Medium"
                },
                {
                    skill_name: 'Boot Strap',
                    level: "Medium"
                },
            ]
        },
        {
            title: 'Back End Skills',
            detail: [{
                skill_name: 'Java',
                level: "Medium"
            }]
        },
        {
            title: 'Language',
            detail: [
                {
                    skill_name: 'English',
                    level: "Medium"
                },
                {
                    skill_name: 'Japanese',
                    level: "Medium"
                },
                {
                    skill_name: 'VietNamese',
                    level: "Master"
                },
            ]
        },
        {
            title: 'Also Know',
            detail: [
                {
                    skill_name: 'Git',
                    level: "Medium"
                },
                {
                    skill_name: 'GitHub',
                    level: "Medium"
                },
                {
                    skill_name: 'SQL',
                    level: "Master"
                },
            ]
        }
    ],
    projects: [
        {
            project_name: "color-box-1",
            project_img: color_box_img,
            description: "practice javascript skill, add box and randoms color",
            git_hub_link: "https://github.com/thainv2501/color-box-1",
            demo_link: "https://thainv2501.github.io/color-box-1/"
        },
        {
            project_name: "Creative Nav Bar",
            project_img: creative_navbar_img,
            description: "practice CSS skill",
            git_hub_link: "https://github.com/thainv2501/creative-navbar",
            demo_link: "https://thainv2501.github.io/creative-navbar/"
        },
        {
            project_name: "Rock-paper-scissor",
            project_img: keo_bua_bao,
            description: "A game created by java script",
            git_hub_link: "https://github.com/thainv2501/Rock-papper-scissor",
            demo_link: "https://thainv2501.github.io/Rock-papper-scissor/"
        },
        {
            project_name: "meme-generator",
            project_img: meme,
            description: "A meme generator created by React JS",
            git_hub_link: "https://github.com/thainv2501/meme-generator",
            demo_link: ""
        },
        {
            project_name: "user-list",
            project_img: user_list,
            description: "Practice React JS like : fetch API, useState, useEffect",
            git_hub_link: "https://github.com/thainv2501/user-list",
            demo_link: "https://user-list-application.herokuapp.com/"
        },

    ]
}

export default data;