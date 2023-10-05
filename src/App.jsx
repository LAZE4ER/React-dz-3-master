import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import ContactList from "./components/ContactList";
import CreateContactForm from "./components/CreateContactForm";
import FilterContacts from "./components/FilterContacts";
import {
  createContactService,
  getAllContactsService,
} from "./services/contactServices";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  function createContact(name, number) {
    if (contacts.some((contact) => contact.name === name)) {
      const fail = "is already in contacts";
      alert(name + " " + fail);
      return;
    }

    createContactService(name, number).then((res) => {
      setContacts((prevContacts) => [res.data, ...prevContacts]);
    });
  }
  function filterContacts() {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.includes(filter);
    });
    return filteredContacts;
  }
  useEffect(() => {
    getAllContactsService().then((res) => {
      setContacts(res.data);
    });
  }, []);
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
