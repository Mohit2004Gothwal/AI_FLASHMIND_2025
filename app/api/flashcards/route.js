import { db } from "@/lib/db";
import { flashcards } from "@/app/configs/schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { content } = await request.json();
  
  try {
    const newFlashcard = await db.insert(flashcards).values({
      content
    }).returning();
    
    return NextResponse.json(newFlashcard[0]);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allFlashcards = await db.select().from(flashcards);
    return NextResponse.json(allFlashcards);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
