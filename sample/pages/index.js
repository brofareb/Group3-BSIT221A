import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import fs from 'fs';
import path from "path";



const inter = Inter({ subsets: ["latin"] });

export default function HomePage({recipe}) {
  return (
    <>
      <Head>
        <title>The Recipe Room</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo1.png" />
     
      </Head>
      <section className="section1">
      <div className="container"> 
      <form>
        <div className="mobile">
            <div class="search-home">
                <input class="search-input" type="search" placeholder="Search Recipes..."></input>
            </div>
            </div>
        </form>
        <h1 className="hometitle">Top 10 Recipes</h1>
        </div>

        <section className="recipe-section">
            {recipe && recipe.slice(0,5).map((recipes) => {
                return (

                    <Link className="recipe-boxes" 
                    href={`/view/${recipes.id}`}
                    key={recipes.id}>
                    <Image 
                        src = {`/recipics/${recipes.image1}`} 
                        alt=""
                        width='200'
                        height='100'
                    />
                    <h5 className="recipetitles">{recipes.Recipe_Name}</h5>
                    </Link>
                );
            })}
        </section>


        <div className="button">
          <Link className="viewmore" href="/recipes">View More</Link>
        </div>
      </section>

    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./pages/recipe.json");
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

 
  return {
      props: {
          recipe: data,
      },
  };
}