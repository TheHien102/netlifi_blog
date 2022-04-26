import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Netlify Widget */}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                <script dangerouslySetInnerHTML={{
                    __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `
                }}/>
                </body>
            </Html>
        )
    }
}

export default MyDocument