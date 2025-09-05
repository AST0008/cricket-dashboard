// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { query, playerName, playerStats } = await req.json();

    if (!query || !playerName) {
      return NextResponse.json({ error: 'Missing query or player info' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
      You are a cricket analytics assistant.
      The user is asking about ${playerName}.
      Player stats: ${JSON.stringify(playerStats)}
      User question: ${query}
      Answer in a clear, conversational way. Use numbers/stats where relevant.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
  }
}
