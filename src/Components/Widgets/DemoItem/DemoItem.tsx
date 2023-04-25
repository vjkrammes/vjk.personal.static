import { useNavigate } from "react-router-dom";
import "./DemoItem.css";

const DEFAULT_BACKGROUND_IMAGE: string = "/images/amazon-horned-frog.jpg";
const DEFAULT_SHADOW_COLOR: string = "var(--base-color)";
const DEFAULT_TEXT_COLOR: string = "var(--black-color)";

type Props = {
  title: string;
  link: string;
  blurb: string;
  backgroundImage?: string | undefined;
  textColor?: string | undefined;
  shadowColor?: string | undefined;
};

export default function DemoItem({
  title,
  link,
  blurb,
  backgroundImage,
  textColor,
  shadowColor,
}: Props) {
  const navigate = useNavigate();
  const bg = backgroundImage || DEFAULT_BACKGROUND_IMAGE;
  const shadow = shadowColor || DEFAULT_SHADOW_COLOR;
  const text = textColor || DEFAULT_TEXT_COLOR;
  return (
    <div
      className="di__container"
      data-title={title}
      data-blurb={blurb}
      style={{
        color: `${text}`,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        textShadow: `0px 0px 5px ${shadow}`,
      }}
      onClick={() => navigate(link)}
      title={blurb}
    ></div>
  );
}
