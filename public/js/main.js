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

selected = (id) => {
    console.log()
}

inputSubmitter = () => {

    

    // myForm.addEventListener
    // let firstnameInput = $('#firstnameInput').val()
    // let lastnameInput = $('#lastnameInput').val()
    // let heightInput = $('#heightInput').val()
    // let weightInput = $('#weightInput').val()
    // let ageInput = $('#ageInput').val()

    // let data = {
    //     fn: $('#firstnameInput').val(),
    //     ln: $('#lastnameInput').val(),
    //     height: $('#heightInput').val(),
    //     weight: $('#weightInput').val(),
    //     age: $('#ageInput').val()
    //   }
    //   console.log('data is ', data)

    // send(firstnameInput, lastnameInput, heightInput, weightInput, ageInput);
    // console.log($('#firstnameInput').val(), $('#lastnameInput').val(), $('#heightInput').val(), $('#weightInput').val(), $('#ageInput').val() );
    send();

}