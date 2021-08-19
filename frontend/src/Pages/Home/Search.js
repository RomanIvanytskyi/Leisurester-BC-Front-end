import { Button, FormControl } from "react-bootstrap";

const SearchField = () => {
  return (
    <div>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </div>
  );
};

export default SearchField;
