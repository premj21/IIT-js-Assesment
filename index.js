// Initial Data (JSON Array)
const originalDataJSON = `[
  {
    "id": 1,
    "chemicalName": "Ammonium Persulfate",
    "vendor": "LG Chem",
    "density": 3525.92,
    "viscosity": 60.63,
    "packaging": "Bag",
    "packSize": "100.00",
    "unit": "kg",
    "quantity": 6495.18,
  },
  {
    "id": 2,
    "chemicalName": "Caustic Potash",
    "vendor": "Formosa",
    "density": 3172.15,
    "viscosity": 48.22,
    "packaging": "Bag",
    "packSize": "100.00",
    "unit": "kg",
    "quantity": 8751.9,
  },
  {
    "id": 3,
    "chemicalName": "Dimethylaminopropylamino",
    "vendor": "LG Chem",
    "density": 8435.37,
    "viscosity": 12.62,
    "packaging": "Barrel",
    "packSize": "75.00",
    "unit": "L",
    "quantity": 5964.61,
  },
  {
    "id": 4,
    "chemicalName": "Mono Ammonium Phosphate",
    "vendor": "Sinopec",
    "density": 1597.65,
    "viscosity": 76.51,
    "packaging": "Bag",
    "packSize": "105.00",
    "unit": "kg",
    "quantity": 8183.73,
  },
  {
    "id": 5,
    "chemicalName": "Ferric Nitrate",
    "vendor": "DowDuPont",
    "density": 364.04,
    "viscosity": 14.9,
    "packaging": "Bag",
    "packSize": "105.00",
    "unit": "kg",
    "quantity": 4154.33,
  },
  {
    "id": 6,
    "chemicalName": "n-Pentane",
    "vendor": "Sinopec",
    "density": 4535.26,
    "viscosity": 66.76,
    "packaging": "N/A",
    "packSize": "N/A",
    "unit": "t",
    "quantity": 6272.34,
  },
  {
    "id": 7,
    "chemicalName": "Glycol Ether PM",
    "vendor": "LG Chem",
    "density": 6495.18,
    "viscosity": 72.12,
    "packaging": "Bag",
    "packSize": "250.00",
    "unit": "kg",
    "quantity": 8749.54,
  },
  {
    "id": 8,
    "chemicalName": "Potassium Hydroxide",
    "vendor": "Mitsubishi",
    "density": 3062.8,
    "viscosity": 22.5,
    "packaging": "Bag",
    "packSize": "50.00",
    "unit": "kg",
    "quantity": 4785.12,
  },
  {
    "id": 9,
    "chemicalName": "Sodium Bicarbonate",
    "vendor": "BASF",
    "density": 1699.8,
    "viscosity": 30.4,
    "packaging": "Bag",
    "packSize": "25.00",
    "unit": "kg",
    "quantity": 6200.25,
  },
  {
    "id": 10,
    "chemicalName": "Sodium Hydroxide",
    "vendor": "AkzoNobel",
    "density": 1320.5,
    "viscosity": 55.2,
    "packaging": "Drum",
    "packSize": "200.00",
    "unit": "L",
    "quantity": 3540.67,
  },
  {
    "id": 11,
    "chemicalName": "Hydrochloric Acid",
    "vendor": "Solvay",
    "density": 1185.0,
    "viscosity": 5.0,
    "packaging": "Tank",
    "packSize": "1000.00",
    "unit": "L",
    "quantity": 2950.0,
  },
  {
    "id": 12,
    "chemicalName": "Sulfuric Acid",
    "vendor": "Linde",
    "density": 1840.0,
    "viscosity": 27.0,
    "packaging": "Container",
    "packSize": "1000.00",
    "unit": "L",
    "quantity": 1500.0,
  },
  {
    "id": 13,
    "chemicalName": "Nitric Acid",
    "vendor": "Yara",
    "density": 1380.0,
    "viscosity": 4.0,
    "packaging": "Drum",
    "packSize": "200.00",
    "unit": "L",
    "quantity": 400.0,
  },
  {
    "id": 14,
    "chemicalName": "Acetic Acid",
    "vendor": "SABIC",
    "density": 1045.0,
    "viscosity": 1.5,
    "packaging": "Barrel",
    "packSize": "200.00",
    "unit": "L",
    "quantity": 1800.0,
  },
  {
    "id": 15,
    "chemicalName": "Formic Acid",
    "vendor": "Eastman",
    "density": 1100.0,
    "viscosity": 1.0,
    "packaging": "Container",
    "packSize": "500.00",
    "unit": "L",
    "quantity": 2300.0,
  },
];`;

// Convert JSON string to JavaScript object
let chemicalData = JSON.parse(originalDataJSON);
let sortDirection = 1; // 1 for ascending, -1 for descending

