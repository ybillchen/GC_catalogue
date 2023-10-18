// Fetch list of files from GitHub repository
fetch('https://api.github.com/repos/ognedin/gc_model_mw/contents')
  .then(response => response.json())
  .then(data => {
    // Populate file select dropdown
    const fileSelect = document.getElementById('file-select');
    data.forEach(file => {
      const option = document.createElement('option');
      option.value = file.name;
      option.innerText = file.name;
      fileSelect.appendChild(option);
    });
  });

// Event listener for when a file is selected
document.getElementById('file-select').addEventListener('change', function() {
  const selectedFile = this.value;

  // Fetch and parse the selected data file
  fetch(`https://raw.githubusercontent.com/USERNAME/REPO/main/data/${selectedFile}`)
    .then(response => response.text())
    .then(data => {
      // Parse and plot the data
      // Update your x-axis and y-axis dropdowns based on the parsed data
      // Use D3.js or another library to create the scatter plot
    });
});

// Add additional event listeners for x-axis and y-axis property changes
// This part would depend on how you implement your scatter plot using D3.js or another library
