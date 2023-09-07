import ContactItem from "./ContactItem";
import { AnimatePresence } from "framer-motion";
const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <AnimatePresence key={contact.id}>
          <ContactItem contact={contact} />
        </AnimatePresence>
      ))}
    </ul>
  );
};
export default ContactList;
