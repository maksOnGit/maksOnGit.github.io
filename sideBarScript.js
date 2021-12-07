let btn = document.querySelector("#btn");
let secondBtn = document.querySelector("#btnBis")
let sidebar = document.querySelector(".sidebar");

let profileBtn = document.querySelector(".btn-profile");
let skillsBtn = document.querySelector(".btn-skills");
let xpBtn = document.querySelector(".btn-xp")
let contactsBtn = document.querySelector(".btn-contacts");
let allBtn = document.querySelector(".btn-all")
let infoSection = document.querySelector(".info");
let skillsSection = document.querySelector(".skills");
let xpSection = document.querySelector(".xp")
let contactsSection = document.querySelector(".contacts");
// console.log(profileBtn);
// console.log(infoSection);

btn.onclick = function() {
    sidebar.classList.toggle("active");
};

secondBtn.onclick = function() {
    sidebar.classList.toggle("active")
}



profileBtn.onclick = function() {
    infoSection.classList.add("visible");
    skillsSection.classList.remove("visible");
    contactsSection.classList.remove("visible");
    xpSection.classList.remove("visible");

    sidebar.classList.remove("active");

    profileBtn.classList.add("clicked");
    xpBtn.classList.remove("clicked");
    contactsBtn.classList.remove("clicked");
    allBtn.classList.remove("clicked");
    skillsBtn.classList.remove("clicked");

};

skillsBtn.onclick = function() {
    skillsSection.classList.add("visible");
    infoSection.classList.remove("visible");
    contactsSection.classList.remove("visible");
    xpSection.classList.remove("visible");

    sidebar.classList.remove("active");

    profileBtn.classList.remove("clicked");
    xpBtn.classList.remove("clicked");
    contactsBtn.classList.remove("clicked");
    allBtn.classList.remove("clicked");
    skillsBtn.classList.add("clicked");
};

xpBtn.onclick = function() {
    xpSection.classList.add("visible");
    contactsSection.classList.remove("visible");
    skillsSection.classList.remove("visible");
    infoSection.classList.remove("visible");

    sidebar.classList.remove("active");

    profileBtn.classList.remove("clicked");
    xpBtn.classList.add("clicked");
    contactsBtn.classList.remove("clicked");
    allBtn.classList.remove("clicked");
    skillsBtn.classList.remove("clicked");
}

contactsBtn.onclick = function() {
    contactsSection.classList.add("visible");
    skillsSection.classList.remove("visible");
    infoSection.classList.remove("visible");
    xpSection.classList.remove("visible");

    sidebar.classList.remove("active");

    profileBtn.classList.remove("clicked");
    xpBtn.classList.remove("clicked");
    contactsBtn.classList.add("clicked");
    allBtn.classList.remove("clicked");
    skillsBtn.classList.remove("clicked");
};




allBtn.onclick = function() {
    contactsSection.classList.add("visible");
    skillsSection.classList.add("visible");
    infoSection.classList.add("visible");
    xpSection.classList.add("visible");

    sidebar.classList.remove("active");

    profileBtn.classList.add("clicked");
    xpBtn.classList.add("clicked");
    contactsBtn.classList.add("clicked");
    allBtn.classList.add("clicked");
    skillsBtn.classList.add("clicked");
}
