import { motion } from "framer-motion";
const ContactItem = ({ contact }) => {
  return (
    <motion.li
      initial={{
        height: 0,
      }}
      animate={{
        height: 40,
      }}
      exit={{
        height: 0,
      }}
    >
      <h1 className="text">
        {contact.name}:{contact.number}
      </h1>
    </motion.li>
  );
};
export default ContactItem;
