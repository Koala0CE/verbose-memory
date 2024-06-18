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
    // Additional entries
    ...Array.from({ length: 10 }, (_, i) => i + 3).map((i) => ({
      sys: {
        id: `${i}`,
      },
      fields: {
        internalName: `dummyInternalName${i}`,
        title: `Dummy Title ${i}`,
        description: `Dummy Description ${i}`,
        date: `2022-01-${i < 10 ? "0" + i : i}`,
        index: i - 1,
      },
    })),
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
      // Additional assets
      ...Array.from({ length: 10 }, (_, i) => i + 3).map((i) => ({
        sys: {
          id: `asset${i}`,
        },
        fields: {
          title: `Dummy Asset ${i}`,
          description: `Dummy Asset Description ${i}`,
          file: {
            url: `https://example.com/dummy-asset-${i}.jpg`,
            details: {
              size: 1024 * i,
              image: {
                width: 800,
                height: 600,
              },
            },
            fileName: `dummy-asset-${i}.jpg`,
            contentType: "image/jpeg",
          },
        },
      })),
    ],
  },
};
