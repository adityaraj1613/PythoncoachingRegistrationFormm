document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Full Name validation
    const studentName = document.getElementById('studentName').value;
    const studentNameError = document.getElementById('studentNameError');
    if (studentName.length < 3) {
        studentNameError.textContent = 'Student Name must be at least 3 characters long';
        studentNameError.style.display = 'block';
        isValid = false;
    } else {
        studentNameError.style.display = 'none';
    }

    // Father Name validation
    const fatherName = document.getElementById('fatherName').value;
    const fatherNameError = document.getElementById('fatherNameError');
    if (fatherName.length < 3) {
        fatherNameError.textContent = 'Father Name must be at least 3 characters long';
        fatherNameError.style.display = 'block';
        isValid = false;
    } else {
        fatherNameError.style.display = 'none';
    }

    // Mother Name validation
    const motherName = document.getElementById('motherName').value;
    const motherNameError = document.getElementById('motherNameError');
    if (motherName.length < 3) {
        motherNameError.textContent = 'Mother Name must be at least 3 characters long';
        motherNameError.style.display = 'block';
        isValid = false;
    } else {
        motherNameError.style.display = 'none';
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    const genderError = document.getElementById('genderError');
    if (!gender) {
        genderError.textContent = 'Select a gender';
        genderError.style.display = 'block';
        isValid = false;
    } else {
        genderError.style.display = 'none';
    }

    // Category validation
    const category = document.getElementById('category').value;
    const categoryError = document.getElementById('categoryError');
    if (category.length < 1) {
        categoryError.textContent = 'Category is required';
        categoryError.style.display = 'block';
        isValid = false;
    } else {
        categoryError.style.display = 'none';
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    if (!dob) {
        dobError.textContent = 'Date of Birth is required';
        dobError.style.display = 'block';
        isValid = false;
    } else {
        dobError.style.display = 'none';
    }

    // Class validation
    const classInput = document.getElementById('class').value;
    const classError = document.getElementById('classError');
    if (!classInput) {
        classError.textContent = 'Class is required';
        classError.style.display = 'block';
        isValid = false;
    } else {
        classError.style.display = 'none';
    }

    // District validation
    const district = document.getElementById('district').value;
    const districtError = document.getElementById('districtError');
    if (district.length < 1) {
        districtError.textContent = 'District is required';
        districtError.style.display = 'block';
        isValid = false;
    } else {
        districtError.style.display = 'none';
    }

    // Aadhar Number validation
    const aadharNumber = document.getElementById('aadharNumber').value;
    const aadharNumberError = document.getElementById('aadharNumberError');
    if (!aadharNumber || aadharNumber.length !== 12) {
        aadharNumberError.textContent = 'Enter a valid 12-digit Aadhar Number';
        aadharNumberError.style.display = 'block';
        isValid = false;
    } else {
        aadharNumberError.style.display = 'none';
    }

    // Shramik Card Number validation
    const shramikCardNumber = document.getElementById('shramikCardNumber').value;
    const shramikCardNumberError = document.getElementById('shramikCardNumberError');
    if (!shramikCardNumber) {
        shramikCardNumberError.textContent = 'Shramik Card Number is required';
        shramikCardNumberError.style.display = 'block';
        isValid = false;
    } else {
        shramikCardNumberError.style.display = 'none';
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberError = document.getElementById('phoneNumberError');
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumber.match(phoneNumberPattern)) {
        phoneNumberError.textContent = 'Enter a valid 10-digit phone number';
        phoneNumberError.style.display = 'block';
        isValid = false;
    } else {
        phoneNumberError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Address validation
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.length < 5) {
        addressError.textContent = 'Address must be at least 5 characters long';
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressError.style.display = 'none';
    }

    // If the form is valid, you can submit it or send the data to the server
    if (isValid) {
        // Submit form or send data to server
        alert('Registration successful!');
    }
});
