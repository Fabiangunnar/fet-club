import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import React, {useRef} from "react";

type Props = {};

const About = (props: Props) => {
  const targetRef = useRef(null);

  return (
    <MainLayout targetRef={targetRef}>
      <main className="text-3xl">
        blue
        <div ref={targetRef} className="pt-12">
          <Link href="/" className=" text-3xl">
            Home
          </Link>{" "}
        </div>
      </main>
    </MainLayout>
  );
};

export default About;
