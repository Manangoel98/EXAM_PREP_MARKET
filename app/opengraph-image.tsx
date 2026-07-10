import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export const alt = 'NomoExam — Best SAT & ACT Prep App 2026 | AI Tutor & Practice Tests | $4.99/month'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(163,230,53,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            borderRadius: '50px',
            background: 'rgba(163,230,53,0.15)',
            border: '1px solid rgba(163,230,53,0.3)',
            marginBottom: '30px',
          }}
        >
          <div style={{ fontSize: '20px', color: '#a3e635', fontWeight: '600' }}>
            #1 SAT Prep App 2026
          </div>
        </div>

        {/* Logo + Name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#0a0a0a',
            }}
          >
            N
          </div>
          <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#ffffff' }}>
            NomoExam
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '16px',
            maxWidth: '800px',
          }}
        >
          AI Tutor, Practice Tests & Study Plans
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            marginBottom: '40px',
          }}
        >
          SAT • ACT • GRE • GMAT • MCAT • JEE • NEET
        </div>

        {/* Bottom row - Price + Features */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          {/* Price badge */}
          <div
            style={{
              padding: '16px 32px',
              borderRadius: '16px',
              background: '#a3e635',
              color: '#0a0a0a',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            $4.99/month
          </div>

          {/* Features */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Unlimited AI Help', 'Full Practice Tests', 'Study Plans'].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#e4e4e7',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
