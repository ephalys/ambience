import Head from 'next/head';
import Div100vh from 'react-div-100vh';
import { isMobile } from 'react-device-detect';
import { useContext, useEffect, useState } from 'react';
import ButtonsContainer from '@/components/buttonsContainer';
import Controls from '@/components/controls';
import Credits from '@/components/credits';
import { BackgroundsContext } from '@/contexts/backgrounds';
import generateCSSGradient from '@/utils/generateCSSGradient';
import Toast from '@/components/toast';

function Home() {
    const [renderMobileItems, setRenderMobileItems] = useState(true);
    const { backgrounds, backgroundIndexToShow } =
        useContext(BackgroundsContext);

    const mainGradientStyle = {
        background: generateCSSGradient(backgrounds[backgroundIndexToShow]),
    };

    useEffect(() => {
        setRenderMobileItems(isMobile);
    }, []);

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
                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 sm:bottom-1/2 sm:translate-y-1/2 w-full">
                        <ButtonsContainer />
                        {!renderMobileItems && <Controls />}
                    </div>
                    <Credits />
                </Div100vh>
                <Toast />
            </main>
        </>
    );
}

export default Home;
