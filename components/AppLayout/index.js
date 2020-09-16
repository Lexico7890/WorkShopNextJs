export default function AppLayout({children}){
    return(
        <>
            <main>
                {children}
            </main>
            <style global jsx>{`
                html,
                body{
                    padding: 0;
                    margin: 0;
                    background: blue;
                    font-family: -apple-system,
                    BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira
                        Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                }
            `}</style>
        </>
    )
}