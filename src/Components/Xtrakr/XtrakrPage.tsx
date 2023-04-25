import DemoPage from "../Demos/DemoPage";

export default function XtrakrPage() {
  return (
    <DemoPage
      name="Xtrakr"
      description="Program to track expenses for a small company"
      repos={["https://github.com/vjkrammes/XTrakr"]}
      devops={["Azure DevOps"]}
      languages={["C#"]}
      authentication={[]}
      technologies={[
        "Windows Presentation Foundation (WPF)",
        "MS SQL",
        "Dapper",
      ]}
      links={[]}
      imageRoot="/images/xtrakr/"
      images={[]}
    />
  );
}
