/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    POST: "", // Роуты к пост на сервере
    GET: "" // Роуты к гет на сервере
  }
}

module.exports = nextConfig;
