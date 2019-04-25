<?php include './inc/header.php'; ?>

<!-- Nav Area -->
<?php include './inc/nav.php'; ?>

<div class="container">
    
    <h4>Sort by: </h4>
    
    <!-- Button Row -->
    <div class="button-row">
        <a href="" class="q-btn">Last Name</a>
        <a href="" class="q-btn">Age</a>
        <a href="" class="q-btn">Height</a>
        <a href="" class="q-btn">Weight</a>
    </div>
    
    <!-- Table -->
    <table id='table-attachment'>
        <tr id='tr_header-row' class='th-row'>
            <th class='th_first-name'>First Name</th>
            <th class='th_last-name'>Last Name</th> 
            <th class='th_height'>Height</th>
            <th class='th_weight'>Weight</th>
            <th class='th_age'>Age</th>
        </tr>       
    </table>
    
     <!-- New Person Inputs -->
     <div class="input-row_1">
        
        <div>
            <label for="fn">First Name: </label>
            <input id='firstnameInput'  name = 'fn' type="text">
        </div>
    
            <div>
                <label for="ln">Last Name: </label>
                <input id='lastnameInput' name = 'ln' type="text">
            </div>
    
        </div>
    
        <div class="input-row_2">
            
            <div>
                <label for="height">Height: </label>
                <input id='heightInput' name = 'heightInput' type="text">
            </div>
            <div>
                <label for="weight">Weight: </label>
                <input id='weightInput' name = 'weightInput' type="text">
            </div>
            <div>
                <label for="age">Age: </label>
                <input id='ageInput' name = 'ageInput' type="text">
            </div>
    
        </div>
    
        <button  onclick='inputSubmitter()' href="" class='btn_add-new q-btn'>Add New</button>
    
        <!-- <a  onclick='inputSubmitter()' href="" class='btn_add-new q-btn'>Add New</a> -->
    
</div>

    <!-- Footer -->
    <footer>
    
    </footer>


<?php include './inc/footer.php'; ?>