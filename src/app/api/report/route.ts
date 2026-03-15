import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { REPORT_SYSTEM_PROMPT } from "@/lib/report-prompt";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages, name, email, businessName } = await req.json();

  const conversationTranscript = messages
    .map(
      (m: { role: string; content: string }) =>
        `${m.role === "user" ? "USER" : "GUIDE"}: ${m.content}`
    )
    .join("\n\n");

  const { text } = await generateText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: REPORT_SYSTEM_PROMPT,
    prompt: `Here is the conversation transcript:\n\n${conversationTranscript}\n\nThe person's details:\n- Name: ${name}\n- Email: ${email}\n- Business: ${businessName}\n\nGenerate the personalized report as JSON.`,
  });

  try {
    const report = JSON.parse(text);
    return Response.json(report);
  } catch {
    return Response.json(
      { error: "Failed to generate report", raw: text },
      { status: 500 }
    );
  }
}
