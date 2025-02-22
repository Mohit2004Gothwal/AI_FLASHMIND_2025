"use client";

export default function LearnMorePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Learn More</h1>
      
      <div className="max-w-2xl mx-auto space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Our Website</h2>
          <p className="text-gray-600">
            Our AI-powered learning platform is designed to help students and learners of all levels
            enhance their knowledge through interactive quizzes and flashcards. Using cutting-edge
            AI technology, we provide personalized learning experiences that adapt to your needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>AI-generated quizzes on any topic</li>
            <li>Interactive flashcards for effective learning</li>
            <li>Personalized learning paths</li>
            <li>Progress tracking and analytics</li>
            <li>Mobile-friendly interface</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Choose a topic you want to learn about</li>
            <li>Generate quizzes or flashcards instantly</li>
            <li>Study and test your knowledge</li>
            <li>Track your progress over time</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            We aim to make learning accessible, engaging, and effective for everyone. By leveraging
            AI technology, we provide tools that help learners of all ages and backgrounds achieve
            their educational goals.
          </p>
        </section>
      </div>
    </div>
  );
}
