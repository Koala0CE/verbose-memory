import { ContentfulResponse } from "../contentfulApi";

export const dummyData: ContentfulResponse = {
  items: [
    {
      sys: {
        id: "1",
      },
      fields: {
        internalName: "dummyInternalName1",
        title: "Dummy Title 1",
        description: "Dummy Description 1",
        date: "2022-01-01",
        index: 0,
      },
    },
    {
      sys: {
        id: "2",
      },
      fields: {
        internalName: "dummyInternalName2",
        title: "Dummy Title 2",
        description: "Dummy Description 2",
        date: "2022-01-02",
        index: 1,
      },
    },
  ],
  includes: {
    Asset: [
      {
        sys: {
          id: "asset1",
        },
        fields: {
          title: "Dummy Asset 1",
          description: "Dummy Asset Description 1",
          file: {
            url: "https://example.com/dummy-asset-1.jpg",
            details: {
              size: 1024,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: "dummy-asset-1.jpg",
            contentType: "image/jpeg",
          },
        },
      },
      {
        sys: {
          id: "asset2",
        },
        fields: {
          title: "Dummy Asset 2",
          description: "Dummy Asset Description 2",
          file: {
            url: "https://example.com/dummy-asset-2.jpg",
            details: {
              size: 2048,
              image: {
                width: 1200,
                height: 900,
              },
            },
            fileName: "dummy-asset-2.jpg",
            contentType: "image/jpeg",
          },
        },
      },
    ],
  },
};
