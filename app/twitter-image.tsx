import { ImageResponse } from '@vercel/og'
 
export const runtime = 'edge'
 
export const alt = 'NomoExam — AI-Powered Exam Prep Platform'
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
          padding: '100px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            N
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          NomoExam
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '40px',
            color: '#e0e7ff',
            marginBottom: '50px',
            opacity: 0.95,
          }}
        >
          AI-Powered Exam Prep Platform
        </div>

        {/* Feature Badges */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginBottom: '40px',
          }}
        >
          {['SAT', 'ACT', 'GRE', 'GMAT', 'JEE'].map((exam) => (
            <div
              key={exam}
              style={{
                padding: '15px 30px',
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '600',
              }}
            >
              {exam}
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div
          style={{
            fontSize: '28px',
            color: '#ffffff',
            opacity: 0.9,
          }}
        >
          10,000+ Questions • AI Tutor • Free Trial
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
