import LineTitle from "../fragments/LineTitle";
import { SendForm } from "./Form";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-cream-300 w-full gap-5 py-10 grid place-items-center"
    >
      <LineTitle  >
        <h1
          className={` text-cream-900 text-center text-4xl  font-semibold`}
        >
          Kofirmasi Kehadiran
        </h1>
      </LineTitle>
      <div className="flex flex-col items-center w-full gap-3">
        <SendForm />
      </div>
    </div>
  );
}
