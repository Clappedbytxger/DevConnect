'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

type LikeButtonProps = {
  projectId: string
  liked?: boolean
}

export default function LikeButton({ projectId , liked }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const checkLike = async () => {
      const res = await fetch('/api/likes/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId }),
      })

      if (res.ok) {
        const data = await res.json()
        setIsLiked(data.liked)
      }
    }

    checkLike()
  }, [projectId])

  const toggleLike = async () => {
    const res = await fetch('/api/likes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId }),
    })

    if (res.ok) {
      setIsLiked(prev => !prev)
    }
  }

  return (
    <button onClick={toggleLike} className="p-2 flex items-center space-x-2">
      <Heart
        size={24}
        className={isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}
      />
      <span>{isLiked ? "Geliket" : "Like"}</span>
    </button>
  )
}
