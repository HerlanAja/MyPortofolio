"use client"

import { useState } from "react"
import { Share2, Facebook, Linkedin, Copy, Check } from "lucide-react"

// --- Ikon Kustom ---

// Ikon X (Twitter)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// Ikon WhatsApp
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        {...props}
    >
        <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.3-.4.1-.2.1-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5.7 3.7 2.6.5.4 1 .7 1.4.9.5.2 1 .1 1.3-.1.4-.2.6-.7.8-.9.2-.2.2-.4.1-.5l-.2-.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
);

// BARU: Ikon Instagram
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);


// --- Komponen Utama ---

interface ShareButtonsProps {
  url: string
  title: string
  description: string
  showLabels?: boolean
  size?: "small" | "large"
}

const ShareButtons = ({ url, title, description, showLabels = false, size = "small" }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const shareText = `${title} - ${description}`
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(shareText)
  
  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const handleShare = async (platform: string) => {
    // BARU: Logika khusus untuk Instagram
    if (platform === "instagram") {
        alert("Untuk berbagi ke Instagram, salin tautan dan tempel di Story atau postingan Anda. Fitur berbagi langsung paling baik berfungsi dari ponsel.");
        return;
    }

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy link:", err)
        alert("Gagal menyalin tautan secara otomatis. Silakan salin secara manual.");
      }
      return
    }

    if (platform === "native" && navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
      return
    }

    const targetUrl = shareUrls[platform as keyof typeof shareUrls]
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer")
    }
  }

  const buttonClass = size === "large" ? "px-4 py-3 text-sm font-medium" : "px-3 py-2 text-xs font-medium"
  const iconClass = size === "large" ? "w-5 h-5" : "w-4 h-4"

  if (showLabels) {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {/* Tombol WhatsApp */}
        <button
          onClick={() => handleShare("whatsapp")}
          className={`${buttonClass} bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
          <WhatsAppIcon className={iconClass} />
          {showLabels && "WhatsApp"}
        </button>

        {/* BARU: Tombol Instagram */}
        <button
            onClick={() => handleShare("instagram")}
            className={`${buttonClass} bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
            <InstagramIcon className={iconClass} />
            {showLabels && "Instagram"}
        </button>

        {/* Tombol X */}
        <button
          onClick={() => handleShare("x")}
          className={`${buttonClass} bg-black hover:bg-gray-800 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
          <XIcon className={iconClass} />
           {showLabels && "X"}
        </button>
        
        {/* Tombol lainnya... */}
        <button
          onClick={() => handleShare("facebook")}
          className={`${buttonClass} bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
          <Facebook className={iconClass} />
          {showLabels && "Facebook"}
        </button>
        
        <button
          onClick={() => handleShare("linkedin")}
          className={`${buttonClass} bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
          <Linkedin className={iconClass} />
          {showLabels && "LinkedIn"}
        </button>

        <button
          onClick={() => handleShare("copy")}
          className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md`}
        >
          {copied ? (
            <>
              <Check className={iconClass} />
              {showLabels && "Copied!"}
            </>
          ) : (
            <>
              <Copy className={iconClass} />
              {showLabels && "Copy Link"}
            </>
          )}
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)}></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {/* Tombol WhatsApp */}
              <button
                onClick={() => {
                  handleShare("whatsapp");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-600" />
                WhatsApp
              </button>

              {/* BARU: Tombol Instagram di dropdown */}
              <button
                onClick={() => {
                  handleShare("instagram");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                Instagram
              </button>
              
              {/* Tombol X */}
              <button
                onClick={() => {
                  handleShare("x");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <XIcon className="w-4 h-4" />
                X
              </button>
              
              {/* Tombol lainnya di dropdown... */}
              <button
                onClick={() => {
                  handleShare("facebook");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                Facebook
              </button>
              <button
                onClick={() => {
                  handleShare("linkedin");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-700" />
                LinkedIn
              </button>
              <button
                onClick={() => {
                  handleShare("copy");
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShareButtons