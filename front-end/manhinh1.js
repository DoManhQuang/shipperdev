const name = document.getElementById('txthoten') //o nhap ho ten
const phone = document.getElementById('txtsdt') // ô nhập sdt
const place = document.getElementById('txtdc') // oo nhập địa chỉ
const city = document.getElementById("cbttp") //ô chọn tỉnh
const district = document.getElementById("cbqh") //ô chọn tp
const ward = document.getElementById("cbpx") //ô chọn phường

// hiển thị lỗi ra html
const errorName = document.getElementById('errorname')
const errorPhone = document.getElementById('errorphone')
const errorPlace = document.getElementById('errorplace')
const errorCity = document.getElementById('errorcity')
const errorDistrict = document.getElementById('errordistrict')
const errorWard = document.getElementById('errorward')

 // form
const form = document.querySelector('#infor')
form.addEventListener('submit', (e) => {

// tạo thông báo lỗi
let namemess = []
let phonemess = []
let placemess = []
let citymess = []
let districtmess = []
let wardmess = []

  // txthoten
  if (name.value === '' || name.value == null) {
    namemess.push('Vui lòng nhập họ tên!')
  }
  if (namemess.length > 0) {
    e.preventDefault()
    errorName.innerText = namemess.join(', ')
  }

  // txtsdt
  regphone = /\d{10}/
  if (phone.value === '' || phone.value == null){
    phonemess.push('Vui lòng nhập số điện thoại của bạn!')
  }
  else{
    if(regphone.test(phone) == false){
      phonemess.push('Vui lòng nhập đúng số điện thoại của bạn!')
    }
  }
  if(phonemess != []){
    e.preventDefault()
    errorphone.innerText = phonemess.join(', ')
  }

  // txtdc
  if (place.nodeValue === '' || place.nodeValue == null) {
    placemess.push('Vui lòng nhập địa chỉ cụ thể của bạn!')
  }
  if (placemess != []) {
    e.preventDefault()
    errorplace.innerText = placemess.join(', ')
  }

  // cbttp
  if (city.value === '' || city.nodeValue == null) {
    citymess.push('Vui lòng chọn tỉnh/thành phố của bạn!')
  }
  if (citymess != []){
    e.preventDefault()
    errorCity.innerText = citymess.join(', ')
  }

  // cbqh
  if (district.value === '' || district.nodeValue == null) {
    districtmess.push('Vui lòng chọn quận/huyện của bạn!')
  }
  if (districtmess != []){
    e.preventDefault()
    errorDistrict.innerText = districtmess.join(', ')
  }

  // cbpx
  if (ward.value === '' || ward.nodeValue == null) {
    wardmess.push('Vui lòng chọn phường/xã phố của bạn!')
  }
  if (wardmess != []){
    e.preventDefault()
    errorward.innerText = wardmess.join(', ')
  }
})
