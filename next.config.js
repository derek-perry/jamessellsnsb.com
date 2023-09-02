/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ['localhost', 'jamessellsnsb.com', 'cdninstagram.com', 'scontent.cdninstagram.com', 'fbcdn.net', 'instagram.ftpa1-1.fna.fbcdn.net'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        "source": "/index",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/home",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/homepage",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/listings",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/forsale",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/for-sale",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/selling",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/homes",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/houses",
        "destination": "/#listings",
        "permanent": true
      },
      {
        "source": "/privacypolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookies",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookiepolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie-policy",
        "destination": "/privacy",
        "permanent": true
      }
    ]
  }
}

module.exports = nextConfig
