import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna ashas</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              unde quibusdam hic enim rerum dignissimos inventore, cum, odio
              laboriosam quo non eaque quae minus blanditiis nesciunt sequi
              similique libero quos?
            </p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna ashas</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              unde quibusdam hic enim rerum dignissimos inventore, cum, odio
              laboriosam quo non eaque quae minus blanditiis nesciunt sequi
              similique libero quos?
            </p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna ashas</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              unde quibusdam hic enim rerum dignissimos inventore, cum, odio
              laboriosam quo non eaque quae minus blanditiis nesciunt sequi
              similique libero quos?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
