import '../styles/globals.css'
import Script from 'next/script'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
            <Component {...pageProps} />
        </>)
}

export default MyApp
