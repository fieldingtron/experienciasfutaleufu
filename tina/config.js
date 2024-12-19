import { defineConfig, defineSchema } from "tinacms";

const headingBlock = {
  name: "Heading",
  label: "Heading",
  ui: {
    defaultItem: {
      heading: "Lorem ipsum dolo",
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
  ],
};

const contentBlock = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      textz:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Text",
      name: "textz",
    },
  ],
};

const imageBlock = {
  name: "image",
  label: "Image",
  fields: [
    {
      type: "image",
      label: "Image",
      name: "imgSrc",
    },
  ],
};

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        // {
        //   label: "Hero Tagline 1",
        //   name: "herotagline1",
        //   type: "string",
        // },
        {
          label: "Hero Tagline 1",
          name: "herotagline1",
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
        },

        {
          label: "Hero Tagline 2",
          name: "herotagline2",
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
        },
        {
          label: "Hero Button Text",
          name: "herobuttontext",
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
        },

        {
          type: "image",
          label: "Background Hero Image",
          name: "landingImageSrc",
        },

        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "About Headline 1",
          name: "abouttitle1",
        },
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "About Headline 2",
          name: "abouttitle2",
        },
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
              ui: {
                component: "textarea",
              },
            },
          ],
          label: "About Text",
          name: "abouttext",
        },

        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "About Contact Text",
          name: "aboutcontacttext",
        },
        {
          type: "image",
          label: "About Image",
          name: "aboutImgSrc",
        },

        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "Services Title 1",
          name: "servicestitle1",
        },
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "Services Title 2",
          name: "servicestitle2",
        },

        {
          label: "Tours",
          name: "tours",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
            defaultItem: {
              name: "Piedra Aguila",
              price: "25.000 CLP",
              description: "Sendero clasico de Futaleufu",
              details:
                "La Piedra de Águila en Futaleufú, Chile, es una impresionante formación rocosa que ofrece vistas panorámicas de los valles y montañas circundantes",
              imgSrc: "/uploads/alpaca.png",
            },
          },

          fields: [
            {
              label: "Name",
              name: "name",
              type: "string",
            },
            {
              label: "Price",
              name: "price",
              type: "string",
            },
            {
              label: "Description",
              name: "description",
              type: "object",
              fields: [
                {
                  type: "string",
                  name: "en",
                  label: "English",
                },
                {
                  type: "string",
                  name: "es",
                  label: "Spanish",
                },
              ],
            },
            {
              label: "Description Detail",
              name: "descriptiondetail",
              type: "object",
              fields: [
                {
                  type: "string",
                  name: "en",
                  label: "English",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "es",
                  label: "Spanish",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },
            {
              type: "image",
              label: "Hero image",
              name: "imgSrc",
            },
          ],
        },

        {
          label: "Fotos",
          name: "fotos",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
            defaultItem: {
              name: "Foto #",
              imgSrc: "/uploads/tina.jpeg",
            },
          },

          fields: [
            {
              label: "Name",
              name: "name",
              type: "string",
            },
            {
              type: "image",
              label: "Imagen",
              name: "imgSrc",
            },
          ],
        },
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "en",
              label: "English",
            },
            {
              type: "string",
              name: "es",
              label: "Spanish",
            },
          ],
          label: "Testimonials Title",
          name: "testimonialstitle",
        },

        {
          name: "testimonials",
          label: "Testimonials",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
            defaultItem: {
              name: "Don Juan",
              location: "Futaleufu, Chile",
              quote: "Sendero clasico de Futaleufu. Muy bakan la question",
              image: "/uploads/alpaca.png",
            },
          },
          fields: [
            {
              name: "name",
              label: "Name",
              type: "string",
            },

            {
              label: "Bilingual Quote",
              name: "quote",
              type: "object",
              fields: [
                {
                  type: "string",
                  name: "en",
                  label: "English",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  type: "string",
                  name: "es",
                  label: "Spanish",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },

            {
              name: "location",
              label: "Location",
              type: "string",
            },
            {
              name: "image",
              label: "Image",
              type: "image",
            },
          ],
        },

        // {
        //   type: "string",
        //   label: "FAQ text",
        //   name: "FAQintro",
        //   ui: {
        //     component: "textarea",
        //   },
        // },
        // {
        //   type: "object",
        //   list: true,
        //   name: "camping",
        //   label: "Camping Section",
        //   templates: [imageBlock, contentBlock, headingBlock],
        // },
        {
          label: "Preguntas Frequentes",
          name: "faq",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.question };
            },
            defaultItem: {
              question: "Que es ? ",
              response: "Esto signifiga",
            },
          },

          fields: [
            {
              label: "Question",
              name: "question",
              type: "string",
            },
            {
              label: "Response",
              name: "response",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
        },

        // {
        //   name: "body",
        //   label: "Main Content",
        //   type: "rich-text",
        //   isBody: true,
        // },
      ],
      ui: {
        router: ({ document }) => {
          //TODO: change this around later
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
