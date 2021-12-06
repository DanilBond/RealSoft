let sideBarJSON = {
    0: {
        Name:"МЕНЮ",
        Value:[
            {Title:"Рабочий стол", Img:"./images/Desktop.svg", Arrow:"none", Data:null, link:'./index.html'},
            {Title:"Структура АО КТК", Img:"./images/ID.svg", Arrow:"has", 
                Data:{
                    Items:[
                        {NameValue:"Телефоны",Func: ""},
                        {NameValue:"Иерархия", link: "./hierarchy.html"},
                        {NameValue:"Маршруты",Func: ""},
                        {NameValue:"Избранное",Func: ""},
                        {NameValue:"Замещение",Func: ""},
                        {NameValue:"Личные карточки",Func: ""},
                        {NameValue:"Департаменты по коду",Func: ""},
                        {NameValue:"По номеру",Func: ""},
                    ]
                }},
            {Title:"Делопроизводство", Img:"./images/DOCX.svg", Arrow:"has",
            Data:{
                Items:[
                    {NameValue:"Входящие документы",Func: "", link: "./incoming-docs.html"},
                    {NameValue:"Исходящие документы",Func: ""},
                    {NameValue:"Прошлогодние базы",Func: ""},
                    {NameValue:"Отчет по входящим",Func: ""},
                    {NameValue:"Отчет по исходящим",Func: ""},
                    {NameValue:"Конфликтные",Func: ""},
                    {NameValue:"Корзина",Func: ""},
                ]
            }},
            {Title:"Фин-ОЦО", Img:"./images/Desktop.svg", Arrow:"has",
            Data:{
                Items:[
                    {NameValue:"Оглавление",Func: ""},
                    {NameValue:"По номенклатуре",Func: ""},
                    {NameValue:"По авторам",Func: ""},
                    {NameValue:"По дате",Func: ""},
                    {NameValue:"По месяцам",Func: ""},
                    {NameValue:"По номерам",Func: ""},
                    {NameValue:"По филиалам",Func: ""},
                    {NameValue:"По статусу",Func: ""},
                    {NameValue:"Приказы",Func: ""},
                    {NameValue:"Списание ОС через ЦА",Func: ""},
                    {NameValue:"Статистика Фин ОЦО",Func: '', link: "./fin-oco.html"},
                    {NameValue:"Нормативные документы служб Фин ОЦО",Func: ""},
                ]
            }},
       ]
    },
    1: {
        Name:"ЛИЧНЫЙ КАБИНЕТ",
        Value:[
            {Title:"Профиль", Img:"./images/Profile.svg", Arrow:"none", Data:null},
            {Title:"Почта", Img:"./images/Mail.svg", Arrow:"has", Data:null},
            {Title:"Календарь", Img:"./images/Calendar.svg", Arrow:"has", Data:null},
            {Title:"Счёт", Img:"./images/Calculator.svg", Arrow:"none", Data:null},
       ]
    },
    2: {
        Name:"СПРАВОЧНИКИ",
        Value:[
            {Title:"Инструменты СЭД", Img:"./images/KeyAndS.svg", Arrow:"has", Data:null},
            {Title:"Специальные плагины", Img:"./images/Repair.svg", Arrow:"has", Data:null},
            {Title:"Графики", Img:"./images/Graphy.svg", Arrow:"none", Data:null},
            {Title:"Таблицы", Img:"./images/Curve.svg", Arrow:"none", Data:null},
            {Title:"UI элементы", Img:"./images/UI.svg", Arrow:"has", Data:null},
            {Title:"Формы", Img:"./images/Pen.svg", Arrow:"none", Data:null},
            {Title:"Параметры сетки", Img:"./images/Arrowa.svg", Arrow:"none", Data:null},
       ]
    },
}

let menuContainerParent = document.querySelector("#mainContainer");

ConstructSideBar(sideBarJSON)
function ConstructSideBar(json){
    for (const i of Object.values(json)) {
        let menuContainer = document.createElement("div");
        menuContainer.className = "menuContainer";

        let title = document.createElement("span");
        title.className = "menuContainerTitle";
        title.innerText = i.Name;

        let container = document.createElement("div");
        container.className = "container";

        for (const j of i.Value) {
            let item = document.createElement("div");
            item.className = "item";

            let imgContainer = document.createElement("div");
            imgContainer.className = "imgContainer";

            let valueText = document.createElement("span");
            valueText.innerText = j.Title;

            let img = document.createElement("img");
            img.src = j.Img;

            if(j.link){
              item.addEventListener("click", ()=>{
                window.location.href = j.link;
              });
            }else{
              item.addEventListener("click", ()=>{SetSideBarSmall(j.Title)});
            }

            imgContainer.appendChild(img);
            item.appendChild(imgContainer);
            item.appendChild(valueText);

            if(j.Arrow == "has"){
                let arrow = document.createElement("div");
                arrow.className = "itemArrow";

                let arrowImg = document.createElement("img");
                arrowImg.src = "./images/Arrow.svg";

                arrow.appendChild(arrowImg);

                item.appendChild(arrow);
                
                if(j.Data != null){
                    let parcerCont = document.createElement("div");
                    parcerCont.classList.add("parcerContainer", "pcClosed");

                    let pcTitle = document.createElement("span");
                    pcTitle.className = "pcTitle";
                    let pcImgContainer = document.createElement("div");
                    let pcImg = document.createElement("img");
                    pcImg.src = "./images/Arrow.svg";
                    pcImgContainer.appendChild(pcImg);

                    pcTitle.appendChild(pcImgContainer);
                    let txt = document.createElement("span");
                    txt.innerText = j.Title;
                    txt.addEventListener("click", ()=>{SetSideBarSmall(j.Title);  resetSb();});
                    pcTitle.appendChild(txt);
                    parcerCont.appendChild(pcTitle);

                    for (const it of Object.values(j.Data)) {
                        for (const ic of it) {
                            let pcItem = document.createElement("div");
                            pcItem.className = "pcItem";
                            pcItem.innerText = ic.NameValue;
                            if(ic.link){
                                pcItem.addEventListener("click", ()=>{window.location.href = ic.link});
                            }
                            if(ic.Func != "")
                                pcItem.addEventListener("click", ()=>{
                                  if(setActiveWindow) setActiveWindow(parseInt(ic.Func))
                                })
                            parcerCont.appendChild(pcItem);
                        }
                    }
                    
                    menuContainerParent.appendChild(parcerCont);
                }
            }
            
            
            container.appendChild(item);
        }


        menuContainer.appendChild(title);
        menuContainer.appendChild(container);

        menuContainerParent.appendChild(menuContainer);

    }
}