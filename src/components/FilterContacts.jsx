import { TextField } from "@mui/material";
import { motion } from "framer-motion";
const FilterContacts = ({ Filter, setFilter }) => {
  return (
    <div>
      <h1 className="Find">Find contacts by name</h1>
      <TextField
        type="text"
        value={Filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
export default FilterContacts;
