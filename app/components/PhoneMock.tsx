// /components/PhoneMock.tsx — iPhone mockup with PREME app UI, SVG-based

import Image from "next/image";

export default function PhoneMock() {
  return (
    <div className="phone-mock">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* Status bar */}
          <div className="ps-status">
            <span>9:41</span>
            <div className="ps-ic">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path
                  d="M1 5l2 2 4-4M8 5l2 2 4-4"
                  stroke="#092f57"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                <path d="M2 7h10v1H2zM3 5h8v1H3zM4 3h6v1H4zM5 1h4v1H5z" />
              </svg>
              <div className="ps-bat">
                <div className="ps-bat-fill" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="ps-hdr">
            <div className="ps-brand">
              <div>
                <div className="ps-hi">Hola, Lucía</div>
                <div className="ps-name">PREME</div>
              </div>
            </div>
            <div className="ps-avatar">LF</div>
          </div>

          {/* Credential card */}
          <div className="ps-card">
            <div className="ps-card-glow" />
            <div className="ps-card-top">
              <Image
                src="/logoPreme.png"
                alt="PREME"
                width={220}
                height={56}
                className="h-10 w-auto relative brightness-0 invert"
              />
              <div className="ps-card-chip">
                <div /><div /><div /><div />
              </div>
            </div>
            <div className="ps-card-name">Lucía Fernández</div>
            <div className="ps-card-plan">Plan Integral · Titular</div>
            <div className="ps-card-bottom">
              <div className="ps-card-num">•••• 8840 221</div>
              <div className="ps-card-qr">
                <svg viewBox="0 0 40 40" width="28" height="28">
                  <rect x="0" y="0" width="12" height="12" fill="#092f57" />
                  <rect x="3" y="3" width="6" height="6" fill="#fff" />
                  <rect x="28" y="0" width="12" height="12" fill="#092f57" />
                  <rect x="31" y="3" width="6" height="6" fill="#fff" />
                  <rect x="0" y="28" width="12" height="12" fill="#092f57" />
                  <rect x="3" y="31" width="6" height="6" fill="#fff" />
                  <rect x="16" y="4" width="3" height="3" fill="#092f57" />
                  <rect x="21" y="8" width="3" height="3" fill="#092f57" />
                  <rect x="14" y="14" width="3" height="3" fill="#092f57" />
                  <rect x="19" y="16" width="4" height="4" fill="#092f57" />
                  <rect x="25" y="14" width="3" height="3" fill="#092f57" />
                  <rect x="14" y="22" width="3" height="3" fill="#092f57" />
                  <rect x="19" y="25" width="3" height="3" fill="#092f57" />
                  <rect x="25" y="22" width="3" height="3" fill="#092f57" />
                  <rect x="32" y="16" width="3" height="3" fill="#092f57" />
                  <rect x="28" y="22" width="3" height="3" fill="#092f57" />
                  <rect x="32" y="28" width="3" height="3" fill="#092f57" />
                  <rect x="22" y="32" width="3" height="3" fill="#092f57" />
                  <rect x="28" y="34" width="3" height="3" fill="#092f57" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tiles */}
          <div className="ps-tiles">
            <div className="ps-tile">
              <div
                className="ps-tile-ic"
                style={{ background: "#e6f6fd", color: "#33BAF0" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ps-tile-t">Cartilla</div>
              <div className="ps-tile-s">2.8k prestadores</div>
            </div>
            <div className="ps-tile">
              <div
                className="ps-tile-ic"
                style={{ background: "#fff0e0", color: "#F79630" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 11h8M8 15h5" />
                </svg>
              </div>
              <div className="ps-tile-t">Autorizaciones</div>
              <div className="ps-tile-s ok">2 listas ✓</div>
            </div>
            <div className="ps-tile">
              <div
                className="ps-tile-ic"
                style={{ background: "#e7f6dc", color: "#68AE26" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
              </div>
              <div className="ps-tile-t">Turnos</div>
              <div className="ps-tile-s">Próximo: Lun 28</div>
            </div>
            <div className="ps-tile">
              <div
                className="ps-tile-ic"
                style={{ background: "#f4e5f6", color: "#864D8D" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 0 1 18 0c0 5-4 9-9 9S3 17 3 12z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="ps-tile-t">Farmacias</div>
              <div className="ps-tile-s">−50% esta sem.</div>
            </div>
          </div>

          {/* Notification */}
          <div className="ps-notif">
            <div className="ps-notif-ic">✓</div>
            <div>
              <div className="ps-notif-t">Orden lista para retirar</div>
              <div className="ps-notif-s">Farmacia Del Centro · hoy 11:20</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges — hidden on small mobile to avoid overlap */}
      <div className="phone-badge phone-badge-1 hidden sm:flex">
        <div className="pb-ic">⚡</div>
        <div>
          <div className="pb-t">En el acto</div>
          <div className="pb-s">Autorizaciones</div>
        </div>
      </div>
      <div
        className="phone-badge phone-badge-2 hidden sm:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="pb-ic" style={{ background: "#25D366" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </div>
        <div>
          <div className="pb-t">Asesor 24/7</div>
          <div className="pb-s">Por WhatsApp</div>
        </div>
      </div>
    </div>
  );
}
