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
   
    $("#createform").submit(function (event) {

        var employeeDetailedViewModel = {};

        employeeDetailedViewModel.Name = $("#name").val();
        employeeDetailedViewModel.Department = $("#dept").val();
        employeeDetailedViewModel.Age = Number($("#age").val());
        employeeDetailedViewModel.Address = $("#address").val();

        var data = JSON.stringify(employeeDetailedViewModel);

        $.ajax({
            url: 'https://localhost:44383/api/internal/addEmployees',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: data,
            success: function (result) {

                location.reload();
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    $(".employeeEdit").on("click", function (event) {
        console.log("clicked");
        var employeeId = event.currentTarget.getAttribute("data-id");
        $.ajax({
            url: 'https://localhost:44383/api/internal/' + employeeId,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                $("#eid").val(result.id)
                $("#ename").val(result.name)
                $("#edept").val(result.department)
                $("#eage").val(result.age)
                $("#eaddress").val(result.address)
            },
            error: function (error) {
                console.log(error);
            }
        });
        $("#updateform").submit(function (event) {
            console.log("clicked");
            var idUpdate = $("#eid").val();
            var nameUpdate = $("#ename").val();
            var departmentUpdate = $("#edept").val();
            var ageUpdate = $("#eage").val();
            var addressUpdate = $("#eaddress").val();
            let employees = {
                id: parseInt(idUpdate),
                name: nameUpdate,
                department: departmentUpdate,
                age: parseInt(ageUpdate),
                address: addressUpdate
            };
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: 'https://localhost:44383/api/internal/manageEmployees',
                type: 'PUT',
                data: JSON.stringify(employees),
                dataType: 'json',
                success: function (result) {
                    location.reload();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        });
    });

    

}

 
function hideEmployeeDetailCard() {
    $("#EmployeeCard").hide();
}

function showEmployeeDetailCard() {
    $("#EmployeeCard").show();
}
