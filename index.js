// Initial Data (Original Data)
const originalData = `[
  {
    "id": 1,
    "chemicalName": "Ammonium Persulfate",
    "vendor": "LG Chem",
    "density": 3525.92,
    "viscosity": 60.63,
    "packaging": "Bag",
    "packSize": "100.00",
    "unit": "kg",
    "quantity": 6495.18
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
    "quantity": 8751.9
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
    "quantity": 5964.61
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
    "quantity": 8183.73
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
    "quantity": 4154.33
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
    "quantity": 6272.34
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
    "quantity": 8749.54
  },
  {
    "id": 8,
    "chemicalName": "Sodium Bicarbonate",
    "vendor": "BASF",
    "density": 1682.00,
    "viscosity": 9.1,
    "packaging": "Bag",
    "packSize": "50.00",
    "unit": "kg",
    "quantity": 1230.00
  },
  {
    "id": 9,
    "chemicalName": "Potassium Hydroxide",
    "vendor": "Nouryon",
    "density": 405.00,
    "viscosity": 7.2,
    "packaging": "Drum",
    "packSize": "200.00",
    "unit": "kg",
    "quantity": 1500.00
  },
  {
    "id": 10,
    "chemicalName": "Hydrochloric Acid",
    "vendor": "Dow",
    "density": 1200.00,
    "viscosity": 1.0,
    "packaging": "Barrel",
    "packSize": "250.00",
    "unit": "L",
    "quantity": 8000.00
  },
  {
    "id": 11,
    "chemicalName": "Sulfuric Acid",
    "vendor": "Eastman",
    "density": 1840.00,
    "viscosity": 25.0,
    "packaging": "Container",
    "packSize": "1000.00",
    "unit": "L",
    "quantity": 5000.00
  },
  {
    "id": 12,
    "chemicalName": "Acetic Acid",
    "vendor": "SABIC",
    "density": 1040.00,
    "viscosity": 4.5,
    "packaging": "Tank",
    "packSize": "500.00",
    "unit": "L",
    "quantity": 2500.00
  },
  {
    "id": 13,
    "chemicalName": "Methanol",
    "vendor": "Methanex",
    "density": 791.00,
    "viscosity": 0.5,
    "packaging": "Cylinders",
    "packSize": "100.00",
    "unit": "L",
    "quantity": 2000.00
  },
  {
    "id": 14,
    "chemicalName": "Ethanol",
    "vendor": "MGP Ingredients",
    "density": 789.00,
    "viscosity": 1.2,
    "packaging": "Tank",
    "packSize": "1000.00",
    "unit": "L",
    "quantity": 10000.00
  },
  {
    "id": 15,
    "chemicalName": "Hexane",
    "vendor": "Sinopec",
    "density": 655.00,
    "viscosity": 0.3,
    "packaging": "Barrel",
    "packSize": "200.00",
    "unit": "L",
    "quantity": 3000.00
  }
]`;

let chemicalData = loadData();
let sortDirection = 1;
let selectedIndexes = new Set();

