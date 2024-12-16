import Head from "next/head";
import NavBar from "./NavBar";
import Script from "next/script";
import { tinaField, useTina } from "tinacms/dist/react";
import Contact from "./Contact";
import HeroSection from "./Herosection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

export const HomepageLayout = ({ props, locale }) => {
  // console.log("props");
  console.log(locale);
  return (
    <>
      <Head>
        <title>Experiencias Futaleufu</title>
        <meta
          name="description"
          content="Turismo y caminatas en Futaleufu Chile"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar props={props} locale={locale} />
      <HeroSection props={props} locale={locale} />
      <AboutSection props={props} locale={locale} />
      <ServicesSection props={props} locale={locale} />

      <Contact locale={locale} />
      <footer></footer>
      <Script src="/js/tw-elements.umd.min.js" strategy="lazyOnload" />
    </>
  );
};