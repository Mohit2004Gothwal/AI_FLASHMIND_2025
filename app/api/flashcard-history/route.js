import { db } from '../../../lib/db';
import { flashcards } from '../../configs/schema';


export async function GET() {
  const allFlashcards = await db.select().from(flashcards);
  return new Response(JSON.stringify(allFlashcards), {
    headers: { 'Content-Type': 'application/json' },
  });
}
