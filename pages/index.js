import Head from "next/head"
import { useRouter } from 'next/router';
import { attributes, react as HomeContent } from '../content/home.md'


export default function  Home (){

    let { title, cats } = attributes
    const router = useRouter();
    const redirectToAnotherPage = () => {
      router.push('/blog');
    };
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
        <div>
          <button onClick={redirectToAnotherPage}>ir para o blog</button>
        </div>
      </>
    )
}