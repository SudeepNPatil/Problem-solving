const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("p1 resolved")
    }, 5000)

})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 Reject")
    }, 4000)

})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 Rejected")
    }, 6000)
})

Promise.custonrace = function (arr) {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < arr.length; i++) {

            arr[i]
                .then((val) => {
                    resolve(val)
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}

const customraceresult = Promise.custonrace([p1, p2, p3])

customraceresult
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.log(err)
    })