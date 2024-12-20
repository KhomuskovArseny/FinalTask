import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-[90%] md:w-[75%]">
          <h1 className="text-center mb-6">
            <span className="block text-2xl mb-2">FinalTask</span>
            <span className="block text-4xl font-bold">Completed by Khomuskov Arseny</span>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo_big.png"
              width="727"
              height="231"
              alt="main banner"
              className="rounded-xl border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
