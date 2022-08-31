import Head from 'next/head'
import Div100vh from 'react-div-100vh'
import { isMobile } from 'react-device-detect'
import { useContext } from 'react'
import ButtonsContainer from '@/components/buttonsContainer'
import Controls from '@/components/controls'
import Credits from '@/components/credits'
import { BackgroundsContext } from '@/contexts/backgrounds'
import generateCSSGradient from '@/utils/generateCSSGradient'

function Home() {
    const { backgrounds, backgroundIndexToShow } =
        useContext(BackgroundsContext)

    const mainGradientStyle = {
        background: generateCSSGradient(backgrounds[backgroundIndexToShow]),
    }

    return (
        <>
            <Head>
                <title>Ambience</title>
                <meta name="description" content="Gradients generator" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className="relative overflow-x-hidden"
                style={mainGradientStyle}
            >
                <Div100vh>
                    <h1 className="absolute top-4 inset-x-0 text-h1 font-title text-center">
                        Ambience
                    </h1>
                    <ButtonsContainer />
                    {!isMobile && <Controls />}
                    <Credits />
                </Div100vh>
            </main>
        </>
    )
}

export default Home
