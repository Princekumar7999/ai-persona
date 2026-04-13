import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    // VAPI sends tool calls via messages
    const callDetails = payload.message?.toolCalls?.[0]?.function;
    if (!callDetails) {
      return NextResponse.json({ results: [{ toolCallId: payload.message?.toolCalls?.[0]?.id, result: "No function provided" }] });
    }

    const args = typeof callDetails.arguments === 'string' ? JSON.parse(callDetails.arguments) : callDetails.arguments;
    
    if (callDetails.name === 'book_meeting') {
       console.log("VAPI Requested Booking:", args);
       const res = await fetch(`https://api.cal.com/v2/bookings`, {
         method: 'POST',
         headers: {
           Authorization: `Bearer ${process.env.CAL_API_KEY}`,
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           start: args.startTime || "2024-04-14T10:00:00.000Z",
           eventTypeId: 5339335,
           attendee: { name: args.name || "Vapi Caller", email: args.email || "caller@vapi.ai" },
           timeZone: "Asia/Calcutta",
           language: "en"
         })
       });
       
       const bookingResponse = await res.json();
       const resultMessage = res.ok ? "Meeting booked successfully via Voice!" : "Failed to book meeting.";

       return NextResponse.json({
         results: [{
           toolCallId: payload.message.toolCalls[0].id,
           result: resultMessage
         }]
       });
    }

    return NextResponse.json({ results: [] });
  } catch(e) {
    console.error(e);
    return NextResponse.json({ error: "Booking Failed" }, { status: 500 });
  }
}
