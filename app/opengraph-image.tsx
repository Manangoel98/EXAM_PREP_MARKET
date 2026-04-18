import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NomoExam — AI-Powered Exam Prep Platform';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          position: 'relative',
        }}
      >
        {/* Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 40%, rgba(193, 255, 114, 0.15), transparent 40%), radial-gradient(circle at 70% 60%, rgba(193, 255, 114, 0.1), transparent 50%)',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              NOMOEXAM
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              lineHeight: 1.2,
              margin: 0,
              marginBottom: '24px',
              fontStyle: 'italic',
            }}
          >
            Ace Your Exam with
            <br />
            <span style={{ color: '#C1FF72' }}>AI-Powered Prep</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              lineHeight: 1.5,
              margin: 0,
              marginBottom: '40px',
              maxWidth: '900px',
            }}
          >
            Practice tests, flashcards, personalized study plans, and 24/7 AI tutor
          </p>

          {/* Feature Pills */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['SAT', 'ACT', 'GRE', 'GMAT', 'MCAT', 'LSAT'].map((exam) => (
              <div
                key={exam}
                style={{
                  backgroundColor: 'rgba(193, 255, 114, 0.15)',
                  border: '2px solid rgba(193, 255, 114, 0.3)',
                  borderRadius: '24px',
                  padding: '12px 28px',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#C1FF72',
                  display: 'flex',
                }}
              >
                {exam}
              </div>
            ))}
          </div>

          {/* Price Tag */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              From
            </span>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#C1FF72',
              }}
            >
              $/month
            </span>
            <span
              style={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              per exam
            </span>
          </div>
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(193, 255, 114, 0.1)',
            padding: '16px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(193, 255, 114, 0.2)',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#C1FF72"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#C1FF72',
            }}
          >
            Trusted by 10,000+ students
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
