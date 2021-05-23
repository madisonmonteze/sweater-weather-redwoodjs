export const QUERY = gql`
  query ($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <section className="card text-2xl text-red bg-pink font-ibmMono italic">
    {error.message.replace('GraphQL error: ', '')}
  </section>
)

export const Success = ({ weather }) => {
  let SuccessMsg = ''

  if (weather.temp >= 55 && weather.temp <= 65) {
    SuccessMsg = `Yes, it\'s sweater weather in ${weather.city}. The current temperature is ${weather.temp}°F.`
  } else if (weather.temp > 65) {
    SuccessMsg = `Sorry, it\'s probably too warm to wear a sweater in ${weather.city}. The current temperature is ${weather.temp}°F.`
  } else {
    SuccessMsg = `Sorry, it\'s probably too cold to wear just a sweater in ${weather.city}. The current temperature is ${weather.temp}°F.`
  }
  return (
    <section className="card text-3xl text-red font-ibmMono md:px-4">
      {SuccessMsg}
    </section>
  )
}
