//import Link from './Link'
//import siteMetadata from '@/data/siteMetadata'
import { SITE } from "@config";
//import SocialIcon from '@/components/social-icons'
import Socials from './Socials.astro'

export default function Footer2() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Socials />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{SITE.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <a href="/">{SITE.title}</a>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </a>
        </div>
      </div>
    </footer>
  )
}
