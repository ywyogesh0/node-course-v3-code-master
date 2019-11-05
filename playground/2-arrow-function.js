// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

const test = {
    x: 12,
    yList: [4, 5, 3],
    z: 8,
    m: function () {
        console.log(this.x)
    },
    n: () => console.log(this.x),
    p() {
        console.log(this.x)
        this.yList.forEach(function () {
            console.log(this.z)
        })
    },
    q() {
        console.log(this.z)
        this.yList.forEach( () => console.log(this.z))
    }
}

test.m()
test.n()
test.p()
test.q()