
import './App.css'
import Card from './Components/Card'

import astonMartin from './assets/images/astonDB12.jpg'
import bmw from './assets/images/bmwXM.jpg'
import pagani from './assets/images/paganiHUAYA.jpg'
import lambUrus from './assets/images/lamboURUS.jpg'
import p911 from './assets/images/porsche911.jpg'
import trav4 from './assets/images/toyotaRAV4.jpg'
import mclaren from './assets/images/MCLarem.jpg'
import supra from './assets/images/supra.jpg'
import dgch from './assets/images/dodge.jpg'
import hellcat from './assets/images/srt.jpg'

function App() {

  const Cars = [
    {
      image: astonMartin,
      name: 'Aston Martin',
      make: 'DB12',
      color: 'Black',
      year: '2023'

    },
    {
      image: bmw,
      name: 'BMW',
      make: 'SUV- XM',
      color: 'Cyan',
      year: '2024'

    },
    {
      image: pagani,
      name: 'Pagani',
      make: 'Huayra',
      color: 'Blue and Black',
      year: '2011'

    },
    {
      image: lambUrus,
      name: 'Lamborgini',
      make: 'URUS',
      color: 'White',
      year: '2017'

    },
    {
      image: p911,
      name: 'Porsche',
      make: '911',
      color: 'Sky Blue',
      year: '2011'

    },
    {
      image: trav4,
      name: 'Toyota',
      make: 'RAV4',
      color: 'Grey',
      year: '2025'

    },
    {
      image: mclaren,
      name: 'MC Laren',
      make: 'P1',
      color: 'Yellow',
      year: '2015'

    },
    {
      image: supra,
      name: 'Toyota',
      make: 'Supra MK5',
      color: 'Grey',
      year: '2019'

    },
    {
      image: dgch,
      name: 'Dodge',
      make: 'Charger',
      color: 'Black',
      year: '1969'

    },
    {
      image: hellcat,
      name: 'Dodge',
      make: 'Hellcat SRT',
      color: 'Black',
      year: '2018'

    },
    {
      image: supra,
      name: 'Toyota',
      make: 'Supra MK5',
      color: 'Grey',
      year: '2019'

    },
    {
      image: supra,
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
