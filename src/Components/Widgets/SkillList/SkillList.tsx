import "./SkillList.css";

type SkillListItem = {
  label: string;
  description?: string | undefined;
};

type Props = {
  items: SkillListItem[];
};

export default function SkillList({ items }: Props) {
  return (
    <ul className="sl__list">
      {items.map((i, ix) => {
        return (
          <li className="sl__itemlist" key={ix}>
            <p>
              <span className="sl__label">{i.label}</span>{" "}
              {i.description && <span>&mdash;&nbsp;{i.description}</span>}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
