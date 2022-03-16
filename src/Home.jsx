import React from 'react'
import video from './static/video.mp4'

function Home() {
  const [loaded, setLoaded] = React.useState(false)
  const videoRef = React.useRef()

  const handleLoaded = () => {
    setLoaded(true)
    videoRef.current.play()
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <article
        className='fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 text-2xl'>
        <div className='max-w-xl font-serif text-5xl font-extrabold'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500'>
            Angel Redouan creativo, diseñador, estilista. Lorem ipsum dolor sit
          </span>
        </div>
      </article>

      <video
        ref={videoRef}
        loop
        muted
        autoPlay
        playsInline
        preload='auto'
        onLoadedData={handleLoaded}
        className={`${
          loaded ? 'opacity-60' : 'opacity-0'
        } transition duration-[4s] ease-in-out z-10 w-screen h-screen object-cover pointer-events-none`}>
        <source src={video} type='video/mp4' />
        Tu navegador no soporta video
      </video>
    </div>
  )
}

export default Home
