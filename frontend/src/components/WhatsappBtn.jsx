import { FloatingWhatsApp } from "react-floating-whatsapp"



const WhatsappBtn = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="12462693100"
      accountName="SparkUp Electrical, Security & Cooling"
      avatar="/assets/logo-img.jpeg" 
      notificationDelay={5}
    />
  )
}

export default WhatsappBtn