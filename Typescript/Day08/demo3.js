//Json Object
// java script object notation
// Key & value format 
var obj = {
    id: 9,
    "fname": 'Sumit',
    lname: 'Raokhande'
};
//1 dot operator
//2 square operator
//1 dot operator
// console.log(`
//     First Name :: ${obj.fname}
//     last name  :: ${obj.lname}
//     Id         :: ${obj.id}
// `)
//2 square operator
// console.log(`
// --------------------
//     First Name :: ${obj["fname"]}
//     last name  :: ${obj['lname']}
//     Id         :: ${obj['id']}
// `)
//Array of Object
var arrobj = [
    {
        id: 9,
        "fname": 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "Feb", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 6,
        "fname": 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: "Austrila"
        },
        month: ["march", "Aprl", "Aug"],
        result: [
            {
                subj: "M1",
                marks: 55
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    },
    {
        id: 3,
        "fname": 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["May", "July", "Sept"],
        result: [
            {
                subj: "M1",
                marks: 54
            },
            {
                subj: "M2",
                marks: 60
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    }
];
// console.log(`
//     First Name  :: ${arrobj[1].fname}
//      last name  :: ${arrobj[1].lname}
//      Id         :: ${arrobj[1].id}
// `)
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    First Name  :: ".concat(arrobj[i].fname, "\n     last name  :: ").concat(arrobj[i].lname, "\n     Id         :: ").concat(arrobj[i].id, "\n     Country    :: ").concat(arrobj[i].country.cname, "\n     Month      :: ").concat(arrobj[i].month.join("  "), "\n     ------Result------------\n"));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n            Subject :: ".concat(arrobj[i].result[j].subj, "\n            marks   :: ").concat(arrobj[i].result[j].marks, "\n        "));
    }
}
