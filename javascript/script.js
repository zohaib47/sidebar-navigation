 
 const body = document.querySelector("body"),
       sidebar = document.querySelector(".sidebar"),
       toggle = document.querySelector(".toggle"),
       searchBtn = document.querySelector(".search-box"),
       modeSwtich = document.querySelector(".toggle-switch"),
       modeText = document.querySelector(".mode-text");
      


       toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close")
       })


       modeSwtich.addEventListener("click", ()=>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
       });


    // ===========   registration form ============



    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
      
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const skills = document.getElementById("skills").value;
        const github = document.getElementById("github").value;
        const portfolio = document.getElementById("portfolio").value;
      
        // Display the registration success message
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = `Thank you, ${fullName}! Your registration is successful.`;
      
        // Optional: Log data to the console (for backend integration)
        console.log({
          fullName,
          email,
          phone,
          skills,
          github,
          portfolio,
        });
      
        // Optionally clear the form
        document.getElementById("registrationForm").reset();
      });
      



    //   ===============Revenue section==========



      const dashboard = document.getElementById("dashboard");
const toggleDashboardBtn = document.getElementById("toggleDashboard");
const toggleSidebarBtn = document.getElementById("toggleSidebar");

// Toggle Dashboard Visibility
toggleDashboardBtn.addEventListener("click", () => {
  dashboard.classList.toggle("hidden");
});

// Toggle Sidebar Collapse
toggleSidebarBtn.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("close");
});


       