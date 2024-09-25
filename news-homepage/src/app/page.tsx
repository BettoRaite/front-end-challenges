import { RecentNews } from "../ui/RecentNews";
import { Hero } from "../ui/Hero";
import { Trending } from "../ui/Trending";

export default function Home() {
  return (
    <>
      <div className="md:flex items-start justify-start md:gap-4 lg:gap-8 lg:grid grid-cols-[65%_auto]">
        <Hero />
        <RecentNews />
      </div>
      <Trending />
    </>
  );
}
