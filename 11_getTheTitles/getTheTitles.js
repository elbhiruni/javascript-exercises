const getTheTitles = function(books) {
    // const result = [];
    // books.forEach(item => {
    //     result.push(item.title);
    // });
    // return result;
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
