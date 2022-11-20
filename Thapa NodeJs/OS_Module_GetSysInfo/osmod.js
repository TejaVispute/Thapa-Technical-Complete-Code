const os= require ("os");

console.log(os.arch());
// console.log(os.freemem());// this will returns in bite

const freemem = os.freemem();
console.log(`${freemem/1024/1024/1024}`);


const totalmem = os.totalmem();
console.log(`${totalmem/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus());
console.log(os.tmpdir());
console.log(os.type());