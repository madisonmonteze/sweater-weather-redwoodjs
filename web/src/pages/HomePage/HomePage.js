import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  // form submit
  const initialState = {
    zip: null,
  }

  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  // modal toggle
  const [isActive, setActive] = useState()
  const toggleCredits = () => {
    setActive(!isActive)
  }

  const refresh = () => {
    window.location.reload()
  }

  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 z-50 bg-brown text-black h-24 md:h-8 border-b border-black transition-transform duration-500 ${
          isActive ? 'credits-active' : 'credits-closed'
        }`}
      >
        <div className="container font-ibmMono text-base text-center h-full w-full flex flex-col md:flex-row items-center justify-center">
          <p className="">
            Site by{' '}
            <a
              href="https://madisonhardt.com/"
              alt="Madison Hardt"
              target="_blank"
              rel="noreferrer"
              className="border-b border-black"
            >
              Madison Hardt
            </a>
            .{' '}
          </p>
          <p className="md:ml-2">
            Built on RedwoodJS with TailwindCSS and the OpenWeather API.
          </p>
        </div>
      </div>
      <div
        className={`fixed bottom-0 overflow-hidden bg-beige w-full transition-all duration-500 ${
          isActive ? 'h-calc' : 'h-screen'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 flex flex-row justify-between p-6">
          <div>
            <button onClick={refresh} className="uppercase text-xs px-1">
              Refresh
            </button>
          </div>
          <div>
            <button onClick={toggleCredits} className="uppercase text-xs px-1">
              {isActive ? `Close` : `Credits`}
            </button>
          </div>
        </div>
        <div className="container w-full h-full mx-auto py-6 flex flex-col justify-center">
          <div className="font-ibmSans text-6xl pb-8">
            <h1>
              Is it{' '}
              <span className="font-ibmMono text-red uppercase font-semibold tracking-widest">
                sweater weather
              </span>
              ?
            </h1>
          </div>
          <div className="flex flex-col md:flex-row text-base border-t border-black">
            <Form
              onSubmit={onSubmit}
              className="w-full md:w-3/4 bg-lavender px-4 py-2 border-l border-r border-b border-black flex flex-row items-center justify-between"
            >
              <TextField
                name="zip"
                placeholder="Zip code"
                maxLength="5"
                validation={{ required: true, pattern: /^\d{5}$/ }}
                className="text-base bg-lavender py-1 px-2 w-1/2"
              />
              <Submit className="py-1 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="10"
                  viewBox="0 0 27 10"
                  fill="none"
                >
                  <path d="M0 5H25" stroke="black" />
                  <path d="M22 1L26 5L22 9" stroke="black" />
                </svg>
              </Submit>
            </Form>
            <div className="w-full md:w-1/4 px-4 py-2 bg-black text-white flex items-center border-l md:border-l-0 border-b border-r border-black">
              <p>Input a zip code and hit Enter.</p>
            </div>
          </div>
        </div>
        <div
          className={`slider absolute bottom-0 left-0 right-0 flex flex-col md:flex-row bg-white border-t border-black transition-transform duration-500 ${
            zip ? 'translate-y-0' : 'hide-card'
          } ${isActive ? 'hide-card' : ''}`}
        >
          <div className="w-full md:w-3/4 border-b md:border-b-0 md:border-r border-black pb-4 md:pb-0">
            {zip && <WeatherCell zip={zip} />}
          </div>
          <div className="card w-full md:w-1/4 text-blue pt-8 md:pt-0">
            <h3 className="font-ibmMono uppercase mb-2">Details</h3>
            <p>
              According to a survey completed by The Weather Channel, most
              people (in the US) believe that “sweater weather” temperatures
              range from 55 to 65 degress Farenheit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
