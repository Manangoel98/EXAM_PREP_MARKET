import { ImageResponse } from '@vercel/og'
import { getBlogPost } from '@/lib/blog-posts'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const title = post?.title ?? 'The NomoExam SAT Blog'
  const category = post?.category ?? 'SAT Prep'
  // Wrap the headline roughly every 32 chars so long titles fit the card.
  const words = title.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    if ((current + ' ' + word).trim().length > 32) {
      lines.push(current.trim())
      current = word
    } else {
      current = `${current} ${word}`
    }
  }
  if (current.trim()) lines.push(current.trim())
  const display = lines.slice(0, 4).join('\n')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '480px',
            height: '480px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(190,242,100,0.22) 0%, rgba(190,242,100,0) 70%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#bef264',
              color: '#0a0a0a',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ color: '#ffffff', fontSize: 28, fontWeight: 600 }}>Nomoexam</div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              color: '#bef264',
              border: '2px solid rgba(190,242,100,0.5)',
              borderRadius: 9999,
              padding: '8px 24px',
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            whiteSpace: 'pre-wrap',
            display: 'flex',
          }}
        >
          {display}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 24 }}>
          SAT strategy, scores, and study plans — nomoexam.com/blog
        </div>
      </div>
    ),
    size,
  )
}
