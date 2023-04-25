import DemoPage from "../Demos/DemoPage";

export default function JimCoPage() {
  return (
    <div className="container">
      <DemoPage
        name="JimCo"
        description="Three web sites for a fictional retail merchant. A retail site, an employee portal and a vandor portal are provided."
        repos={[
          "https://github.com/vjkrammes/JimCo.API",
          "https://github.com/vjkrammes/jimco.retailsite",
          "https://github.com/vjkrammes/jimco.employeeportal",
          "https://github.com/vjkrammes/jimco.vendorportal",
        ]}
        devops={["Azure DevOps"]}
        languages={["C#", "Truescript/Javascript"]}
        authentication={[
          "None for retail site",
          "JSON Web Token for the other sites",
          "Auth0",
        ]}
        technologies={[
          "ASP.Net Core",
          "React 18 (functional components)",
          "MS SQL",
          "Dapper",
          "JWT",
        ]}
        links={[
          "https://jimcoretailsite.azurewebsites.net",
          "https://jimcoemployeeportal.azurewebsites.net",
          "https://jimcovendorportal.azurewebsites.net",
        ]}
        imageRoot="/images/jimco/"
        images={[]}
      />
    </div>
  );
}
