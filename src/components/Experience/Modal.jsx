import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

const Modal = ({ experience, onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>

        <div className="modal-header">
          <img src={experience.logo} alt={experience.company} />
          <div>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <span>{experience.period}</span>
          </div>
        </div>

        <div className="modal-body">
          <ul>
            {experience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal