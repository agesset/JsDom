let const_data = {
    "last_page": 1,
    "last_row": 2,
    "data": [
        {
            "contract": {
                "id": 2,
                "startedAt": {
                    "date": "2023-07-05 17:33:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe\/Paris"
                },
                "endedAt": {
                    "date": "2024-11-15 17:33:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe\/Paris"
                },
                "customRoyalty": "250000.00",
                "periodicityId": 4,
                "periodicityName": "Mensuel",
                "periodicityPeriodInterval": {
                    "y": 0,
                    "m": 1,
                    "d": 0,
                    "h": 0,
                    "i": 0,
                    "s": 0,
                    "f": 0,
                    "weekday": 0,
                    "weekday_behavior": 0,
                    "first_last_day_of": 0,
                    "invert": 0,
                    "days": false,
                    "special_type": 0,
                    "special_amount": 0,
                    "have_weekday_relative": 0,
                    "have_special_relative": 0
                },
                "ownerId": 11,
                "ownerCompanyName": "TOUTACANA SARL",
                "ownerGivenName": "Billkiss",
                "ownerFamilyName": "MONARCH",
                "ownerPhone": "+22999999991",
                "propertyId": 11,
                "propertyName": "YOVO 1",
                "propertyType": null,
                "propertyAddress": "Parcelle G, Carr\u00e9 0001",
                "propertyRoomsNumber": 4,
                "propertyCity": "Abomey-calavi"
            },
            "contractCrudUrl": "https:\/\/zmanager.cotact.me\/?crudAction=detail\u0026crudControllerFqcn=App%5CController%5CAdmin%5CCustom%5CContractCrudController\u0026entityId=2",
            "duePerPeriod": {
                "05-11-2023 00:00:00 \ud83e\udca3 05-12-2023 00:00:00": "250000.00",
                "05-10-2023 00:00:00 \ud83e\udca3 05-11-2023 00:00:00": 0,
                "05-09-2023 00:00:00 \ud83e\udca3 05-10-2023 00:00:00": 0,
                "05-08-2023 00:00:00 \ud83e\udca3 05-09-2023 00:00:00": 0,
                "05-07-2023 00:00:00 \ud83e\udca3 05-08-2023 00:00:00": 0
            },
            "totalDue": 250000,
            "totalReturn": 0,
            "totalPayed": 1000000
        },
        {
            "contract": {
                "id": 1,
                "startedAt": {
                    "date": "2023-09-10 09:53:00.000000",
                    "timezone_type": 3,
                    "timezone": "Europe\/Paris"
                },
                "endedAt": null,
                "customRoyalty": "20000.00",
                "periodicityId": 4,
                "periodicityName": "Mensuel",
                "periodicityPeriodInterval": {
                    "y": 0,
                    "m": 1,
                    "d": 0,
                    "h": 0,
                    "i": 0,
                    "s": 0,
                    "f": 0,
                    "weekday": 0,
                    "weekday_behavior": 0,
                    "first_last_day_of": 0,
                    "invert": 0,
                    "days": false,
                    "special_type": 0,
                    "special_amount": 0,
                    "have_weekday_relative": 0,
                    "have_special_relative": 0
                },
                "ownerId": 8,
                "ownerCompanyName": "Lopez SAS",
                "ownerGivenName": null,
                "ownerFamilyName": "Blanc",
                "ownerPhone": "+33351006152",
                "propertyId": 8,
                "propertyName": null,
                "propertyType": null,
                "propertyAddress": null,
                "propertyRoomsNumber": null,
                "propertyCity": null
            },
            "contractCrudUrl": "https:\/\/zmanager.cotact.me\/?crudAction=detail\u0026crudControllerFqcn=App%5CController%5CAdmin%5CCustom%5CContractCrudController\u0026entityId=1",
            "duePerPeriod": {
                "10-11-2023 00:00:00 \ud83e\udca3 10-12-2023 00:00:00": "20000.00",
                "10-10-2023 00:00:00 \ud83e\udca3 10-11-2023 00:00:00": 0,
                "10-09-2023 00:00:00 \ud83e\udca3 10-10-2023 00:00:00": 0
            },
            "totalDue": 20000,
            "totalReturn": 0,
            "totalPayed": 40000
        }
    ]
};

let table = document.querySelector(".container table");
let button = document.querySelector(".container button");
button.addEventListener("click",() => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    tr.append(td1, td2, td3, td4);
    table.append(tr);
}
);
