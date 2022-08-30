import Head from 'next/head'
import * as Tooltip from '@radix-ui/react-tooltip'
import '@fontsource/righteous/400.css' // Weight 500.
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Tooltip.Provider skipDelayDuration={0}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Tooltip.Provider>
    )
}

export default MyApp
