import "./DemoPageItem.css";

type Props = {
  label: string;
  value: string | string[];
  valuesAreLinks: boolean;
};

export default function DemoPageItem({ label, value, valuesAreLinks }: Props) {
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((v, i) => {
          if (i === value.length - 1) {
            return (
              <div className="dpi__container dpi__bordered">
                {i === 0 && <div className="dpi__label">{label}</div>}
                {i !== 0 && <div className="dpi__blank">&nbsp;</div>}
                <div className="dpi__content">
                  {valuesAreLinks && (
                    <p>
                      <a href={v} target="_blank" rel="noreferrer">
                        {v}
                      </a>
                    </p>
                  )}
                  {!valuesAreLinks && <p>{v}</p>}
                </div>
              </div>
            );
          } else {
            return (
              <div className="dpi__container">
                {i === 0 && <div className="dpi__label">{label}</div>}
                {i !== 0 && <div className="dpi__blank">&nbsp;</div>}
                <div className="dpi__content">
                  {valuesAreLinks && (
                    <p>
                      <a href={v} target="_blank" rel="noreferrer">
                        {v}
                      </a>
                    </p>
                  )}
                  {!valuesAreLinks && <p>{v}</p>}
                </div>
              </div>
            );
          }
        })}
      </>
    );
  } else {
    return (
      <div className="dpi__container dpi__bordered">
        <div className="dpi__label">{label}</div>
        <div className="dpi__content">
          <p>{value}</p>
        </div>
      </div>
    );
  }
}
