import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";

const AboutSection = ({ props }) => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-green-600 dark:text-green-400 text-sm uppercase font-bold mb-2"
            data-aos="slide-up"
            data-aos-offset="120"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-tina-field={tinaField(props, "abouttitle1")}
          >
            {props.abouttitle1}
          </h2>
          <h3
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="slide-up"
            data-aos-delay="50"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-tina-field={tinaField(props, "abouttitle2")}
          >
            {props.abouttitle2}
          </h3>
          <p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            data-aos="slide-up"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-tina-field={tinaField(props, "abouttext")}
          >
            {props.abouttext}
          </p>
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 underline font-semibold"
            data-aos="slide-up"
            data-aos-delay="200"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-tina-field={tinaField(props, "aboutcontacttext")}
          >
            {props.aboutcontacttext}
          </a>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-in"
          data-aos-offset="120"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Image
            src={props.aboutImgSrc}
            alt="Senderismo en Futaleufú, paisajes impresionantes, tours guiados"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            data-tina-field={tinaField(props, "aboutImgSrc")}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
