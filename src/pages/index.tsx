import { useState } from "react";
import Image from "next/image";
import Subscribe from "@/components/Subscribe";

const IndexPage = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className={"relative h-screen w-screen"}>
      <Image
        className={
          "absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        }
        alt={"main background image"}
        src={"/images/mainBackgroundImage.png"}
        width={1920}
        height={1080}
      />

      <div
        className={
          "absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center"
        }
      >
        <Image
          className={"pb-10"}
          src={"/images/icon.ico"}
          width={"75"}
          height={"75"}
          alt={"icon"}
        />
        {subscribed ? (
          <h1
            className={
              "font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug"
            }
          >
            {"You have subscribed!"}
          </h1>
        ) : (
          <div className={"space-y-8"}>
            <h1
              className={
                "font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight"
              }
            >
              {"Aura Edit - Cross Platform"}{" "}
              <span className={"text-[#f5d2c6]"}>{"PDF"}</span>
              {" Editor"}
            </h1>
            <p
              className={
                "font-secondary text-palette-light text-base md:text-lg lg:text-xl"
              }
            >
              {
                "Aura Edit is a powerful and feature-rich PDF editor designed to make working "
              }
              {"with PDF documents a breeze. Whether you need to annotate, edit, merge,"}
              {"split, or convert PDF files, Aura Edit has you covered."}
            </p>
            <Subscribe setSubscribed={setSubscribed} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
