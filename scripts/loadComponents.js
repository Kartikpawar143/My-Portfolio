// Function to load external HTML components
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Load sidebar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadComponent('sidebar-container', './sidebar.html');
});
