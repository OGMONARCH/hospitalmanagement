
const Contact = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-md">
      <h2 className="heading text-center">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-cneter text__para">
        Have a technical issue? Want to send feedback about a beta feature? Let us know.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="form__label">
            Your Email
          </label>
          <input
          type="email"
          id="email"
          placeholder="exmapl@gmail.com"
          className="form__input mt-1"
          />
          <input
          />
        </div>
        <div>
          <label htmlFor="email" className="form__label">
            Subject
          </label>
          <input
          type="text"
          id="subject"
          placeholder="Let us know how we can help you"
          className="form__input mt-1"
          />
          <input
          />
        </div>
        <div>
          <label htmlFor="email" className="form__label">
            Your Message
          </label>
          <textarea
          rows="6"
          type="text"
          id="message"
          placeholder="Leave a comment...."
          className="form__input mt-1"
          />
        </div>
        <button type="submit" className="btn rounded sm:w-fit">Submit</button>
      </form>
    </section>
  )
}

export default Contact