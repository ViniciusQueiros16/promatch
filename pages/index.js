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
      <section className="section">
        <div className="container">
          <div className="row items-start"></div>
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
