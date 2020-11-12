// ------------------------------
//  サービス一覧表示
// ------------------------------
function displayImg() {
    const services = document.getElementById('services');
    const nameList = serviceNameList();
    const imgList = serviceImgList();
    const explainList = serviceExplainList();
    
    for(let i = 0; i < nameList.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        img.src = 'img/' + imgList[i];
        h3.textContent = nameList[i];
        p.textContent = explainList[i];
        
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        services.appendChild(li);
    }
}


displayImg();
