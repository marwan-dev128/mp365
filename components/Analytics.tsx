import Script from "next/script";
import { ClickTracker } from "./ClickTracker";

/**
 * GA4 and Microsoft Clarity, each loaded only when its ID is configured:
 *   NEXT_PUBLIC_GA_ID       e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_CLARITY_ID  e.g. abcd1234ef
 * With neither set this renders nothing but the click tracker, whose events
 * are no-ops, so local and preview builds never report traffic.
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;
  const valid = (id?: string) => !!id && /^[A-Za-z0-9-]+$/.test(id);

  return (
    <>
      {valid(ga) && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {valid(clarity) && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}
        </Script>
      )}
      <ClickTracker />
    </>
  );
}
