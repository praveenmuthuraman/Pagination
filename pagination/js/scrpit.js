// Example data (you can replace this with your own data)
const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

// Constants
const itemsPerPage = 5;

// Calculate the total number of pages
const totalPages = Math.ceil(items.length / itemsPerPage);

// Initial page
let currentPage = 1;

// Function to display items for the current page
function displayItems() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  const itemsList = document.getElementById("items-list");
  itemsList.innerHTML = "";

  currentItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemsList.appendChild(li);
  });
}

// Function to generate pagination links
function generatePaginationLinks() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;

    // Highlight the current page
    if (i === currentPage) {
      link.classList.add("active");
    }

    // Attach click event to each pagination link
    link.addEventListener("click", () => {
      currentPage = i;
      displayItems();
      generatePaginationLinks();
    });

    pagination.appendChild(link);
  }
}

// Initial display
displayItems();
generatePaginationLinks();
