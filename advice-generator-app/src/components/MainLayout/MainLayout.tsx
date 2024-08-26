import styles from "./mainLayout.module.css";
import { useState, useEffect } from "react";
import { z } from "zod";
import { getRandInt } from "punyutils";
import { AdviceCard } from "../AdviceCard/AdviceCard";

const apiResponseSchema = z.object({
  slip: z.object({
    id: z.number(),
    advice: z.string(),
  }),
});
const URL = "https://api.adviceslip.com/advice";
async function getAdvice() {
  /*
  Random advice endpoint does not work correcly,so I had to get advice by id.
  */
  const hardIdLimit = 200;
  const attempts = 10;
  const requestPromises = [];

  for (let i = 0; i < attempts; ++i) {
    const id = getRandInt(0, hardIdLimit);
    requestPromises.push(fetch(`${URL}/${id}`));
  }
  const response = await Promise.any(requestPromises);
  const data = await response.json();
  return apiResponseSchema.parse(data);
}

type Advice = {
  id?: number;
  text: string;
};
export function MainLayout() {
  const [advice, setAdvice] = useState<Advice>({
    text: "",
  });
  const [refetch, setRefetch] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    let ignoreRequest = false;

    async function main() {
      try {
        const { slip } = await getAdvice();
        if (!ignoreRequest) {
          setAdvice({
            id: slip.id,
            text: slip.advice,
          });
        }
      } catch (error) {
        console.error("Failed to fetch advice.", error);
      }
    }
    main();
    return () => {
      ignoreRequest = true;
    };
  }, [refetch]);
  function handleNextAdvice() {
    setRefetch(!refetch);
  }
  return (
    <main className={styles.layout}>
      <AdviceCard
        text={advice.text}
        adviceCount={advice?.id}
        onNextAdvice={handleNextAdvice}
      />
    </main>
  );
}
