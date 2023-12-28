import React from 'react'

export default function IconInfo({title}) {
  return (

    <div className='icon-info'>
      <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.69292 0C4.00595 0 0.192871 3.81972 0.192871 8.51484C0.192871 13.0272 7.91759 25.2369 8.24642 25.7544C8.34361 25.9074 8.51199 26 8.69292 26C8.87385 26 9.04224 25.9074 9.13937 25.7544C9.4682 25.2369 17.1929 13.0271 17.1929 8.51484C17.1929 3.81972 13.3798 0 8.69292 0ZM8.69292 24.468C7.99382 23.3344 6.57507 20.9878 5.17019 18.3878C2.60663 13.6432 1.25161 10.2292 1.25161 8.51484C1.25156 4.40488 4.58976 1.06122 8.69292 1.06122C12.7961 1.06122 16.1342 4.40488 16.1342 8.51484C16.1342 10.2292 14.7791 13.6432 12.2156 18.3878C10.8107 20.9878 9.39198 23.3344 8.69292 24.468Z" fill="url(#paint0_linear_locaiotn)"></path>
        <path d="M8.69282 4.03642C6.47571 4.03642 4.67197 5.79535 4.67197 7.95733C4.67197 10.1193 6.47571 11.8781 8.69282 11.8781C10.9099 11.8781 12.7137 10.1193 12.7137 7.95733C12.7137 5.79535 10.9099 4.03642 8.69282 4.03642ZM8.69282 10.8168C7.05953 10.8168 5.73066 9.53404 5.73066 7.95727C5.73066 6.38045 7.05953 5.09759 8.69282 5.09759C10.3261 5.09759 11.655 6.38045 11.655 7.95727C11.655 9.53404 10.3262 10.8168 8.69282 10.8168Z" fill="url(#paint1_linear_locaiton)"></path>
        <defs>
          <linearGradient id="paint0_linear_locaiotn" x1="0.192871" y1="0" x2="25.5149" y2="15.0638" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F9EA9E"></stop>
            <stop offset="1" stop-color="#B58D46"></stop>
          </linearGradient>
          <linearGradient id="paint1_linear_locaiton" x1="0.192871" y1="0" x2="25.5149" y2="15.0638" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F9EA9E"></stop>
            <stop offset="1" stop-color="#B58D46"></stop>
          </linearGradient>
        </defs>
      </svg>
      <p>{title}</p>
    </div>
  )
}
