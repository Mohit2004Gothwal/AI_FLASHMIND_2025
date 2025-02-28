import { db } from 'lib/db';
import { quizzes } from 'app/configs/schema';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { topic, questions } = await request.json();

  try {
    const newQuiz = await db.insert(quizzes).values({
      topic,
      questions: JSON.stringify(questions),
    }).returning();

    return NextResponse.json(newQuiz[0]);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allQuizzes = await db.select().from(quizzes);
    return NextResponse.json(allQuizzes);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
