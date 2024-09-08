import Navigation from "../components/Navigation";

export default function Home() {
  const links = [
    { title: "Home", href: "/" },
    { title: "Users", href: "/users" },
  ];

  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between items-center p-6  bg-zinc-700 text-white">
        <h1 className="text-[28px] font-[600]">Home</h1>
        <Navigation links={links} />
      </div>
      <main className="pt-[200px] flex items-center justify-center">
        <h2 className="text-[64px] font-[600]">Welcome to the Homepage</h2>
      </main>
    </div>
  );
}
