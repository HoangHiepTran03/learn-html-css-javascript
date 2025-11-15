let vuKhi = [
  { name: 'Dao', power: 50, gia: 10 },
  { name: 'Kiếm', power: 200, gia: 35 },
]

let khoDo = [
  { name: 'Dao', dem: 5 },
  { name: 'Kiem', dem: 1 },
]

let quaiVat = [
  { name: 'Rồng đen', mau: 500, dame: 5 },
  { name: 'Quỷ Dung', mau: 700, dame: 7 },
  { name: 'Ma sói', mau: 1000, dame: 10 },
  { name: 'Phù thủy bóng tối', mau: 1200, dame: 12 },
  { name: 'Chim ác long', mau: 1300, dame: 13 },
  { name: 'Quỷ Dung', mau: 1400, dame: 14 },
  { name: 'Chu tước xà', mau: 1450, dame: 17 },
  { name: 'Quỷ Dung', mau: 1500, dame: 20 },
]
let lv = 1
let quaiHT = { ...quaiVat[lv - 1] }
let hpNhanVat = 100
let soVang = 50
let thuong = 100

let luaChons = [
  {
    name: 'store',
    buttonText: ['Mua máu : 10 gold', 'Mua vũ khí', 'Rời khỏi cửa hàng'],
    buttonFunction: [muaMau, muaVuKhi, roiKhoi],
    text: 'Chào mừng bạn đến với cửa hàng!',
  },
  {
    name: 'stats',
    buttonText: ['Cửa hàng', 'Kho vũ khí', 'Chiến đấu'],
    buttonFunction: [store, khoVuKhi, fight],
    text: 'Hãy giết quái để chiến thắng!',
  },
  {
    name: 'MuaVuKhi',
    buttonText: ['Mua Dao : 10 gold', 'Mua Kiếm : 35 gold', 'Rời khỏi cửa hàng'],
    buttonFunction: [muaDao, muaKiem, roiKhoi],
    text: 'Chọn vũ khí bạn muốn mua',
  },
  {
    name: 'ChienDau',
    buttonText: ['Dùng Dao', 'Dùng Kiếm', 'Chạy thôi!'],
    buttonFunction: [dungDao, dungKiem, chay],
    text: 'Giết nó nào!',
  },
  {
    name: 'thua',
    buttonText: ['Mày thua rồi', 'Mày Ngu vcl!', 'Chơi lại!'],
    buttonFunction: [null, null, reset],
    text: 'Không ngờ mày ngu thế!',
  },
  {
    name: 'win',
    buttonText: ['Chúc mừng bạn!', 'Bạn giỏi vcl!', 'Chơi lại!'],
    buttonFunction: [null, null, reset],
    text: 'Chúc mừng bạn đã chiến thắng!',
  },
]

const inputName = document.getElementById('inputName')
const inputButton = document.getElementById('inputButton')
const game1 = document.querySelector('.game1')
const game2 = document.querySelector('.game2')
const nameText = document.querySelector('.ten')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const lvText = document.querySelector('.lvText')
const hpText = document.querySelector('.hpText')
const goldText = document.querySelector('.goldText')
const text = document.querySelector('.text')
const ten = document.querySelector('.ten')
const tenQuai = document.querySelector('.tenQuai')
const hpQuai = document.querySelector('.hpQuai')
const dameQuai = document.querySelector('.dameQuai')
const bangfight = document.querySelector('.fight')

inputButton.onclick = tenCuaBan
function tenCuaBan() {
  let tenNguoiChoi = inputName.value.trim()
  if (tenNguoiChoi.toUpperCase() === 'DUNG') {
    tenNguoiChoi = 'Dung đáng yêu!'
  } else if (tenNguoiChoi.toUpperCase() === 'NAM') {
    tenNguoiChoi = 'Nam? Nhìn tên biết chơi NGU vcl rồi!'
  } //troll name
  nameText.innerText = tenNguoiChoi ? tenNguoiChoi : 'Khách'
  console.log(tenNguoiChoi)
  game1.style.display = 'none'
  game2.style.display = 'block'
}

button1.onclick = store
button2.onclick = khoVuKhi
button3.onclick = fight

function store() {
  update(luaChons[0])
}
function roiKhoi() {
  update(luaChons[1])
}

function update(luaChon) {
  button1.innerText = luaChon['buttonText'][0]
  button1.onclick = luaChon['buttonFunction'][0]
  button2.innerText = luaChon['buttonText'][1]
  button2.onclick = luaChon['buttonFunction'][1]
  button3.innerText = luaChon['buttonText'][2]
  button3.onclick = luaChon['buttonFunction'][2]
  text.innerText = luaChon.text
}

