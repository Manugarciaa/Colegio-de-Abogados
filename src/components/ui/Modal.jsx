import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === styles.modalOverlay) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>Requisitos de Matriculación</h2>

        <section>
          <h3>I. Documentación Requerida</h3>
          <ul>
            <li>Diploma original legalizado por el Ministerio de Educación de la Nación y Ministerio del Interior.</li>
            <li>Dos fotocopias reducidas del Diploma (Tamaño A4) certificadas.</li>
            <li>Una fotocopia del certificado analítico certificada.</li>
            <li>Fotocopia del DNI de ambos lados.</li>
            <li>Constancia de CUIL/CUIT.</li>
            <li>Constancia de otros Colegios donde estuvieras matriculado (si aplica).</li>
          </ul>
        </section>

        <section>
          <h3>II. Fechas y Lugar de Inscripción</h3>
          <p>Fechas de juramento ante la Excma. Corte Suprema de Justicia de la Provincia: segundo y último miércoles de cada mes.</p>
          <p>Es esencial presentar la nota de pedido de casillero con la documentación requerida.</p>
          <p>Las inscripciones se efectuarán en forma personal en la sede del Colegio, España 1583 Concepción, de lunes a viernes de 9 a 12 horas.</p>
          <p>Por consultas, comunicarse al teléfono fijo 0386542259, de 8:30 a 13:00 horas.</p>
        </section>

        <section>
          <h3>III. Pagos en Concepto de Inscripción</h3>
          <h4>1. Caja de Jubilaciones:</h4>
          <ul>
            <li>Suma fija anual: $ 4.720,00</li>
            <li>Inscripción en la Matrícula (Caja): $ 944,00</li>
          </ul>
          <h4>2. Inscripción en el Colegio:</h4>
          <ul>
            <li>Abogados hasta tres (3) años de Título: $ 5.150,00</li>
            <li>Abogados de más de tres (3) años y menos de siete (7) de Título: $ 10.750,00</li>
            <li>Abogados más siete (7) años de Título: $ 14.050,00</li>
          </ul>
          <p>Credencial: $ 500,00</p>
        </section>

        <section>
          <h3>IV. Abogados Inscriptos en el Colegio de Abogados de Tucumán</h3>
          <p>Además de la documentación descrita con anterioridad, deberán adjuntar:</p>
          <ol type="a">
            <li>Comprobante de pago de la matrícula unificada.</li>
            <li>Comprobante del pago del aporte fijo anual de la Caja de Abogados.</li>
          </ol>
        </section>

        <section>
          <h3>V. Abogados de otras provincias</h3>
          <p>Además de los requisitos mencionados, deberán adjuntar mediante nota:</p>
          <p>Declaración jurada de no tener causas penales pendientes, ni estar comprendido en las causales de inhabilidad e incompatibilidad contempladas en el artículo 8 inciso c de la ley 5233.</p>
        </section>

        <section>
          <h3>VI. Abogados de otras provincias y de la Capital Federal</h3>
          <ol>
            <li>Inscripción en la matrícula: $540.000 (tres consultas escritas).</li>
            <li>Caja de Jubilaciones:
              <ul>
                <li>Suma fija anual: $ 4.720,00</li>
                <li>Inscripción en la Matrícula (Caja): $ 944,00</li>
              </ul>
            </li>
            <li>Cuota anual del Colegio:
              <ul>
                <li>Abogados hasta tres (3) años de Título: $ 5.150,00</li>
                <li>Abogados de más de tres (3) años y menos de siete (7) de Título: $ 10.750,00</li>
                <li>Abogados más siete (7) años de Título: $ 14.050,00</li>
              </ul>
            </li>
            <li>Credencial: $ 500,00</li>
            <li>Constituir domicilio legal en la ciudad de Concepción.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Modal;