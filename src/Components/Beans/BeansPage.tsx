import DemoPage from "../Demos/DemoPage";

export default function BeansPage() {
  return (
    <div className="container">
      <DemoPage
        name="Beans"
        description="Game simulating a commodities exchange. Players can buy and sell various colored beans to and from the exchange and other players. Bean prices change nightly"
        repos={[
          "https://github.com/vjkrammes/Beans",
          "https://github.com/vjkrammes/beans.ui",
          "https://github.com/vjkrammes/Beans.Background",
        ]}
        devops={["Azure DevOps"]}
        languages={["C#", "Truescript/Javascript"]}
        authentication={["JSON Web Token(JWT)", "Auth0"]}
        technologies={[
          "ASP.Net Core",
          "React 18 (functional components)",
          "Azure Functions",
          "MS SQL",
          "Dapper",
          "Azure BLOB storage",
          "JWT",
        ]}
        links={["https://beans.azurewebsites.net"]}
        imageRoot="/images/beans/"
        images={[]}
      />
    </div>
  );
}
