// Sction 7 Strings in Javascript

// A  Javascript string is zero or more characters written inside quotes. 
// Javascript strings are used for storing and manipulating text.
// You can use single or double quotes
// Strings can be creeated as primitives,
// from string literals, or as objects, using the String() constructor.

// let myname= "Tejas";
// let channel= 'Teja YT';

// let ytname= new String ('Tejab Yt');

// console.log(myname);
// console.log(ytname);

// How to find the length of a string 
// String.prototype.length
// Reflects the length of the String.

// let myName= "Tejas Vispute";

// console.log(myName.length);


// Escape Character

// let sentence= 'We are the so-called "vikings" from the north';
// console.log(sentence);


// Finding a string in a string

// String.prototype.indexOf method retruns the index of the firtst occurance of a specified text in a string.

// const my_name= "I am Tejas Vispute";

// const newname = my_name.indexOf("Vi");

// console.log(newname);


// String.prototype.lastIndexOf retruns the index within the calling string of the object of the last occurance of searchvalue, or -1 if not found.

// const my_name = 'I am Tejas Vispute';

// console.log(my_name.lastIndexOf("T"));


// Searching for a String in a string

// String.prototype.search(regexp)
// The search() method searches a string for a specified value and returns the position of the match

// const my_name = 'I am Tejas Vispute';

// const newres= my_name.search("vispute");
// console.log(newres);

// The search method cannot take a second start position argument.


// Extracting String Parts

// There are 4 methods for extracting a parto of string.

// slice(start,end)
// substring(start,end)
// sunstr(string,length)


// The  slice() method
// slice() extracts a part of a string and returns the exctracted part in a new string

// The method takes 2 parameter: The start position, and the end position (end not included).

// var str= "Apple ,Banana ,Kiwi";

// let res= str.slice(7,12);//starting argument 7 ending 12
// let res= str.slice(7,-2); //starting argument 7  and it goes till last and -last two character and returns all string
//  let res= str.slice(7);

// console.log(res);



// Challange time

// Q. Display only 280 characters of a string like the one used in Twitter?

let myTwits= "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum illum commodi reprehenderit dignissimos dolorum odio, quasi, quas ducimus, repellendus nisi quod. Minima culpa blanditiis, aliquam magnam repudiandae debitis repellat natus. Quia accusamus cupiditate aliquid. Sunt voluptates suscipit perspiciatis est! Porro sed hic dolorum omnis. Odio veritatis labore magnam modi delectus distinctio temporibus nulla dicta sit expedita unde asperiores consectetur, saepe nostrum laborum id sequi iure soluta. At in enim sed ab aliquam tempore sunt dolore nostrum? Repudiandae, optio! Obcaecati eveniet eum a totam, quibusdam, tempora facere omnis consequuntur libero magni voluptates labore? Cum cupiditate labore, dolore quas placeat quo deleniti, consequatur nostrum maiores fuga, itaque laudantium tenetur excepturi minus autem? At vitae commodi deleniti excepturi impedit optio aspernatur sed voluptatem asperiores explicabo! Nostrum quia itaque, rerum quidem temporibus voluptatem et, aliquam molestias reprehenderit consequatur iusto cupiditate aperiam praesentium eum ducimus facere. Dolores tempore architecto eum sit a, autem veniam veritatis maiores quod dolor modi deleniti recusandae quia perspiciatis molestiae placeat ullam. Expedita iure repellendus, animi sed, labore itaque officiis tenetur sapiente mollitia quam aperiam dolorum hic possimus, ad quaerat saepe at temporibus facere doloremque aut voluptatem? Corporis officia officiis in soluta temporibus consequatur reiciendis voluptate enim tenetur tempore recusandae et a omnis, deleniti ut magnam eveniet doloribus natus, unde laudantium quisquam! Vel ipsum dolores quos accusantium culpa at corrupti velit quasi, numquam animi commodi soluta aspernatur voluptates! Fuga quam veniam reiciendis repellendus exercitationem atque ut voluptates totam possimus ipsa itaque fugiat laboriosam eius eaque in sit, hic officia odit a dicta esse excepturi, distinctio minus. Necessitatibus aspernatur quasi, tenetur officia ratione nesciunt corporis, optio accusantium labore impedit molestias unde ea quaerat excepturi. Facilis eius, ad amet aperiam quae distinctio iusto ut enim ratione inventore et ipsam incidunt eaque natus cumque, quibusdam expedita, laboriosam repudiandae. Praesentium deserunt atque dolorum! Dicta."



// let result= myTwits.slice(0,280);
// console.log(result.length);



