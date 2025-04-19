import React, { useState } from 'react'
import { validateEmail, validatePhone } from '../utils/validation'
import { sendEmail } from '../services/emailService'
import { Link } from 'react-router-dom'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  captcha: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  captcha?: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo electrónico inválido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El número de teléfono es requerido'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Número de teléfono inválido'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }
    
    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Por favor complete la verificación'
    } else if (formData.captcha !== '9') {
      newErrors.captcha = 'Respuesta incorrecta'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await sendEmail(formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
          Nombre Completo <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
            errors.name ? 'border-accent' : 'border-gray-300'
          }`}
          placeholder="Su nombre"
        />
        {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
          Correo Electrónico <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
            errors.email ? 'border-accent' : 'border-gray-300'
          }`}
          placeholder="ejemplo@correo.com"
        />
        {errors.email && <p className="mt-1 text-sm text-accent">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
          Celular/WhatsApp <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
            errors.phone ? 'border-accent' : 'border-gray-300'
          }`}
          placeholder="(+57) 300 000 0000"
        />
        {errors.phone && <p className="mt-1 text-sm text-accent">{errors.phone}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
          Mensaje <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
            errors.message ? 'border-accent' : 'border-gray-300'
          }`}
          placeholder="¿Cómo podemos ayudarle?"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-accent">{errors.message}</p>}
      </div>
      
      <div>
        <label htmlFor="captcha" className="block text-sm font-bold text-gray-700 mb-1">
          Verificación de seguridad: ¿Cuánto es 7 + 2? <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          value={formData.captcha}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
            errors.captcha ? 'border-accent' : 'border-gray-300'
          }`}
          placeholder="Ingrese su respuesta"
        />
        {errors.captcha && <p className="mt-1 text-sm text-accent">{errors.captcha}</p>}
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-md hover:bg-secondary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
        <p className="mt-3 text-sm text-gray-600 text-center">
          Al hacer clic está de acuerdo con nuestras <Link to="/politicas-de-privacidad" className="text-secondary hover:underline">políticas de privacidad</Link> y <Link to="/terminos-y-condiciones" className="text-secondary hover:underline">términos y condiciones</Link>
        </p>
      </div>
      
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto con usted pronto.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">
          Hubo un error al enviar su mensaje. Por favor, intente nuevamente o contáctenos directamente por teléfono.
        </div>
      )}
    </form>
  )
}

export default ContactForm
