import Navigation from "@/components/Navigation";

export default function User2Page() {
  const links = [{ title: "Friend's Name", href: "/users/user2/friendsname" }];

  return (
    <>
      <div className="flex justify-between items-center p-6  bg-zinc-700 text-white">
        <h1>User1</h1>
      </div>
      <main className="pt-[200px] flex items-center justify-center">
        <p className="text-[64px] font-[600]">Welcome to Sodiq's profile!</p>
      </main>
    </>
  );
}
