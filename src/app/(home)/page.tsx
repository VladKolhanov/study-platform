import "server-only";

import { PageProps } from "@/types/app";

export default function Home({}: PageProps) {
  return (
    <div className="text-3xl text-center mt-16 font-inter">Hello world</div>
  );
}
