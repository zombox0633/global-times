export interface InterestGroupType {
  content: ContentDataType[];
  pageable: PageableType;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  number: number;
  sort: SortType;
  numberOfElements: number;
  empty: boolean;
}

export interface ContentDataType {
  id: string;
  city_id: string;
  city_name: string;
  country_name: string;
  timezone_name: string;
  region_name: string;
  continent_name: string;
  highlighted: boolean;
}

export interface PageableType {
  pageNumber: number;
  pageSize: number;
  sort: SortType;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface SortType {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
