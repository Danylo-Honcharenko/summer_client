/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    POST: "http://ec2-3-8-33-223.eu-west-2.compute.amazonaws.com:8000/api/create-entry",
    GET: "http://ec2-3-8-33-223.eu-west-2.compute.amazonaws.com:8000/api/entry"
  }
}

module.exports = nextConfig
