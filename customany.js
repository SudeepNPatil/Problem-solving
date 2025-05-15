const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolved")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolved")
    }, 1000)
})

Promise.customany = function (arr) {
    return new Promise((resolve, reject) => {

        let array = []
        let rejectcount = 0;

        for (let i = 0; i < arr.length; i++) {

            arr[i]
                .then((val) => {
                    resolve(val)
                })
                .catch((err) => {
                    array[i] = err
                    rejectcount++

                    if (rejectcount == arr.length) {
                        reject("AggregateError : no Promise is resolved in Promise.any")
                    }

                })


        }

    })
}

const anyresult = Promise.customany([p1, p2, p3])

anyresult
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.log(err)
    })