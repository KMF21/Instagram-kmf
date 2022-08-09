import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>instagram-kmf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      {/* Header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal />
      

    </div>
  );
};

export default Home;
// flex min-h-screen flex-col items-center justify-center py-2
