import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container-custom py-16 px-4 mt-16">
      <Link to="/" className="inline-flex items-center text-secondary font-medium mb-6 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver a la página principal
      </Link>
      
      <h1 className="text-3xl font-bold text-primary mb-8">Términos y Condiciones</h1>
      
      <div className="prose max-w-none">
        <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
        
        <h2 className="font-bold">1. Introducción</h2>
        <p>
          Estos términos y condiciones rigen el uso de este sitio web; al usar este sitio web, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones o cualquier parte de estos términos y condiciones, no debe usar este sitio web.
        </p>
        
        <h2 className="font-bold">2. Licencia para usar el sitio web</h2>
        <p>
          A menos que se indique lo contrario, RYK INVESTMENTS y/o sus licenciantes poseen los derechos de propiedad intelectual publicados en este sitio web y los materiales utilizados en el sitio web. Sujeto a la licencia a continuación, todos estos derechos de propiedad intelectual están reservados.
        </p>
        <p>
          Puede ver, descargar solo para el almacenamiento en caché y imprimir páginas del sitio web para su uso personal, sujeto a las restricciones establecidas a continuación y en otras partes de estos términos y condiciones.
        </p>
        <p>No debe:</p>
        <ul>
          <li>Republicar material de este sitio web (incluyendo la republicación en otro sitio web);</li>
          <li>Vender, alquilar o sublicenciar material del sitio web;</li>
          <li>Mostrar cualquier material del sitio web en público;</li>
          <li>Reproducir, duplicar, copiar o explotar de otra manera el material en este sitio web con fines comerciales;</li>
          <li>Editar o modificar cualquier material en el sitio web;</li>
          <li>Redistribuir material de este sitio web, excepto el contenido específicamente y expresamente disponible para redistribución.</li>
        </ul>
        
        <h2 className="font-bold">3. Uso aceptable</h2>
        <p>
          No debe utilizar este sitio web de ninguna manera que cause, o pueda causar, daño al sitio web o deterioro de la disponibilidad o accesibilidad del sitio web; o de cualquier manera que sea ilegal, ilegal, fraudulenta o dañina, o en conexión con cualquier propósito o actividad ilegal, ilegal, fraudulenta o dañina.
        </p>
        <p>
          No debe utilizar este sitio web para copiar, almacenar, alojar, transmitir, enviar, usar, publicar o distribuir cualquier material que consista en (o esté vinculado a) cualquier spyware, virus informático, troyano, gusano, registrador de pulsaciones, rootkit u otro software malicioso.
        </p>
        <p>
          No debe realizar ninguna actividad de recopilación de datos sistemática o automatizada en o en relación con este sitio web sin el consentimiento expreso por escrito de RYK INVESTMENTS.
        </p>
        
        <h2 className="font-bold">4. Limitación de responsabilidad</h2>
        <p>
          En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este sitio web (incluyendo, sin limitación, cualquier garantía implícita por ley con respecto a la calidad satisfactoria, idoneidad para el propósito y/o el uso de cuidado y habilidad razonables).
        </p>
        <p>
          Nada en este descargo de responsabilidad:
        </p>
        <ul>
          <li>Limitará o excluirá nuestra o su responsabilidad por muerte o lesiones personales resultantes de negligencia;</li>
          <li>Limitará o excluirá nuestra o su responsabilidad por fraude o tergiversación fraudulenta;</li>
          <li>Limitará cualquiera de nuestras o sus responsabilidades de cualquier manera que no esté permitida bajo la ley aplicable; o</li>
          <li>Excluirá cualquiera de nuestras o sus responsabilidades que no puedan ser excluidas bajo la ley aplicable.</li>
        </ul>
        
        <h2 className="font-bold">5. Indemnización</h2>
        <p>
          Por la presente, usted nos indemniza y se compromete a mantenernos indemnizados contra cualquier pérdida, daño, costo, responsabilidad y gasto (incluyendo, sin limitación, gastos legales y cualquier monto pagado por nosotros a un tercero en la resolución de un reclamo o disputa) incurrido o sufrido por nosotros que surja de cualquier incumplimiento por su parte de cualquier disposición de estos términos y condiciones.
        </p>
        
        <h2 className="font-bold">6. Infracciones de estos términos y condiciones</h2>
        <p>
          Sin perjuicio de nuestros otros derechos bajo estos términos y condiciones, si usted infringe estos términos y condiciones de alguna manera, podemos tomar las medidas que consideremos apropiadas para tratar la infracción, incluyendo la suspensión de su acceso al sitio web, la prohibición de acceso al sitio web, el bloqueo de computadoras que utilizan su dirección IP para acceder al sitio web, y/o iniciar acciones legales contra usted.
        </p>
        
        <h2 className="font-bold">7. Variación</h2>
        <p>
          Podemos revisar estos términos y condiciones de vez en cuando. Los términos y condiciones revisados se aplicarán al uso del sitio web a partir de la fecha de publicación de los términos y condiciones revisados en el sitio web.
        </p>
        
        <h2 className="font-bold">8. Asignación</h2>
        <p>
          Podemos transferir, subcontratar o tratar de otra manera nuestros derechos y/u obligaciones bajo estos términos y condiciones sin notificárselo u obtener su consentimiento.
        </p>
        <p>
          Usted no puede transferir, subcontratar o tratar de otra manera sus derechos y/u obligaciones bajo estos términos y condiciones.
        </p>
        
        <h2 className="font-bold">9. Divisibilidad</h2>
        <p>
          Si una disposición de estos términos y condiciones es determinada por cualquier tribunal u otra autoridad competente como ilegal y/o inaplicable, las otras disposiciones continuarán en vigor.
        </p>
        <p>
          Si cualquier disposición ilegal y/o inaplicable sería legal o aplicable si parte de ella fuera eliminada, esa parte se considerará eliminada, y el resto de la disposición continuará en vigor.
        </p>
        
        <h2 className="font-bold">10. Acuerdo completo</h2>
        <p>
          Estos términos y condiciones constituyen el acuerdo completo entre usted y RYK INVESTMENTS en relación con su uso de este sitio web, y reemplazan todos los acuerdos anteriores con respecto a su uso de este sitio web.
        </p>
        
        <h2 className="font-bold">11. Ley y jurisdicción</h2>
        <p>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia, y cualquier disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de Colombia.
        </p>
        
        <h2 className="font-bold">12. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos términos y condiciones, comuníquese con nosotros en:
        </p>
        <p>
          Email: <strong>info@rykinvestments.com</strong><br />
          Teléfono: <strong>(+57) 314 884 4156</strong>
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditions
