const FALLBACK_SITE_URL = 'https://yourportfolio.com'

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, '')
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || FALLBACK_SITE_URL
)

export function toAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}
