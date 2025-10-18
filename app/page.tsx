import Image from "next/image";
import { AnimeHero } from "./components/AnimeHero";
import { AnimeSearch } from "./components/AnimeSearch";

export default function Home() {
  return (
   <div className="min-h-screen">
    <AnimeHero />
    <div className="container mx-auto px-4 py-12 space-y-12">
      <AnimeSearch />
    </div>
   </div>
  );
}
