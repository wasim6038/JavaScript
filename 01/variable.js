const accountId = 82936
let accountEmail = "Wasim@gmail.com"
var accountPassword = "18291"
accountCity = "Ranchi"

// accountId = 83746;  In const keyword we do not assign nexttime in same variable. Not allowed

accountEmail = "abc@gamil.com"
accountPassword = "19390"
accountCity = "Giridih"

// Prefer not to use var because of issue of block space and functional scope

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])