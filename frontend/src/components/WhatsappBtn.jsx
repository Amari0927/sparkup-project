import { FloatingWhatsApp } from "react-floating-whatsapp"

const WhatsappBtn = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="12462693100"
      accountName="SparkUp Maintenance"
      avatar="/src/assets/logo.jpeg"
      notificationDelay={5}
    />
  )
}

export default WhatsappBtn