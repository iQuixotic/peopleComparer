tablePrinter = (arg) => {
    arg.forEach(el => {
        console.log('arg.id', el.id)      
        let myTblData = `
            <tr id='${el.id}' onclick='selected(${el.id})'>
                <td class='td_first-name'>${el.firstname}</td>
                <td class='td_last-name'>${el.lastname}</td> 
                <td class='td_height'>${el.height}</td> 
                <td class='td_weight'>${el.weight}</td> 
                <td class='td_age'>${el.age}</td>
            </tr>`  
        $('#table-attachment').append(myTblData);

       

    });
}


// $('tr').on("click", function() {
//     $(`#${el.id}`).toggleClass("trselected")   
//     console.log(el.id)         
// });

selected = (id) => {
    $(`#${id}`).toggleClass("trselected")   
    console.log(id)
}

inputSubmitter = () => {

    

    send();

}