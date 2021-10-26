$(document).ready(() => {
    // ngày tháng
    $('#datetime').html(`${getDate()}`)

    $('#foodselect').on('change', function () {
        let id_table = $('#tableselect').children(":selected").val()

        // cập nhật số lượng thức ăn
        if (bills[id_table][this.value] === undefined) {
            bills[id_table][this.value] = 1
        } else {
            bills[id_table][this.value]++
        }

        updateTable(id_table);
    })
})

let bills = {
    t1: {},
    t2: {},
    t3: {},
}

let getDate = function () {
    let n = new Date()
    let day_name = ''
    switch (n.getDay()) {
        case 0:
            day_name = 'Chủ nhật'
            break
        case 1:
            day_name = 'Thứ hai'
            break
        case 2:
            day_name = 'Thứ ba'
            break
        case 3:
            day_name = 'Thứ tư'
            break
        case 4:
            day_name = 'Thứ năm'
            break
        case 5:
            day_name = 'Thứ sáu'
            break
        case 6:
            day_name = 'Thứ bảy'
    }
    return `${day_name}, ${n.getDate()}/${n.getMonth() + 1}/${n.getFullYear()}, ${n.getHours()}:${n.getMinutes()}`
}

const foods = {
    f1: {
        name: 'Bún bò',
        cost: 20000
    },
    f2: {
        name: 'Hủ tiếu',
        cost: 18000
    },
    f3: {
        name: 'Bánh canh',
        cost: 17000
    },
    f4: {
        name: 'Phở bò',
        cost: 19000
    },
    f5: {
        name: 'Nuôi',
        cost: 15000
    },
    f6: {
        name: 'Bánh mỳ thịt',
        cost: 12000
    },
    f7: {
        name: 'Bánh cuốn',
        cost: 15000
    },
}

const tables = {
    t1: 'Bàn 1',
    t2: 'Bàn 2',
    t3: 'Bàn 3'
}

let updateTable = function (table) {
    let id_table = ''
    switch (table) {
        case 't1':
            id_table = 'table1'
            break
        case 't2':
            id_table = 'table2'
            break
        case 't3':
            id_table = 'table3'
            break
    }

    let tbody = $(`#${id_table} > tbody`);
    tbody.html('');
    let total_bill = 0
    for (const bill in bills[table]) {
        let total = foods[bill].cost * bills[table][bill]
        total_bill += total
        let id_delete = `${table}${bill}`
        tbody.append(
            `<tr><td>${foods[bill].name}</td><td>${bills[table][bill]}</td><td>${total}</td><td><button id=${id_delete}>Xoá</button></td></tr>`
            )
        $(`#${id_delete}`).on('click', () => {
            delete bills[table][bill]
            updateTable(table)
        })
    }

    tbody.append(`<tr><td><b>Tổng tiền</b></td><td colspan="3"><center><b>${total_bill}đ</b></center></td</tr>`)
}
let getBill = function(table) {
    let str = ''
    let total_bill = 0
    for (const bill in bills[table]) {
        let total = foods[bill].cost * bills[table][bill]
        total_bill += total
        let id_delete = `${table}${bill}`
        str += `<tr><td>${foods[bill].name}</td><td>${bills[table][bill]}</td><td>${total}</td></tr>`
    }
    return {bill: str, total: total_bill}
}
let printBill = function(table) {
    let id_table = ''
    switch (table) {
        case 1:
            id_table = 't1'
            break
        case 2:
            id_table = 't2'
            break
        case 3:
            id_table = 't3'
            break
    }
    result = getBill(id_table)
    let html = `<!DOCTYPE html>
    <html>        
    <head>
        <meta charset='utf-8'>
        <style>
            table {
                table-layout: fixed;
            }
    
            td {
                width: 33%;
            }
        </style>
        <title>Hoá đơn</title>
    </head>
    <body>
    
    <table>
        <tr><td colspan="2"><center><b>Hoá đơn</b></center></td><tr>
        <tr><td>Ngày hoá đơn:</td><td>${getDate()}</td</tr>
        <tr><td>Nhân viên</td><td>Nguyễn Văn A</td></tr>
        <tr><td>Bàn</td><td>Số ${table}</td></tr>
    </table>
    <table>
        <thead>
            <tr>
                <td><b>Món</b></td>
                <td><b>SL</b></td>
                <td><b>Tiền</b></td>
            </tr>
        </thead>
        <tbody>${result.bill}</tbody>
        <tfoot>
            <tr'>
                <td><b>Tổng tiền</b><td>
                <td colspan="2"><center><b>${result.total} đ</b></center></td>
            </tr>
        </tfoot>
    </table>
    </body>
    </html>`;
    let tab = window.open('about:blank', '_blank');
    tab.document.write(html);
    tab.document.close();
}