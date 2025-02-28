import { db } from '../../../lib/db'; // Corrected import path
import { flashcards } from '../../configs/schema'; // Corrected import path
import { NextResponse } from "next/server";

const handleErrors = (error) => {
  return NextResponse.json(
    { error: error.message },
    { status: 500 }
  );
};

export async function POST(request) {
  try {
    const { content } = await request.json();
    const newFlashcard = await db.insert(flashcards).values({
      content
    }).returning();
    return NextResponse.json(newFlashcard[0]);
  } catch (error) {
    return handleErrors(error);
  }
}

export async function GET() {
  try {
    const allFlashcards = await db.select().from(flashcards);
    return NextResponse.json(allFlashcards);
  } catch (error) {
    return handleErrors(error);
  }
}
