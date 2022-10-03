using EmployeeManagement.UI.Models;
using EmployeeManagement.UI.Models.Provider;
using System.Collections.Generic;

namespace EmployeeManagement.UI.Providers.Contracts
{
    public interface IEmployeeApiClient
    {
        IEnumerable<EmployeeViewModel> GetAllEmployee();
        EmployeeData GetEmployeeById(int id);
        bool InsertEmployeeData(EmployeeDetailedViewModel employee);
        bool UpdateEmployee(EmployeeDetailedViewModel employee);
        bool DeleteEmployee(int id);
    }
}
