
tablePrinter = (arg) => {
    // console.log('personArr arg', arg)
    arg.forEach(el => {
        console.log('arg.id', el.id)      
        let myTblData = `
            <tr>
                <td class='td_first-name'>${el.firstname}</td>
                <td class='td_last-name'>${el.lastname}</td> 
                <td class='td_height'>${el.height}</td> 
                <td class='td_weight'>${el.weight}</td> 
                <td class='td_age'>${el.age}</td>
            </tr>`  
        $('#table-attachment').append(myTblData);
    });
}