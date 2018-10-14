'use strict'
String.Empity = "";
String.IsNullOrEmpity = function (_string) {
    var sucess = false;;
    if (_string == String.Empity  || _string == null) {
        sucess = true;
    }
    return (sucess);
}