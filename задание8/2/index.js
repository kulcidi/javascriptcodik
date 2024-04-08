function giveTalonsInOrder(patients, orders) {
    let sortedPatients = [];

    
    for (let orderId of orders) {
      let patient = patients.find(p => p.id === orderId);
      if (patient) {
        sortedPatients.push(patient);
      }
    }


    return sortedPatients;
  }