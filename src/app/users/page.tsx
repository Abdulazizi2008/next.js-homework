import Navigation from "@/components/Navigation";

export default function UsersPage() {
  const links = [
    { title: "User1", href: "/users/user1" },
    { title: "User2", href: "/users/user2" },
  ];

  return (
    <>
      <div className="flex justify-between items-center p-6  bg-zinc-700 text-white">
        <h1 className="text-[28px] font-[600]">Users</h1>
        <Navigation links={links} />
      </div>
      <main className="pt-[200px] flex items-center justify-center">
        <p className="text-[64px] font-[600]">Welcome to Users profiles!</p>
      </main>
    </>
  );
}
