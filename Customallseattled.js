const p1 = new Promise((resolve, reject) => {
    resolve("P1 resolved ")
})

const p2 = new Promise((resolve, reject) => {
    reject("P2 rejected")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 resolved")
})


Promise.customallseattled = function (arr) {
    return new Promise((resolve, reject) => {
        let array = []
        let count = 0;

        for (let i = 0; i < arr.length; i++) {

            arr[i]
                .then((val) => {
                    array[i] = { status: "Fulfilled", value: val }
                    count++

                    if (count == arr.length) {
                        resolve(array)
                    }
                }).catch((err) => {
                    array[i] = { status: "Rejected", reason: err }
                    count++

                    if (count == arr.length) {
                        resolve(array)
                    }
                })


        }
    })
}

const customallseattledresult = Promise.customallseattled([p1, p2, p3])

customallseattledresult
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.log(err)
    })