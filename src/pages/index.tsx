import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const apps = ["budgie"];
  const user = useUser();

  const { data } = api.transaction.getAll.useQuery();

  console.log(data);

  return (
    <>
      <Head>
        <title>The Container</title>
        <meta name="description" content="Aggregator page for side projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <header>
          {user?.isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton />
          )}
        </header>
        <ul>
          {apps.map((app) => (
            <li key={app}>
              <Link href="/budgie">{app}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
