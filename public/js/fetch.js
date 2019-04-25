const errLogStart = 'You know what your problem is... ';
const errLogEnd = ' \n\n\n\t\t...dummy';
let queryData, id;

let tableId, tablefn, tableLn, tableHeight, tableWeight, tableAge, personArr;

// Watch for input changes
$(document).ready(() => {
  $(document).on('change', 'input', (e) => {
    queryData = $('#query_data').val();
    id = $('#query_id').val();
  })

  // CREATE a new entry
  makeSomething = () => {
    console.log('I will CREATE a new record');
    fetch('http://localhost/peopleComparer/php/queries/addPerson.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/post.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(errLogStart, err, errLogEnd));
  }

  // READ from db
  getAll = () => {
    console.log('from get all the ALL records');
    // getPeople();
    // getStats();    
    fetch('http://localhost/peopleComparer/php/queries/getPeople.php')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => tablePrinter(res))
      .catch(err => console.log(err));
  }

  // getPeople = () => {
  //   console.log('from get all the PEOPLE records');
  //   fetch('http://localhost/peopleComparer/php/queries/getPeople.php')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // }

    

  // getStats = () => {
  //   console.log('from get all the STAT records');
  //   fetch('http://localhost/peopleComparer/php/queries/getStats.php')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  // READ by single entry
  getById = () => {
    console.log('I will UPDATE one record by ID', id);
    fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/put.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(errLogStart, err, errLogEnd));
  }

  // UPDATE by id
  update = () => {
    console.log('I will UPDATE by an id', id, 'data ', queryData);
    fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/update.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(errLogStart, err, errLogEnd));
  }

  // DELETE an entry
  delById = () => {
    console.log('I will probably DELETE something by ID', 'id: ', id);
    fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/del.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(errLogStart, err, errLogEnd));
  }

  getAll();
});