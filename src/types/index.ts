export interface info {
  countries: 3,
  languages: 256,
  'cities+100': 8
}

export interface ContinentTypes {
  continentData: [
    {
      continent: string,
      description: string,
      info: info,
      img: string
    },
    {
      cities: {
        id: number,
        city: string,
        country: string,
        countryImg: string,
        cityImg: string
      }[]
    }
 ]
}