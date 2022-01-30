/**
 * get non-negative page number
 * @param pageNo
 * @returns
 */
 export function getPagination(pageNo: string | number) {
  const page = Number(pageNo);
  return page > 0
    ? page
    : page <= 0
      ? 0
      : page;
}
