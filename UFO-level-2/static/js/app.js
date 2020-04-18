// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!

//appends a table to the web page
data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


//rebuild the table

function buildTabledata(data) {
    tbody.html("");
    data.forEach((dataRow) => {
    const row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

//Filter by date
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputElementcity= d3.select("#city");
    var inputElementstate= d3.select("#state");
    var inputElementcountry= d3.select("#country");
    var inputElementshape= d3.select("#shape");
  
    // Get the value property of the input element
    var inputValuedate = inputElementdate.property("value");
    var inputValuecity = inputElementcity.property("value");
    var inputValuestate = inputElementstate.property("value");
    var inputValuecountry = inputElementcountry.property("value");
    var inputValueshape = inputElementshape.property("value");
  
    
    if (inputValuedate){      
        var filteredDatadate = tableData.filter(ufos => ufos.datetime === inputValuedate);
        console.log(filteredDatadate);
        buildTabledata(filteredDatadate);

       }
    
    if (inputValuecity){      
          var filteredDatacity = tableData.filter(ufos => ufos.city === inputValuecity);
          console.log(filteredDatacity);
          buildTabledata(filteredDatacity);
        }

    if (inputValuestate){      
            var filteredDatastate = tableData.filter(ufos => ufos.state === inputValuestate);
            console.log(filteredDatastate);
            buildTabledata(filteredDatastate);
    
          }
    if (inputValuecountry){      
              var filteredDatacountry = tableData.filter(ufos => ufos.country === inputValuecountry);
              console.log(filteredDatacountry);
              buildTabledata(filteredDatacountry);
            }
    if (inputValueshape){      
                var filteredDatashape = tableData.filter(ufos => ufos.shape === inputValueshape);
                console.log(filteredDatashape);
                buildTabledata(filteredDatashape);
             
              }
  
});

