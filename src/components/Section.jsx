import { motion } from 'framer-motion';

export default function Section({ id, className = '', children }) {
  return (
    <motion.section 
      id={id} 
      className={`py-20 md:py-28 ${className}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {children}
      </div>
    </motion.section>
  );
}
