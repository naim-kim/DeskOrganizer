// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var editForm = document.getElementById('editForm');
    var addForm = document.getElementById('addForm');

    function handleFormSubmit(event, form, action) {
        var location = form.querySelector('input[name="location"]:checked');
        var itemType = form.querySelector('#itemType').value;

        if (!location || !itemType) {
            alert('Please fill in all required fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            if (action === 'add') {
                if (window.confirm('Are you sure you want to add this item?')) {
                    // Redirect only after successful addition
                    alert('Item added successfully!');
                } else {
                    event.preventDefault(); // Prevent form submission if the user cancels
                }
            } else if (action === 'edit') {
                if (window.confirm('Are you sure you want to save changes?')) {
                    // Redirect only after successful edit
                    alert('Changes saved successfully!');
                } else {
                    event.preventDefault(); // Prevent form submission if the user cancels
                }
            }
        }
    }

    if (editForm) {
        editForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, editForm, 'edit');
        });
    }

    if (addForm) {
        addForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, addForm, 'add');
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.getElementById("deleteButton");

    deleteButton.addEventListener("click", function () {
        // Display a confirmation dialog
        const confirmDelete = confirm("Are you sure you want to delete?");

        if (confirmDelete) {
            //delete here
            alert('Deleted successfully!');
            window.location.href = "view.html";
        }
    });
});


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // Redirect to "add.html" when the "Add" button is clicked
    $(".add").click(function () {
        window.location.href = "add.html";
    });

    // Redirect to "edit.html" when the "Edit" button is clicked
    $(".edit").click(function () {
        window.location.href = "edit.html";
    });
    // Redirect to "index.html" when the "Home" button is clicked
    $(".home").click(function () {
        window.location.href = "index.html";
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
    });
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize a variable to track the click state
    let isClicked = false;

    // Handle the click event for the star icon
    $(".star i.bi-star").click(function () {
        $(this).removeClass("bi-star");
        $(this).addClass("bi-star-fill");
        isClicked = true;
    });

    $(".star i.bi-star-fill").click(function () {
        $(this).removeClass("bi-star-fill");
        $(this).addClass("bi-star");
        isClicked = false;
    });
});
