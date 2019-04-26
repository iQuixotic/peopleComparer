

// let tableId, tablefn, tableLn, tableHeight, tableWeight, tableAge, personArr;

// Watch for input changes
$(document).ready(() => {
  $(document).on('change', 'input', (e) => {
    queryData = $('#query_data').val();
    id = $('#query_id').val();
  })

  const myForm = $('#myForm')

    myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(this);
      console.log(formData)

      fetch('http://localhost/peopleComparer/php/queries/addPerson.php', {
        method: 'post', 
        body: formData
      })
        .then(res => console.log(res.text()))
        .catch(err => console.log(err));
    })

  // CREATE a new entry
  makeSomething = () => {
    console.log('I will CREATE a new record');
    fetch('http://localhost/peopleComparer/php/queries/addPerson.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/post.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(err));
  }

  // READ from db
  getAll = () => {
    console.log('from get all the ALL records');
    fetch('http://localhost/peopleComparer/php/queries/getPeople.php')
      .then(res => res.json())
      .then(res => tablePrinter(res))
      .catch(err => console.log(err));
  }

  // READ by single entry
  // getById = () => {
  //   console.log('I will UPDATE one record by ID', id);
  //   fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
  //     // http://localhost/prep_files/all_the_SQL/php/mysql/put.php')
  //     .then(res => res.json())
  //     .then(posts => console.log(JSON.stringify(posts)))
  //     .catch(err => console.log(err));
  // }

  send = () => {
    
  }

  // UPDATE by id
  update = () => {
    console.log('I will UPDATE by an id', id, 'data ', queryData);
    fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/update.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(err));
  }

  // DELETE an entry
  delById = () => {
    console.log('I will probably DELETE something by ID', 'id: ', id);
    fetch('http://localhost/prep_files/all_the_SQL/php/employees/getNames.php')
      // http://localhost/prep_files/all_the_SQL/php/mysql/del.php')
      .then(res => res.json())
      .then(posts => console.log(JSON.stringify(posts)))
      .catch(err => console.log(err));
  }

  getAll();
});