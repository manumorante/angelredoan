export default function Page() {
  return ( 
    <div className='w-full h-full flex justify-center items-center overflow-hidden'>
      <article
        className='fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 text-2xl'>
        <div className='max-w-xl font-serif text-5xl text-neutral-900 font-extrabold'>
          Angel Redouan creativo, diseñador, estilista.
        </div>
      </article>

      <video
        loop
        muted
        playsInline
        preload='auto'
        className='opacity-60 transition duration-5 z-10 w-full h-full object-cover pointer-events-none overflow-hidden'>
        <source src='/tela.mp4' type='video/mp4' />
        Tu navegador no soporta video
      </video>
    </div>
  )
}
