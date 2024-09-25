import { getTrending } from "../actions/database/articles";
import { SelectArticle } from "../lib/database/schema";
import Image from "next/image";
import Link from "next/link";

interface CardProps extends SelectArticle {
  place: number;
}
export function Card({ title, lead, place, coverUrl, id }: CardProps) {
  return (
    <article className="flex gap-6">
      <div className="col-start-1 bg-red-50 relative min-w-28 min-h-28 h-full">
        <Image
          src={coverUrl ?? ""}
          alt={title}
          fill={true}
          className="object-cover"
        />
      </div>
      <section className="col-span-2">
        <h1 className="font-inter-extra-bold text-3xl text-soft-red">
          {place < 10 ? `0${place}` : place}
        </h1>

        <h2 className="mt-2">
          <Link
            className="font-inter-extra-bold text-lg hover:text-soft-red transition-all duration-150"
            href={`/articles/${id}`}
          >
            {title}
          </Link>
        </h2>

        <p className="text-dark-grayish-blue mt-1 text-[0.95rem]">{lead}</p>
      </section>
    </article>
  );
}

export async function Trending() {
  const trending = await getTrending();
  return (
    <section className="flex flex-col gap-8 my-16 lg:flex-row lg:mt-6">
      {trending.map((item, index) => (
        <Card key={item.id} {...item} place={index + 1} />
      ))}
    </section>
  );
}
