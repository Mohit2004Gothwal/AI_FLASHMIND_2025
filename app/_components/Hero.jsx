import React from 'react'
// import { connect } from 'react-redux'

export const Hero = (props) => {
  return (
    <section className="bg-brown-100">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Enhancing Learning with AI: An Intelligent Quiz & Flashcard System
        <strong className="font-extrabold text-primary sm:block"> Increase Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      QuizAI: AI-Powered Quiz & Flashcard Generator revolutionizes learning by automatically creating quizzes and flashcards from any text. It enhances study efficiency, making learning faster, smarter, and more engaging with AI-driven automation.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-500 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="#"
        >
          Ai-Powered Quiz
        </a>
        <a
          className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-purple-500 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="#"
        >
         Flashcard
        </a>

        <a
          className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-primary shadow-sm hover:text-purple-300 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="#"
        >
         Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Hero)