document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const companyName = event.target.name.value;
    const industryName = event.target.industry.value;
    const companySize = event.target.size.value;
    if(industryName == "Select"){
        alert("Please select Industry")

    }
    else{
        alert("Company Name: "+companyName+",\nIndustry Name: "+industryName+", \nCompany Size: "+companySize)
    }
})