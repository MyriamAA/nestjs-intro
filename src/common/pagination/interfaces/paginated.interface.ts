/**
 * Interface representing a paginated response structure.
 * @template T - The type of data being paginated (e.g., Post, User, etc.).
 */
export interface Paginated<T> {
  /**
   * The list of items for the current page.
   */
  data: T[];

  /**
   * Metadata about the pagination.
   */
  meta: {
    /**
     * Number of items per page.
     */
    itemsPerPage: number;

    /**
     * Total number of items available.
     */
    totalItems: number;

    /**
     * The current page number.
     */
    currentPage: number;

    /**
     * The total number of pages available.
     */
    totalPages: number;
  };

  /**
   * Links for pagination navigation.
   */
  links: {
    /**
     * URL to the first page.
     */
    first: string;

    /**
     * URL to the last page.
     */
    last: string;

    /**
     * URL to the current page.
     */
    current: string;

    /**
     * URL to the next page.
     */
    next: string;

    /**
     * URL to the previous page.
     */
    previous: string;
  };
}
