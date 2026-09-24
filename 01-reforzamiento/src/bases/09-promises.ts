


const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        //! Yo quiero mi dinero!!
        resolve(100);
    }, 2000); // 2 Segundos

    reject();
});

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero: ${ myMoney }`)
    }
);