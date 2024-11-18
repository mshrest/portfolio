import React from "react";
import { BrowserRouter } from "react-router-dom";
import './style.css';
import Button from './Components/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Icon from '@mdi/react';
import { mdiGitlab } from '@mdi/js';
import Skills from "./Components/Competencies";
import Project from './Components/Projects';
import Navbar from "./Components/Navigation";
import Contact from "./Components/Contact";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const App = () => {
    const competencies = ['Cloud Computing (AWS, GCP, Azure basics)', 'IAC (Terrform, AWS CloudFormation)','DevOps','CI/CD (GitHub Actions, GitLab, Cloud services)','Data Pipeline (AWS)', 'dbt Fundamentals','Data analysis (Python, SQL)','Containerization (Docker, GCP Kubernetes)', 'Databases (MySQL, Firebase)', 'Web Development (ReactJS)'];
    const images = [
        {
            name: 'AWS Cloud Practioner',
            img: require('./images/AWS-1.jpg')
        },
        {
            name: 'AWS Associate',
            img: require('./images/AWS-2.jpg')
        },
        {
            name: 'Google Cloud Associate',
            img: require('./images/Google.jpg')
        },
        {
            name: 'GKE',
            img: require('./images/GKE.jpg')
        },
        {
            name: 'Terraform',
            img: require('./images/terraform.jpg')
        },
        {
            name: 'dbt Fundamentals',
            img: require('./images/dbt.png')
        },
        {
            name: 'Coding for Data',
            img: require('./images/data.jpg')
        }
    ];

    const projects = [
        {
            title: 'My Portfolio',
            text: 'This self-practice project is created to build own portfolio using ReactJS.',
            button: 'GitHub Link',
            link: ''
        },
        {
            title: 'AWS DevOps',
            text: 'This project deals with deploying Nginx server to AWS EC2 using Terraform as IaC and CI/CD with GitLab.',
            button: 'GitLab Link',
            link: 'https://gitlab.com/malashres/terraform-aws/'
        },
        {
            title: 'GitLab Runner',
            text: 'The aim of this project is to enable a GitLab Runner, add a job to build the container and store in a GitLab Container Registry.',
            button: 'GitLab Link',
            link: 'https://gitlab.com/malashres/container-registry/'
        },
        {
            title: 'Deploying application to GKE',
            text: 'This project deals with deploying an open source application to Google Kubernetes Engine using Terraform.',
            button: 'GitHub Link',
            link: 'https://github.com/mshrest/terraform-kubernetes/'
        },
        {
            title: 'Creating SNS Topic using AWS CloudFormation template ',
            text: 'This project deals with creating SNS topic using AWS CloudFormation template in multiple regions.',
            button: 'GitHub Link',
            link: 'https://github.com/mshrest/sns-cloudformation/'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const containerStyles = {
        width: "500px",
        height: "358px",
        borderRadius: "15px 15px 15px 15px",
        margin: "5px 2px 2px 65px",
    };

    const slider = {
        width: "630px",
        margin: "0px 20px 0px 90px"
    };

    const psettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const pslider = {
        width: "auto",
        margin: "0px 40px 0px 40px"
    }

    return(
        <div>
            <body>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
                <div className="card">
                    <img className="card-img" src={require('./images/me.jpg')} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">Hello!</h4>
                        <p className="card-text">I am Mala Shrestha, a certified and experienced Cloud Engineer, having keen interest in technologies. My areas of expertise are cloud platforms(AWS and GCP), Azure basics, DevOps, Containerization(Docker and GCP Kubernetes), IAC (Terraform and AWS CloudFormation), Web development (ReactJS), etc. I am opened to new challenges and perceive them as opportunity to learn and grow.
                        <br/>
                        <br/>
                        <a href="mala_shrestha_cv.pdf" download>Dowload CV</a> 
                        <Button icon = {<LinkedInIcon className="button"/>} link="https://www.linkedin.com/in/malashrestha/"/>
                        <Button icon = {<GitHubIcon className="button"/>} link="https://github.com/mshrest"/>
                        <Button icon = {<Icon path={mdiGitlab} size={1} className="button"/>} link="https://gitlab.com/users/malashres/projects"/>
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div id="skills" className="container">
                    <header>
                        <div>Competencies</div>
                        <div>Certificates</div>
                    </header>
                    <div className="skill-body">
                        <ul className = "expertise">
                            {competencies.map((competence) => <Skills skill={competence} />)}
                        </ul>
                    </div>
                    <div className="cert-body">
                        <div style = {slider}>
                            <Slider {...settings}>
                                {images.map((i) => (
                                    <div>
                                        <img src={i.img} alt="" style ={containerStyles}/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div id="project" className="p-container">
                    <div style = {pslider}>
                        <h3>Explore my Projects</h3>
                        <Slider {...psettings}> 
                            {projects.map((p) => <Project title={p.title} text={p.text} button={p.button} link={p.link} />)}
                        </Slider>
                    </div>
                </div>
                <div id="contact" className="contact-container">
                    <h2><EmailOutlinedIcon className="contact-icon"/>Get In Touch</h2>
                    <div>
                        <Contact/>
                    </div>
                </div>
                <div className="footer-container">
                    <footer className="footer-text">
                        &copy; 2024 Mala's Portfolio. All rights reserved.
                    </footer>
                </div>
            </body>
        </div>
    )
}

export default App;
