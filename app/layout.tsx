"use client"

import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import "./globals.css";
import "../styles/critical.css"
import "../styles/contact-form.css"
import { useEffect } from "react"
import ReturnToTop from "@/components/ReturnToTop"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { initFacebookPixel } from '@/utils/facebookPixel';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
    initFacebookPixel();
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional mobile oil change and fleet maintenance services" />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '329053198839981');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=329053198839981&ev=PageView&noscript=1" />`}
        </noscript>
        <script>
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetGroupPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_I2gK5iCetgY40pIzDNHBW7qd6axpk68OEzO7C5BreHA', {
              api_host:'https://us.i.posthog.com',
              person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
          })`}
        </script>
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen w-full`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <div id="optedInFormWrapper"></div>
        <script src="https://esvcs.enginemailer.com/Scripts/viewform.js?id=G7H0sxuE5nmLCIZB7nTyCA%3D%3D&sc=87axo7c90AlrgsICi1BN8Q%3D%3D&type=new"></script>
        <Footer />
        <CookieConsent />
        <ReturnToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}