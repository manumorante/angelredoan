import cx from 'classnames'
import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()
  const video = router.basePath + '/tela.mp4'

  return (
    <div className='Index flex justify-center items-center overflow-hidden'>
      <article className='relative z-20 p-8'>
        <div
          className={cx(
            'Hello',
            'max-w-xl',
            'font-serif text-5xl',

            // Texto with gradient
            'bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-transparent',

            // Fade-in
            'opacity-0 animate-[fade-in_2s_ease-in_forwards]'
          )}>
          Angel Redouan creativo, diseñador, estilista.
        </div>
      </article>

      <video
        autoPlay
        loop
        muted
        className={cx(
          'Video',
          'fixed z-10',
          'w-full h-full object-cover',

          // From 0 to 0.4 fade with 0.6 delay
          'opacity-0 animate-[fade-in-40_3s_ease-in_0.6s_forwards]'
        )}>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Index
