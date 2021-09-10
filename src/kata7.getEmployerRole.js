const getEmployerRole = (employeeName, employees) => {
    const findEmployee = employees.find(person => person.name === employeeName);
    return findEmployee.role;
};

module.exports = getEmployerRole;
