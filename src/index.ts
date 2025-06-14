import { fetchSitemapUrls, fetchPageText } from "./fetcher.js";
import { findTypos } from "./analyzer.js";
import { logInfo, logError } from "./utils.js";

const analyzeWebsite = async (sitemapUrl: string) => {
  try {
    const urls = await fetchSitemapUrls(sitemapUrl);
    logInfo(`Found ${urls.length} URLs to analyze.`);

    for (const url of urls) {
      logInfo(`Processing URL: ${url}`);

      const text = await fetchPageText(url);
      const analysis = await findTypos(text);

      console.log(`\n--- Report for ${url} ---`);
      console.log(`${analysis}\n`);
    }
  } catch (error: any) {
    logError(`Error: ${error.message}`);
  }
};

const sitemapUrl = process.argv[2];

if (!sitemapUrl) {
  console.error("Usage: npm run start <sitemap-url>");
  process.exit(1);
}

analyzeWebsite(sitemapUrl);
