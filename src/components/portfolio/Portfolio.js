import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG7 from "../../assets/linq-legal.png";
import IMG8 from "../../assets/sit-down.svg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id={"portfolio"}>
      <h5>My Recent work as Senior Full Stack Engineer in team</h5>
      <h2>Portfolio (Enterprise Scale Applications)</h2>

      <div className={"container portfolio__container"}>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG1} alt={""} />
          </div>
          <h3>Panelist - Event Platform</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://panelist.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img
              src={IMG7}
              alt={""}
              height={"230px"}
              style={{ width: "100%" , objectFit : 'cover' , transform : 'scaleX(1.5)' }}
            />
          </div>
          <h3>Linq Legal - Legal Practice Soft.</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://linqlegal.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG3} alt={""} />
          </div>
          <h3
          // style={{
          //   textAlign: "center",
          // }}
          >
            {" "}
            QR Lab - Dynamic QR Codes
          </h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"http://qrlab.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img
              src={
                "http://www.betimeful.com/static/newassets/group-39810@2x.png"
              }
              alt={""}
              height={"230px"}
            />
          </div>
          <h3>Be-timeful- React Extension</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"http://www.betimeful.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG5} alt={""} />
          </div>
          <h3>Fitcoin - Calorie Tokenizer </h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://www.aurorasolutions.io/fitcoin"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG6} alt={""} />
          </div>
          <h3>Cordly - Trading Alert Autom.</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://www.cordly.io/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG2} alt={""} />
          </div>
          <h3>Rise AI - Financial Chat-Bot</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://riseai.app/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div className={"portfolio__item-image"}>
            <img src={IMG4} alt={""} />
          </div>
          <h3>Jebbit - Data Capturer</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://www.jebbit.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
        <article className={"portfolio__item"}>
          <div
            className={"portfolio__item-image"}
            style={{
              backgroundColor: "black",
            }}
          >
            <img src={IMG8} alt={""} width={"40%"} height={"100%"} />
          </div>
          <h3>Sitdown - CFO Blogging</h3>
          <div className={"portfolio__item-cta"}>
            <a
              href={"https://www.sit-down.com/"}
              className={"btn btn-primary"}
              target={"_blank"}
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Production App
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
