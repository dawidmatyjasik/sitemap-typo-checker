import axios from "axios";
import { parseStringPromise } from "xml2js";
import * as cheerio from "cheerio";

import { logInfo } from "./utils.js";

export const fetchSitemapUrls = async (
  sitemapUrl: string
): Promise<string[]> => {
  logInfo(`Fetching sitemap: ${sitemapUrl}`);
  const { data } = await axios.get(sitemapUrl);
  const parsedXml = await parseStringPromise(data);
  const urls = parsedXml.urlset.url.map((u: any) => u.loc[0]);
  return urls;
};

export const fetchPageText = async (url: string): Promise<string> => {
  logInfo(`Fetching page: ${url}`);
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $("body").text().replace(/\s+/g, " ").trim();
};
