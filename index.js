const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Define a route that fetches employee data and displays it
app.get('/employees', async (req, res) => {
  try {
    // Make an HTTP GET request to the provided API
    const response = await axios.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees');
    const employees = response.data;

    // Extract the required details (Name, ID, Created At) from the employee data
    const employeeDetails = employees.map((employee) => ({
      name: employee.name,
      id: employee.id,
      createdAt: employee.createdAt,
    }));

    // Display the employee details as JSON
    res.json(employeeDetails);
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
