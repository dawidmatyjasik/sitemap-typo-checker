# Page Checker

A Node.js tool to analyze website pages for typos using OpenAI. It fetches all URLs from a sitemap, downloads each page, and reports spelling mistakes.

## Features

- Fetches URLs from a sitemap (XML)
- Downloads and extracts text from each page
- Uses OpenAI to find and report typos
- Outputs a report for each page

## Requirements

- Node.js 18+
- An OpenAI API key

## Setup

1. Clone the repository:
   ```sh
   git clone sitemap-typo-checker
   cd sitemap-typo-checker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

Run the checker with a sitemap URL:

```sh
npm start -- <sitemap-url>
```

Or directly with tsx:

```sh
npx tsx src/index.ts <sitemap-url>
```

## Example

```sh
npm start -- https://www.google.com/sitemap.xml
```

## License

ISC
