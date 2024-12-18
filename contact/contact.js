// fungsi untuk mengirim email
function sendEmail() {
  // tampung data inputan ke dalam variabel
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  //   definisikan email penerima
  let emailReceiver = "emailSendiri@gmail.com";

  //   createElement : method untuk membuat elemen/tag html baru
  let a = document.createElement("a");
  //   format pengiriman email
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;
  //   buka link di tab baru
  a.target = "_blank";
  a.click(); //trigger fungsi klik pada elemen/tag <a></a>
  console.log(a.href);
}
