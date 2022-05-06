import './Services.css'
import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={"container services__container"}>
                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Ensure the technical feasibility of UI/UX designs</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Optimize application for maximum speed and scalability.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Proficient understanding of web markup, including HTML5, CSS3.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Proficient understanding of code versioning tools, such as Git / Mercurial / SVN.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Good understanding of SEO principles and ensuring that application will adhere to them..</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3>Backend Development</h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Ability to translate Wireframes and PSD Designs into functional web apps using HTML5, React , Node.js, and Mongo.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Binding of UI elements to JavaScript object models.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Creating RESTful/GRAPH QL services with Node.js.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Create Unit and Integration tests to ensure the quality of code.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Write code that is cross-platform and cross-device compatible.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Experience using asynchronous RESTful services (JSON)</p>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h3> Personality Traits </h3>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Plan, develop, and maintain the user interface just the way demanded.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Working in scrum and aigle environments.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Work in a team with trait of meeting deadlines.</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Ability to capture mind-picture of clients .</p>
                        </li>
                        <li>
                            <BsCheck2 className={"service__list-icon"} />
                            <p>Proficient in communication skills (Eng/Urdu/Arabic).</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services