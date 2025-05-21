/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // src klasöründeki tüm JS/JSX dosyalarını tarar
    ],
    darkMode: 'class', // 'media' yerine 'class' kullanıyoruz (HTML'e class ekleyerek tema değişimi için)
    theme: {
        extend: {
            // Projeye özel ek tema ayarları buraya eklenebilir
            // Örneğin: özel renkler, fontlar, animasyonlar
            animation: { // animate-tilt için keyframes index.css'de tanımlı, burada sadece class adı verilebilir
                tilt: 'tilt 10s infinite linear',
            },
        },
    },
    plugins: [],
}