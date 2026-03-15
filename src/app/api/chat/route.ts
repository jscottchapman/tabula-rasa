import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { TABULA_RASA_SYSTEM_PROMPT } from "@/lib/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: TABULA_RASA_SYSTEM_PROMPT,
    messages,
  });

  return result.toDataStreamResponse();
}
