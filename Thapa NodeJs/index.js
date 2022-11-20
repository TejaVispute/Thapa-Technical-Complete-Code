const fs=require ("fs");

// fs.writeFileSync('read.txt', 'Welcome to web development');
// fs.writeFileSync('read.txt', 'Welcome to web development,This is new file');

// fs.appendFileSync('read.txt', ' hello world bro this is text file');

// const buf_data = fs.readFileSync('read.txt');

// console.log (buf_data.toString());

// fs.renameSync('read.txt', 'read_write.txt');


fs.writeFileSync('read.txt', 'Welcome to web development, This file i have created using fs.');

fs.appendFileSync('read.txt', 'Added extra files using fs.writeFileSync');
