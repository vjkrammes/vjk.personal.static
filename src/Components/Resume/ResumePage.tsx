import "./ResumePage.css";

export default function ResumePage() {
  return (
    <div className="pagegrid">
      <a
        className="androidbutton"
        href="./documents/KrammesResume.pdf"
        download="KrammesResume"
        rel="noreferrer"
        target="_blank"
      >
        <span>Click here to download</span>
      </a>
      <div className="resume">
        <object data="/documents/KrammesResume.pdf" type="application/pdf">
          <p></p>
        </object>
      </div>
    </div>
  );
}
