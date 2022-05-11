export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "627bdfecece703007ccd8c80",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2yz6cxri",
                  apiId: "759322fb-3083-4f98-ba9c-5149769b4e69",
                },
                {
                  buildHookId: "627bdfec5a77c200b0b100dd",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ik5owsw9",
                  apiId: "0db24a51-fd5a-4db5-87f0-5c6117a0f49d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SanderTonning/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ik5owsw9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
