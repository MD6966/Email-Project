import React from 'react'

const EmbedGoogleMeet = () => {
  const googleMeetUrl = "https://us04web.zoom.us/s/75907094684?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlNCNy";
  return (
    <div>
        <iframe 
        src={googleMeetUrl} 
        width="800" 
        height="600" 
        frameBorder="0" 
        allow="microphone; camera" 
        allowFullScreen
        title="Google Meet Embed"
      ></iframe>
    </div>
  )
}

export default EmbedGoogleMeet
