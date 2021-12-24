


const team = document.querySelector('.team');


devs.map(data =>{

 team.inner

 team.innerHTML +=`
 <div class="teamitem">
 <img src="${data.photo}" alt="">
 <h2>${data.name}</h2>
 <samp>${data.skill}</samp>
 <p> Age : ${data.age}</p>
 <p> Location :${data.location}</P>
    
 </div>
 
 `;

});


const student = document.querySelector('.student');


students.map(data => {


student.innerHTML +=`
<div class="studentitem">
         
        <img src="${data.photo}" alt="">
            <h2>${data.name}</h2>
            <samp> Roll : ${data.roll}</samp>
            <p> Class : ${data.class}</p>
            <p> Age : ${data.age}</p>
            <p> Location :${data.location}</P>
               
            </div>

`;
});


const phone = document.querySelector('.data table');



phoneBook.map((data, index) => {

    
    phone.innerHTML += `
    
    <tbody> 

    <tr>
    <td>${index+1}</td>
    <td>${data.name}</td>
    <td>${data.phoneNumber}</td>
    <td>${data.Age} Years</td>
    <td>${data.location}</td>
    <td><img style ="width:50px; height:50px;" src="${data.photo}"></td>

    </tr>
    </tbody>
    
    `;


});