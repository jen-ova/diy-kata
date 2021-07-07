const joinNames = namesObj => {
    const names = namesObj.map(person => person.name).join(", ")// .replace(/,(?=[^,]*$)/, ' &');
    const lastComma = names.lastIndexOf(","); 
    const namesStr = names.substr(0, lastComma) + ' &' + names.substr(lastComma + 1); 
    return namesStr
};

module.exports = joinNames;
