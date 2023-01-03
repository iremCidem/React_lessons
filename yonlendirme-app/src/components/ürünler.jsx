import React from 'react'
import {Link,Router,Route,useRoutes,useParams} from 'react-router-dom';
const bilgiler =[
  {id:0,
  kategori:"Anakart",
  ürün:"MSI",
  fiyat:5000,
  açıklama:"MSI Anakart 3 adet ddr5..."

},
 {id:1,
  kategori:"Harddisk",
  ürün:"Western Digital",
  fiyat:2000,
  açıklama:"500GB Hafıza..."

},
 {id:2,
  kategori:"Ekran Kartı",
  ürün:"Nvdia",
  fiyat:15000,
  açıklama:"8GB Hafıze..."

}
]

export default function Urünler() {

  return (
 <div>
    <div className="container">
      <div className="alert alert-primary">
        <h3 className='text-center'>Ürünler Sayfasına hoşgeldiniz.</h3>
        <div className="container mt-3">
          <div className="row ">
            {bilgiler.map((bilgi) => {
              return(<div className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <h3>{bilgi.kategori}</h3>
                  <p>{bilgi.ürün}</p>
                   <Link className="btn btn-primary" >Detaya git</Link>
                </div>
              </div>
            </div> )
          })}
            
    
            
          </div>
        </div>
      </div>
    </div>
 </div>
  )
}
