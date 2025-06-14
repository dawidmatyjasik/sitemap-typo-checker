import OpenAI from "openai";
import { logInfo } from "./utils.js";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

console.log(process.env.API_KEY);

export const findTypos = async (text: string): Promise<string> => {
  logInfo(`Analyzing text length: ${text.length}`);

  const prompt = `
  Analyze the text and list spelling mistakes clearly:

  Text:
  """
  ${text}
  """

  Output format:
  - Typo: [misspelled word], Context: "[sentence with the typo]"
  - If no typos found, return: "No typos found."
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content || "No result";
};
