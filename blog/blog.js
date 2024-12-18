// buat variabel untuk menampung data blog menggunakan tipe data array
let blogs = []; //array kosong

// function : untuk membuat suatu fungsi/perintah
function addBlog(event) {
  // event.preventDefault() : method buat mencegah halaman te-refresh saat fungsi di trigger
  event.preventDefault();

  // tampung data dari input user pake DOM
  let title = document.getElementById("input-blog-title").value;
  let description = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");
  console.log("sebelum", image);

  image = URL.createObjectURL(image.files[0]); // untuk ngambil gambar
  console.log("sesudah", image);

  //   data objek
  const blog = {
    blogTitle: title,
    blogContent: description,
    blogImage: image,
  };

  //   push : method array untuk nambahin data ke dalam array
  blogs.push(blog);

  console.log(blogs);

  //   jalankan fungsi render
  renderBlog();
}

// fungsi untuk menyisipkan data baru ke elemen HTML
function renderBlog() {
  // akses dulu elemen dengan id content
  let contentContainer = document.getElementById("contents");

  //   inject/sisipkan elemen html
  contentContainer.innerHTML = "";

  // looping tiap data didalam array(blogs) dan render ke HTML
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].blogImage}" alt="blog-image" />
          </div>
          <div class="blog-content">
            <h2>${blogs[i].blogTitle}</h2>
            <span class="detail-blog"> 17 Des 2024 9:00 | Author </span>
            <p>
              ${blogs[i].blogContent}
            </p>
          </div>
        </div>
        `;
  }
}
