"use client";

export default function DescriptionPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Website Description</h1>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-600">
            Our platform is an AI-powered learning tool designed to revolutionize the way people study
            and learn. We combine advanced AI technology with proven learning techniques to create an
            engaging and effective learning experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">AI-Powered Content</h3>
              <p className="text-gray-600">
                Generate quizzes and flashcards on any topic instantly using our advanced AI models.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">
                Our system adapts to your learning style and progress for optimal results.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your learning journey with detailed analytics and insights.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">
                Access your learning materials anytime, anywhere on any device.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Save time with instant content generation</li>
            <li>Improve retention with spaced repetition</li>
            <li>Learn at your own pace</li>
            <li>Access to a wide range of topics</li>
            <li>Engaging and interactive learning experience</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
