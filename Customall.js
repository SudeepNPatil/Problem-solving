const pr1 = new Promise((resolve, reject) => {
    resolve("p1 resolved")
})

const pr2 = new Promise((resolve, reject) => {
    // resolve("p2 Resolved")
    reject("p2 rejected")
})

const pr3 = new Promise((resolve, reject) => {
    resolve("p3 resolved")
})

const pr4 = new Promise((resolve, reject) => {
    resolve("p4 Resolved")
})


Promise.customall = function (arr) {
    return new Promise((resolve, reject) => {
        let array = []
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i])
                .then((val) => {
                    array[i] = val
                    count++

                    if (count == arr.length) {
                        resolve(array)
                    }
                })
                .catch((error) => {
                    reject(error)
                })

        }
    })
}

const customallresult = Promise.customall([pr1, pr2, pr3, pr4])

customallresult.then((res) => console.log(res))
    .catch((error) =>
        console.log(error)
    )


/* 
const p1 = new Promise((resolve, reject) => {

    resolve("p1 resolved");
    // reject("p1 rejected");

});

const p2 = new Promise((resolve, reject) => {

    resolve("p2 resolved");
    //reject("p2 rejected");

});

const p3 = new Promise((resolve, reject) => {

    resolve("p3 resolved");
    // reject("p3 rejected");

});



Promise.customAll = function (arr) {
    return new Promise(function (resolve, reject) {
        let result = [];
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i])
                .then((value) => {
                    result[i] = value;
                    count++;

                    if (count === arr.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
};

const myResult = Promise.customAll([p1, p2, p3]);
myResult
    .then((value) => console.log(value))
    .catch((error) => console.log(error)); */
