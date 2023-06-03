import { api } from "@/utils/api";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const apps = ["budgie"];
  const user = useUser();

  const { data } = api.transaction.getAll.useQuery();

  return (
    <>
      <Head>
        <title>The Container</title>
        <meta name="description" content="Aggregator page for side projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <ul>
          {data?.map((transaction) => (
            <li key={transaction.id} className="flex gap-3 text-white">
              <span>{transaction.title}</span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
