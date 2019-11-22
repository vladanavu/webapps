/* 1.
1. Create a sample promise that:
Resolves to current time
Prints received time in console when resolved (in then())
*/

/* new Promise(function (resolve, reject) {
    resolve(new Date())
}).then(function (date) {
    console.log(date);
    return date.getHours();
}).then(function (hour) {
    console.log(hour)
}) */


/* 2.
 Create a console app that:
Creates 100 promises;
Each promise has its own ID (0..99);
Each promise is resolved after a random time interval (up to 500ms);
After being resolved, each promise will log its id in the console.
*/
/* 

for (let i = 0; i < 100; i++) {
    let id = i;
    new Promise(function (resolve, reject) {

        const randomTime = Number.parseInt(Math.random() * 500)
        setTimeout(() => {
            resolve({ id, randomTime })
        }, randomTime);

    }).then(function (data) {
        console.log(`Promise with ID: ${data.id} finished in ${data.randomTime / 1000}s`);
    })

}; */

/*3.
 Modify the app so it prints an ID of the promise that is completed first.
*/


const myPromises = []
for (let i = 0; i < 100; i++) {
    let id = i;
    const prom = new Promise(function (resolve, reject) {

        const randomTime = Number.parseInt(Math.random() * 500)
        setTimeout(() => {
            resolve({ id, randomTime })
        }, randomTime);

    })

    myPromises.push(prom)

};

Promise.race(myPromises).then(function (valueOfFirstPromise) {
    console.log(valueOfFirstPromise);
})