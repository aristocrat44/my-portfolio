import "../../styles/note-paper.scss";

interface ProjectProps {
  company: string;
  website: string;
  project?: string;
  desc: string;
  timeframe: string;
  title: string;
  work: string;
  tech: string[];
}

const NotePaper = ({
  company,
  website,
  project,
  desc,
  timeframe,
  title,
  work,
  tech,
}: ProjectProps) => {
  return (
    <div>
      <div className="wrapper">
        <div className="form__contact">
          <fieldset>
            <p>
              Company: <span className="company-name">{company}</span> <br />{" "}
              {desc}
            </p>
            <p>
              Desc: {desc} <br />
              <a target="_blank" href={website} rel="noopener noreferrer">
                <span className="form__field field--name">{website}</span>
              </a>
              <br />
              <a target="_blank" href={project} rel="noopener noreferrer">
                <span className="form__field field--name">{project}</span>
              </a>
            </p>
            <p>
              Position: {title}
              <br />
              Time frame: {timeframe}
            </p>
            <p>Work: {work}</p>
            <p>
              Tech Stack:{" "}
              {tech.map((each, i) => (
                <span key={i}>
                  {each}
                  {i === tech.length - 1 ? "." : ", "}
                </span>
              ))}
            </p>
          </fieldset>
        </div>
      </div>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
      >
        <defs>
          <filter id="blur0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
          </filter>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
          </filter>
          <filter id="blur4">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default NotePaper;
