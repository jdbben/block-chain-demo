import Block from "@/components/Block";
import NewData from "@/components/NewData";
import { HashFunc } from "@/lib/hash";

export default function Home() {
  HashFunc();
  return (
    <div className="flex  h-screen w-full justify-center mx-auto items-center"></div>
  );
}
