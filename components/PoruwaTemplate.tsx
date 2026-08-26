'use client';

import { useState, useEffect, useRef } from 'react';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { Cinzel, Montserrat, Playfair_Display } from 'next/font/google';
import { Heart, ChevronDown } from 'lucide-react';
import { WeddingData, defaultWeddingData } from '@/data/weddingData';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700', '900'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic', 'normal'], weight: ['400', '700', '900'] });

const THEME = {
  gold: '#D4AF37',
  goldLight: '#F1E5AC',
  maroon: '#800000',
  white: '#FFFFFF',
  glassBg: 'rgba(255, 255, 255, 0.15)',
  glassBorder: 'rgba(212, 175, 55, 0.3)',
  fontDisplay: cinzel.className,
  fontBody: montserrat.className,
  fontAccent: playfair.className,
};

const MUSIC_URL = "https://res.cloudinary.com/dnfbik3if/video/upload/v1775201422/krasnoshchok-wedding-romantic-love-music-409293_ikekwk.mp3";
const DEFAULT_IMAGES = ['/photo_2.png', '/photo_3.png', '/photo_4.png', '/photo_5.png'];

const MusicIcon = ({ muted }: { muted: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {muted ? (
      <>
        <line x1="1" y1="1" x2="23" y2="23"></line>
        <path d="M9 9v10a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3c1.29 0 2.42.81 2.83 2"></path>
        <path d="M18 13V5a2 2 0 0 0-2-2H9"></path>
      </>
    ) : (
      <>
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </>
    )}
  </svg>
);

const HeartIcon = ({ size = 24, color = THEME.gold }: { size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const PoruwaCountdown = ({ data }: { data?: WeddingData }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = data?.eventDate ? new Date(data.eventDate).getTime() : new Date('October 2, 2026 09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [data?.eventDate]);

  return (
    <div style={{
      padding: '40px 20px',
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '30px',
      border: `1px solid ${THEME.gold}`,
      margin: '40px 0',
      textAlign: 'center'
    }}>
      <div className={THEME.fontDisplay} style={{ fontSize: '0.8rem', letterSpacing: '4px', color: THEME.gold, marginBottom: '25px', fontWeight: 700 }}>
        AWAITING THE MOMENT
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hrs', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px' }}>
            <div className={THEME.fontDisplay} style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#fff',
              textShadow: `0 0 10px ${THEME.gold}`,
              borderBottom: `1px solid ${THEME.gold}`,
              paddingBottom: '5px',
              width: '100%'
            }}>
              {item.value.toString().padStart(2, '0')}
            </div>
            <span className={THEME.fontBody} style={{
              fontSize: '0.65rem',
              letterSpacing: '1px',
              marginTop: '10px',
              color: THEME.gold,
              fontWeight: 700
            }}>
              {item.label.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlendingImage = ({ src, size = '100%', align = 'center' }: { src: string, size?: string, align?: 'left' | 'right' | 'center' }) => (
  <div style={{
    display: 'flex',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
    width: '100%',
    margin: '30px 0'
  }}>
    <div style={{
      position: 'relative',
      width: size,
      aspectRatio: '1/1',
      maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
      overflow: 'hidden'
    }}>
      <Image
        src={src}
        alt="Moment"
        fill
        style={{ objectFit: 'cover' }}
        unoptimized
      />
    </div>
  </div>
);

const GlassSection = ({ children, padding = '40px 25px' }: { children: React.ReactNode, padding?: string }) => (
  <Reveal delay={100}>
    <div style={{
      padding,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderRadius: '30px',
      border: `1px solid ${THEME.gold}`,
      margin: '30px 0',
      textAlign: 'center',
      color: '#fff'
    }}>
      {children}
    </div>
  </Reveal>
);

const WeddingItinerary = ({ data }: { data?: WeddingData }) => {
  const events = data?.timeline && data.timeline.length > 0 ? data.timeline : defaultWeddingData.timeline;

  return (
    <div style={{ position: 'relative', padding: '10px 0' }}>
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '0',
        bottom: '0',
        width: '1px',
        background: `linear-gradient(to bottom, transparent, ${THEME.gold}, transparent)`
      }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', paddingLeft: '45px' }}>
        {events.map((event, i) => (
          <Reveal key={i} delay={i * 100}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-37px', marginBottom: '8px' }}>
                <div style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: THEME.gold,
                  boxShadow: `0 0 15px ${THEME.gold}`,
                  border: '1px solid white'
                }}></div>
                <div className={THEME.fontBody} style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: THEME.gold,
                  marginLeft: '20px',
                  letterSpacing: '2px'
                }}>
                  {event.time}
                </div>
              </div>
              <div className={THEME.fontDisplay} style={{
                fontSize: '1.4rem',
                color: '#fff',
                marginBottom: '4px',
                letterSpacing: '1px',
                fontWeight: 700
              }}>
                {event.title}
              </div>
              <div className={THEME.fontBody} style={{
                fontSize: '0.9rem',
                color: THEME.goldLight,
                opacity: 0.9,
                fontWeight: 400
              }}>
                {event.location}
              </div>
              {event.description && (
                <div className={THEME.fontBody} style={{
                  fontSize: '0.8rem',
                  color: '#fff',
                  opacity: 0.75,
                  marginTop: '4px',
                  fontWeight: 300
                }}>
                  {event.description}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const WeddingCalendar = ({ data, title }: { data?: WeddingData, title?: string }) => {
  const eventDate = data?.eventDate ? new Date(data.eventDate) : new Date(2026, 9, 2, 9, 0, 0); // October 2, 2026
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const targetDay = eventDate.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const monthName = eventDate.toLocaleString('default', { month: 'long' }).toUpperCase();
  const daysArr = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanksArr = Array.from({ length: startDay }, (_, i) => i);

  return (
    <Reveal delay={200}>
      <div style={{
        padding: '30px 20px',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '30px',
        border: `1px solid ${THEME.gold}`,
        margin: '40px 0'
      }}>
        <div className={THEME.fontDisplay} style={{ fontSize: '2.5rem', color: THEME.gold, marginBottom: '10px' }}>
          {title || "Save the Date"}
        </div>
        <div className={THEME.fontBody} style={{ fontSize: '1.1rem', fontWeight: 700, color: THEME.goldLight, marginBottom: '20px', letterSpacing: '3px' }}>
          {monthName} {year}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', maxWidth: '300px', margin: '0 auto 30px' }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <div key={i} className={THEME.fontBody} style={{ fontSize: '0.7rem', fontWeight: 900, color: THEME.gold }}>
              {d}
            </div>
          ))}
          {blanksArr.map(b => <div key={`b-${b}`} />)}
          {daysArr.map(d => (
            <div
              key={d}
              className={THEME.fontBody}
              style={{
                position: 'relative',
                fontSize: '1.1rem',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                fontWeight: d === targetDay ? 900 : 500,
                color: '#fff'
              }}
            >
              {d === targetDay ? (
                <>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <HeartIcon size={40} color={THEME.gold} />
                  </div>
                  <span style={{ color: '#000', fontWeight: 900 }}>{d}</span>
                </>
              ) : d}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            const calTitle = encodeURIComponent(`${data?.groomName || 'Ama'} & ${data?.brideName || 'Madhusanka'}'s Poruwa Ceremony`);
            const location = encodeURIComponent(data?.location?.name ? `${data.location.name}, ${data.location.address}` : 'Heritage Hotel Anuradhapura');
            const startStr = "20261002T033000Z"; // 9:00 AM Sri Lanka Time (UTC+5:30) -> 03:30 UTC
            const endStr = "20261002T093000Z";
            const dates = `${startStr}/${endStr}`;
            const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${dates}&location=${location}&details=Traditional+Poruwa+Ceremony+at+9:58+AM`;
            window.open(url, '_blank');
          }}
          className={THEME.fontBody}
          style={{
            background: THEME.gold,
            color: '#000',
            border: 'none',
            borderRadius: '30px',
            padding: '12px 25px',
            fontSize: '0.8rem',
            fontWeight: 900,
            letterSpacing: '1px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          ADD TO CALENDAR
        </button>
      </div>
    </Reveal>
  );
};

const PoruwaRSVP = ({ data }: { data?: WeddingData }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', adults: 1, children: 0 });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const current = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      current.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('wedding_rsvps', JSON.stringify(current));
    } catch {
      // Local fallback
    }

    setTimeout(() => {
      setStatus('success');
      setFormOpen(false);
    }, 500);
  };

  return (
    <div style={{
      padding: '40px 20px',
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '30px',
      border: `1px solid ${THEME.gold}`,
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      <h3 className={THEME.fontDisplay} style={{
        fontSize: 'clamp(1.8rem, 8vw, 2.2rem)',
        color: THEME.gold,
        marginBottom: '25px',
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        RSVP
      </h3>
      {!formOpen && status !== 'success' && (
        <button
          onClick={() => setFormOpen(true)}
          className={THEME.fontBody}
          style={{
            background: THEME.gold,
            color: '#000',
            padding: '16px 40px',
            borderRadius: '30px',
            fontWeight: 900,
            border: 'none',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}
        >
          I WILL ATTEND
        </button>
      )}
      {formOpen && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className={THEME.fontBody}
            style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${THEME.gold}`, background: 'rgba(255,255,255,0.1)', color: '#fff' }}
          />
          <input
            type="tel"
            placeholder="Contact"
            required
            value={formData.contact}
            onChange={e => setFormData({ ...formData, contact: e.target.value })}
            className={THEME.fontBody}
            style={{ padding: '12px', borderRadius: '10px', border: `1px solid ${THEME.gold}`, background: 'rgba(255,255,255,0.1)', color: '#fff' }}
          />
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label className={THEME.fontBody} style={{ fontSize: '0.7rem', display: 'block', textAlign: 'left', marginBottom: '5px', color: THEME.gold, fontWeight: 700, letterSpacing: '1px' }}>
                ADULTS
              </label>
              <input
                type="number"
                min="1"
                value={formData.adults}
                onChange={e => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                className={THEME.fontBody}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: `1px solid ${THEME.gold}`, background: 'rgba(255,255,255,0.1)', color: '#fff' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className={THEME.fontBody} style={{ fontSize: '0.7rem', display: 'block', textAlign: 'left', marginBottom: '5px', color: THEME.gold, fontWeight: 700, letterSpacing: '1px' }}>
                CHILDREN
              </label>
              <input
                type="number"
                min="0"
                value={formData.children}
                onChange={e => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                className={THEME.fontBody}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: `1px solid ${THEME.gold}`, background: 'rgba(255,255,255,0.1)', color: '#fff' }}
              />
            </div>
          </div>
          <button
            type="submit"
            className={THEME.fontBody}
            style={{ background: THEME.gold, color: '#000', padding: '12px', borderRadius: '30px', fontWeight: 900, cursor: 'pointer', border: 'none' }}
          >
            {status === 'loading' ? 'CONFIRMING...' : 'CONFIRM'}
          </button>
        </form>
      )}
      {status === 'success' && (
        <div className={THEME.fontBody} style={{ color: THEME.gold, fontSize: '1.2rem', fontWeight: 700 }}>
          Thank you for confirming!
        </div>
      )}
    </div>
  );
};

export default function PoruwaTemplate({ data = defaultWeddingData }: { data?: WeddingData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current || (document.getElementById('bg-music') as HTMLAudioElement);
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    const audio = audioRef.current || (document.getElementById('bg-music') as HTMLAudioElement);
    if (audio) {
      audio.play().catch(e => console.log("Audio play blocked:", e));
    }
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play blocked:", e));
    }
  };

  const gallery = (data?.images?.gallery && data.images.gallery.length > 0 ? data.images.gallery : DEFAULT_IMAGES) as string[];
  const image1 = data?.images?.image1 || gallery[0] || DEFAULT_IMAGES[0];
  const image2 = data?.images?.image2 || gallery[1] || DEFAULT_IMAGES[1];
  const image3 = data?.images?.image3 || gallery[2] || DEFAULT_IMAGES[2];

  // Prioritize cover image from data, fallback to poruwaneww.jpeg
  const coverImage = data?.coverImage || '/templates/poruwaneww.jpeg';

  return (
    <div className="desktop-bg-wrapper theme-poruwa" style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Desktop ambient blurred background layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(10px) brightness(0.65)',
        transform: 'scale(1.08)',
        zIndex: 0
      }} />

      <div className={THEME.fontBody} style={{
        backgroundColor: '#000',
        height: '100vh',
        width: '100%',
        maxWidth: '430px',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        boxShadow: '0 0 100px rgba(0,0,0,0.9)',
        zIndex: 1
      }}>
        {/* Layer 0: Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src={data?.videoUrl || "/poruwanw.mp4"} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 0 }}></div>
        <audio ref={audioRef} id="bg-music" loop>
          <source src={data?.musicUrl || MUSIC_URL} type="audio/mpeg" />
        </audio>

        {/* Layer 1: Content Wrapper */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto', zIndex: 1, scrollbarWidth: 'none' }}>

          {isOpen && (
            <button
              onClick={toggleMusic}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 2000,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: `1px solid ${THEME.gold}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.4rem',
                cursor: 'pointer',
                color: THEME.gold
              }}
            >
              <MusicIcon muted={isMuted} />
            </button>
          )}

          {/* Cover Page */}
          <div
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1000,
              transition: 'all 1.5s cubic-bezier(0.87, 0, 0.13, 1)',
              transform: isOpen ? 'translateY(-100%)' : 'translateY(0)',
              opacity: isOpen ? 0 : 1,
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onClick={handleOpen}
          >
            <Image
              src={coverImage}
              alt="Poruwa Cover"
              fill
              style={{ objectFit: 'cover', opacity: 0.95 }}
              priority
              unoptimized
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)', zIndex: 1 }} />
            <div style={{ position: 'relative', textAlign: 'center', width: '100%', zIndex: 2, padding: '0 20px' }}>
              <Reveal>
                <div style={{ fontSize: '0.9rem', letterSpacing: '6px', color: THEME.gold, marginBottom: '20px', fontWeight: 700 }}>
                  {data?.weddingTitle || "THE PORUWA CEREMONY OF"}
                </div>
                <h2 className={THEME.fontDisplay} style={{ fontSize: 'clamp(2.2rem, 11vw, 3.8rem)', color: THEME.gold, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '4px', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                  {data?.groomName || 'Ama'} &amp; {data?.brideName || 'Madhusanka'}
                </h2>
                <div style={{ height: '1px', width: '70px', backgroundColor: THEME.gold, margin: '20px auto' }}></div>
                <div className={THEME.fontBody} style={{ fontSize: '0.95rem', letterSpacing: '2px', color: '#fff', opacity: 0.95, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                  {data?.eventDateFormatted || 'October 2, 2026'} | {data?.location?.name || 'Heritage Hotel Anuradhapura'}
                </div>
                <div className="bounce-soft" style={{ marginTop: '50px', color: '#fff', opacity: 0.85, display: 'flex', justifyContent: 'center' }}>
                  <ChevronDown size={32} strokeWidth={1.5} color={THEME.goldLight} />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Opened Content */}
          {isOpen && (
            <main style={{ position: 'relative', zIndex: 1, width: '100%', padding: '0 20px' }}>
              <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <Reveal>
                  <div style={{ fontSize: '0.85rem', letterSpacing: '6px', color: THEME.gold, marginBottom: '20px', fontWeight: 700 }}>
                    {data?.subTitle || "AYUBOWAN"}
                  </div>
                  <h1 className={THEME.fontDisplay} style={{ fontSize: 'clamp(3rem, 15vw, 4.5rem)', color: THEME.gold, marginBottom: '20px' }}>
                    Wedding
                  </h1>
                  <BlendingImage src={image1} size="280px" align="center" />
                  <h2 className={THEME.fontDisplay} style={{ fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '3px' }}>
                    {data?.groomName || 'Ama'} &amp; {data?.brideName || 'Madhusanka'}
                  </h2>
                </Reveal>
              </section>

              <GlassSection>
                <p className={THEME.fontAccent} style={{ fontSize: '1.4rem', fontStyle: 'italic', color: THEME.goldLight, lineHeight: 1.6 }}>
                  &ldquo;{data?.quote || "May your union be blessed with the wisdom of the elders and the fragrance of jasmine."}&rdquo;
                </p>
                <div style={{ height: '1px', width: '80px', background: THEME.gold, margin: '25px auto' }}></div>
                <p className={THEME.fontBody} style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: 300 }}>
                  {data?.invitationMessage || "Join us as we unite under the traditional Poruwa."}
                </p>
              </GlassSection>

              <div style={{ margin: '40px 0' }}>
                <Reveal delay={200}>
                  <BlendingImage src={image2} size="300px" align="left" />
                </Reveal>
                <Reveal delay={400}>
                  <BlendingImage src={image3} size="300px" align="right" />
                </Reveal>
              </div>

              <PoruwaCountdown data={data} />

              <GlassSection>
                <h3 className={THEME.fontDisplay} style={{ fontSize: '2.4rem', color: THEME.gold, marginBottom: '25px' }}>
                  The Schedule
                </h3>
                <WeddingItinerary data={data} />
              </GlassSection>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <WeddingCalendar data={data} title={data?.eventDateName || "Save the Date"} />
              </div>

              {/* Venue Card */}
              {data?.location && (
                <div style={{ marginTop: '30px' }}>
                  <GlassSection>
                    <div className={THEME.fontDisplay} style={{ fontSize: '0.8rem', letterSpacing: '4px', color: THEME.gold, marginBottom: '15px', fontWeight: 700 }}>
                      THE VENUE
                    </div>
                    <h2 className={THEME.fontDisplay} style={{ fontSize: '2rem', marginBottom: '10px' }}>
                      {data.location.name}
                    </h2>
                    <p className={THEME.fontBody} style={{ opacity: 0.8, color: THEME.goldLight, marginBottom: '30px' }}>
                      {data.location.address}
                    </p>

                    <a
                      href={data.location.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.location.name + ' ' + data.location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={THEME.fontBody}
                      style={{
                        display: 'inline-block',
                        padding: '15px 40px',
                        background: THEME.gold,
                        color: '#000',
                        borderRadius: '40px',
                        fontWeight: 900,
                        textDecoration: 'none',
                        letterSpacing: '1px'
                      }}
                    >
                      VIEW LOCATION
                    </a>
                  </GlassSection>
                </div>
              )}

              <GlassSection>
                <h3 className={THEME.fontDisplay} style={{ fontSize: 'clamp(2rem, 10vw, 3rem)', color: THEME.gold, marginBottom: '20px' }}>
                  Ayubowan
                </h3>
                <p className={THEME.fontBody} style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '40px' }}>
                  Thank you for being part of our story.
                </p>
                <PoruwaRSVP data={data} />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                  <HeartIcon size={40} color={THEME.gold} />
                </div>
              </GlassSection>

              <div style={{ height: '100px' }}></div>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
