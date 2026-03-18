let userRole = "enrolled member";
let accessStatus;

switch(userRole) {
    case "employee":
        accessStatus = "Full Access granted.";
        break;
    case "enrolled member":
        accessStatus = "Full Access granted with one-on-one interaction with a dietician.";
        break;
    case "subscriber":
        accessStatus = "Partial Access granted.";
        break;
    default:
        accessStatus = "Access denied. Enroll or subscribe first to avail this facility.";
}

console.log("Dietary Services Access Status:", accessStatus);

