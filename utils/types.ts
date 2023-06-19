import { Session } from "next-auth";

export interface Sessions extends Session {
  user?: {
    id?: string | null | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export interface ProductType {
  _id: string;
  title: string;
  description?: string;
  price?: number;
  category?: string;
  image?: string;
}
