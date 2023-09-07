import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
} from "@mui/material";
import ContactList from "./components/ContactList";
import CreateContactForm from "./components/CreateContactForm";
import FilterContacts from "./components/FilterContacts";
function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);


  const [filter, setFilter] = useState("");

  function createContact(name, number) {
    if (contacts.some((contact) => contact.name===name)) {
      const fail = 'is already in contacts'
      alert(name +  " " + fail)
      return
    }
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }
  function filterContacts() {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.includes(filter);
    });
    return filteredContacts;
  }
  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <Paper
        elevation={5}
        sx={{
          padding: "18px",
        }}
      >
        <CreateContactForm onCreate={createContact} />

        <ContactList contacts={filterContacts()} />
        <FilterContacts Filter={filter} setFilter={setFilter} />


      </Paper>
    </Container>
  );
}

export default App;
