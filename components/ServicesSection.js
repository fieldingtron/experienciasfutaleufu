import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function ServicesSection({ props, locale }) {
  return (
    <section
      id="services"
      className="py-16 bg-gray-100 text-gray-800 dark:bg-darkBlue3 dark:text-white bg-fixed bg-no-repeat bg-right-bottom md:bg-martin-pescador capitalize"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold"
            data-aos="slide-up"
            data-tina-field={tinaField(props, "servicestitle1")}
          >
            {props.servicestitle1[locale]}
          </h2>
          <p
            className="capitalize text-lg mt-4"
            data-aos="slide-up"
            data-aos-delay="50"
            data-tina-field={tinaField(props, "servicestitle2")}
          >
            {props.servicestitle2[locale]}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.tours
            ? props.tours.map(function (tour, i) {
                return (
                  <div
                    key={`tour${i}`}
                    data-tina-field={tinaField(tour, "name")}
                  >
                    {/* Card */}
                    <div
                      className="group relative bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl dark:bg-gray-900 md:min-h-[500px] xl:min-h-[300px]" // Add a min-height here
                      data-aos="fade-in"
                      data-aos-delay="100"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={tour.imgSrc}
                          alt={tour.description[locale]}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-green-500 capitalize">
                          {tour.name}
                        </h3>
                        <p className="capitalize">{tour.description[locale]}</p>
                        <p className="mt-2 ">{tour.price}</p>
                      </div>
                    </div>
                    {/* Card End */}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}