// Populate Table Function
function populateTable(data) {
  const tbody = document.querySelector("#chemicalTable tbody");
  tbody.innerHTML = ""; // Clear the table body
  data.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td><input type="checkbox" class="row-select" data-index="${index}"></td>
            <td>${row.id}</td>
            <td class="editable-cell"><input type="text" value="${row.chemicalName}" /></td>
            <td class="editable-cell"><input type="text" value="${row.vendor}" /></td>
            <td class="editable-cell"><input type="number" value="${row.density}" /></td>
            <td class="editable-cell"><input type="number" value="${row.viscosity}" /></td>
            <td class="editable-cell"><input type="text" value="${row.packaging}" /></td>
            <td class="editable-cell"><input type="text" value="${row.packSize}" /></td>
            <td class="editable-cell"><input type="text" value="${row.unit}" /></td>
            <td class="editable-cell"><input type="number" value="${row.quantity}" /></td>
        `;
    tbody.appendChild(tr);
  });
}

// Call populateTable initially to load the table
populateTable(chemicalData);

// Refresh Table Functionality
document.querySelector("#refreshTable").addEventListener("click", () => {
  // Reset the chemicalData array to its original state
  chemicalData = JSON.parse(originalDataJSON); // Re-parse the original JSON data
  populateTable(chemicalData);
});

// Add Row Functionality (with clear field on focus for new rows)
document.querySelector("#addRow").addEventListener("click", () => {
  const newRow = {
    id: chemicalData.length + 1,
    chemicalName: "New Chemical",
    vendor: "New Vendor",
    density: 0,
    viscosity: 0,
    packaging: "New Packaging",
    packSize: "0.00",
    unit: "kg",
    quantity: 0,
  };

  chemicalData.push(newRow);
  populateTable(chemicalData); // Re-populate the table with the new row

  // Add event listener to clear the fields of the new row
  const newIndex = chemicalData.length - 1; // Index of the newly added row
  clearNewRowFieldsOnFocus(newIndex);
});

// Function to clear the input fields on focus for new rows
function clearNewRowFieldsOnFocus(index) {
  // Select all input fields for the new row and add 'focus' event listeners
  const newRowInputs = document.querySelectorAll(
    `tr:nth-child(${index + 1}) input`
  );

  newRowInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      if (
        this.value === "New Chemical" ||
        this.value === "New Vendor" ||
        this.value === "New Packaging" ||
        this.value === "0.00" ||
        this.value === "0" // For number fields
      ) {
        this.value = ""; // Clear the input field
      }
    });
  });
}
// Delete Selected Row Functionality
document.querySelector("#deleteRow").addEventListener("click", () => {
  const selectedRows = document.querySelectorAll(".row-select:checked");
  selectedRows.forEach((row) => {
    const index = row.getAttribute("data-index");
    chemicalData.splice(index, 1); // Remove the selected row
  });
  populateTable(chemicalData); // Repopulate the table
});

// Move Row Up Functionality
document.querySelector("#moveUp").addEventListener("click", () => {
  const selectedRows = [...document.querySelectorAll(".row-select:checked")];
  if (selectedRows.length) {
    const indices = selectedRows.map((row) =>
      parseInt(row.getAttribute("data-index"))
    );

    // Check if any of the selected rows are already at the top
    if (Math.min(...indices) === 0) return; // Stop if any selected row is at the top

    // Move each selected row up
    indices.forEach((index) => {
      if (index > 0) {
        [chemicalData[index - 1], chemicalData[index]] = [
          chemicalData[index],
          chemicalData[index - 1],
        ];
      }
    });
    populateTable(chemicalData);
  }
});

// Move Row Down Functionality
document.querySelector("#moveDown").addEventListener("click", () => {
  const selectedRows = [...document.querySelectorAll(".row-select:checked")];
  if (selectedRows.length) {
    const indices = selectedRows.map((row) =>
      parseInt(row.getAttribute("data-index"))
    );

    // Check if any of the selected rows are already at the bottom
    if (Math.max(...indices) === chemicalData.length - 1) return; // Stop if any selected row is at the bottom

    // Move each selected row down
    indices.reverse().forEach((index) => {
      if (index < chemicalData.length - 1) {
        [chemicalData[index], chemicalData[index + 1]] = [
          chemicalData[index + 1],
          chemicalData[index],
        ];
      }
    });
    populateTable(chemicalData);
  }
});

// Sort Table Functionality
document.querySelectorAll(".sortable").forEach((header) => {
  header.addEventListener("click", () => {
    const column = header.getAttribute("data-column");
    sortTableByColumn(column);
  });
});

function sortTableByColumn(column) {
  chemicalData.sort((a, b) => {
    const aValue = a[column];
    const bValue = b[column];

    if (typeof aValue === "string") {
      return sortDirection * aValue.localeCompare(bValue);
    } else {
      return sortDirection * (aValue - bValue);
    }
  });

  // Toggle sorting direction for the next click
  sortDirection = sortDirection === 1 ? -1 : 1;

  populateTable(chemicalData);
}

// Save Data Functionality
document.querySelector("#saveData").addEventListener("click", () => {
  localStorage.setItem("chemicalData", JSON.stringify(chemicalData));
  alert("Data saved successfully!");
});

// Load Data from Local Storage on Page Load
window.addEventListener("load", () => {
  const savedData = localStorage.getItem("chemicalData");
  if (savedData) {
    chemicalData = JSON.parse(savedData);
    populateTable(chemicalData);
  }
});
