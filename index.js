const inputData = data; // from the file 


function renderTable(input_data) {
    input_data.forEach(element => {
        let newTr = d3.select('table').append('tr')
        newTr.append('td').text(element.datetime)
        newTr.append('td').text(element.city)
        newTr.append('td').text(element.state)
        newTr.append('td').text(element.country)
        newTr.append('td').text(element.shape)
        newTr.append('td').text(element.durationMinutes)
        newTr.append('td').text(element.comments)
    })
} // end renderTable

renderTable(inputData) // render it from the global data variable


function filterTable(e) {
    e.preventDefault();
    console.log(e.target.value)

    var filter = e.target.value;
    console.log(filter, 'IS THE FILTER')
    let rows = document.getElementById("ufo-table").rows

    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent;
        var secondCol = rows[i].cells[1].textContent;
        var thirdCol = rows[i].cells[2].textContent;
        var fourthCol = rows[i].cells[3].textContent;
        var fifthCol = rows[i].cells[4].textContent;
        var sixthCol = rows[i].cells[5].textContent;
        var seventhCol = rows[i].cells[6].textContent;





        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1 || seventhCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

document.getElementById('filterValue').addEventListener('keyup', filterTable, false);  