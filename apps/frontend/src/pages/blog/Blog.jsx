import React from "react";
import "./blog.css"; // Make sure the CSS file name matches

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="video-container">
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/EtqW94tiQ-8"
                    title="I just unlocked coding Zen Mode, Project 1 | #OpenToWork (Episode 3)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <h1 className="blog-title">
                #Discovering Zen in Coding: My Job Search Journey Continues
            </h1>
            <div className="blog-metadata">
                Posted on January 8, 2024, by Micah Nettey
            </div>
            <div className="blog-content">
                <p>
                    In the latest episode of what I'm tentatively calling the{" "}
                    <em>"#opentowork series"</em> (or maybe <em>"Hire Me!"</em>
                    —feedback welcome!), I dive deep into the exhilarating
                    experience of my first project revamp. After dedicating a
                    solid 54 hours, I've hit a coding "zen mode" that's hard to
                    put into words. It's a blend of passion, satisfaction, and
                    sheer joy that only fellow code lovers can truly understand.
                </p>

                <p>
                    This episode marks a crucial step in my job search saga,
                    where despite the lack of a job offer, my spirit remains
                    undeterred. My project? Overhauling my personal portfolio
                    website. For too long, it boasted style over substance, with
                    glaring functional gaps that needed urgent fixing. I tackled
                    key areas like the "Contact Me" page, VPS hosting, and
                    integrating Google Sheets API for dynamic content updates,
                    all aimed at enhancing the site's usability and performance.
                </p>

                <p>
                    Leveraging a YouTube template for the frontend allowed me to
                    focus on the backend, making significant strides in
                    functionality without getting bogged down in design details.
                    The result? A more interactive homepage featuring a video
                    greeting, seamless social media integration, and a
                    customizable theme—each element a testament to the power of
                    React and my growing proficiency in web development.
                </p>

                <p>
                    But it wasn't just about fixing bugs. This journey was also
                    an educational one, pushing me to adopt a more professional
                    approach to using Git and GitHub, mirroring real-world
                    software development practices. The challenges faced,
                    especially with VPS configuration and ensuring seamless
                    navigation across the site, were invaluable lessons in
                    persistence and problem-solving.
                </p>

                <p>
                    Looking ahead, I'm keen on further refining the website,
                    from enhancing the contact form to possibly adding a blog
                    section—a space to share my ongoing projects, interests, and
                    learning experiences. This project is far from over; it's
                    evolving, mirroring my own journey in tech.
                </p>

                <p>
                    Through this process, I've not only sharpened my technical
                    skills but also gained insights into development pipelines,
                    the nuances of device compatibility, and the importance of a
                    responsive design. It's a continuous learning curve, one
                    that I'm excited to navigate as I explore new technologies
                    and tackle upcoming projects.
                </p>

                <p>
                    If you're on a similar path or simply enjoy the world of
                    coding, I invite you to join me on this journey. Your
                    support, suggestions, and, yes, job leads are always
                    welcome. Here's to finding joy in the code and opportunity
                    in every challenge. Let's keep the conversation going and
                    the projects flowing!
                </p>
            </div>
            <div className="blog-cta">
                <p>
                    If you're on a similar path or simply enjoy the world of
                    coding, I invite you to join me on this journey. Let's keep
                    the conversation going and the projects flowing!
                </p>
            </div>
        </div>
    );
};

export default Blog;
