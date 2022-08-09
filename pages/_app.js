import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="p-2">
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
