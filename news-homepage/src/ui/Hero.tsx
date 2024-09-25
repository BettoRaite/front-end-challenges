import Link from "next/link";
import { getRecent } from "../actions/database/articles";
import { Resizible } from "../components/Resizible";
import { getMostRecent } from "../actions/database/articles";

export async function Hero() {
  const recent = await getMostRecent();
  if (!recent) {
    // [-]: Handle if failed to fetch most recent article.
    return;
  }
  const { id, title, lead } = recent;
  return (
    <div role="banner">
      <Resizible
        widths={{
          "/images/image-web-3-desktop.jpg": 768,
          "/images/image-web-3-mobile.jpg": 640,
        }}
      />
      <section
        className="sm:grid grid-cols-[52%_auto] mb-16 lg:gap-4 lg:mt-4"
        aria-labelledby="hero-title"
      >
        <h1
          id="hero-title"
          className="capitalize text-4xl font-inter-extra-bold mt-4 xl:text-[3rem] leading-none w-9/12 text-very-dark-blue"
        >
          {title}
        </h1>
        <div>
          <p className="mt-4 text-dark-grayish-blue text-[0.95rem]">{lead}</p>
          <Link
            className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-soft-red uppercase font-inter-extra-bold tracking-[0.3rem] leading-none text-very-dark-blue text-sm hover:bg-black hover:text-off-white transition-all duration-150"
            href={`/articles/${id}`}
            aria-label={`Read more about ${title}`}
          >
            Read more
          </Link>
        </div>
      </section>
    </div>
  );
}
