import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="dark sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
      
        <Link href="https://www.linkedin.com/in/eochigbo/" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200">
           Contact Me 🤗
          </a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
