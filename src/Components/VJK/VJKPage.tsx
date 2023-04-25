import DemoPage from "../Demos/DemoPage";

export default function VJKPage() {
  return (
    <DemoPage
      name="VJK Solutions"
      description="A web site for a small consulting company"
      repos={["https://github.com/vjkrammes/vjk.solutions.static"]}
      devops={["Azure static web app"]}
      languages={["Truescript/Javascript"]}
      authentication={[]}
      technologies={[
        "React 18 (functional components)",
        "Azure static web app",
      ]}
      links={["https://vjk.solutions"]}
      imageRoot="/images/vjk.solutions/"
      images={[]}
    />
  );
}
