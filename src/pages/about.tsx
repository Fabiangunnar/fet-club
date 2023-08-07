import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <MainLayout>
      <main className="text-3xl">
        blue
        <div className="pt-12">
          <Link href="/" className=" text-3xl">
            Home
          </Link>{" "}
        </div>
      </main>
    </MainLayout>
  );
};

export default About;
