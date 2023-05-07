const API_URL = 'http://www.mocky.io/v2/5d889c8a3300002c0ed7da42';
let initialData = [];

const getData = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            // if data is not null, then assign data.items to initialData
            initialData = data?.items;
            console.log(initialData);
            renderElements(initialData);
        })
        .catch(error => console.error(error));
}

getData();


// render elements to the DOM
const renderElements = (data) => {
    const walletItems = document.querySelector('.wallet-items');

    walletItems.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wallet-item';
        div.innerHTML = `
    <div class="container">
        <div class="wallet-item">
          <div class="vertical-line"></div>
          <div class="users-information">
              <span class="names">${item.fullName}</span>
              <span class="emails">${item.email}</span>
          </div>
          <div class="budgets">
              <div class="budget-row">
                  <div class="budget-label">
                      <span>1</span>
                  </div>
                  <div class="budget-amount">
                      <span>${item.wallet1}</span>
                  </div>
              </div>
              <div class="budget-row">
                  <div class="budget-label">
                      <span>2</span>
                  </div>
                  <div class="budget-amount">
                      <span>${item.wallet2}</span>
                  </div>
              </div>
              <div class="budget-row">
                  <div class="budget-label">
                      <span>3</span>
                  </div>
                  <div class="budget-amount">
                      <span>${item.wallet3}</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
        `;
        walletItems.appendChild(div);
    });
}

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', updateFilter);
});

let filter = '';

function updateFilter() {
  const selectedCheckboxes = document.querySelectorAll('.checkbox:checked');
  const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
  filter = selectedValues.join(',');
  renderElements(getFilteredData());
  console.log(updateFilter);
}

function getFilteredData() {
  if (!filter) {
    return initialData;
  }
  return initialData.filter(item => filter.includes(item.type));
}





