import ContactItem from "./ContactItem";
import { AnimatePresence } from "framer-motion";
const ContactList = ({ contacts }) => {
  return (
    <ul>
      <AnimatePresence>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </AnimatePresence>
    </ul>
  );
};
export default ContactList;
