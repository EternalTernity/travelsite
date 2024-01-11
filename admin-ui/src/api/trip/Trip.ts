import { Listing } from "../listing/Listing";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  updatedAt: Date;
};