// populate table
function populateTable(data) {
  const tbody = document.querySelector("#chemicalTable tbody");
  tbody.innerHTML = ""; // Clear the table body
  data.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="checkbox" class="row-select" data-index="${index}" ${
      selectedIndexes.has(index) ? "checked" : ""
    }></td>
      <td>${row.id}</td>
      <td class="editable-cell"><input type="text" value="${
        row.chemicalName
      }" data-index="${index}" data-field="chemicalName" /></td>
      <td class="editable-cell"><input type="text" value="${
        row.vendor
      }" data-index="${index}" data-field="vendor" /></td>
      <td class="editable-cell"><input type="number" value="${
        row.density
      }" data-index="${index}" data-field="density" /></td>
      <td class="editable-cell"><input type="number" value="${
        row.viscosity
      }" data-index="${index}" data-field="viscosity" /></td>
      <td class="editable-cell"><input type="text" value="${
        row.packaging
      }" data-index="${index}" data-field="packaging" /></td>
      <td class="editable-cell"><input type="number" value="${
        row.packSize
      }" data-index="${index}" data-field="packSize" /></td>
      <td class="editable-cell"><input type="text" value="${
        row.unit
      }" data-index="${index}" data-field="unit" /></td>
      <td class="editable-cell"><input type="number" value="${
        row.quantity
      }" data-index="${index}" data-field="quantity" /></td>
    `;
    tbody.appendChild(tr);
  });

  //chekckbox
  document.querySelectorAll(".row-select").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      if (this.checked) {
        selectedIndexes.add(index);
      } else {
        selectedIndexes.delete(index);
      }
    });
  });

  // populateTable(chemicalData);

  // editable cell
  document.querySelectorAll(".editable-cell input").forEach((input) => {
    input.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const field = this.getAttribute("data-field");
      chemicalData[index][field] = this.value; // Update the data object when the value changes
    });
  });
}

// load Data from localStorage
function loadData() {
  const savedData = localStorage.getItem("chemicalData");
  return savedData ? JSON.parse(savedData) : JSON.parse(originalData); // Parse JSON string to object
}

// Save data to localstorage
function saveData() {
  localStorage.setItem("chemicalData", JSON.stringify(chemicalData));
  alert("Data saved successfully!");
}

// clear data from localStorage
function clearSavedData() {
  localStorage.removeItem("chemicalData");
  chemicalData = [...originalData];
  populateTable(chemicalData);
  alert("Saved data cleared, table reset to original data!");
}

populateTable(chemicalData);

// refresh table
document.querySelector("#refreshTable").addEventListener("click", () => {
  chemicalData = loadData();
  selectedIndexes.clear();
  populateTable(chemicalData);
});

// add row
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
  populateTable(chemicalData);

  // clear new row fields on focus
  const newIndex = chemicalData.length - 1;
  clearNewRowFieldsOnFocus(newIndex);
});

// clear the input fields on focus
function clearNewRowFieldsOnFocus(index) {
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
        this.value === "kg" ||
        this.value === "t" ||
        this.value === "0"
      ) {
        this.value = "";
      }
    });
  });
}

document.querySelector("#clearSelection").addEventListener("click", () => {
  document.querySelectorAll(".row-select").forEach((checkbox) => {
    checkbox.checked = false;
  });
  selectedIndexes.clear();
});

//delete selected row
document.querySelector("#deleteRow").addEventListener("click", () => {
  chemicalData = chemicalData.filter((_, index) => !selectedIndexes.has(index));
  selectedIndexes.clear(); // Clear selections
  populateTable(chemicalData);
});

// move up
document.querySelector("#moveUp").addEventListener("click", () => {
  const selectedRows = Array.from(selectedIndexes).sort((a, b) => a - b);

  if (selectedRows.length > 0 && selectedRows[0] === 0) {
    return;
  }

  selectedRows.forEach((rowIndex) => {
    if (rowIndex > 0) {
      [chemicalData[rowIndex - 1], chemicalData[rowIndex]] = [
        chemicalData[rowIndex],
        chemicalData[rowIndex - 1],
      ];
    }
  });

  const updatedSelectedIndexes = new Set();
  selectedRows.forEach((rowIndex) => {
    updatedSelectedIndexes.add(rowIndex - 1);
  });
  selectedIndexes = updatedSelectedIndexes;
  populateTable(chemicalData);
});

// move down
document.querySelector("#moveDown").addEventListener("click", () => {
  const selectedRows = Array.from(selectedIndexes).sort((a, b) => b - a);

  if (selectedRows.length > 0 && selectedRows[0] === chemicalData.length - 1) {
    return;
  }

  selectedRows.forEach((rowIndex) => {
    if (rowIndex < chemicalData.length - 1) {
      [chemicalData[rowIndex], chemicalData[rowIndex + 1]] = [
        chemicalData[rowIndex + 1],
        chemicalData[rowIndex],
      ];
    }
  });

  const updatedSelectedIndexes = new Set();
  selectedRows.forEach((rowIndex) => {
    updatedSelectedIndexes.add(rowIndex + 1);
  });
  selectedIndexes = updatedSelectedIndexes;
  populateTable(chemicalData);
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

  sortDirection = sortDirection === 1 ? -1 : 1;

  populateTable(chemicalData);
}

// save data
document.querySelector("#saveData").addEventListener("click", () => {
  saveData();
});

// clear saved data
document.querySelector("#clearData").addEventListener("click", () => {
  clearSavedData();
});
