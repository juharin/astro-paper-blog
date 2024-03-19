import { useRef, useState } from 'react'

//import siteMetadata from '@/data/siteMetadata'
import { SITE } from "@config";

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`/api/${SITE.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current?.value, // Add null check here
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ''
    }
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="pb-1 text-lg font-semibold text-skin-base">{title}</div>
        <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
          <div>
            <label className="sr-only" htmlFor="email-input">
              Email address
            </label>
            <input
              autoComplete="email"
              className="block rounded border border-skin-fill 
              border-opacity-40 bg-skin-fill py-2 pl-4
              pr-3 placeholder:italic placeholder:text-opacity-75 
              focus:border-skin-accent focus:outline-none focus:ring-0"
              id="email-input"
              name="email"
              placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
              ref={inputEl}
              required
              type="email"
              disabled={subscribed}
            />
          </div>
          <div className="mt-2 flex rounded-md shadow-sm sm:mt-0 sm:ml-3">
            <button
              className={`w-full rounded-md bg-skin-card-muted py-2 px-4 font-medium text-white sm:py-0 ${
                subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-skin-card'
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Thank you!' : 'Sign up'}
            </button>
          </div>
        </form>
        {error && (
          <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
        )}
      </div>
    </div>
  )
}

export default NewsletterForm
