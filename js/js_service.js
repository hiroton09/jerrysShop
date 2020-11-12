// --------------------- ---------
//  料金一覧表示
// ------------------------------
function displayPrice() {
    const priceList = document.getElementById('priceList');
    const nameList = serviceNameList();
    const price = servicePriceList();
    
    for(let i = 0; i < nameList.length; i++) {
        let newRow = priceList.insertRow();
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(nameList[i]);
        newCell.appendChild(newText);
    
        newCell = newRow.insertCell();
        newText = document.createTextNode(price[i] + '円');
        newCell.appendChild(newText);
    }
}

displayPrice();