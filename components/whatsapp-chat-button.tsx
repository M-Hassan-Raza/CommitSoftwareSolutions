"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppChatButtonProps {
  phoneNumber: string
  message?: string
  position?: "bottom-right" | "bottom-left"
  showPopup?: boolean
  className?: string
}

export function WhatsAppChatButton({
  phoneNumber,
  message = "Hello! I'd like to know more about your services.",
  position = "bottom-right",
  showPopup = true,
  className,
}: WhatsAppChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false)

  // Format phone number by removing non-numeric characters
  const formattedNumber = phoneNumber.replace(/\D/g, "")

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`

  // Check if user has permanently dismissed the button
  useEffect(() => {
    const dismissed = localStorage.getItem("whatsappButtonDismissed")
    if (dismissed === "true") {
      setIsPermanentlyDismissed(true)
    }
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  const handlePermanentDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPermanentlyDismissed(true)
    localStorage.setItem("whatsappButtonDismissed", "true")
  }

  const handleChat = () => {
    window.open(whatsappUrl, "_blank")
  }

  // If it's a dedicated button (not popup), just render the button
  if (!showPopup) {
    return (
      <Button onClick={handleChat} className={cn("bg-green-500 hover:bg-green-600 text-white", className)}>
        <MessageCircle className="mr-2 h-5 w-5" />
        Chat on WhatsApp
      </Button>
    )
  }

  // Don't show if user has permanently dismissed it
  if (isPermanentlyDismissed) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col items-end",
        position === "bottom-right" ? "bottom-6 right-6" : "bottom-6 left-6",
        className,
      )}
    >
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs w-full animate-in slide-in-from-bottom-5 dark:bg-gray-800 dark:text-white">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-green-600 dark:text-green-400">Chat with us</h3>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Have a question? Chat with us directly on WhatsApp for quick assistance.
          </p>
          <Button onClick={handleChat} className="w-full bg-green-500 hover:bg-green-600 text-white">
            Start Chat
          </Button>
        </div>
      )}

      <div className="relative">
        <button
          onClick={isOpen ? handleClose : handleOpen}
          className={cn(
            "flex items-center justify-center rounded-full w-14 h-14 bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all",
            isOpen &&
              "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>

        {/* Permanent dismiss button */}
        <button
          onClick={handlePermanentDismiss}
          className="absolute -top-2 -right-2 bg-gray-100 dark:bg-gray-700 rounded-full p-1 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
          title="Dismiss WhatsApp chat button"
        >
          <X className="h-3 w-3 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}

