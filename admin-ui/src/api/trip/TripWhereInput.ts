import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
};
