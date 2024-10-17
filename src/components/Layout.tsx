import Header from "./Header";

export default function Layout(props: { children: any }) {
  return (
    <main>
      <Header />
      {props.children}
    </main>
  );
}
