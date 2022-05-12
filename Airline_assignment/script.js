fetch("flights.json")
.then(function(response){
    return response.json();
})
.then(function(flights){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let flight of flights){
        out += `
            <tr>
                <td><center>${flight.Origin_Destination}</center></td>
                <td><center>${flight.Flight_Name}</center></td>
                <td><center>${flight.Departure}</center></td>
                <td><center>${flight.Arrival}</center></td>
                <td><center>${flight.Fare}</center></td>
                <td><center><button type="submit">Book Now</button></center></td>
            </tr>
        `;
        // backsticks to use regular html inside js
    }

    placeholder.innerHTML = out;
});

// window.onload = () => {
    // console.log(document.querySelector("#myTable > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML)
//   };