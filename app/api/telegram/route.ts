import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn('Telegram token or chat ID is not configured. Mocking success.');
      return NextResponse.json({ success: true, mocked: true });
    }

    let text = '🔔 <b>Новая заявка с сайта "СЭС Контроль 24"</b>\n\n';
    
    for (const [key, value] of Object.entries(body)) {
      if (value) {
        text += `<b>${key}:</b> ${value}\n`;
      }
    }

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(data.description || 'Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Telegram API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
