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
    <table>
        <tr class='th-row'>
            <th class='th_first-name'>First Name</th>
            <th class='th_last-name'>Last Name</th> 
            <th class='th_height'>Height</th>
            <th class='th_weight'>Weight</th>
            <th class='th_age'>Age</th>
        </tr>
        <tr>
            <td class='td_first-name'>Jill</td>
            <td class='td_last-name'>Smith</td> 
            <td class='td_height'>Smith</td> 
            <td class='td_weight'>6'2</td> 
            <td class='td_age'>160 lbs</td>
        </tr>    
        
        <tr>
            <td class='td_first-name'>Jill</td>
            <td class='td_last-name'>Smith</td> 
            <td class='td_height'>Smith</td> 
            <td class='td_weight'>6'2</td> 
            <td class='td_age'>160 lbs</td>
        </tr> 

        <tr>
            <td class='td_first-name'>Jill</td>
            <td class='td_last-name'>Smith</td> 
            <td class='td_height'>Smith</td> 
            <td class='td_weight'>6'2</td> 
            <td class='td_age'>160 lbs</td>
        </tr> 

        <tr>
            <td class='td_first-name'>Jill</td>
            <td class='td_last-name'>Smith</td> 
            <td class='td_height'>Smith</td> 
            <td class='td_weight'>6'2</td> 
            <td class='td_age'>160 lbs</td>
        </tr> 

        <tr>
            <td class='td_first-name'>Jill</td>
            <td class='td_last-name'>Smith</td> 
            <td class='td_height'>Smith</td> 
            <td class='td_weight'>6'2</td> 
            <td class='td_age'>160 lbs</td>
        </tr> 
    </table>
    
     <!-- New Person Inputs -->
     <div class="input-row_1">
        
        <div>
            <label for="fn">First Name: </label>
            <input name = 'fn' type="text">
        </div>
    
            <div>
                <label for="ln">Last Name: </label>
                <input name = 'ln' type="text">
            </div>
    
        </div>
    
        <div class="input-row_2">
            
            <div>
                <label for="height">Height: </label>
                <input name = 'height' type="text">
            </div>
            <div>
                <label for="weight">Weight: </label>
                <input name = 'weight' type="text">
            </div>
            <div>
                <label for="age">Age: </label>
                <input name = 'age' type="text">
            </div>
    
        </div>
    
    
        <a href="" class='btn_add-new q-btn'>Add New</a>
    
</div>

    <!-- Footer -->
    <footer>
    
    </footer>


<?php include './inc/footer.php'; ?>