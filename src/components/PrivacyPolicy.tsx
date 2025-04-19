import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container-custom py-16 px-4 mt-16">
      <Link to="/" className="inline-flex items-center text-secondary font-medium mb-6 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver a la página principal
      </Link>
      
      <h1 className="text-3xl font-bold text-primary mb-8">Política de Privacidad</h1>
      
      <div className="prose max-w-none">
        <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
        
        <h2 className="font-bold">1. Introducción</h2>
        <p>
          RYK INVESTMENTS, en adelante "la Empresa", respeta su privacidad y se compromete a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
        </p>
        
        <h2 className="font-bold">2. Datos que recopilamos</h2>
        <p>
          Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
        </p>
        <ul>
          <li>Datos de identidad: nombre, apellido.</li>
          <li>Datos de contacto: dirección de correo electrónico, número de teléfono.</li>
          <li>Datos técnicos: dirección IP, tipo y versión del navegador, configuración de zona horaria, tipos y versiones de plugins del navegador, sistema operativo y plataforma.</li>
          <li>Datos de uso: información sobre cómo utiliza nuestro sitio web.</li>
        </ul>
        
        <h2 className="font-bold">3. Cómo recopilamos sus datos personales</h2>
        <p>
          Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo:
        </p>
        <ul>
          <li>Interacciones directas: puede proporcionarnos sus datos de identidad y contacto al completar formularios o al comunicarse con nosotros.</li>
          <li>Tecnologías automatizadas: a medida que interactúa con nuestro sitio web, podemos recopilar automáticamente datos técnicos sobre su equipo y acciones de navegación.</li>
        </ul>
        
        <h2 className="font-bold">4. Cómo utilizamos sus datos personales</h2>
        <p>
          Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:
        </p>
        <ul>
          <li>Para proporcionarle información sobre nuestros productos o servicios.</li>
          <li>Para cumplir con un contrato que estamos a punto de celebrar o que hemos celebrado con usted.</li>
          <li>Cuando sea necesario para nuestros intereses legítimos y sus intereses y derechos fundamentales no anulen esos intereses.</li>
          <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
        </ul>
        
        <h2 className="font-bold">5. Divulgación de sus datos personales</h2>
        <p>
          Podemos compartir sus datos personales con las partes que se indican a continuación para los fines establecidos en esta política de privacidad:
        </p>
        <ul>
          <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
          <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
          <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
        </ul>
        
        <h2 className="font-bold">6. Seguridad de datos</h2>
        <p>
          Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o accedan de forma no autorizada, se modifiquen o divulguen. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad comercial de conocer.
        </p>
        
        <h2 className="font-bold">7. Retención de datos</h2>
        <p>
          Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines para los que los recopilamos, incluso para satisfacer cualquier requisito legal, contable o de informes.
        </p>
        
        <h2 className="font-bold">8. Sus derechos legales</h2>
        <p>
          Bajo la Ley 1581 de 2012 (Ley de Protección de Datos Personales de Colombia), usted tiene derechos en relación con sus datos personales, incluyendo:
        </p>
        <ul>
          <li>Derecho a solicitar acceso a sus datos personales.</li>
          <li>Derecho a solicitar la corrección de sus datos personales.</li>
          <li>Derecho a solicitar la eliminación de sus datos personales.</li>
          <li>Derecho a oponerse al procesamiento de sus datos personales.</li>
          <li>Derecho a solicitar la restricción del procesamiento de sus datos personales.</li>
          <li>Derecho a la portabilidad de datos.</li>
          <li>Derecho a retirar el consentimiento.</li>
        </ul>
        
        <h2 className="font-bold">9. Cambios a esta política de privacidad</h2>
        <p>
          Podemos actualizar nuestra política de privacidad de vez en cuando. Cualquier cambio que hagamos a nuestra política de privacidad en el futuro se publicará en esta página.
        </p>
        
        <h2 className="font-bold">10. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, comuníquese con nosotros en:
        </p>
        <p>
          Email: <strong>info@rykinvestments.com</strong><br />
          Teléfono: <strong>(+57) 314 884 4156</strong>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
