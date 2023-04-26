import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <div className="heading">V. James (&quot;Jim&quot;) Krammes</div>
      </div>
      <div className="content">
        <div className="hp__intro">
          Hello, and welcome to my personal home page.
        </div>
        <div className="hp__skills">
          <ul className="hp__skilllist">
            <li className="hp__skillitem">
              <span className="hp__title">Networking</span>&nbsp;
              <p>
                I have more than 25 years experience with data network
                engineering, including switches, routers and firewalls from
                manufacturers like Cisco (including Linksys), Synoptics/Bay
                Networks/Nortel, Palo Alto, Netgate and Checkpoint.
              </p>
              <p>
                My first router was a Cisco AGS+; my first firewall was the
                original Cisco PIX. I have worked with government agencies at
                the municipal and state levels, as well as with private
                corporations ranging in size from 200 to 15,000+ employees.
              </p>
            </li>
            <li className="hp__skillitem">
              <span className="hp__title">Programming</span>&nbsp;
              <p>I have been programming since I was in my teens.</p>
              <p>
                My first real computer was an HP/3000 minicomputer. On it I
                learned{" "}
                <a
                  href="https://en.wikipedia.org/wiki/BASIC"
                  target="_blank"
                  rel="noreferrer"
                >
                  BASIC
                </a>
                , a little bit of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/APL_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  APL
                </a>
                , and an{" "}
                <a
                  href="https://en.wikipedia.org/wiki/ALGOL"
                  target="_blank"
                  rel="noreferrer"
                >
                  ALGOL
                </a>
                -like language (with in-line assembly) called{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Systems_Programming_Language"
                  target="_blank"
                  rel="noreferrer"
                >
                  SPL
                </a>
                .
              </p>
              <p>
                While attending college at Miami University in Oxford, Ohio, I
                also learned{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Pascal_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pascal
                </a>
                ,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/PL/I"
                  target="_blank"
                  rel="noreferrer"
                >
                  PL/I
                </a>
                ,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/COBOL"
                  target="_blank"
                  rel="noreferrer"
                >
                  COBOL
                </a>
                ,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Fortran"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fortran
                </a>
                , and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/IBM_Basic_Assembly_Language_and_successors"
                  target="_blank"
                  rel="noreferrer"
                >
                  360 Assembler
                </a>
                .
              </p>
              <p>
                After transferring to The Ohio State University, I picked up a
                language called{" "}
                <a
                  href="https://en.wikipedia.org/wiki/CLU_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clu
                </a>{" "}
                and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Lisp_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lisp
                </a>
                .
              </p>
              <p>
                It was during my first real job as a systems programmer (not a
                programming job, but more about maintenance of operating
                systems) that I finally learned the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/C_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  C
                </a>{" "}
                programming language and began using it extensively.
              </p>
              <p>
                I was moved out of the systems programming role when the
                minicomputers were replaced by PCs and began my networking
                career managing{" "}
                <a
                  href="https://en.wikipedia.org/wiki/NetWare"
                  target="_blank"
                  rel="noreferrer"
                >
                  Novell Netware
                </a>{" "}
                and doing application development in COBOL and maintaining and
                customizing a bulletin-board system in C. I also developed an
                insurance agency information system using{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visual Basic
                </a>
                .
              </p>
              <p>
                I learned Java, JavaScript, CSS and HTML while setting up web
                pages for myself and friends.
              </p>
              <p>
                Finally, in 2015 after not doing any programming in a decade or
                so, I needed to write some automation and workflow tools for my
                (then) current position. I checked to see what was new in the C
                world, and began learning the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  C&#x266f;
                </a>{" "}
                language and the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/.NET"
                  target="_blank"
                  rel="noreferrer"
                >
                  .Net
                </a>{" "}
                ecosystem.
              </p>
              <p>
                I have also recently learned TrueScript and the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Kotlin_(programming_language)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kotlin
                </a>{" "}
                language.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
