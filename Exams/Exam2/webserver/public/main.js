function updateMonthsList(data) {
    let html = '';
    data.months.forEach((month, index) => {
      html += `<li value="${index}">${month}</li>`;
    });
    document.getElementById('monthsList').innerHTML = html;
  }

  fetch('/api/getmonths')
    .then(res => res.json())
    .then(data => {
      updateMonthsList(data);
    });

  
  document.getElementById('moveButton').addEventListener('click', () => {
    const fromIndex = document.getElementById('fromIndexInput').value;
    const toIndex = document.getElementById('toIndexInput').value;

    if(fromIndex === '' || toIndex === '') {
      alert('Enter both values');
      return;
    }

    fetch(`/api/move/${fromIndex}/${toIndex}`, { method: 'PUT' })
      .then(res => res.json())
      .then(data => {
        updateMonthsList(data);
      });
  });

  
  document.getElementById('resetButton').addEventListener('click', () => {
    fetch('/api/setmonths', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        months: [
          "January", "February", "March", "April",
          "May", "June", "July", "August",
          "September", "October", "November", "December"
        ]
      })
    })
    .then(res => res.json())
    .then(data => {
      updateMonthsList(data);
    });
  });