function muaMau() {
  if (soVang >= 10) {
    hpNhanVat += 10
    soVang -= 10
    hpText.innerText = hpNhanVat
    goldText.innerText = soVang
    text.innerText = 'Bạn đã mua 10 máu.'
  } else {
    text.innerText = 'Bạn không đủ vàng để mua máu.'
  }
}
function muaVuKhi() {
  update(luaChons[2])
}

function muaDao() {
  if (soVang >= vuKhi[0].gia) {
    khoDo[0].dem += 1
    soVang -= vuKhi[0].gia
    goldText.innerText = soVang
    text.innerText = 'Bạn đã mua 1 Dao.'
  } else {
    text.innerText = 'Bạn không đủ vàng để mua Dao!'
  }
}

function muaKiem() {
  if (soVang >= vuKhi[1].gia) {
    khoDo[1].dem += 1
    soVang -= vuKhi[1].gia
    goldText.innerText = soVang
    text.innerText = 'Bạn đã mua 1 Kiem.'
  } else {
    text.innerText = 'Bạn không đủ vàng để mua Kiếm!'
  }
}

function khoVuKhi() {
  button1.innerText = `Dao: ${khoDo[0].dem}`
  button1.onclick = NamedNodeMap
  button2.innerText = `Kiếm: ${khoDo[1].dem}`
  button2.onclick = NamedNodeMap
  button3.innerText = 'Rời khỏi kho'
  button3.onclick = roiKhoi
}

function fight() {
  hpText.innerText = hpNhanVat
  goldText.innerText = soVang
  tenQuai.innerText = quaiHT.name
  hpQuai.innerText = quaiHT.mau
  dameQuai.innerText = quaiHT.dame
  if (hpNhanVat <= 0) {
    lost()
  } else {
    let luaChon = luaChons[3]
    bangfight.style.display = 'block'
    button1.innerText = luaChon['buttonText'][0]
    button1.onclick = luaChon['buttonFunction'][0] //dungDao
    button2.innerText = luaChon['buttonText'][1]
    button2.onclick = luaChon['buttonFunction'][1] //dungKiem
    button3.innerText = luaChon['buttonText'][2]
    button3.onclick = luaChon['buttonFunction'][2]
    text.innerText = luaChon.text
  }
}
function chay() {
  bangfight.style.display = 'none'
  update(luaChons[1])
}

function dungDao() {
  if (khoDo[0].dem > 0) {
    quaiHT.mau -= vuKhi[0].power
    hpNhanVat -= quaiHT.dame
    hpText.innerText = hpNhanVat
    fight()
    khoDo[0].dem--
  } else {
    text.innerText = 'Bạn đã hết dao!'
  }
  if (quaiHT.mau <= 0) {
    text.innerText = 'Chúc mừng bạn đã qua ải!'
    setTimeout(() => {
      text.innerText = `Thưởng ${thuong * lv} vàng!`
    }, 2000)
    setTimeout(() => {
      quaAi()
    }, 5000)
  }
}

function dungKiem() {
  if (khoDo[1].dem > 0) {
    quaiHT.mau -= vuKhi[1].power
    hpNhanVat -= quaiHT.dame
    hpText.innerText = hpNhanVat
    fight()
    khoDo[1].dem--
  } else {
    text.innerText = 'Bạn đã hết kiếm!'
  }
  if (quaiHT.mau <= 0) {
    text.innerText = 'Chúc mừng bạn đã qua ải!'
    setTimeout(() => {
      text.innerText = `Thưởng ${thuong * lv} vàng!`
    }, 2000)
    setTimeout(() => {
      quaAi()
    }, 5000)
  }
}

function quaAi() {
  //   soVang += thuong * (lv-1)
  lv++
  if (lv === quaiVat.length + 1) {
    win()
  } else {
    quaiHT = { ...quaiVat[lv - 1] }
    soVang += thuong * (lv - 1)
    lvText.innerText = lv
    hpText.innerText = hpNhanVat
    goldText.innerText = soVang
    tenQuai.innerText = quaiHT.name
    hpQuai.innerText = quaiHT.mau
    dameQuai.innerText = quaiHT.dame
    bangfight.style.display = 'none'

    update(luaChons[1])
  }
}

function lost() {
  update(luaChons[4])
}
function win() {
  update(luaChons[5])
}
function reset() {
  hpNhanVat = 100
  soVang = 50
  lv = 1
  khoDo[0].dem = 5
  khoDo[1].dem = 1
  quaiHT = { ...quaiVat[lv - 1] }
  lvText.innerText = lv
  hpText.innerText = hpNhanVat
  goldText.innerText = soVang
  tenQuai.innerText = quaiHT.name
  hpQuai.innerText = quaiHT.mau
  dameQuai.innerText = quaiHT.dame
  bangfight.style.display = 'none'
  update(luaChons[1])
}
