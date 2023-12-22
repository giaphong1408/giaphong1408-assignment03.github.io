'use strict';

// Define needed constants
// Input email function needed constants
const formInput = document.querySelector('.form-input-email');
const emailInput = document.querySelector('.email-input');
const inputVerification = document.querySelector('.input-verification');
const emailSubmit = document.querySelector('.email-submit');
const personInfoDetail = document.querySelector('.personal-info-detail');
const myEmail = 'phongngfx25791@funix.edu.vn';
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// View more/less function needed constants
const jobInfo = document.querySelectorAll('.job-info-header');
const jobDetails = document.querySelectorAll('.job-info-details');
const viewButton = document.querySelectorAll('.view-button');
const viewMore = document.querySelectorAll('.view-more');
const viewLess = document.querySelectorAll('.view-less')


// Input email function
let isEmail = false;
// Handle envent for submit button of Email Submission form
emailSubmit.addEventListener('click', function(){
    isEmail = regex.test(emailInput.value);
    console.log(isEmail);
    if(emailInput.value !== "") {
        if(isEmail === true && emailInput.value === myEmail) {
            personInfoDetail.classList.remove("hidden");
            formInput.classList.add("hidden");
        } else if (isEmail === false) {
            inputVerification.textContent = "Email không hợp lệ !";
            inputVerification.style.color = 'red';
        } else {
            inputVerification.textContent = 'Không đúng địa chỉ Email !';
            inputVerification.style.color = 'red';
        }
    } else {
        inputVerification.textContent = 'Không được để Email trống !';
        inputVerification.style.color = '#ffa500';
    }
})

// View more/less function

// Handle when the mouse hovers on the header of Experience, hobbies, activities,...

for(let i = 0; i < jobInfo.length; i++) {
    jobInfo[i].addEventListener("mouseover", function(){
        viewButton[i].classList.remove('hidden');
    });

    // handle when the mouse leave the header
    jobInfo[i].addEventListener("mouseleave", function(){
        viewButton[i].classList.add('hidden');
        jobDetails[i].classList.add('hidden')
    })
}

// Handle event of view-more button
for(let i = 0; i < viewMore.length; i++){
    viewButton[i].addEventListener('click', function() {
        viewMore[i].classList.toggle('hidden');
        viewLess[i].classList.toggle('hidden');
        jobDetails[i].classList.toggle('hidden');
    })
}