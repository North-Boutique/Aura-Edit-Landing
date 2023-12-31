import { FormEvent, useState } from "react";
import { classNames } from "@/utils/helpers";

type SubscribeProps = {
  setSubscribed: (subscribed: boolean) => void;
};

const Subscribe = ({ setSubscribed }: SubscribeProps) => {
  // const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setClicked(true);
    // await fetch("api/update-notion", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // });
    // TODO: handle Email here
    setSubscribed(true);
  }

  return (
    <form
      className={
        "font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center"
      }
      onSubmit={handleSubmit}
    >
      <input
        className={
          "border border-r-0 border-palette-light rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus-visible:ring-[#7e4721]"
        }
        type={"email"}
        required={true}
        placeholder={"Your email here"}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type={"submit"}
        className={classNames(
          clicked ? "pointer-events-none	opacity-75" : "",
          `py-3 px-4 bg-[#f5d2c6] hover:opacity-75 text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7e4721]`,
        )}
      >
        {"Subscribe"}
      </button>
    </form>
  );
};

export default Subscribe;
