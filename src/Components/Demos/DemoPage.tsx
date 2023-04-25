import { MdArrowBack, MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DemoPageItem from "../Widgets/DemoPageItem/DemoPageItem";
import "./DemoPage.css";

type Props = {
  name: string;
  description: string;
  repos: string[];
  devops: string[];
  languages: string[];
  authentication: string[];
  technologies: string[];
  links: string[];
  imageRoot: string;
  images: string[];
};

export default function DemoPage({
  name,
  description,
  repos,
  devops,
  languages,
  authentication,
  technologies,
  links,
  imageRoot,
  images,
}: Props) {
  const navigate = useNavigate();
  const hasImages = images && images.length !== 0;
  return (
    <div className="demop__container">
      <div className="header">
        <div className="heading">{name}</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate("/")}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
        <button
          className="secondarybutton headerbutton-right"
          onClick={() => navigate("/Demos")}
        >
          <span>
            <MdArrowBack /> Demos
          </span>
        </button>
      </div>
      <div className="content">
        {hasImages && (
          <div className="demop__slideshowbuttoncontainer">
            <button className="demop__slideshowbutton">
              <span>Click here to see the slideshow</span>
            </button>
          </div>
        )}
        <div className="demop__body">
          <DemoPageItem label="Name" value={name} valuesAreLinks={false} />
          <DemoPageItem
            label="Description"
            value={description}
            valuesAreLinks={false}
          />
          <DemoPageItem label="Repo(s)" value={repos} valuesAreLinks={true} />
          <DemoPageItem label="CI/CD" value={devops} valuesAreLinks={false} />
          <DemoPageItem
            label="Language(s)"
            value={languages}
            valuesAreLinks={false}
          />
          <DemoPageItem
            label="Authentication"
            value={authentication}
            valuesAreLinks={false}
          />
          <DemoPageItem
            label="Technologies"
            value={technologies}
            valuesAreLinks={false}
          />
          <DemoPageItem label="Links" value={links} valuesAreLinks={true} />
        </div>
      </div>
    </div>
  );
}
