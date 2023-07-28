import { useEffect, useState } from "react";
import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <div id="table-part">
      <h1 className="header-text">Display Users Details</h1>
      {
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="table-title">ID</TableCell>
              <TableCell className="table-title">Name</TableCell>
              <TableCell className="table-title">Username</TableCell>
              <TableCell className="table-title">Email</TableCell>
              <TableCell className="table-title">Phone</TableCell>
              <TableCell className="table-title">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((item) => (
              <TableRow key={item.id} className="table-row">
                <TableCell className="table-text">{item.id}</TableCell>
                <TableCell className="table-text">{item.name}</TableCell>
                <TableCell className="table-text">{item.username}</TableCell>
                <TableCell className="table-text">{item.email}</TableCell>
                <TableCell className="table-text">{item.phone}</TableCell>
                <TableCell className="table-text">{item.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }

      <h1 className="header-text">
        In this way I can pass redux store to the react app
      </h1>
      <h3 className="header-text">
        To pass Redux store to a React app, I need to follow some steps:
      </h3>

      <div className="text">
        <p>
          1. Install Redux: First of all I install Redux package in my project.
        </p>
        <p>
          2. Create a React store: In my application entry point I must import
          the necessary Redux function and create the store. The redux store is
          a central place that holds the appllicaion state.
        </p>

        <p>
          3.Provide the Redux store to the react app: To make the Redux store
          available to all components in my react app I can also use
          'react-redux' library in my project.
        </p>

        <p>
          
          4. Wrap my app with the React provider: In my app entry point I will wrap
          my component with provider. The Provider will make the Redux store
          accessible to all components to the app.
        </p>

        <h4>Now any component in my app can access the redux store.</h4>
      </div>
    </div>
  );
}

export default App;
