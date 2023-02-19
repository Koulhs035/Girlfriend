function sendNotification() {
    OneSignal.postNotification({ 
      contents: {
        en: "I love you"
      },
      included_segments: ["All"]
    });
  }
  