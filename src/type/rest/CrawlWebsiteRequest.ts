export type CrawlWebsiteRequest = {
  url: string;
  effectiveAuth: string;
  documentIdxId: string;
  maxPages?: number;
};
