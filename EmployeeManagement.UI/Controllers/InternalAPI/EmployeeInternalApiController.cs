using EmployeeManagement.UI.Models;
using EmployeeManagement.UI.Providers.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement.UI.Controllers.InternalAPI
{
    [Route("api/internal")]
    [ApiController]
    public class EmployeeInternalApiController : ControllerBase
    {
        private readonly IEmployeeApiClient _employeeApiClient;

        public EmployeeInternalApiController(IEmployeeApiClient employeeApiClient)
        {
            _employeeApiClient = employeeApiClient;
        }
        #region Public Methods
        [HttpGet]
        [Route("{employeeId}")]
        public IActionResult GetEmployeeById([FromRoute] int employeeId)
        {
            try
            {
                var employee = _employeeApiClient.GetEmployeeById(employeeId);

                return Ok(employee);
            }
            catch (Exception )
            {

                throw;
            }

        }
        [HttpPost]
        [Route("addEmployees")]
        public IActionResult InsertEmployeeData([FromBody] EmployeeDetailedViewModel employee)
        {
            try
            {
                var employeeInsert = _employeeApiClient.InsertEmployeeData(employee);
                return Ok(employeeInsert);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut]
        [Route("manageEmployees")]
        public IActionResult UpdateEmployee([FromBody] EmployeeDetailedViewModel employee)
        {
            try
            {
                var employeeUpdated = _employeeApiClient.UpdateEmployee(employee);
                return Ok(employeeUpdated);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete]
        [Route("manageEmployees/{employeeId}")]
        public IActionResult DeleteEmployee([FromRoute] int employeeId)
        {
            try
            {
                var employeeDelete = _employeeApiClient.DeleteEmployee(employeeId);
                return Ok(employeeDelete);
            }
            catch (Exception)
            {

                throw;
            }
        }
        #endregion
    }
}
