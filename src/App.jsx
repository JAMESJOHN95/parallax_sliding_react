import './App.css'
import Navbar1 from './Componants/Navbar'
import './bootstrap.min.css'
import car1 from './images/back.jpg'
import car2 from './images/front.jpg'
import car3 from './images/safety.jpg'
import car4 from './images/sonet-interio.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { Parallax } from "react-parallax";




function App() {

  return (
    <>
      <Navbar1 />
      <Carousel >
        <Carousel.Item style={{ height: '100vh', backgroundImage: `url(${car2})`, backgroundSize: 'cover' }} interval={1000}>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100vh', backgroundImage: `url(${car1})`, backgroundSize: 'cover' }} interval={1000}>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100vh', backgroundImage: `url(${car3})`, backgroundSize: 'cover' }} interval={1000}>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '100vh', backgroundImage: `url(${car4})`, backgroundSize: 'cover' }}  interval={1000}>
          
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
{/* --------------------------------------------------PARALLAX-------------------------------------------------------------------------- */}

      <div>
                <h1 className='mt-3 mb-3' style={{ textAlign: "center", color: "green" }}>
                Welcome to a world of infinite choices
                </h1>
                <h1 style={{ textAlign: "center", color: "black" }}>
                  
                </h1>
                <div className="container">
                    <Parallax
                        bgImage=
                        "https://imgeng.jagran.com/images/2023/aug/kia%20sonet%201693298991790.jpg"
                        strength={200} style={{                            
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div style={{ height: 400 }}>
                            <p className='mt-5 fs-3 ms-3 text-primary'>KIA SONET</p>
                        </div>
                    </Parallax>
                    <div className='mt-3 mb-3 p-3 '>
                      <h2>Introducing, The new Sonet.</h2>
                      <p className='fs-2 text-dark'>In a world gone tame, The new Sonet is here to set you free.
Chiseled to perfection, raw in power, and loaded with tech, it's built to give you a one-of-a-kind driving experience. So, climb in the new Kia Sonet and let your wild instincts take over.</p>
<h2>Get it all beyond price: Premium, Quality & Value.</h2>
<p className='fs-2 text-dark'>The new Sonet delivers a wild driving experience that’s reborn to transcend your expectations.
Get ready to immerse yourself in the world of unmatched quality, unbeatable value, and unparalleled premium appeal. With a commitment to excellence, the Sonet offers exceptional value-for-money boasting the Lowest Maintenance Cost, Best Total Cost of Ownership and Highest Residual Value in its segment*.</p>
                    </div>
                    <Parallax
                        bgImage=
                        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/seltos/showroom/Seltos-showroom-banner-desktop.jpg"
                        strength={200} style={{
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div style={{ height: 400 }}>
                            <h1 className='mt-5 fs-3 ms-3 text-primary'>KIA SELTOS</h1>
                        </div>
                    </Parallax>
                    <div className='mt-3 p-3'>
                      <h2>Level up with the Badass.</h2>
                      <p className="mt-3 mb-3  fs-2">Dominant, confident, and exhilarating. With a strong, chiseled look and a formidable stance, the new Kia Seltos showcases its Badass traits. Featuring highly powerful and fuel-efficient engine options, along with 32 safety features including 17 autonomous ADAS Level 2 features, the reinvented Seltos has everything it takes to be a Badass on the road.</p>
                    </div>
                    <Parallax
                        bgImage=
                        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/144163/carens-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80&q=80"
                        strength={200} style={{ marginTop: "2rem", 
                            // width:"50vw",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }} >
                        <div style={{ height: 400 }}>
                            <h1 className='mt-5 fs-3 ms-3 text-primary'>KIA CARENS</h1>
                        </div>
                    </Parallax>
                    <div className='mt-3 p-3 text-dark fs-3 text-align-justify'>
                      <p>Take all the great things the Kia Carens has to offer and get ready to be transported to a different world.
Right from the xclusive matte graphite to the space-age cockpit with sage green upholstery and rear seat entertainment screen, the Carens X-line is crafted to immerse you into a different world of style and comfort.</p>
<h2>A world of bold and captivating style</h2>
<p>The distinctive style of Kia Carens inspires awe and respect at the same time. Just like you, this car commands instant attention.
It has been designed with bold attitude and space-age sophistication to offer experiences from a different world.​</p>
                    </div>
                </div>

                
            </div>
            <hr />

    </>
  )
}

export default App
