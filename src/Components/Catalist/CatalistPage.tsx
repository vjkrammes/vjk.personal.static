import DemoPage from "../Demos/DemoPage";

export default function CatalistPage() {
  return (
    <DemoPage
      name="Catalist"
      description="Categorized 'ToDo' list which can help track assignments, budgets, etc. Items can be (but are not required to be) assigned to and grouped by category."
      repos={["https://github.com/vjkrammes/Catalist"]}
      devops={[]}
      languages={["Kotlin"]}
      authentication={[]}
      technologies={["Native Android app", "JetPack Compose", "SQLite"]}
      links={[]}
      imageRoot="/images/catalist/"
      images={[]}
    />
  );
}
