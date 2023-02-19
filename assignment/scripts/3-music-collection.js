console.log('***** Music Collection *****')
console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
let collection = [];
function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
  
}
console.log('My music collection:', addToCollection( 'Take Care', 'Drake', 2011) );
console.log('The first album is:', collection[0]);
