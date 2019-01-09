/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const { googleMapsClient } = require('./google_api.js')

googleMapsClient.findPlace({ input: process.argv[2], inputtype: 'textquery' })
    .asPromise()
    .then((response) => {
        const { candidates } = response.json
        const place_id = candidates[0].place_id


        
        googleMapsClient.place({ placeid: place_id })
        .asPromise()
        .then((response) => {
            const { formatted_address, geometry:{ location }} = response.json.result
            console.log(`${process.argv[2]} is located at coordinates ${location.lat}, ${location.lng}, at the address ${formatted_address}.`)
        })
    })
    .catch((err) => {
        console.log(err)
});