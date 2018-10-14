class Enum {
    constructor() {
        this.TypeResult = {
            Ok: { Name: "Ok", Value: 1 },
            NoOk: { Name: "NoOk", Value: 2 },
            Information: { Name: "Information", Value: 3 },
            Validation: { Name: "Validation", Value: 4 },
            Exception: { Name: "Exception", Value: 5 },
        }
        this.Message = {
            Success: { Name: "Success", Value: 1 },
            Info: { Name: "Info", Value: 2 },
            Warning: { Name: "Info", Value: 3 },
            Danger: { Name: "Danger", Value: 4 },
        }
    }

}
module.exports = new Enum();
