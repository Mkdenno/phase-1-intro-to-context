// Your code here
function createEmployeeRecord(array){
    let testEmployee={
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]

    }
return testEmployee;
}

let createEmployeeRecords = function(employeeRecord) {

    return employeeRecord.map(function(array)
    
    {
        return createEmployeeRecord(array)
    })
}

function createTimeInEvent(empRec,dateStamp){

    let [date, hour] = dateStamp.split(' ')

    empRec.timeInEvents.push({
        
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return empRec
}
function createTimeOutEvent(employee, dateStamp){
    let [date, hour]=dateStamp.split(' ')

    employee.timeOutEvents.push({
        type:"TimeOut",
        hour: parseInt(hour, 10),
        date,

    })
    return employee;

}

function hoursWorkedOnDate(employee, workDate){
    let inInvent=employee.timeInEvents.find((e)=>{
        return e.date===workDate
    })
    let outInvent=employee.timeOutEvents.find((e)=>{
        return e.date===workDate
    })
    return (outInvent.hour-inInvent.hour)/100

}
function wagesEarnedOnDate(employee, datework){
    let wages=hoursWorkedOnDate(employee,datework)*
    employee.payPerHour
    return parseFloat(wages.toString())

}
function allWagesFor(employee){
    let totalInInvents=employee.timeInEvents.map((e)=>{
        return e.date
    })
    let payable=totalInInvents.reduce((memo,d)=>{
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)
    return payable

}
function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce((memo, rec)=>{
        return memo + allWagesFor(rec)
    }, 0)
}