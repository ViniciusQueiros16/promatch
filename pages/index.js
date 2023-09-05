import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import { getListPage } from "@lib/contentParser";

import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Home = ({ banner }) => {
  // define state

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div
              className={
                banner.image_enable
                  ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left"
                  : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left"
              }
            >
              <div className="banner-title">
                {markdownify(banner.title, "h1")}
                {markdownify(banner.title_small, "span")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6">
                <ImageFallback
                  className="mx-auto object-contain"
                  src={banner.image}
                  width={548}
                  height={443}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Home main */}
      <section className="bg-gray-100 py-12">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="mb-12 lg:col-8 lg:mb-0">
              {/* Seção 1 */}
              <section className="flex items-center rounded-lg bg-gray-100 p-8">
                <div className="lg:order-2 lg:w-1/2">
                  {/* Sua imagem da seção 1 aqui usando ImageFallback */}
                  <ImageFallback
                    className="rounded-lg"
                    src={banner.image}
                    alt="Section 1 Image"
                    width={400}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="lg:order-1 lg:w-1/2">
                  <h2 className="mb-4 text-2xl font-semibold">
                    About ProMatch
                  </h2>
                  <p className="text-gray-700">
                    ProMatch is the perfect solution to connect contractors to a
                    service simply and efficiently. Whether you're a company
                    looking for talent or a freelancer looking for
                    opportunities, ProMatch is here to help.
                  </p>
                </div>
              </section>

              {/* Seção 2 */}
              <section className="flex items-center rounded-lg bg-gray-100 p-8">
                <div className="lg:w-1/2">
                  {/* Sua imagem da seção 2 aqui usando ImageFallback */}
                  <ImageFallback
                    className="rounded-lg"
                    src={banner.image}
                    alt="Section 2 Image"
                    width={400}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="mb-4 text-2xl font-semibold">Main Features</h2>
                  <ul className="list-inside list-disc text-gray-700">
                    <li>Simplified search for professionals and services</li>
                    <li>Smart matching algorithm</li>
                    <li>Private chat for negotiations</li>
                    <li>Video call option</li>
                    <li>Jobs and services feed</li>
                  </ul>
                </div>
              </section>

              {/* Seção 3 */}
              <section className="flex items-center rounded-lg bg-gray-100 p-8">
                <div className="lg:order-2 lg:w-1/2">
                  {/* Sua imagem da seção 3 aqui usando ImageFallback */}
                  <ImageFallback
                    className="rounded-lg"
                    src={banner.image}
                    alt="Section 3 Image"
                    width={400}
                    height={300}
                    priority={true}
                  />
                </div>
                <div className="lg:order-1 lg:w-1/2">
                  <h2 className="mb-4 text-2xl font-semibold">Start now</h2>
                  <p className="text-gray-700">
                    Find the ideal business partner or opportunities for
                    exciting work. Join ProMatch today!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;

  return {
    props: {
      banner: banner,
    },
  };
};
