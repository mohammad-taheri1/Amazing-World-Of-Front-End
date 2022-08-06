window.addEventListener('beforeunload', (event) => {
    console.log(event)
    event.returnValue = `Are you sure you want to leave?`;
  });
