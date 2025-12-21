import { Metadata } from "next";
import Header from "../components/header";

export const metadata: Metadata = {
  title: {
    template: "%s | DevStore",
    default: "DevStore",
  }
};

export default function StoreLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
