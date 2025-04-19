// Implementación alternativa sin usar @emailjs/browser
// Usaremos fetch directamente para enviar el correo

interface EmailData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  captcha?: string
}

// EmailJS configuration
const PUBLIC_KEY = 'NkGn241ahWhcNMqcy';
const SERVICE_ID = 'service_cj3zps5';
const TEMPLATE_ID = 'template_hv4tb3d';

export const sendEmail = async (data: EmailData): Promise<void> => {
  // Eliminamos el captcha antes de enviar los datos
  const { captcha, ...templateParams } = {
    from_name: data.name,
    from_email: data.email,
    from_phone: data.phone,
    company: data.company,
    message: data.message,
  };

  const url = 'https://api.emailjs.com/api/v1.0/email/send';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    console.log('Email sent successfully');
    return Promise.resolve();
  } catch (error) {
    console.error('Error sending email:', error);
    return Promise.reject(error);
  }
}
