import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'Kein Bild hochgeladen' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const fileName = `${uuidv4()}-${file.name}`
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const filePath = path.join(uploadDir, fileName)

  try {
    await writeFile(filePath, buffer)
    return NextResponse.json({ url: `/uploads/${fileName}` })
  } catch (err) {
    console.error('Fehler beim Speichern der Datei:', err)
    return NextResponse.json({ error: 'Fehler beim Speichern der Datei' }, { status: 500 })
  }
}
