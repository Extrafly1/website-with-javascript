function createTableCell() {
    const text = prompt("Введите текст для новой ячейки таблицы:");
    if (text === null) {
        return;
    }

    const table = document.getElementById("myTable");
    const tr = table.insertRow();
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(text));

    // Add id attribute to the newly created cell
    const newId = `cell-${table.rows.length - 1}`;
    td.setAttribute("id", newId);

    // Update id of the last inserted element
    if (table.rows.length > 1) {
        const lastCell = table.rows[table.rows.length - 2].cells[0];
        lastCell.setAttribute("data-last-inserted", newId);
    }
}

function deleteTableCell() {
    const table = document.getElementById("myTable");
    if (table.rows.length > 0) {
        const lastRow = table.rows[table.rows.length - 1];
        const lastCell = lastRow.cells[0];

        const lastCellId = lastCell.getAttribute("id");
        const prevCellId = lastCell.getAttribute("data-last-inserted");
        const cellContent = lastCell.textContent.trim();
        const confirmDelete = confirm(`Вы уверены, что хотите удалить ячейку со следующим содержимым?\n\n${cellContent}`);
        if (confirmDelete) {
            table.deleteRow(table.rows.length - 1);

            const prevCell = document.getElementById(prevCellId);
            if (prevCell) {
                prevCell.removeAttribute("data-last-inserted");
            }
        }
    }
}

document.getElementById("createCellBtn").addEventListener("click", createTableCell);
document.getElementById("deleteCellBtn").addEventListener("click", deleteTableCell);