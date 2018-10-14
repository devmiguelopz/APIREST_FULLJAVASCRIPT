class Result {
    constructor(response, Message, Data, Alert) {
        this.Response = response;
        this.Message = null;
        this.Data = null;
        this.Alert = null;
    }
}
module.exports = {
    Result = Result
}
