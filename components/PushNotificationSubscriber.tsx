"use client"

import { useState, useEffect } from "react"

const PushNotificationSubscriber = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.getSubscription().then((subscription) => {
          setIsSubscribed(!!subscription)
        })
      })
    }
  }, [])

  const subscribeUser = async () => {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.ready

      try {
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: "YOUR_PUBLIC_VAPID_KEY_HERE",
        })

        // Send the subscription to your server
        await fetch("/api/push-subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscription),
        })

        setIsSubscribed(true)
        console.log("User is subscribed:", subscription)
      } catch (error) {
        console.log("Failed to subscribe the user: ", error)
      }
    }
  }

  const unsubscribeUser = async () => {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.getSubscription()

      if (subscription) {
        await subscription.unsubscribe()
        // Inform your server about the unsubscription
        await fetch("/api/push-subscription", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscription),
        })

        setIsSubscribed(false)
        console.log("User is unsubscribed")
      }
    }
  }

  return (
    <div>
      {isSubscribed ? (
        <button onClick={unsubscribeUser}>Unsubscribe from Push Notifications</button>
      ) : (
        <button onClick={subscribeUser}>Subscribe to Push Notifications</button>
      )}
    </div>
  )
}

export default PushNotificationSubscriber

