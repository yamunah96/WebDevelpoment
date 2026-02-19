function calculateResult() {
        // Get input values
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        

        const math = parseFloat(document.getElementById("math").value) || 0;
        const science =
          parseFloat(document.getElementById("science").value) || 0;
        const coding = parseFloat(document.getElementById("coding").value) || 0;

        // Calculate total, percentage, CGPA

        if (fname == "" || lname =="" || email == "" || phone =="" || math=="" || science==""|| coding==""){
            alert('enter the details')
        }
        const total = math + science + coding;
        const percentage = (total / 300) * 100;
        const cgpa = (percentage / 9.5).toFixed(2);

        // Grade Logic
        let grade = "";
         if (percentage >= 90) grade = "A+";
        else if (percentage >= 80) grade = "A";
        else if (percentage >= 70) grade = "B";
        else if (percentage >= 60) grade = "C";
        else if (percentage >= 50) grade = "D";
        else grade = "F";


        if (grade === "A+") badge = "🏅 Excellent!";
        else if (grade === "A") badge = "🎉 Great Job!";
        else if (grade === "B") badge = "👍 Good Effort!";
        else if (grade === "C") badge = "🙂 Keep Improving!";
        else badge = "🔁 Try Harder!";

        // Display result
        document.getElementById("result").innerHTML = `
        <h3>📊 Student Result</h3>
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <p><strong>Total Marks:</strong> ${total}/300</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>CGPA:</strong> ${cgpa}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Remarks:</strong> ${badge}</p>
        <progress value="75" max="100"></progress>
      `;

        // Clear input fields after result
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("math").value = "";
        document.getElementById("science").value = "";
        document.getElementById("coding").value = "";
        document.getElementById("progressBar").value = percentage;

      }