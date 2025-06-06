// Swiper carousel
new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});

// Promo button
document.getElementById("promoBtn").addEventListener("click", () => {
  alert("Promo terbatas! Segera booking sekarang!");
});

// Filter cards
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".card");

function filterCards() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const match = title.includes(keyword) && (category === "" || card.dataset.category === category);
    card.style.display = match ? "block" : "none";
  });
}
searchInput.addEventListener("input", filterCards);
categoryFilter.addEventListener("change", filterCards);

// Booking form
document.getElementById("formBooking").addEventListener("submit", e => {
  e.preventDefault();
  alert("Booking berhasil dikirim! Kami akan menghubungi Anda.");
  e.target.reset();
});
document.getElementById('itinerary-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const interests = document.getElementById('interests').value;
  const resultBox = document.getElementById('itinerary-result');

  if (new Date(startDate) > new Date(endDate)) {
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = '<p class="text-red-600 font-semibold">Tanggal pulang harus setelah tanggal berangkat.</p>';
    return;
  }

  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `
    <h3 class="text-xl font-bold mb-2">Itinerary Kamu</h3>
    <p><strong>Tujuan:</strong> ${destination}</p>
    <p><strong>Tanggal:</strong> ${startDate} hingga ${endDate}</p>
    <p><strong>Minat:</strong> ${interests}</p>
  `;
});