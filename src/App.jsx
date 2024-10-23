import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  const Cars = [
    {
      image: './src/assets/images/astonDB12.jpg',
      name: 'Aston Martin',
      make: 'DB12',
      color: 'Black',
      year: '2023'

    },
    {
      image: './src/assets/images/bmwXM.jpg',
      name: 'BMW',
      make: 'SUV- XM',
      color: 'Cyan',
      year: '2024'

    },
    {
      image: './src/assets/images/paganiHUAYA.jpg',
      name: 'Pagani',
      make: 'Huayra',
      color: 'Blue and Black',
      year: '2011'

    },
    {
      image: './src/assets/images/lamboURUS.jpg',
      name: 'Lamborgini',
      make: 'URUS',
      color: 'White',
      year: '2017'

    },
    {
      image: './src/assets/images/porsche911.jpg',
      name: 'Porsche',
      make: '911',
      color: 'Sky Blue',
      year: '2011'

    },
    {
      image: './src/assets/images/toyotaRAV4.jpg',
      name: 'Toyota',
      make: 'RAV4',
      color: 'Grey',
      year: '2025'

    },
    {
      image: './src/assets/images/MCLarem.jpg',
      name: 'MC Laren',
      make: 'P1',
      color: 'Yellow',
      year: '2015'

    },
    {
      image: './src/assets/images/supra.jpg',
      name: 'Toyota',
      make: 'Supra MK5',
      color: 'Grey',
      year: '2019'

    },
    {
      image: './src/assets/images/dodge.jpg',
      name: 'Dodge',
      make: 'Charger',
      color: 'Black',
      year: '1969'

    },
    {
      image: './src/assets/images/srt.jpg',
      name: 'Dodge',
      make: 'Hellcat SRT',
      color: 'Black',
      year: '2018'

    },
    {
      image: './src/assets/images/supra.jpg',
      name: 'Toyota',
      make: 'Supra MK5',
      color: 'Grey',
      year: '2019'

    },
    {
      image: './src/assets/images/supra.jpg',
      name: 'Toyota',
      make: 'Supra MK5',
      color: 'Grey',
      year: '2019'

    }
  ];

  return (
    <>
    <h1 className='text-blue-500 bg-blue-100 sticky top-0'>Cars</h1>
      <div className='flex flex-wrap'>
        
        {Cars.map((car, index) => (
          <div key={index}>
            <Card data={car} />
          </div>
        ))}


      </div>
    </>
  )
}

export default App
