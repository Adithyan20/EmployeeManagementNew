$(document).ready(function () {
    bindEvents();
    hideEmployeeDetailCard();
});

function bindEvents() {
    $(".employeeDetails").on("click", function (event) {
        var employeeId = event.currentTarget.getAttribute("data-id");

        $.ajax({
            url: "https://localhost:44383/api/internal/" + employeeId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                var newEmployeeCard = `<div class="card">
                                          <h1>${result.name}</h1>
                                         <b>Id :</b> <p>${result.id}</p>
                                         <b>Department:</b><p>${result.department}</p>
                                         <b>Age:</b><p>${result.age}</p>
                                         <b>Address:</b><p>${result.address}</p>
                                        </div>`

                $("#EmployeeCard").html(newEmployeeCard);
                showEmployeeDetailCard();
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

  
        $(".employeeDelete").on("click", function (event) {
            var employeeId = event.currentTarget.getAttribute("data-id");
            var response = confirm("Are you want to delete this data ?");
            if (response)
            {
                $.ajax({
                    url: "https://localhost:44383/api/internal/manageEmployees/" + employeeId,
                    type: 'DELETE',
                    contentType: "application/json; charset=utf-8",
                    success: function (result) {
                        alert("Deleted Successfully")
                        location.reload();
                    },
                    error: function (error) {
                        console.log(error);
                    }

                });
            }
            else
            {
                alert(" Deletion process cancelled");
            }
        });
   
}

 
function hideEmployeeDetailCard() {
    $("#EmployeeCard").hide();
}

function showEmployeeDetailCard() {
    $("#EmployeeCard").show();
}
