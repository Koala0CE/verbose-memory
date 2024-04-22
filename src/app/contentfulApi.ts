import axios, { AxiosInstance } from "axios";
import { format } from "date-fns";

// Interfaces for Contentful data
export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulItem {
  sys: {
    id: string;
  };
  fields: {
    internalName?: string;
    title: string;
    description: string;
    date: string;
    image?: {
      sys: {
        id: string;
      };
    };
    index: number;
  };
}

export interface ContentfulResponse {
  //  ContentfulResponse interface
  items: ContentfulItem[];
  includes: {
    Asset: ContentfulAsset[];
  };
}

const createContentfulClient = (accessToken: string): AxiosInstance => {
  return axios.create({
    baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

/**
 * Fetches data from Contentful API.
 * @returns A promise that resolves to a ContentfulResponse or null.
 */
export const fetchContentfulData =
  async (): Promise<ContentfulResponse | null> => {
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";
    const client = createContentfulClient(accessToken);

    try {
      const response = await client.get<ContentfulResponse>("", {
        params: {
          content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE,
        },
      });

      // sorting by index
      // const sortedData = response.data.items.sort(
      //   (a, b) => a.fields.index - b.fields.index
      // );

      const sortedData = response.data.items.sort((a, b) => {
        if (a.fields.index === undefined) return 1; // a is sent to the end
        if (b.fields.index === undefined) return -1; // b is sent to the end
        return a.fields.index - b.fields.index; // otherwise, sort normally
      });

      // Parse data (example: format dates)
      sortedData.map((item) => {
        // Example: format the "date" field using date-fns
        if (item.fields.date) {
          item.fields.date = format(new Date(item.fields.date), "dd-MM-yyyy");
        }

        return item;
      });

      console.log(
        "--------Axios response from contentfulAPI file",
        response.data
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching Contentful data:", error);
      return null;
    }
  };
