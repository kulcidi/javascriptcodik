const peopleWaiting = [
    "Кристина",
    "Светлана",
    "Артем",
    "Глеб",
    "Олег",
    "Кирилл",
    "Мария",
  ];
  


  function leaveQueueWithoutParcel() {
    const lastPerson = peopleWaiting.pop();
    if (lastPerson) {
      alert(`${lastPerson} не получил посылку и ушел из очереди.`);
    }
  } 
  function giveParcel() {
    const firstPerson = peopleWaiting.shift();
    if (firstPerson) {
      alert(
        `${firstPerson} получил посылку. В очереди осталось ${peopleWaiting.length} человек.`
      );
    }
  }
  
  giveParcel();
  
  const indexOfKirill = peopleWaiting.indexOf("Кирилл");
  if (indexOfKirill !== -1) {
    peopleWaiting.splice(indexOfKirill, 1);
    while (peopleWaiting.length > 0) {
      leaveQueueWithoutParcel();
    }
  }
  