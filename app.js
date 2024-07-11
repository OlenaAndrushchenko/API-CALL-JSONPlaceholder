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

async function printData() {
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


        document.getElementById('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('id').value;
            const user = results.find(user => user.id == input);

            const resultDiv = document.getElementById('result');
            if (user) {
                resultDiv.innerHTML = `<p>Name: ${user.name}</p><p>Phone: ${user.phone}</p>`;
            } else {
                resultDiv.innerHTML = '<p>User not found</p>';
            }
        });
    });
}

printData()