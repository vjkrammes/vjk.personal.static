import DemoPage from "../Demos/DemoPage";

export default function LedgerPage() {
  return (
    <DemoPage
      name="Ledger"
      description="Desktop application that tracks bills, bill payments and online identities used to pay bills"
      repos={["https://github.com/vjkrammes/Ledger8"]}
      devops={["Azure DevOps"]}
      languages={["C#"]}
      authentication={["Password"]}
      technologies={[
        "Windows Presentation Foundation (WPF)",
        "MS SQL",
        "Entity Framework Core",
      ]}
      links={[]}
      imageRoot="/images/ledger/"
      images={[]}
    />
  );
}
