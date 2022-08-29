import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head />
                <body
                    className="relative overflow-x-hidden"
                    style={{
                        background: 'linear-gradient(45deg, #e66465, #9198e5);',
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
