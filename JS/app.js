
// Fetching tableData
const Api = () =>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200){
            console.log (request.responseText);
        } else if (request.readyState === 4){
            console.log("Can't fetch!!!")
        }
    });

    request.open ("GET","https://jsonplaceholder.typicode.com/users" );
    request.send ();


 // Function to display tableData dynamically
 function display(tableData) {
    const Table = document.getElementById("data-container");


    // Creating a table within the DOM
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

  
    if (tableData.length > 0) {
        // Create table headers
        let headers = Object.keys(tableData[0]);
        let headerRow = document.createElement('tr');
        headers.forEach(header => {
            let th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table rows 
        tableData.forEach(item => {
            let row = document.createElement('tr');
            headers.forEach(header => {
                let td = document.createElement('td');
                td.textContent = item[header];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
    }
    Table.appendChild(table);
}
document.getElementById("Submit").addEventListener("click", Api )
Api();
}
