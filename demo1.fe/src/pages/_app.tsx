import {AppPropsWithLayout} from "../types";

export default function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page: any) => page);

    return (
        <>
            {getLayout(<Component {...pageProps} />)}
        </>
    )
}