async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error loading data`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
}

async function printTable() {
    const results = await getData();
    const tableBody = document.getElementById('table-body');
    results.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.address.city}</td>
        `;
        tableBody.appendChild(row);
    });
}

printTable()