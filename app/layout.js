import 'styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <meta charset="UTF-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

    <title>Angel Redouan</title>
      </head>
      <body className='bg-black w-full h-full overflow-hidden'>
        {children}
      </body>
    </html>
  )
}
