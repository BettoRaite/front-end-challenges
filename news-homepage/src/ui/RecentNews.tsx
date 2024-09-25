import Link from "next/link";
import { Divider } from "../components/Divider";
import { SelectArticle } from "../lib/database/schema";
import { getRecent } from "../actions/database/articles";

function Card({ id, title, lead }: SelectArticle) {
  return (
    <article>
      <h3 className="text-off-white hover:text-soft-orange transition-all duration-150 font-inter-extra-bold mb-2 text-xl">
        <Link href={`/articles/${id}`}>{title}</Link>
      </h3>
      <p className="text-grayish-blue ">{lead}</p>
    </article>
  );
}

export async function RecentNews() {
  const maxItems = 3;
  const start = 1;

  const recent = await getRecent();
  const sliced = recent.slice(start, start + maxItems);

  return (
    <section className="bg-very-dark-blue px-4 py-6 mt-16 sm:mt-0">
      <h1 className="text-4xl font-bold text-soft-orange mb-8">New</h1>
      {sliced.map((item, i) => {
        const notLast = i + 1 < sliced.length;
        return (
          <>
            <Card key={item.id} {...item} />;{notLast && <Divider />}
          </>
        );
      })}
    </section>
  );
}
