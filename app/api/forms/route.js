import { db } from "@/lib/db";
import { forms } from "@/app/configs/schema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, content } = await request.json();
    console.log('Received form data:', { title, content });

    const newForm = await db.insert(forms).values({
      title,
      content
    }).returning();
    
    if (!newForm || newForm.length === 0) {
      console.error('Failed to insert form - no data returned');
      throw new Error('Failed to insert form into database');
    }
    
    console.log('Successfully saved form:', newForm[0]);
    return NextResponse.json(newForm[0]);
    
  } catch (error) {
    console.error('Form save error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to save form',
        details: error.message,
        code: error.code || 'DB_ERROR',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
