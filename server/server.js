const fs = require("fs")
const falso = require("@ngneat/falso")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

function makeRandomFriendObject() {
  return {
    firstName: falso.randFirstName({ withAccents: false }),
    lastName: falso.randLastName({ withAccents: false }),
    city: falso.randCity(),
    phone: falso.randPhoneNumber(),
    gender: ["male", "female"][falso.randNumber({ min: 0, max: 1 })],
    jobTitle: falso.randJobTitle(),
    company: falso.randCompanyName(),
    location: { lat: falso.randLatitude(), lng: falso.randLongitude() },
  }
}

function updateFriendLocation(friend) {
  // add minor changes to simulate realistic movement on the map
  return {
    ...friend,
    location: {
      lat: friend.location.lat + falso.randNumber({ min: -1.0, max: 1.0 }),
      lng: friend.location.lng + falso.randNumber({ min: -1.0, max: 1.0 }),
    },
  }
}

const jsonFilePath = "./friends.json"

function generateFriendsJsonFile() {
  for (let i = 0; i < 24; i++) {
    const fileContent = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"))
    const friend = makeRandomFriendObject()
    fileContent.push(friend)
    fs.writeFileSync(jsonFilePath, JSON.stringify(fileContent, undefined, 2))
  }
}

// write an empty file to start
fs.writeFileSync(jsonFilePath, "[]")

//Generate sample objects
generateFriendsJsonFile()

// Move friend location random every 5 seconds
const intervalMs = 5000
setInterval(function () {
  const friends = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"))
  const updatedFriends = friends.map((x) => updateFriendLocation(x))

  fs.writeFile(
    jsonFilePath,
    JSON.stringify(updatedFriends, undefined, 2),
    function () {
      console.log("Friend locations updated")
    }
  )
}, intervalMs)

// register handler to return data
app.get("/friends", function (req, res) {
  const searchTerm = req.query.search
  const pageNo = req.query.page
  const size = 12 // per page
  const friends = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"))

  let filteredFriends = [...friends]
  if (searchTerm) {
    filteredFriends = friends.filter(
      (x) =>
        x.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        x.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (pageNo) {
    filteredFriends = filteredFriends.slice(pageNo * size, pageNo * size + size)
  }

  res.json(filteredFriends)
})

// Start the REST API server
app.listen(3000, function () {
  console.log(`API Server is running`)
})
