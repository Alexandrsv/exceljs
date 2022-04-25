console.log('module.js');

async function getData() {
    return Promise.resolve('async work');
}

getData().then(console.log);

