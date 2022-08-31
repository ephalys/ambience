import Head from 'next/head'
import ButtonsContainer from '@/components/buttonsContainer'
import Controls from '@/components/controls'
import Credits from '@/components/credits'
import Div100vh from 'react-div-100vh'
import { isMobile } from 'react-device-detect'
import { useContext } from 'react'
import { BackgroundsContext } from 'contexts/backgrounds'

function Home() {
    const { backgrounds } = useContext(BackgroundsContext)

    return (
        <>
            <Head>
                <title>Ambience</title>
                <meta name="description" content="Gradients generator" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                className="relative overflow-x-hidden"
                style={{
                    background: `linear-gradient(45deg, ${backgrounds.map(
                        (background) => `${background}`
                    )})`,
                }}
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
